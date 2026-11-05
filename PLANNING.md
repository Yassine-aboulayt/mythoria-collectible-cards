# Planification générale de Mythoria

Cette planification rassemble les deux parties du projet. La première partie permet de collectionner des cartes et de préparer un deck. La deuxième ajoute l’Arène de combat.

Les dates ci-dessous sont les dates prévues dans le planning. Les cases cochées indiquent le travail présent dans le projet. Les vérifications et présentations encore ouvertes gardent une case vide.

## Les livrables

| Partie | Livrable | Date prévue en 2026 |
|---|---|---|
| Partie 1, jour 4 | Accueil, Boutique avec panier, code GitHub, README, planning et site Vercel. | 22 octobre |
| Partie 1, jour 7 | Les cinq pages, ouverture des boosters, collection et deck. | 27 octobre à 11 h 59 |
| Partie 2, premier livrable | Maquette de l’Arène en HTML et Tailwind avec ses ressources. | 30 octobre |
| Partie 2, second livrable | Arène avec modules JavaScript, combat et liens du projet. | 5 novembre avant 11 h 59 |

## Première partie — Collection et deck

### 1. Comprendre le brief — tâche #36

Date prévue — 19/10/2026.

En tant que développeur, je veux comprendre le projet pour organiser les pages et les livrables.

- [x] Lire le brief et repérer les fonctionnalités demandées.
- [x] Identifier les cinq pages de la première partie.
- [x] Préparer la documentation et l’ordre des tâches.

### 2. Préparer l’interface — tâche #37

Dates prévues — 20 et 21/10/2026.

En tant que joueur, je veux reconnaître l’univers de Mythoria sur chaque page.

- [x] Utiliser les couleurs sombres, l’or et le violet.
- [x] Ajouter le logo et les illustrations.
- [x] Préparer un en-tête et un pied de page communs.
- [x] Relier les pages par la navigation.

### 3. Définir les données du jeu — tâche #38

Dates prévues — 21 et 23/10/2026.

En tant que joueur, je veux trouver des cartes différentes dans les boosters.

- [x] Définir les identifiants, noms, illustrations et descriptions des cartes.
- [x] Définir les types, raretés, pouvoirs et statistiques.
- [x] Préparer le catalogue de 50 cartes.
- [x] Définir les quatre boosters, les cartes éligibles et les probabilités.

### 4. Construire la structure — tâche #39

Date prévue — 20/10/2026.

En tant que développeur, je veux ranger les fichiers pour retrouver facilement chaque page.

- [x] Créer les fichiers HTML, CSS et JavaScript.
- [x] Ranger les images dans leurs dossiers.
- [x] Charger Tailwind CSS par CDN.
- [x] Relier les pages à leurs scripts et à leurs styles.

### 5. Créer l’accueil — tâche #40

Date prévue — 21/10/2026.

En tant que visiteur, je veux découvrir le jeu avant de choisir un booster.

- [x] Ajouter une présentation courte de Mythoria.
- [x] Présenter les quatre types de cartes.
- [x] Montrer les quatre boosters et des cartes légendaires.
- [x] Ajouter les liens vers la boutique et les sections de la page.

### 6. Créer la boutique et le panier — tâche #41

Dates prévues — 21 et 22/10/2026.

En tant que joueur, je veux choisir des boosters et vérifier ma commande.

- [x] Afficher les noms, prix, illustrations et quantités.
- [x] Ajouter les boosters et regrouper les mêmes produits.
- [x] Afficher les quantités, sous-totaux et le total.
- [x] Ajouter les boutons +, −, Supprimer et Vider le panier.
- [x] Refuser les quantités vides, nulles, négatives ou décimales.
- [x] Ouvrir et fermer la fenêtre du panier.
- [x] Confirmer la commande et enregistrer les boosters disponibles.

### 7. Héberger la première version — tâche #42

Date prévue — 22/10/2026.

En tant que visiteur, je veux ouvrir le site avec un lien public.

- [x] Publier le code sur GitHub.
- [x] Configurer les chemins nécessaires pour Vercel.
- [x] Vérifier les pages, leurs images et leurs scripts.
- [x] Ajouter les liens du projet au README.

### 8. Ouvrir les boosters — tâche #43

Date prévue — 23/10/2026.

En tant que joueur, je veux ouvrir les boosters achetés pour obtenir mes cartes.

- [x] Afficher les boosters disponibles et leur quantité.
- [x] Choisir un booster et vérifier son stock.
- [x] Tirer les cartes au hasard avec les probabilités du booster.
- [x] Afficher les cartes et signaler les raretés obtenues.
- [x] Retirer le booster ouvert du stock.
- [x] Ajouter les cartes à la collection et enregistrer le résultat.

### 9. Présenter le Grimoire — tâche #44

Date prévue — 24/10/2026.

En tant que joueur, je veux consulter mes cartes dans un livre.

- [x] Afficher la collection dans le grimoire illustré.
- [x] Placer la liste des cartes à gauche et les détails à droite.
- [x] Filtrer les cartes par rareté.
- [x] Afficher les pouvoirs, descriptions, statistiques et exemplaires.
- [x] Montrer un état vide quand la collection est vide.
- [x] Retrouver la collection après actualisation.

### 10. Préparer Mon jeu — tâche #45

Date prévue — 25/10/2026.

En tant que joueur, je veux choisir les cartes de mon deck.

- [x] Ajouter une carte de la collection au deck.
- [x] Retirer une carte ou vider le deck.
- [x] Limiter le deck à 20 cartes et à une copie de chaque carte.
- [x] Afficher le nombre de cartes et les statistiques.
- [x] Enregistrer le deck dans LocalStorage.

