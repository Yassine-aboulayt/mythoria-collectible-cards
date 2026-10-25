let partie = chargerPartie();
let deck = [];

function possedeCarte(id) {
    if (partie === null) { return false; }
    for (let i = 0; i < partie.collection.length; i++) {
        if (partie.collection[i].id === id) { return true; }
    }
    return false;
}

function dansDeck(id) {
    for (let i = 0; i < deck.length; i++) {
        if (deck[i] === id) { return true; }
    }
    return false;
}

function chargerDeck() {
    try {
        let texte = localStorage.getItem("mythoria_deck");
        if (texte === null) { return; }
        let data = JSON.parse(texte);
        if (!Array.isArray(data) || data.length > 20) {
            document.getElementById("message").textContent = "La sauvegarde du jeu est invalide.";
            return;
        }
        for (let i = 0; i < data.length; i++) {
            if (!possedeCarte(data[i])) {
                document.getElementById("message").textContent = "Ce jeu contient une carte absente de votre collection.";
                return;
            }
            for (let j = 0; j < i; j++) {
                if (data[j] === data[i]) {
                    document.getElementById("message").textContent = "Ce jeu contient des doublons.";
                    return;
                }
            }
        }
        deck = data;
    } catch (erreur) {
        document.getElementById("message").textContent = "Impossible de lire le jeu enregistré.";
    }
}

function enregistrerDeck() {
    try {
        localStorage.setItem("mythoria_deck", JSON.stringify(deck));
        document.getElementById("message").textContent = "Jeu enregistré.";
    } catch (erreur) {
        document.getElementById("message").textContent = "Le jeu reste affiché mais sa sauvegarde a échoué.";
    }
}

function afficherCartes() {
    document.getElementById("liste-cartes").innerHTML = "";
    let rarete = document.getElementById("rarete").value;
    let nombre = 0;
    if (partie === null) {
        document.getElementById("collection-vide").textContent = "Impossible de lire votre collection.";
        return;
    }
    for (let i = 0; i < partie.collection.length; i++) {
        let carte = carteParId(partie.collection[i].id);
        if (rarete === "" || carte.rarete === rarete) {
            let boite = document.createElement("div");
            boite.innerHTML = document.getElementById("modele-carte").innerHTML;
            let article = boite.children[0];
            article.querySelector(".image-carte").src = carte.image;
            article.querySelector(".image-carte").alt = carte.nom;
            article.querySelector(".nom-carte").textContent = carte.nom;
            article.querySelector(".infos-carte").textContent = carte.type + " · " + carte.rarete;
            article.querySelector(".cout-carte").textContent = carte.cout;
            let bouton = article.querySelector(".ajouter");
            if (dansDeck(carte.id)) {
                bouton.textContent = "Dans le jeu";
                bouton.disabled = true;
            } else if (deck.length === 20) {
                bouton.disabled = true;
            }
            bouton.onclick = function() { ajouterCarte(carte.id); };
            document.getElementById("liste-cartes").appendChild(article);
            nombre = nombre + 1;
        }
    }
    document.getElementById("collection-vide").textContent = "";
    if (partie.collection.length === 0) {
        document.getElementById("collection-vide").textContent = "Ouvrez des boosters pour obtenir des cartes.";
    } else if (nombre === 0) {
        document.getElementById("collection-vide").textContent = "Aucune carte ne correspond aux filtres.";
    }
}

function afficherDeck() {
    document.getElementById("liste-deck").innerHTML = "";
    let cout = 0;
    let attaque = 0;
    let vie = 0;
    let nombres = [0, 0, 0, 0];
    let types = ["Lumière", "Ténèbres", "Créatures", "Sorts"];
    for (let i = 0; i < deck.length; i++) {
        let carte = carteParId(deck[i]);
        let boite = document.createElement("div");
        boite.innerHTML = document.getElementById("modele-deck").innerHTML;
        let article = boite.children[0];
        article.querySelector(".image-carte").src = carte.image;
        article.querySelector(".image-carte").alt = carte.nom;
        article.querySelector(".nom-carte").textContent = carte.nom;
        article.querySelector(".cout-carte").textContent = carte.cout;
        article.querySelector(".retirer").onclick = function() { retirerCarte(carte.id); };
        document.getElementById("liste-deck").appendChild(article);
        cout = cout + carte.cout;
        if (carte.type !== "Sorts") {
            attaque = attaque + carte.puissance;
            vie = vie + carte.vie;
        }
        for (let j = 0; j < types.length; j++) {
            if (carte.type === types[j]) { nombres[j] = nombres[j] + 1; }
        }
    }
    let moyenne = 0;
    if (deck.length > 0) { moyenne = cout / deck.length; }
    document.getElementById("nombre-cartes").textContent = deck.length;
    document.getElementById("cout-moyen").textContent = moyenne.toFixed(1);
    document.getElementById("attaque").textContent = attaque;
    document.getElementById("vie").textContent = vie;
    document.getElementById("nombre-lumiere").textContent = nombres[0];
    document.getElementById("nombre-tenebres").textContent = nombres[1];
    document.getElementById("nombre-creatures").textContent = nombres[2];
    document.getElementById("nombre-sorts").textContent = nombres[3];
    document.getElementById("jeu-vide").hidden = false;
    document.getElementById("vider").disabled = true;
    if (deck.length > 0) {
        document.getElementById("jeu-vide").hidden = true;
        document.getElementById("vider").disabled = false;
    }
    afficherCartes();
}

function ajouterCarte(id) {
    if (!possedeCarte(id) || dansDeck(id)) { return; }
    if (deck.length === 20) {
        document.getElementById("message").textContent = "Votre jeu contient déjà 20 cartes.";
        return;
    }
    deck.push(id);
    afficherDeck();
    enregistrerDeck();
}

function retirerCarte(id) {
    let nouveau = [];
    for (let i = 0; i < deck.length; i++) {
        if (deck[i] !== id) { nouveau.push(deck[i]); }
    }
    deck = nouveau;
    afficherDeck();
    enregistrerDeck();
}

function viderDeck() {
    deck = [];
    afficherDeck();
    enregistrerDeck();
}

document.getElementById("rarete").onchange = afficherCartes;
document.getElementById("vider").onclick = viderDeck;
if (partie !== null) { chargerDeck(); }
afficherDeck();
