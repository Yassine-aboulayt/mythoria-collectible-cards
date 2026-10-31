// Ajoute un message à l’historique de la partie.
export function addItem(liste, message) {
    liste.push(message);
}

// Lit une valeur enregistrée sous forme de texte.
export function loadItems(cle) {
    return localStorage.getItem(cle) || "";
}

// Enregistre une valeur sous forme de texte.
export function saveItems(cle, valeur) {
    localStorage.setItem(cle, String(valeur));
}
