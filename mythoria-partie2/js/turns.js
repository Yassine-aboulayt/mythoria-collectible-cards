import {hasard} from "./utils.js";

// Lance la pièce pour savoir qui commence.
export function lancerPiece() {
    if (hasard(2) === 0) return "joueur";
    return "adversaire";
}

// Attribue les deux camps.
export function choisirCamps(partie, camp) {
    partie.joueur.nom = camp;
    partie.adversaire.nom = "Lumière";
    if (camp === "Lumière") partie.adversaire.nom = "Ténèbres";
}

// Passe le tour à l’autre camp et prépare ses cartes.
export function changerTour(partie) {
    if (partie.actif === "joueur") partie.actif = "adversaire";
    else partie.actif = "joueur";
    partie.tour++;
    partie.role = "";
    const camp = partie[partie.actif];
    camp.aPioche = false;
    camp.aPose = false;
    for (const unite of camp.terrain) {
        if (unite) unite.aAttaque = false;
    }
}
