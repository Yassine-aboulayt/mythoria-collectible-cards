import {chargerCartes, creerCamp, lireDeck, poser, piocher, TAILLE_DECK} from "./cards.js";
import {attaquer} from "./combat.js";
import {jouerAdversaire} from "./opponent.js";
import {addItem, loadItems, saveItems} from "./state.js";
import {changerTour, choisirCamps, lancerPiece} from "./turns.js";
import {clearForm, element, render} from "./ui.js";
import {formatDate, hasard} from "./utils.js";

let partie;
let catalogue = [];

// Écrit le message de l’action et met à jour le plateau.
function noter(texte) {
    addItem(partie.historique, formatDate(new Date()) + " · " + texte);
    element("message").textContent = texte;
    render(partie, jouerCarte, jouerAttaque);
}

// Mélange les decks et présente le résultat du lancer.
function nouvellePartie() {
    partie = null;
    const deck = lireDeck(loadItems("mythoria_deck"));
    element("intro").hidden = false;
    element("jeu").hidden = true;
    element("fin").hidden = true;
    if (deck.length < TAILLE_DECK) {
        element("message-intro").textContent = "Ajoutez " + TAILLE_DECK + " créatures dans Mon jeu pour combattre (" + deck.length + " disponibles). Utilisez Mon jeu sur ce même site : chaque adresse garde son propre deck.";
        return;
    }
    partie = {joueur: creerCamp(deck), adversaire: creerCamp(catalogue), actif: lancerPiece(),
        tour: 1, role: "", historique: [], commence: false, fin: false};
    afficherLancer();
}

// Propose le choix du camp au vainqueur du lancer.
function afficherLancer() {
    clearForm(element("camps"));
    const gagne = partie.actif === "joueur";
    element("preparer").hidden = true;
    element("camps").hidden = !gagne;
    element("entrer").hidden = gagne;
    if (gagne) {
        element("tirage").textContent = "Pile · Vous avez gagné le lancer !";
        element("message-intro").textContent = "Choisissez votre camp pour commencer.";
    } else {
        choisirCamps(partie, hasard(2) === 0 ? "Lumière" : "Ténèbres");
        element("tirage").textContent = "Face · Vous avez perdu le lancer !";
        element("message-intro").textContent = "L’adversaire choisit " + partie.adversaire.nom + ". Vous jouez pour " + partie.joueur.nom + ".";
    }
}

// Ouvre le terrain après le choix des camps.
function commencer(camp) {
    if (!partie || partie.commence) return;
    if (partie.actif === "joueur" && !camp) return;
    if (partie.actif === "adversaire" && camp) return;
    if (camp) choisirCamps(partie, camp);
    partie.commence = true;
    element("intro").hidden = true;
    noter("Début du combat.");
    if (partie.actif === "adversaire") finirTourAdverse();
}

// Vérifie que le joueur peut agir.
function peutJouer() {
    if (!partie || !partie.commence) return false;
    if (partie.fin) noter("Le combat est terminé.");
    else if (partie.actif === "joueur") return true;
    else noter("Attendez la fin du tour adverse.");
    return false;
}

// Sélectionne le rôle de la prochaine carte.
function choisirRole(role) {
    if (!peutJouer()) return;
    partie.role = role;
    noter("Choisissez une carte dans votre main.");
}

// Pose la carte choisie et efface le rôle après une invocation réussie.
function jouerCarte(indice) {
    if (!peutJouer()) return;
    const nombre = partie.joueur.main.length;
    const message = poser(partie.joueur, indice, partie.role);
    if (partie.joueur.main.length < nombre) partie.role = "";
    noter(message);
}

// Attaque les points de vie adverses avec la carte sélectionnée.
function jouerAttaque(indice) {
    if (!peutJouer()) return;
    noter(attaquer(partie, "joueur", indice));
    verifierFin();
}

// Enregistre le résultat une fois et affiche le bouton Rejouer.
function verifierFin() {
    if (partie.fin || (partie.joueur.pv > 0 && partie.adversaire.pv > 0)) return false;
    const gagne = partie.adversaire.pv === 0;
    const cle = gagne ? "mythoria_arene_victoires" : "mythoria_arene_defaites";
    const nombre = Number(loadItems(cle)) || 0;
    saveItems(cle, nombre + 1);
    partie.fin = true;
    element("resultat").textContent = gagne ? "Vous avez gagné !" : "Vous avez perdu !";
    element("score").textContent = "Vous · " + partie.joueur.pv + " PV | Adversaire · " + partie.adversaire.pv + " PV";
    render(partie, jouerCarte, jouerAttaque);
    element("resultat").focus();
    return true;
}

// Laisse jouer l’adversaire, puis rend la main au joueur.
function finirTourAdverse() {
    jouerAdversaire(partie, noter);
    if (!verifierFin()) {
        changerTour(partie);
        noter("À vous de jouer.");
    }
}

// Relie les boutons aux actions du jeu.
function brancherBoutons() {
    element("lumiere").onclick = function() { commencer("Lumière"); };
    element("tenebres").onclick = function() { commencer("Ténèbres"); };
    element("entrer").onclick = function() { commencer(); };
    element("attaque").onclick = function() { choisirRole("ATQ"); };
    element("defense").onclick = function() { choisirRole("DEF"); };
    element("piocher").onclick = function() { if (peutJouer()) noter(piocher(partie.joueur)); };
    element("fin-tour").onclick = function() {
        if (!peutJouer()) return;
        changerTour(partie);
        finirTourAdverse();
    };
    element("rejouer").onclick = nouvellePartie;
}

// Attend le catalogue avant de lancer la partie.
async function initialiser() {
    try {
        catalogue = await chargerCartes();
    } catch (erreur) {
        element("message-intro").textContent = "Impossible de charger les cartes. Actualisez la page.";
        return;
    }
    brancherBoutons();
    nouvellePartie();
}

initialiser();
