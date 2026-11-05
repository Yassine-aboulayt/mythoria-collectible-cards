import {generateId, hasard} from "./utils.js";

export const DECK_SIZE = 10;
export const TAILLE_MAIN = 5;
export const TAILLE_DECK = 20;
export const TAILLE_TERRAIN = 10;
let cartes = [];

// Charge les cartes de l’Arène au démarrage.
export async function chargerCartes() {
    const adresse = new URL("../data/cards.json", import.meta.url);
    const reponse = await fetch(adresse);
    if (!reponse.ok) throw new Error("Catalogue indisponible.");
    cartes = await reponse.json();
    return cartes;
}

// Lit les identifiants du deck existant sans modifier sa sauvegarde.
export function lireDeck(texte) {
    const deck = [];
    for (const id of texte.split('"')) {
        const carte = cartes.find(function(element) { return element.id === id; });
        if (carte && !deck.includes(carte)) deck.push(carte);
        if (deck.length === TAILLE_DECK) break;
    }
    return deck;
}

// Mélange une copie des cartes, puis sépare la main de la pioche.
export function creerCamp(cartes) {
    const pioche = cartes.slice();
    for (let i = pioche.length - 1; i > 0; i--) {
        const j = hasard(i + 1);
        const carte = pioche[i];
        pioche[i] = pioche[j];
        pioche[j] = carte;
    }
    pioche.splice(DECK_SIZE + TAILLE_MAIN);
    return {
        nom: "", pv: 3000, main: pioche.splice(0, TAILLE_MAIN), pioche: pioche,
        terrain: Array(TAILLE_TERRAIN).fill(null), aPioche: false, aPose: false
    };
}

// Retourne les statistiques de la carte dans le camp qui la joue.
export function valeursCarte(carte, camp) {
    if (carte.camp === camp) return {attaque: carte.attaque, defense: carte.defense};
    return {attaque: Math.round(carte.attaque * 0.8), defense: Math.round(carte.defense * 0.8)};
}

// Pioche une carte si la main a de la place.
export function piocher(camp) {
    if (camp.pioche.length === 0) return "La pioche est vide.";
    if (camp.main.length >= TAILLE_MAIN) return "La main est pleine.";
    if (camp.aPioche) return "Une seule pioche par tour.";
    camp.main.push(camp.pioche.pop());
    camp.aPioche = true;
    return "Une carte est piochée.";
}

// Pose une carte dans la première case libre.
export function poser(camp, indice, role) {
    if (role !== "ATQ" && role !== "DEF") return "Choisissez d’abord Attaque ou Défense.";
    const carte = camp.main[indice];
    if (!Number.isInteger(indice) || !carte) return "Cette carte est absente de la main.";
    const place = camp.terrain.indexOf(null);
    if (place === -1) return "Le terrain est plein.";
    if (camp.aPose) return "Une seule carte peut être posée par tour.";
    camp.terrain[place] = {id: generateId(camp.nom, carte.id), carte: carte, role: role, aAttaque: false};
    camp.main.splice(indice, 1);
    camp.aPose = true;
    return carte.nom + " est placée en " + role + ".";
}
