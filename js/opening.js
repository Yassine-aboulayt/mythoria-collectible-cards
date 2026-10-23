let selection = 0;
let meilleureRarete = 0;

function afficherBoosters() {
    let partie = chargerPartie();
    if (partie === null) { return; }
    let nombre = 0;
    for (let i = 0; i < boosters.length; i++) {
        nombre = nombre + partie.boosters[i];
        document.getElementById("stock-" + i).textContent = partie.boosters[i];
        let bouton = document.getElementById("choisir-" + i);
        if (partie.boosters[i] === 0) {
            bouton.disabled = true;
        } else {
            bouton.disabled = false;
        }
    }
    document.getElementById("total-boosters").textContent = nombre;
    if (nombre === 0) {
        document.getElementById("stock-vide").hidden = false;
    } else {
        document.getElementById("stock-vide").hidden = true;
    }
    let ouvrir = document.getElementById("ouvrir-booster");
    if (partie.boosters[selection] === 0) {
        ouvrir.disabled = true;
    } else {
        ouvrir.disabled = false;
    }
}

function choisirBooster(indice) {
    selection = indice;
    document.getElementById("booster-choisi").src = boosters[indice].image;
    document.getElementById("booster-choisi").alt = boosters[indice].nom;
    document.getElementById("nom-booster").textContent = boosters[indice].nom;
    document.getElementById("contenu-booster").textContent = boosters[indice].nombre + " cartes à révéler.";
    let types = "Types possibles : ";
    for (let i = 0; i < boosters[indice].types.length; i++) {
        if (i > 0) {
            types = types + ", ";
        }
        types = types + boosters[indice].types[i];
    }
    document.getElementById("types-booster").textContent = types;
    afficherBoosters();
}

function tirerCarte(indice) {
    let hasard = Math.random() * 100;
    let cumul = 0;
    let rarete = raretes[0];
    for (let i = 0; i < raretes.length; i++) {
        cumul = cumul + boosters[indice].chances[i];
        if (hasard < cumul) {
            rarete = raretes[i];
            break;
        }
    }
    let choix = [];
    for (let i = 0; i < cartes.length; i++) {
        let typeAutorise = false;
        let types = boosters[indice].types;
        let nombreTypes = types.length;
        for (let j = 0; j < nombreTypes; j++) {
            if (cartes[i].type === types[j]) {
                typeAutorise = true;
            }
        }
        if (typeAutorise && cartes[i].rarete === rarete) {
            choix.push(cartes[i]);
        }
    }
    if (choix.length === 0) {
        return null;
    }
    let numero = Math.floor(Math.random() * choix.length);
    return choix[numero];
}

function ajouterCollection(partie, carte) {
    let trouve = false;
    for (let i = 0; i < partie.collection.length; i++) {
        if (partie.collection[i].id === carte.id) {
            partie.collection[i].quantite = partie.collection[i].quantite + 1;
            trouve = true;
        }
    }
    if (trouve === false) {
        partie.collection.push({id: carte.id, quantite: 1});
    }
}

function afficherCarte(carte) {
    let boite = document.createElement("div");
    boite.innerHTML = document.getElementById("modele-carte").innerHTML;
    let article = boite.children[0];
    article.querySelector(".image-carte").src = carte.image;
    article.querySelector(".image-carte").alt = carte.nom;
    article.querySelector(".nom-carte").textContent = carte.nom;
    article.querySelector(".type-carte").textContent = carte.type;
    article.querySelector(".rarete-carte").textContent = carte.rarete;
    article.querySelector(".cout-carte").textContent = carte.cout;
    article.querySelector(".puissance-carte").textContent = carte.puissance;
    article.querySelector(".vie-carte").textContent = carte.vie;
    article.querySelector(".pouvoir-carte").textContent = carte.pouvoir;
    article.querySelector(".description-carte").textContent = carte.description;
    if (carte.type === "Sorts") {
        article.querySelector(".vie-carte").textContent = "—";
    }
    if (carte.rarete === "Rare" && meilleureRarete < 2) {
        meilleureRarete = 1;
        document.getElementById("message-rarete").textContent = "Carte rare découverte : " + carte.nom + " !";
    } else if (carte.rarete === "Épique" && meilleureRarete < 3) {
        meilleureRarete = 2;
        document.getElementById("message-rarete").textContent = "Une carte épique : " + carte.nom + " !";
    } else if (carte.rarete === "Légendaire") {
        meilleureRarete = 3;
        document.getElementById("message-rarete").textContent = "LÉGENDAIRE ! " + carte.nom + " rejoint votre collection !";
    }
    document.getElementById("cartes-tirees").appendChild(article);
}

function ouvrirBooster() {
    let partie = chargerPartie();
    if (partie === null) {
        document.getElementById("message-ouverture").textContent = "Impossible de lire la sauvegarde. Aucun booster ouvert.";
        return;
    }
    if (partie.boosters[selection] === 0) {
        document.getElementById("message-ouverture").textContent = "Vous ne possédez pas ce booster.";
        return;
    }
    let nouvellesCartes = [];
    for (let i = 0; i < boosters[selection].nombre; i++) {
        let carte = tirerCarte(selection);
        if (carte === null) {
            document.getElementById("message-ouverture").textContent = "Aucune carte disponible pour ce booster.";
            return;
        }
        nouvellesCartes.push(carte);
    }
    partie.boosters[selection] = partie.boosters[selection] - 1;
    partie.dernierTirage = [];
    partie.dernierBooster = selection;
    for (let i = 0; i < nouvellesCartes.length; i++) {
        ajouterCollection(partie, nouvellesCartes[i]);
        partie.dernierTirage.push(nouvellesCartes[i].id);
    }
    if (sauvegarderPartie(partie) === false) {
        document.getElementById("message-ouverture").textContent = "Sauvegarde impossible. Votre booster reste disponible.";
        return;
    }
    document.getElementById("cartes-tirees").innerHTML = "";
    document.getElementById("message-rarete").textContent = "";
    meilleureRarete = 0;
    document.getElementById("pack-resultat").textContent = boosters[selection].nom;
    document.getElementById("progression").textContent = nouvellesCartes.length + " / " + nouvellesCartes.length + " cartes";
    document.getElementById("resultats").hidden = false;
    for (let i = 0; i < nouvellesCartes.length; i++) {
        afficherCarte(nouvellesCartes[i]);
    }
    document.getElementById("message-ouverture").textContent = nouvellesCartes.length + " cartes ajoutées à votre collection.";
    afficherBoosters();
}

for (let i = 0; i < boosters.length; i++) {
    document.getElementById("choisir-" + i).onclick = function() {
        choisirBooster(i);
    };
}
document.getElementById("ouvrir-booster").onclick = ouvrirBooster;

let partie = chargerPartie();
if (partie === null) {
    document.getElementById("message-ouverture").textContent = "Impossible de lire la sauvegarde. Rechargez la page.";
} else {
    for (let i = 0; i < boosters.length; i++) {
        if (partie.boosters[i] > 0) {
            selection = i;
            break;
        }
    }
    if (partie.dernierTirage.length > 0) {
        document.getElementById("resultats").hidden = false;
        document.getElementById("pack-resultat").textContent = boosters[partie.dernierBooster].nom;
        document.getElementById("progression").textContent = partie.dernierTirage.length + " / " + partie.dernierTirage.length + " cartes";
        for (let i = 0; i < partie.dernierTirage.length; i++) {
            afficherCarte(carteParId(partie.dernierTirage[i]));
        }
        document.getElementById("message-ouverture").textContent = "Votre dernière ouverture est conservée dans votre collection.";
    }
}
choisirBooster(selection);
