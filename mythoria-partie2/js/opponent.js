import {piocher, poser} from "./cards.js";
import {attaquer} from "./combat.js";
import {hasard} from "./utils.js";

// Choisit au hasard une carte et le rôle dans lequel la poser.
function poserAuHasard(camp) {
    const indice = hasard(camp.main.length);
    const role = hasard(2) === 0 ? "ATQ" : "DEF";
    return poser(camp, indice, role);
}

// Pioche, pose une carte et attaque avec les cartes prêtes.
export function jouerAdversaire(partie, noter) {
    const camp = partie.adversaire;
    noter("Adversaire · " + piocher(camp));
    if (camp.main.length > 0 && camp.terrain.includes(null)) {
        noter("Adversaire · " + poserAuHasard(camp));
    }
    for (let i = 0; i < camp.terrain.length && partie.joueur.pv > 0; i++) {
        const unite = camp.terrain[i];
        if (unite && unite.role === "ATQ" && !unite.aAttaque) noter(attaquer(partie, "adversaire", i));
    }
}
