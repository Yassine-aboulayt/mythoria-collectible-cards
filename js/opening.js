let selection = 0;

function afficherBoosters() {
    let partie = chargerPartie();
    if (partie === null) {
        return;
    }
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
    let chances = boosters[indice].chances;
    let rarete = "Légendaire";

    if (hasard < chances[0]) {
        rarete = "Commune";
    } else if (hasard < chances[0] + chances[1]) {
        rarete = "Rare";
    } else if (hasard < chances[0] + chances[1] + chances[2]) {
        rarete = "Épique";
    }

    let choix = [];
    for (let i = 0; i < cartes.length; i++) {
        let types = boosters[indice].types;
        if (types.indexOf(cartes[i].type) !== -1 && cartes[i].rarete === rarete) {
            choix.push(cartes[i]);
        }
    }
    if (choix.length === 0) {
        return null;
    }
    let numero = Math.floor(Math.random() * choix.length);
    return choix[numero];
}

function afficherResultats(partie) {
    let meilleureRarete = 0;
    document.getElementById("cartes-tirees").innerHTML = "";
    document.getElementById("message-rarete").textContent = "";
    document.getElementById("pack-resultat").textContent = boosters[partie.dernierBooster].nom;
    document.getElementById("progression").textContent = partie.dernierTirage.length + " / " + partie.dernierTirage.length + " cartes";
    document.getElementById("resultats").hidden = false;

    for (let i = 0; i < partie.dernierTirage.length; i++) {
        let carte = carteParId(partie.dernierTirage[i]);
        let vie = carte.vie;
        if (carte.type === "Sorts") {
            vie = "—";
        }
        document.getElementById("cartes-tirees").innerHTML += `
            <article class="w-64 bg-gray-900 border border-yellow-800 rounded p-4">
                    <img class="image-carte w-full rounded" src="${carte.image}" alt="${carte.nom}">
                    <h3 class="nom-carte text-xl font-serif text-yellow-200 mt-4 mb-2">${carte.nom}</h3>
                    <p class="text-sm mb-4"><span class="type-carte">${carte.type}</span> · <span class="rarete-carte">${carte.rarete}</span></p>
                    <div class="flex flex-wrap justify-between gap-4 text-sm mb-4">
                        <p>Coût : <span class="cout-carte">${carte.cout}</span></p>
                        <p>Puissance : <span class="puissance-carte">${carte.puissance}</span></p>
                        <p>Vie : <span class="vie-carte">${vie}</span></p>
                    </div>
                    <p class="pouvoir-carte text-yellow-200 mb-2">${carte.pouvoir}</p>
                    <p class="description-carte text-gray-300">${carte.description}</p>
                </article>`;
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
    }
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
        let carte = nouvellesCartes[i];
        let existe = partie.collection.find(function(item) {
            return item.id === carte.id;
        });
        if (existe) {
            existe.quantite = existe.quantite + 1;
        } else {
            partie.collection.push({id: carte.id, quantite: 1});
        }
        partie.dernierTirage.push(nouvellesCartes[i].id);
    }
    if (sauvegarderPartie(partie) === false) {
        document.getElementById("message-ouverture").textContent = "Sauvegarde impossible. Votre booster reste disponible.";
        return;
    }
    afficherResultats(partie);
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
        afficherResultats(partie);
        document.getElementById("message-ouverture").textContent = "Votre dernière ouverture est conservée dans votre collection.";
    }
}
choisirBooster(selection);
