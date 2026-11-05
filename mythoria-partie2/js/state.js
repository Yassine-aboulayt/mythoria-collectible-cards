// Ajoute un message à l’historique de la partie.
export function addItem(liste, message) {
    liste.push(message);
}

// Lit une valeur enregistrée sous forme de texte.
export function loadItems(cle) {
    try {
        return localStorage.getItem(cle) || "";
    } catch (erreur) {
        return "";
    }
}

// Enregistre une valeur sous forme de texte.
export function saveItems(cle, valeur) {
    try {
        localStorage.setItem(cle, String(valeur));
        return true;
    } catch (erreur) {
        return false;
    }
}
