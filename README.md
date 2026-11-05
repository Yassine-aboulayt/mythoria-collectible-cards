# MYTHORIA

Mythoria est un projet étudiant sur un jeu de cartes fantastique. On peut acheter des boosters, obtenir des cartes, préparer un deck et jouer un combat local contre un adversaire automatique.

La branche main contient le projet complet, avec les deux parties et les six pages.

## Liens du projet

- [Site complet sur Vercel](https://mythoria-collectible-cards-wbbj.vercel.app/)
- [Arène sur Vercel](https://mythoria-collectible-cards-wbbj.vercel.app/arena.html)
- [Dépôt GitHub](https://github.com/Yassine-aboulayt/mythoria-collectible-cards)
- [Planification complète](PLANNING.md)

## Les deux parties

| Partie | Contenu | Dossier |
|---|---|---|
| Partie 1 | Accueil, Boutique, Ouverture, Grimoire et Mon jeu | [mythoria-partie1](mythoria-partie1/README.md) |
| Partie 2 | Arène de combat et modules JavaScript | [mythoria-partie2](mythoria-partie2/README.md) |

Les deux parties fonctionnent ensemble. Le deck préparé dans Mon jeu est utilisé dans l’Arène.

## Les six pages

| Page | Ce que l’on peut faire |
|---|---|
| [Accueil](mythoria-partie1/html/index.html) | Découvrir le jeu, les types de cartes, les boosters et les légendaires. |
| [Boutique](mythoria-partie1/html/shop.html) | Choisir des quantités, ajouter des boosters au panier et confirmer un achat. |
| [Ouverture](mythoria-partie1/html/opening.html) | Ouvrir les boosters achetés et recevoir des cartes tirées au hasard. |
| [Grimoire](mythoria-partie1/html/grimoire.html) | Voir la collection dans un livre, filtrer par rareté et consulter une carte. |
| [Mon jeu](mythoria-partie1/html/deck.html) | Ajouter ou retirer des cartes du deck et voir ses statistiques. |
| [Arène](mythoria-partie2/arena.html) | Lancer la pièce, choisir un camp et combattre un adversaire automatique. |

## Le parcours du joueur

1. Dans Boutique, ajouter des boosters au panier et confirmer la commande.
2. Dans Ouverture, choisir un booster disponible et l’ouvrir.
3. Dans Grimoire, regarder les cartes obtenues et leurs pouvoirs.
4. Dans Mon jeu, sélectionner jusqu’à 20 cartes différentes. Il faut au moins 15 créatures pour entrer dans l’Arène.
5. Dans Arène, découvrir le résultat du pile ou face, puis commencer le combat.

Garde la même adresse du site et le même navigateur pour retrouver tes cartes et ton deck. Live Server et Vercel enregistrent chacun leurs propres données.

## La boutique et le panier

Les mêmes boosters sont regroupés sur une ligne. Le panier affiche leur quantité, leur sous-total et le total général.

On peut modifier une quantité, utiliser les boutons + et −, supprimer un article ou vider le panier. Une quantité doit être un entier supérieur à zéro.

Le bouton Panier ouvre une fenêtre. La croix, le fond et la touche Échap permettent de la fermer.

Acheter confirme la commande, enregistre les boosters disponibles et vide le panier. Le panier lui-même se vide après actualisation.

| Booster | Prix | Cartes par booster |
|---|---|---|
| Pack Débutant | 40 MAD | 5 |
| Invocation des Légendes | 120 MAD | 10 |
| Invocation des Ténèbres | 80 MAD | 7 |
| Pack Chance | 60 MAD | 6 |

## Les cartes et la collection

La première partie contient un catalogue de 50 cartes réparties entre Lumière, Ténèbres, Créatures et Sorts.

Chaque booster définit les types de cartes possibles et ses chances d’obtenir une carte commune, rare, épique ou légendaire. Le tirage est fait en JavaScript au moment de l’ouverture.

Les cartes obtenues sont ajoutées au Grimoire. La collection peut contenir plusieurs exemplaires d’une même carte. Un clic sur une carte montre son illustration, son type, sa rareté, son pouvoir, sa description et ses statistiques.

Le deck accepte une seule copie de chaque carte et contient au maximum 20 cartes. Ses statistiques changent quand on ajoute ou retire une carte.

## Les règles de l’Arène

- Le pile ou face décide qui commence. Le gagnant choisit Lumière ou Ténèbres, et l’autre reçoit le camp opposé.
- Chaque joueur commence avec 3 000 PV, 5 cartes en main et 10 cartes dans sa pioche.
- Chaque terrain contient 10 emplacements.
- On peut poser une carte par tour. Il faut choisir Attaque ou Défense avant de cliquer sur une carte en main.
- On peut piocher une fois par tour si la main contient moins de 5 cartes et si la pioche contient encore des cartes.
- Une carte ATQ peut attaquer une fois par tour. Une carte DEF protège le joueur en réduisant les dégâts reçus.
- Les dégâts sont l’attaque de la carte moins la défense totale du camp visé, avec un minimum de zéro.
- Une carte du camp opposé perd 20 % de ses valeurs d’ATQ et de DEF pendant le combat.
- Les cartes restent sur le terrain. Les attaques réduisent les PV des joueurs.
- Fin de tour fait jouer l’adversaire, qui choisit ses cartes et leurs rôles au hasard.
- À zéro PV, un message annonce la victoire ou la défaite.
- Rejouer ou actualiser la page relance le pile ou face.

Les valeurs des cartes dans le Grimoire restent les mêmes après un combat.

## Les données enregistrées

| Données | Enregistrement |
|---|---|
| Boosters disponibles et collection | LocalStorage, dans mythoria_partie |
| Deck de Mon jeu | LocalStorage, dans mythoria_deck |
| Nombre de victoires et de défaites | LocalStorage, dans mythoria_arene_victoires et mythoria_arene_defaites |

Le combat redémarre après actualisation. Le panier et la partie en cours restent dans la mémoire de la page pendant son utilisation.

## Les outils utilisés

- HTML5 pour le contenu et la structure des pages.
- Tailwind CSS par CDN pour les couleurs, les espacements et la mise en page.
- CSS pour les fonds et la présentation de l’Arène.
- JavaScript et le DOM pour les boutons, les formulaires et les affichages.
- Les modules ES6 avec import et export pour organiser le combat.
- JSON et fetch pour charger les cartes de l’Arène.
- LocalStorage pour enregistrer les cartes, le deck et les résultats.
- Git et GitHub pour les versions du code.
- GitHub Projects pour les tâches et Vercel pour l’hébergement.

## Les fichiers

| Emplacement | Rôle |
|---|---|
| [mythoria-partie1/html](mythoria-partie1/html) | Les cinq pages et leur fichier de fonds CSS. |
| [mythoria-partie1/js](mythoria-partie1/js) | Les données, le panier, l’ouverture, le grimoire et le deck. |
| [mythoria-partie1/images](mythoria-partie1/images) | Les illustrations de la première partie. |
| [mythoria-partie2/arena.html](mythoria-partie2/arena.html) | La page de combat. |
| [mythoria-partie2/data/cards.json](mythoria-partie2/data/cards.json) | Le catalogue de créatures de l’Arène. |
| [mythoria-partie2/assets](mythoria-partie2/assets) | Les images et les styles de l’Arène. |
| [mythoria-partie2/js](mythoria-partie2/js) | Les modules du combat. |
| [vercel.json](vercel.json) | Les chemins des pages et des ressources sur Vercel. |

Les modules de l’Arène se partagent le travail. main.js relie les boutons aux actions, ui.js affiche le jeu, cards.js gère les cartes, combat.js calcule les dégâts, turns.js gère les tours et opponent.js fait jouer l’adversaire. state.js lit et enregistre les données, et utils.js contient les fonctions communes.

## Ouvrir le projet

Télécharge le dépôt, ouvre son dossier dans VS Code et lance Live Server depuis [mythoria-partie1/html/index.html](mythoria-partie1/html/index.html). Le menu permet d’accéder aux six pages.

Un serveur local permet de charger les modules JavaScript et le fichier JSON de l’Arène. Une connexion Internet est nécessaire pour charger Tailwind par CDN.

## La planification

Le [planning général](PLANNING.md) contient les user stories, les grandes tâches et leurs sous-tâches pour les deux parties.

| Dates prévues en 2026 | Travail |
|---|---|
| 19 au 22 octobre | Préparer le projet, les visuels, l’accueil et la boutique. |
| 23 au 27 octobre | Ajouter l’ouverture, le grimoire, le deck et vérifier la première partie. |
| 28 au 30 octobre | Préparer le brief et la maquette de l’Arène. |
| 31 octobre au 2 novembre | Organiser les modules, les cartes, le tirage et les camps. |
| 3 novembre | Ajouter les tours et le combat contre l’adversaire. |
| 4 au 5 novembre | Vérifier le jeu, publier les liens et préparer le livrable final. |

La première partie prévoyait une remise le 27/10/2026 à 11 h 59. Le second livrable de l’Arène était prévu le 05/11/2026 avant 11 h 59.

## Les branches GitHub

- [main](https://github.com/Yassine-aboulayt/mythoria-collectible-cards/tree/main) contient le projet complet.
- [partie-1](https://github.com/Yassine-aboulayt/mythoria-collectible-cards/tree/partie-1) contient la première partie avec son README.
- [partie-2](https://github.com/Yassine-aboulayt/mythoria-collectible-cards/tree/partie-2) contient le travail de l’Arène et son README.

Auteur — Yassine Aboulayt
