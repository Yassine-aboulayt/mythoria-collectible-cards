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
            document.getElementById("liste-cartes").innerHTML += `
                <button type="button" class="w-20 text-center rounded hover:bg-yellow-200 p-1" onclick="afficherDetails('${carte.id}', ${article.quantite})">
                    <img class="image-carte w-full rounded" src="${carte.image}" alt="${carte.nom}">
                    <p class="nom-carte text-xs mt-1">${carte.nom}</p>
                    <p class="text-xs">× <span class="quantite-carte">${article.quantite}</span></p>
                </button>`;
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
