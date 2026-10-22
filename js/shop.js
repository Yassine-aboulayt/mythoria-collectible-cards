let produits = [
    {id: "pack-beginner", nom: "Pack Débutant", prix: 40},
    {id: "pack-legends", nom: "Invocation des Légendes", prix: 120},
    {id: "pack-dark", nom: "Invocation des Ténèbres", prix: 80},
    {id: "pack-lucky", nom: "Pack Chance", prix: 60}
];
let panier = [0, 0, 0, 0];
let total = 0;
let liste = document.getElementById("panier");

// Affiche les produits et recalcule le total.
function afficherPanier() {
    let contenu = "";
    total = 0;
    for (let i = 0; i < produits.length; i++) {
        let article = document.getElementById(produits[i].id);
        article.getElementsByClassName("ajouter")[0].disabled = false;
        article.getElementsByClassName("ajouter")[0].onclick = function() { ajouterProduit(i); };
        if (panier[i] > 0) {
            contenu = contenu + document.getElementById("modele-panier").innerHTML;
            total = total + produits[i].prix * panier[i];
        }
    }
    liste.innerHTML = contenu;
    let numero = 0;
    for (let i = 0; i < produits.length; i++) {
        if (panier[i] > 0) {
            let ligne = liste.children[numero];
            let champ = ligne.getElementsByClassName("quantite-panier")[0];
            ligne.getElementsByClassName("nom-panier")[0].textContent = produits[i].nom;
            ligne.getElementsByClassName("prix-panier")[0].textContent = (produits[i].prix * panier[i]) + " MAD";
            champ.value = panier[i];
            champ.onchange = function() {
                let quantite = champ.value * 1;
                if (quantite > 0 && quantite % 1 === 0) {
                    panier[i] = quantite;
                } else {
                    alert("Choisissez une quantité entière supérieure à zéro.");
                }
                // Garde les boutons en place quand la quantité change.
                champ.value = panier[i];
                ligne.getElementsByClassName("prix-panier")[0].textContent = produits[i].prix * panier[i] + " MAD";
                total = 0;
                for (let j = 0; j < produits.length; j++) {
                    total = total + produits[j].prix * panier[j];
                }
                document.getElementById("total").textContent = total;
            };
            ligne.getElementsByClassName("plus")[0].onclick = function() { panier[i] = panier[i] + 1; afficherPanier(); };
            ligne.getElementsByClassName("moins")[0].onclick = function() { panier[i] = panier[i] - 1; afficherPanier(); };
            ligne.getElementsByClassName("supprimer")[0].onclick = function() { panier[i] = 0; afficherPanier(); };
            numero = numero + 1;
        }
    }
    document.getElementById("total").textContent = total;
    let vide = total === 0;
    document.getElementById("vide").hidden = !vide;
    document.getElementById("acheter").hidden = vide;
    document.getElementById("acheter").disabled = vide;
    document.getElementById("acheter-vide").hidden = !vide;
    document.getElementById("vider-panier").disabled = vide;
}

// Ajoute la quantité choisie au panier.
function ajouterProduit(indice) {
    let article = document.getElementById(produits[indice].id);
    let quantite = article.getElementsByClassName("quantite-produit")[0].value * 1;
    if (quantite > 0 && quantite % 1 === 0) {
        panier[indice] = panier[indice] + quantite;
        afficherPanier();
    } else {
        alert("Choisissez une quantité entière supérieure à zéro.");
    }
}

// Remet les quantités à zéro.
function viderPanier() {
    for (let i = 0; i < panier.length; i++) { panier[i] = 0; }
    afficherPanier();
}

