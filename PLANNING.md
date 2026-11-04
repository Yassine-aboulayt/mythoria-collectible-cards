# Planification — MYTHORIA Arène

Le premier livrable du 30/10/2026 contient uniquement la maquette HTML et Tailwind. La partie JavaScript est prévue pour le 05/11/2026 avant 11 h 59.

Planning GitHub : https://github.com/users/Yassine-aboulayt/projects/6

## 1. Comprendre et organiser le projet

En tant que développeur, je veux comprendre le brief afin de préparer les deux livrables de l’Arène.

Date prévue : 28/10/2026.

### Sous-tâches

- [x] Lire les règles du combat.
- [x] Séparer la maquette J3 du jeu JavaScript J7.
- [x] Prévoir les fichiers du projet.
- [x] Organiser les tâches et les dates.

## 2. Construire la page Arène

En tant que joueur, je veux voir les zones de combat afin de comprendre où placer mes cartes.

Date prévue : 29/10/2026.

### Sous-tâches

- [x] Créer arena.html avec Tailwind.
- [x] Ajouter dix emplacements par camp.
- [x] Présenter les mains de cinq cartes.
- [x] Placer les decks à droite, les camps et les PV.

## 3. Préparer le premier livrable

En tant que développeur, je veux livrer la maquette sans logique afin de valider la présentation avant le combat.

Date prévue : 30/10/2026.

### Sous-tâches

- [x] Utiliser le fond choisi et les images locales.
- [x] Adapter la page aux petits écrans.
- [x] Vérifier les chemins et les vingt emplacements.
- [x] Désactiver les boutons sans logique.
- [x] Rédiger le README et faire des commits séparés.

## 4. Préparer la partie et les cartes

En tant que joueur, je veux commencer une partie avec mon deck afin de choisir mon camp et invoquer mes cartes.

Date prévue : 02/11/2026.

### Sous-tâches

- [x] Utiliser import, export et type="module".
- [x] Charger le catalogue et le deck de la première partie.
- [x] Créer les utilitaires generateId et formatDate.
- [x] Créer addItem, loadItems, saveItems, renderList et clearForm.
- [x] Mélanger les cartes et limiter la main à cinq.
- [x] Tirer au sort le premier joueur et attribuer les camps opposés.
- [x] Gérer la pioche, l’invocation et la sauvegarde LocalStorage.

## 5. Jouer les tours et les combats

En tant que joueur, je veux attaquer un adversaire automatique afin de gagner le combat.

Date prévue : 03/11/2026.

### Sous-tâches

- [x] Appliquer la pénalité de 20 % hors camp sans modifier le catalogue.
- [x] Autoriser une attaque par créature et par tour.
- [x] Calculer les dégâts aux joueurs et la réduction des cartes en défense. Les cartes restent sur le terrain.
- [x] Faire jouer une action valide à l’adversaire.
- [x] Bloquer les actions impossibles et arrêter à zéro HP.

## 6. Vérifier et publier le jeu

En tant que développeur, je veux tester le jeu afin de publier une version utilisable.

Date prévue : 04/11/2026.

### Sous-tâches

- [x] Tester les règles, les tours et le rechargement.
- [ ] Vérifier clavier, contrastes et affichage mobile.
- [ ] Tester plusieurs navigateurs selon leur disponibilité.
- [ ] Vérifier HTML, CSS et poids des images.
- [ ] Déployer sur Vercel et actualiser le README.

## 7. Remettre le livrable final

En tant que développeur, je veux présenter l’Arène terminée afin de remettre le second livrable.

Date prévue : 05/11/2026 avant 11 h 59.

### Sous-tâches

- [x] Vérifier le parcours complet jusqu’à la victoire ou la défaite.
- [ ] Remettre le code source, le README, le planning et le lien Vercel.
- [ ] Préparer la démonstration et les explications du code.

## Bonus après les tâches obligatoires

- [ ] Améliorer les choix attaque/défense de l’adversaire.
- [ ] Prévoir une défaite quand le deck ne permet plus de piocher.
- [ ] Ajouter un historique détaillé et un écran de résultats.

Les animations du bonus ne sont pas prévues dans cette version.