### 11. Vérifier la première partie — tâche #46

Dates prévues — du 21 au 26/10/2026.

En tant que développeur, je veux vérifier les parcours pour corriger les erreurs.

- [x] Vérifier les liens entre les cinq pages et leurs ressources.
- [x] Vérifier l’ajout, les quantités, la suppression et le total du panier.
- [x] Vérifier le passage de la commande vers les boosters disponibles.
- [x] Vérifier l’ouverture, la collection et la sauvegarde du deck.
- [ ] Terminer une validation complète sur plusieurs navigateurs.

### 12. Préparer la livraison — tâche #47

Dates prévues — 26 et 27/10/2026, avec une remise prévue le 27/10 à 11 h 59.

En tant que développeur, je veux réunir les éléments du livrable.

- [x] Réunir les sources et les ressources du site.
- [x] Rédiger le README et la planification.
- [x] Préparer les liens GitHub et Vercel.
- [ ] Présenter le projet à l’oral.

## Deuxième partie — Arène

### 13. Comprendre et organiser le combat

Date prévue — 28/10/2026.

En tant que développeur, je veux préparer les étapes de l’Arène.

- [x] Lire les règles du combat et du choix des camps.
- [x] Séparer la maquette du premier livrable et le jeu JavaScript du second.
- [x] Prévoir les fichiers et leurs rôles.
- [x] Écrire les user stories et les sous-tâches.

### 14. Construire la maquette

Date prévue — 29/10/2026.

En tant que joueur, je veux reconnaître les zones de jeu.

- [x] Créer la page Arène avec HTML et Tailwind.
- [x] Ajouter dix emplacements par joueur.
- [x] Préparer les mains de cinq cartes.
- [x] Placer les pioches sur le côté et afficher les PV.
- [x] Ajouter les zones d’actions et l’historique.

### 15. Préparer le premier livrable de l’Arène

Date prévue — 30/10/2026.

En tant que développeur, je veux remettre une maquette utilisable pour valider la présentation.

- [x] Ajouter le fond, les dos de cartes et les images de pioche.
- [x] Adapter la présentation aux différentes tailles de fenêtre.
- [x] Vérifier les chemins des images et les emplacements.
- [x] Désactiver les actions de la maquette avant l’ajout du JavaScript.
- [x] Préparer le README et le planning de la deuxième partie.

### 16. Préparer les cartes et le début du jeu

Date prévue — 02/11/2026.

En tant que joueur, je veux commencer avec mon deck et connaître mon camp.

- [x] Organiser les fichiers avec import, export et type="module".
- [x] Charger les créatures depuis le catalogue JSON avec fetch.
- [x] Lire le deck de Mon jeu depuis LocalStorage.
- [x] Vérifier le minimum de 15 créatures pour commencer.
- [x] Mélanger les cartes et préparer 5 cartes en main et 10 en pioche.
- [x] Tirer au sort le joueur qui commence.
- [x] Laisser le gagnant choisir son camp et attribuer le camp opposé.
- [x] Créer generateId, formatDate, addItem, loadItems, saveItems, renderList et clearForm.

### 17. Gérer les tours et le combat

Date prévue — 03/11/2026.

En tant que joueur, je veux jouer mes cartes et affronter l’adversaire.

- [x] Choisir le rôle Attaque ou Défense avant de poser une carte.
- [x] Limiter la main à 5 cartes et le terrain à 10 cartes.
- [x] Autoriser une pioche et une invocation par tour.
- [x] Appliquer la pénalité de 20 % hors camp aux valeurs de combat.
- [x] Autoriser une attaque par carte ATQ et par tour.
- [x] Réduire les dégâts avec la défense et mettre à jour les PV des joueurs.
- [x] Faire jouer l’adversaire automatiquement avec des choix aléatoires valides.
- [x] Bloquer les actions impossibles.
- [x] Afficher la victoire ou la défaite à zéro PV et permettre de rejouer.
- [x] Enregistrer les victoires et les défaites.

### 18. Vérifier et publier le jeu complet

Date prévue — 04/11/2026.

En tant que développeur, je veux vérifier le passage entre les deux parties.

- [x] Vérifier le deck, le pile ou face, les deux camps et le démarrage du duel.
- [x] Vérifier les cartes ATQ et DEF, les dégâts, les tours et la fin du combat.
- [x] Vérifier le rechargement et le nouveau tirage.
- [x] Vérifier les liens, les scripts, le catalogue et les images sur Vercel.
- [x] Publier le projet complet et mettre ses liens dans le README.
- [ ] Compléter la vérification du clavier, des contrastes et de l’affichage mobile.
- [ ] Compléter les essais sur plusieurs navigateurs et la vérification du poids des images.

### 19. Réunir le livrable final

Date prévue — 05/11/2026 avant 11 h 59.

En tant que développeur, je veux présenter le projet complet.

- [x] Réunir les deux parties sur main avec leurs fichiers nécessaires.
- [x] Préparer un README général et une planification des deux parties.
- [x] Fournir les liens vers le code et le site complet.
- [ ] Présenter le fonctionnement du code et faire la démonstration à l’oral.

## Bonus facultatifs — tâche #48 et suite de l’Arène

Les bonus restent en dehors des tâches obligatoires. Leur présence doit être vérifiée avant de les déclarer terminés.

## Sources du planning

- [GitHub Projects de la première partie](https://github.com/users/Yassine-aboulayt/projects/5)
- [GitHub Projects de la deuxième partie](https://github.com/users/Yassine-aboulayt/projects/6)
- [Documentation de la première partie](mythoria-partie1/docs/index.md)
- [Planning détaillé de la deuxième partie](mythoria-partie2/PLANNING.md)
- [README du projet complet](README.md)
