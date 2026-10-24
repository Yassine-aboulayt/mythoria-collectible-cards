let partie = chargerPartie();

function preparerListe() {
    document.getElementById("liste-cartes").innerHTML = "";
    let rarete = document.getElementById("rarete").value;
    let total = 0;
    let nombre = 0;

    if (partie === null) {
        document.getElementById("vide").textContent = "Impossible de lire la collection.";
        return;
    }

    for (let i = 0; i < partie.collection.length; i++) {
        let article = partie.collection[i];
        let carte = carteParId(article.id);
        total = total + article.quantite;

        if (rarete === "" || carte.rarete === rarete) {
            let boite = document.createElement("div");
            boite.innerHTML = document.getElementById("modele-collection").innerHTML;
            let bouton = boite.children[0];
            bouton.querySelector(".image-carte").src = carte.image;
            bouton.querySelector(".image-carte").alt = carte.nom;
            bouton.querySelector(".nom-carte").textContent = carte.nom;
            bouton.querySelector(".quantite-carte").textContent = article.quantite;
            bouton.onclick = function() {
                afficherDetails(article.id, article.quantite);
            };
            document.getElementById("liste-cartes").appendChild(bouton);
            nombre = nombre + 1;
        }
    }

    document.getElementById("total-cartes").textContent = total;
    document.getElementById("vide").textContent = "";
    if (total === 0) {
        document.getElementById("vide").textContent = "Ouvrez un booster pour obtenir des cartes.";
    } else if (nombre === 0) {
        document.getElementById("vide").textContent = "Aucune carte pour cette rareté.";
    }
}

function afficherDetails(id, quantite) {
    let carte = carteParId(id);
    document.getElementById("image-details").src = carte.image;
    document.getElementById("image-details").alt = carte.nom;
    document.getElementById("nom-details").textContent = carte.nom;
    document.getElementById("type-details").textContent = "Type : " + carte.type;
    document.getElementById("rarete-details").textContent = "Rareté : " + carte.rarete;
    document.getElementById("quantite-details").textContent = "Possédée : " + quantite;
    document.getElementById("cout-details").textContent = "Coût : " + carte.cout;
    document.getElementById("puissance-details").textContent = "Puissance : " + carte.puissance;
    document.getElementById("vie-details").textContent = "Vie : " + carte.vie;
    document.getElementById("pouvoir-details").textContent = carte.pouvoir;
    document.getElementById("description-details").textContent = carte.description;

    if (carte.type === "Sorts") {
        document.getElementById("statistiques").hidden = true;
    } else {
        document.getElementById("statistiques").hidden = false;
    }

    document.getElementById("choisir-carte").hidden = true;
    document.getElementById("details").hidden = false;
}

document.getElementById("rarete").onchange = function() {
    preparerListe();
};

document.getElementById("fermer").onclick = function() {
    document.getElementById("details").hidden = true;
    document.getElementById("choisir-carte").hidden = false;
};

preparerListe();
