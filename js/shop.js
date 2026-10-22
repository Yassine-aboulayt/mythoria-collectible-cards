let produits = [
    {id: "pack-beginner", nom: "Pack Débutant", image: "../images/boosters/beginner-pack.png", prix: 40, numero: 0},
    {id: "pack-legends", nom: "Invocation des Légendes", image: "../images/boosters/legends-pack.png", prix: 120, numero: 1},
    {id: "pack-dark", nom: "Invocation des Ténèbres", image: "../images/boosters/dark-pack.png", prix: 80, numero: 2},
    {id: "pack-lucky", nom: "Pack Chance", image: "../images/boosters/lucky-pack.png", prix: 60, numero: 3}
];
let panier = [];
let total = 0;
let liste = document.getElementById("panier");


function afficherPanier() {
    liste.innerHTML = "";
    total = 0;

    for (let i = 0; i < panier.length; i++) {
        let produit = panier[i];
        let sousTotal = produit.prix * produit.quantite;

        liste.innerHTML += `
            <li class="flex flex-wrap items-center justify-between gap-4 border-b border-gray-700 p-4">
                <img class="image-panier w-12" src="${produit.image}" alt="${produit.nom}">
                <div class="flex-1">
                    <p class="nom-panier text-sm text-yellow-100 font-bold">${produit.nom}</p>
                    <p class="text-sm text-gray-400 mt-1">Prix unitaire : <span class="prix-unitaire">${produit.prix} MAD</span></p>
                    <p class="text-sm text-gray-400 mt-1">Sous-total : <span class="prix-panier">${sousTotal} MAD</span></p>
                    <div class="flex flex-wrap items-center gap-4">
                        <button type="button" class="moins" aria-label="Diminuer la quantité" onclick="changerQuantite('${produit.id}', -1)">−</button>
                        <label>Quantité <input type="number" min="1" step="1" value="${produit.quantite}" class="quantite-panier w-16 text-gray-900 p-2 rounded" onchange="modifierQuantite('${produit.id}', this)"></label>
                        <button type="button" class="plus" aria-label="Augmenter la quantité" onclick="changerQuantite('${produit.id}', 1)">+</button>
                    </div>
                </div>
                <button type="button" class="supprimer text-purple-200 hover:text-yellow-200 border border-purple-800 text-xs p-2 rounded" onclick="supprimerProduit('${produit.id}')">Supprimer</button>
            </li>`;

        total = total + sousTotal;
    }

    document.getElementById("total").textContent = total;
    if (panier.length === 0) {
        document.getElementById("vide").hidden = false;
        document.getElementById("acheter").hidden = true;
        document.getElementById("acheter").disabled = true;
        document.getElementById("acheter-vide").hidden = false;
        document.getElementById("vider-panier").disabled = true;
    } else {
        document.getElementById("vide").hidden = true;
        document.getElementById("acheter").hidden = false;
        document.getElementById("acheter").disabled = false;
        document.getElementById("acheter-vide").hidden = true;
        document.getElementById("vider-panier").disabled = false;
    }
    document.getElementById("vider-panier").disabled = true;
    document.getElementById("acheter").disabled = true;
}

afficherPanier();
