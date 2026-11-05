# MYTHORIA — Partie 2

Cette branche contient la deuxième partie de Mythoria, l’Arène de combat.
Les pages de la première partie se trouvent dans le dossier [mythoria-partie1](../mythoria-partie1). Elles permettent de préparer le deck utilisé dans le combat.

## Liens

- [Code de cette partie](https://github.com/Yassine-aboulayt/mythoria-collectible-cards/tree/partie-2)
- [Projet complet sur main](https://github.com/Yassine-aboulayt/mythoria-collectible-cards/tree/main)
- [Arène sur Vercel](https://mythoria-collectible-cards-wbbj.vercel.app/arena.html)
- [Planification de l’Arène](PLANNING.md)
- [Tableau GitHub Projects](https://github.com/users/Yassine-aboulayt/projects/6)

## Outils utilisés

- HTML et Tailwind CSS pour la page.
- CSS pour le fond et la présentation du terrain.
- JavaScript avec import et export pour les modules.
- JSON pour les données des cartes.
- LocalStorage pour retrouver le deck et garder les résultats.

## Lancer le jeu

Ouvre le dossier du projet dans VS Code avec Live Server. Dans [Mon jeu](../mythoria-partie1/html/deck.html), prépare au moins 15 créatures, puis ouvre [Arène](arena.html) depuis le menu.
Garde la même adresse et le même navigateur pour retrouver ton deck.

## Jouer

- La pièce décide qui commence. Le gagnant choisit Lumière ou Ténèbres.
- Chaque joueur commence avec 3 000 PV, 5 cartes en main et 10 cartes dans sa pioche.
- Choisis Attaque ou Défense, puis clique sur une carte en main pour la poser.
- Clique sur une carte ATQ posée pour attaquer. Chaque carte attaque une fois par tour.
- Les cartes DEF réduisent les dégâts reçus. Une carte du camp opposé perd 20 % de ses valeurs ATQ et DEF.
- Fin de tour laisse jouer l’adversaire automatiquement.
- À zéro PV, le jeu affiche la victoire ou la défaite. Rejouer relance une partie.

## Fichiers de l’Arène

La page se trouve dans [arena.html](arena.html).
Les données sont dans [cards.json](data/cards.json).

- main.js relie les boutons aux actions.
- cards.js prépare le deck, la main, la pioche et les invocations.
- combat.js calcule les dégâts.
- turns.js gère le tirage, les camps et les tours.
- opponent.js fait jouer l’adversaire.
- ui.js affiche la main, le terrain et les points de vie.
- state.js lit et enregistre les données.
- utils.js contient les petites fonctions utilisées par les modules.

Auteur — Yassine Aboulayt
