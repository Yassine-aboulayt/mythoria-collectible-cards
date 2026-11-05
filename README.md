# MYTHORIA

Mythoria est un projet de site sur un jeu de cartes fantastique.
Il contient six pages : Accueil, Boutique, Ouverture, Grimoire, Mon jeu et Arène.

## Liens

- [Jouer à Mythoria sur Vercel — site complet](https://mythoria-collectible-cards-wbbj.vercel.app/)
- [Ouvrir l’Arène sur Vercel](https://mythoria-collectible-cards-wbbj.vercel.app/arena.html)
- [Voir le code sur GitHub](https://github.com/Yassine-aboulayt/mythoria-collectible-cards)

## Organisation

- [Partie 1](mythoria-partie1/README.md) contient les cinq pages, les images et les scripts de collection.
- [Partie 2](mythoria-partie2/README.md) contient l’Arène, son catalogue, ses images et ses modules.
- [Planification générale](PLANNING.md) regroupe les liens vers les deux parties.

Pour démarrer avec Live Server, ouvre [Accueil](mythoria-partie1/html/index.html), puis utilise le menu pour aller dans l’Arène.

## Outils utilisés

- HTML pour le contenu des pages.
- Tailwind CSS pour les couleurs et la mise en page.
- CSS pour les images de fond.
- JavaScript pour le panier, les tirages, la collection, le deck et le combat.

## Les pages

- Accueil : présentation du jeu, des boosters et des cartes légendaires.
- Boutique : les quatre boosters et le panier dans une fenêtre.
- Ouverture : ouvrir les boosters achetés et obtenir des cartes aléatoires.
- Grimoire : voir sa collection, filtrer par rareté et lire les détails.
- Mon jeu : choisir jusqu’à vingt cartes possédées, sans doublons.
- [Arène](mythoria-partie2/arena.html) : jouer contre un adversaire automatique.

Les boosters, les cartes obtenues et le deck restent après actualisation grâce à LocalStorage.
La collection peut contenir plusieurs exemplaires. Le deck accepte une seule copie par carte.

## L’accueil

La page présente Mythoria, les quatre types de cartes et les boosters.
Elle montre aussi des cartes légendaires et permet de rejoindre la boutique.

## Le panier

On peut choisir une quantité et ajouter un booster au panier.
Si on ajoute le même booster, sa quantité augmente.

Les boutons + et − permettent de changer la quantité.
On peut aussi supprimer un booster ou vider tout le panier.
Le total change avec les quantités.

Le bouton Panier ouvre la liste des articles. On peut la fermer avec la croix, le fond ou Échap.
Le bouton Acheter affiche une confirmation, enregistre les boosters achetés et vide le panier.
Il n’y a pas de vrai paiement.
Le panier devient vide quand on actualise la page.

## Prix des boosters

- Pack Débutant : 40 MAD.
- Invocation des Légendes : 120 MAD.
- Invocation des Ténèbres : 80 MAD.
- Pack Chance : 60 MAD.

## L’ouverture des boosters

Après un achat, les boosters sont disponibles dans la page Ouverture.
On choisit un booster et on clique sur « Ouvrir le booster ».

Les cartes sont tirées au hasard selon les probabilités du pack.
Chaque carte affiche son image, son nom, sa rareté et ses informations.
Les cartes obtenues sont ajoutées à la collection et restent après actualisation.

## Le grimoire

Le grimoire présente les cartes possédées dans un livre.
La liste des cartes est à gauche et les détails de la carte choisie sont à droite.

On peut filtrer les cartes par rareté.
Un clic sur une carte affiche sa description, son pouvoir et ses statistiques.
Le nombre d’exemplaires possédés est aussi affiché.

## Mon jeu

On peut ajouter des cartes de sa collection et les retirer du deck.
Le jeu contient au maximum vingt cartes, avec une seule copie de chaque carte.

Le compteur et les statistiques changent avec les cartes choisies.
Le deck est enregistré dans LocalStorage et revient après actualisation.

## L’arène

Sur [Mythoria avec l’Arène](https://mythoria-collectible-cards-wbbj.vercel.app), ouvre **Mon jeu**, prépare au moins 15 créatures, puis clique sur **Arène** dans le menu. Le deck est enregistré dans le navigateur pour l’adresse utilisée. Un deck préparé sur Live Server est donc disponible à cette adresse locale.

- La pièce décide qui commence et choisit son camp. Les deux joueurs commencent à 3 000 PV, avec 5 cartes en main et 10 dans leur pioche.
- Choisis **Attaque** ou **Défense**, puis clique sur une carte en main pour la poser dans la première case libre. Clique sur une carte ATQ posée pour attaquer.
- Chaque carte DEF réduit les dégâts de chaque attaque. Les cartes du camp opposé perdent 20 % de leurs valeurs d’ATQ et de DEF. Les cartes restent sur le terrain.
- **Fin de tour** laisse l’adversaire jouer. À zéro PV, la partie se termine. **Rejouer** ou actualiser la page relance le tirage. Les victoires et les défaites restent enregistrées.

Le code de l’Arène se trouve dans le dossier [mythoria-partie2](mythoria-partie2). Le fichier [main.js](mythoria-partie2/js/main.js) relie les modules, et [cards.json](mythoria-partie2/data/cards.json) contient le catalogue. Live Server permet au navigateur de charger les modules et les données.

## Planification

Les tâches sont dans mon [tableau GitHub Projects](https://github.com/users/Yassine-aboulayt/projects/5).
La deuxième partie est dans la [planification de l’arène](mythoria-partie2/PLANNING.md) et son [tableau GitHub Projects](https://github.com/users/Yassine-aboulayt/projects/6).

Le livrable du 4e jour contient le site sur Vercel, le code sur GitHub,
la planification et ce README.

La première partie prévoyait cinq pages et une remise le 27/10/2026 à 11 h 59.


## Planning / Tasks completed

Les dates sont celles prévues dans GitHub Projects.

| Date prévue en octobre 2026 | Tâche | Travail présent |
|---|---|---|
| 19/10 | #36 — Brief | ✅ Résumé du projet et des livrables. |
| 20–21/10 | #37 — Interface | ✅ Couleurs, visuels et navigation commune. |
| 21 et 23/10 | #38 — Données | ✅ Catalogue de 50 cartes et règles des quatre boosters. |
| 20/10 | #39 — Structure | ✅ Cinq pages et Tailwind par CDN. |
| 21/10 | #40 — Accueil | ✅ Présentation du jeu et des boosters. |
| 21–22/10 | #41 — Boutique | ✅ Quantités, total, modale et commande simulée. |
| 22/10 | #42 — Hébergement | ✅ Site publié sur Vercel. |
| 23/10 | #43 — Ouverture | ✅ Tirage aléatoire pondéré et sauvegarde des cartes. |
| 24/10 | #44 — Grimoire | ✅ Livre, filtre de rareté et fiche des cartes. |
| 25/10 | #45 — Deck | ✅ Vingt cartes uniques maximum et sauvegarde. |
| 21–26/10 | #46 — Vérifications | ✅ Parcours principal et tests automatisés vérifiés. |
| 26–27/10 | #47 — Livraison | ✅ Sources, liens et README ; oral et date de remise non vérifiés. |
| Facultatif | #48 — Bonus | Non réalisés. |


Auteur : Yassine Aboulayt
