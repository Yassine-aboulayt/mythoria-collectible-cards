let partie = chargerPartie();
let deck = [];

function chargerDeck() {
    try {
        let texte = localStorage.getItem("mythoria_deck");
        if (texte !== null) {
            deck = JSON.parse(texte);
        }
        if (!Array.isArray(deck) || deck.length > 20) {
            deck = [];
            document.getElementById("message").textContent = "La sauvegarde du jeu est invalide.";
            return;
        }
        for (let i = 0; i < deck.length; i++) {
            let carte = partie.collection.find(function(item) {
                return item.id === deck[i];
            });
            if (!carte || deck.indexOf(deck[i]) !== i) {
                deck = [];
                document.getElementById("message").textContent = "La sauvegarde du jeu est invalide.";
                return;
            }
        }
    } catch (erreur) {
        deck = [];
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
            let texte = "Ajouter";
            let desactive = "";
            if (deck.indexOf(carte.id) !== -1) {
                texte = "Dans le jeu";
                desactive = "disabled";
            } else if (deck.length === 20) {
                desactive = "disabled";
            }
            document.getElementById("liste-cartes").innerHTML += `
                <article class="w-40 bg-gray-900 border border-yellow-800 rounded p-4 text-center">
                    <img class="image-carte w-full rounded mb-2" src="${carte.image}" alt="${carte.nom}">
                    <h3 class="nom-carte text-yellow-200 font-bold mb-2">${carte.nom}</h3>
                    <p class="infos-carte text-sm text-gray-300 mb-2">${carte.type} · ${carte.rarete}</p>
                <p class="mb-2">Coût : <span class="cout-carte">${carte.cout}</span></p>
                    <button type="button" ${desactive} class="ajouter w-full bg-purple-900 hover:bg-purple-800 p-2 rounded" onclick="ajouterCarte('${carte.id}')">${texte}</button>
                </article>`;
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
    let lumiere = 0;
    let tenebres = 0;
    let creatures = 0;
    let sorts = 0;
    for (let i = 0; i < deck.length; i++) {
        let carte = carteParId(deck[i]);
        document.getElementById("liste-deck").innerHTML += `
            <article class="flex items-center gap-2 border-b border-yellow-800 pb-4">
                    <img class="image-carte w-12 rounded" src="${carte.image}" alt="${carte.nom}">
                    <div class="flex-1">
                        <h3 class="nom-carte text-yellow-200">${carte.nom}</h3>
                        <p class="text-sm">Coût : <span class="cout-carte">${carte.cout}</span></p>
                    </div>
                    <button type="button" class="retirer bg-purple-900 hover:bg-purple-800 p-2 rounded" onclick="retirerCarte('${carte.id}')">Retirer</button>
                </article>`;
        cout = cout + carte.cout;
        if (carte.type !== "Sorts") {
            attaque = attaque + carte.puissance;
            vie = vie + carte.vie;
        }
        if (carte.type === "Lumière") {
            lumiere = lumiere + 1;
        } else if (carte.type === "Ténèbres") {
            tenebres = tenebres + 1;
        } else if (carte.type === "Créatures") {
            creatures = creatures + 1;
        } else if (carte.type === "Sorts") {
            sorts = sorts + 1;
        }
    }
    let moyenne = 0;
    if (deck.length > 0) {
        moyenne = cout / deck.length;
    }
    document.getElementById("nombre-cartes").textContent = deck.length;
    document.getElementById("cout-moyen").textContent = moyenne.toFixed(1);
    document.getElementById("attaque").textContent = attaque;
    document.getElementById("vie").textContent = vie;
    document.getElementById("nombre-lumiere").textContent = lumiere;
    document.getElementById("nombre-tenebres").textContent = tenebres;
    document.getElementById("nombre-creatures").textContent = creatures;
    document.getElementById("nombre-sorts").textContent = sorts;
    document.getElementById("jeu-vide").hidden = false;
    document.getElementById("vider").disabled = true;
    if (deck.length > 0) {
        document.getElementById("jeu-vide").hidden = true;
        document.getElementById("vider").disabled = false;
    }
}

function ajouterCarte(id) {
    if (deck.length >= 20) {
        document.getElementById("message").textContent = "Votre jeu contient déjà 20 cartes.";
        return;
    }
    if (deck.indexOf(id) !== -1) {
        return;
    }
    let carte = partie.collection.find(function(item) {
        return item.id === id;
    });
    if (carte) {
        deck.push(id);
        enregistrerDeck();
        afficherDeck();
        afficherCartes();
    }
}

function retirerCarte(id) {
    let numero = deck.indexOf(id);
    if (numero !== -1) {
        deck.splice(numero, 1);
    }
    enregistrerDeck();
    afficherDeck();
    afficherCartes();
}

function viderDeck() {
    deck = [];
    enregistrerDeck();
    afficherDeck();
    afficherCartes();
}

document.getElementById("rarete").onchange = afficherCartes;
document.getElementById("vider").onclick = viderDeck;
if (partie !== null) {
    chargerDeck();
}
afficherDeck();
afficherCartes();
