import {TAILLE_MAIN, valeursCarte} from "./cards.js";

// Retrouve un élément de la page par son identifiant.
export function element(id) {
    return document.getElementById(id);
}

// Reconstruit une liste avec les éléments reçus.
export function renderList(zone, liste, creer) {
    zone.innerHTML = "";
    for (let i = 0; i < liste.length; i++) zone.appendChild(creer(liste[i], i));
}

// Remet un formulaire à son état de départ.
export function clearForm(formulaire) {
    formulaire.reset();
}

// Affiche une carte, son dos ou le numéro de la case vide.
export function afficherCarte(carte, indice, camp, role, clic) {
    const bouton = document.createElement("button");
    bouton.type = "button";
    bouton.className = "case";
    bouton.disabled = !clic;
    bouton.onclick = clic;
    if (!carte) {
        bouton.textContent = indice + 1;
        return bouton;
    }
    const image = document.createElement("img");
    image.src = carte.image;
    image.alt = carte.nom || "Carte adverse cachée";
    bouton.appendChild(image);
    if (carte.nom) afficherStats(bouton, carte, camp, role);
    return bouton;
}

// Inscrit l’attaque et la défense effectives sur une seule ligne.
function afficherStats(bouton, carte, camp, role) {
    const valeurs = valeursCarte(carte, camp);
    const stats = document.createElement("span");
    stats.textContent = valeurs.attaque + " ATQ · " + valeurs.defense + " DEF";
    bouton.appendChild(stats);
    if (role) {
        const etiquette = document.createElement("span");
        etiquette.textContent = role;
        bouton.appendChild(etiquette);
    }
}

// Affiche la main, avec le dos des cartes pour l’adversaire.
export function afficherMain(cote, camp, choisir) {
    const cases = Array(TAILLE_MAIN).fill(null);
    for (let i = 0; i < camp.main.length; i++) cases[i] = camp.main[i];
    renderList(element("main-" + cote), cases, function(carte, i) {
        if (carte && cote === "adversaire") {
            return afficherCarte({image: "assets/images/dos.png"}, i, camp.nom, "", null);
        }
        const clic = carte && choisir ? function() { choisir(i); } : null;
        return afficherCarte(carte, i, camp.nom, "", clic);
    });
}

// Affiche les dix emplacements du terrain.
export function afficherTerrain(cote, camp, attaquer) {
    renderList(element("terrain-" + cote), camp.terrain, function(unite, i) {
        if (!unite) return afficherCarte(null, i, camp.nom, "", null);
        const clic = attaquer ? function() { attaquer(i); } : null;
        return afficherCarte(unite.carte, i, camp.nom, unite.role, clic);
    });
}

// Affiche les points de vie, la pioche et les deux zones d’un camp.
function afficherCamp(cote, camp, choisir, attaquer) {
    element("pv-" + cote).textContent = camp.pv.toLocaleString("fr-FR") + " PV";
    element("camp-" + cote).textContent = camp.nom;
    element("pioche-" + cote).textContent = camp.pioche.length;
    afficherMain(cote, camp, choisir);
    afficherTerrain(cote, camp, attaquer);
}

// Affiche les cartes, les commandes et l’historique.
export function render(partie, choisir, attaquer) {
    element("nombre-main").textContent = partie.joueur.main.length + " / " + TAILLE_MAIN;
    element("attaque").classList.toggle("or", partie.role === "ATQ");
    element("defense").classList.toggle("or", partie.role === "DEF");
    afficherCamp("joueur", partie.joueur, choisir, attaquer);
    afficherCamp("adversaire", partie.adversaire, null, null);
    const journal = element("historique");
    renderList(journal, partie.historique, function(texte) {
        const ligne = document.createElement("li");
        ligne.textContent = texte;
        return ligne;
    });
    journal.scrollTop = journal.scrollHeight;
    element("jeu").hidden = partie.fin;
    element("fin").hidden = !partie.fin;
}
