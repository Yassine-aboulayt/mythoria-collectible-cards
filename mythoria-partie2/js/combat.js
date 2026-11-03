import {valeursCarte} from "./cards.js";

// Additionne les points de défense des cartes placées en DEF.
function totalDefense(camp) {
    let total = 0;
    for (const unite of camp.terrain) {
        if (unite && unite.role === "DEF") total += valeursCarte(unite.carte, camp.nom).defense;
    }
    return total;
}

// Fait perdre des PV au camp ciblé et marque la carte comme utilisée.
export function attaquer(partie, cote, indice) {
    if (partie.fin) return "Le combat est terminé.";
    if (!partie.commence || partie.actif !== cote) return "Ce n’est pas votre tour.";
    const camp = partie[cote];
    const unite = camp.terrain[indice];
    if (!unite) return "Choisissez une carte sur votre terrain.";
    if (unite.role === "DEF") return "Une carte en défense ne peut pas attaquer.";
    if (unite.aAttaque) return "Cette carte a déjà attaqué.";
    const cible = cote === "joueur" ? partie.adversaire : partie.joueur;
    const attaque = valeursCarte(unite.carte, camp.nom).attaque;
    const degats = Math.min(cible.pv, Math.max(0, attaque - totalDefense(cible)));
    cible.pv -= degats;
    unite.aAttaque = true;
    const campVise = cote === "joueur" ? "L’adversaire" : "Vous";
    return unite.carte.nom + " attaque. " + campVise + " perd" + (cote === "joueur" ? "" : "ez") + " " + degats + " PV.";
}
