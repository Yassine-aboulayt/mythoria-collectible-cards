let produits = [
    {id: "pack-beginner", nom: "Pack Débutant", prix: 40},
    {id: "pack-legends", nom: "Invocation des Légendes", prix: 120},
    {id: "pack-dark", nom: "Invocation des Ténèbres", prix: 80},
    {id: "pack-lucky", nom: "Pack Chance", prix: 60}
];
let panier = [0, 0, 0, 0];
let total = 0;
let liste = document.getElementById("panier");
let modale = document.getElementById("modale-panier");

// on refait la liste du panier
function afficherPanier() {
    let contenu = "";
    total = 0;
    for (let i = 0; i < produits.length; i++) {
        let article = document.getElementById(produits[i].id);
        article.querySelector(".ajouter").disabled = false;
        article.querySelector(".ajouter").onclick = function() {
            ajouterProduit(i);
        };
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
            let champ = ligne.querySelector(".quantite-panier");
            let image = ligne.querySelector(".image-panier");
            image.src = document.getElementById(produits[i].id).querySelector("img").src;
            image.alt = produits[i].nom;
            ligne.querySelector(".prix-unitaire").textContent = produits[i].prix + " MAD";
            ligne.querySelector(".nom-panier").textContent = produits[i].nom;
            ligne.querySelector(".prix-panier").textContent = (produits[i].prix * panier[i]) + " MAD";
            champ.value = panier[i];
            champ.onchange = function() {
                let quantite = champ.value * 1;
                if (quantite > 0 && quantite % 1 === 0) {
                    panier[i] = quantite;
                } else {
                    alert("Choisissez une quantité entière supérieure à zéro.");
                }
                champ.value = panier[i];
                ligne.querySelector(".prix-panier").textContent = produits[i].prix * panier[i] + " MAD";
                total = 0;
                for (let j = 0; j < produits.length; j++) {
                    total = total + produits[j].prix * panier[j];
                }
                document.getElementById("total").textContent = total;
            };
            ligne.querySelector(".plus").onclick = function() {
                panier[i] = panier[i] + 1;
                afficherPanier();
            };
            ligne.querySelector(".moins").onclick = function() {
                panier[i] = panier[i] - 1;
                afficherPanier();
            };
            ligne.querySelector(".supprimer").onclick = function() {
                panier[i] = 0;
                afficherPanier();
            };
            numero = numero + 1;
        }
    }
    document.getElementById("total").textContent = total;
    if (total === 0) {
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
}

function ajouterProduit(indice) {
    let article = document.getElementById(produits[indice].id);
    let quantite = article.querySelector(".quantite-produit").value * 1;
    if (quantite > 0 && quantite % 1 === 0) {
        panier[indice] = panier[indice] + quantite;
        afficherPanier();
    } else {
        alert("Choisissez une quantité entière supérieure à zéro.");
    }
}

function viderPanier() {
    for (let i = 0; i < panier.length; i++) {
        panier[i] = 0;
    }
    afficherPanier();
}

// les boosters achetés vont dans la sauvegarde
function commander() {
    if (total > 0) {
        let partie = chargerPartie();
        if (partie === null) {
            alert("Impossible de lire la sauvegarde. Votre panier reste disponible.");
            return;
        }
        for (let i = 0; i < produits.length; i++) {
            if (!Number.isSafeInteger(panier[i]) || !Number.isSafeInteger(partie.boosters[i] + panier[i])) {
                alert("Choisissez une quantité entière valide.");
                return;
            }
            partie.boosters[i] = partie.boosters[i] + panier[i];
        }
        if (sauvegarderPartie(partie)) {
            viderPanier();
            document.getElementById("message").textContent = "Vos boosters sont disponibles dans la page Ouverture.";
            document.getElementById("commande-prete").hidden = false;
            alert("Commande confirmée !");
        } else {
            alert("Impossible d’enregistrer votre achat. Votre panier n’a pas été vidé.");
        }
    }
}
document.getElementById("acheter").onclick = commander;
document.getElementById("vider-panier").onclick = viderPanier;

function ouvrirPanier() {
    if (!modale.open) {
        modale.showModal();
    }
    document.body.classList.add("overflow-hidden");
}

function fermerPanier() {
    modale.close();
}

document.getElementById("ouvrir-panier").onclick = ouvrirPanier;
document.getElementById("fermer-panier").onclick = fermerPanier;
document.getElementById("continuer-achats").onclick = fermerPanier;
document.getElementById("fond-panier").onclick = fermerPanier;

modale.addEventListener("cancel", function(e) {
    e.preventDefault();
    fermerPanier();
});

modale.addEventListener("close", function() {
    if (!modale.open) {
        document.body.classList.remove("overflow-hidden");
    }
});

afficherPanier();
