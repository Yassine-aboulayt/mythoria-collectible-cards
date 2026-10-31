// Affiche l’heure dans l’historique.
export function formatDate(date) {
    return date.toLocaleTimeString("fr-FR", {hour: "2-digit", minute: "2-digit"});
}

// Donne à la carte posée un identifiant lié à son camp.
export function generateId(camp, id) {
    return camp + "-" + id;
}

// Tire un indice au hasard.
export function hasard(nombre) {
    return Math.floor(Math.random() * nombre);
}
