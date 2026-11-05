# MYTHORIA — Arène

Mythoria est un jeu de cartes fantasy. Cette deuxième partie prépare une arène entre la Lumière et les Ténèbres.

## Premier livrable — 30 octobre 2026

La page contient le terrain adverse en haut, le terrain du joueur en bas, dix emplacements pour chaque camp, deux mains de cinq cartes et les decks à droite.

On voit les camps, les 3 000 HP, le tour et un court historique. Le fond reprend les couleurs bleu nuit, or et violet de Mythoria. Il garde seulement les deux cadres des decks à droite. Les emplacements du terrain et les PV sont présentés en HTML avec Tailwind.

C’est une maquette en HTML et Tailwind, sans JavaScript. Les boutons Piocher et Fin de tour sont désactivés. Les valeurs affichées sont des exemples.

## Technologies

- HTML pour la structure.
- Tailwind CSS par CDN pour la présentation et flex pour les zones.
- Un fichier CSS pour le fond.
- Git et GitHub pour le code et les commits.

## Ouvrir la page

Ouvrir arena.html avec Live Server dans VS Code. Internet est nécessaire pour charger Tailwind. Il n’y a pas de build npm.

## Fichiers du livrable

- arena.html : la maquette de combat.
- assets/styles/style.css : le fond de l’arène.
- assets/images : le fond, les dos de cartes, les piles et les illustrations affichées.
- PLANNING.md : grandes tâches et sous-tâches.

## Planification

[Planning GitHub](https://github.com/users/Yassine-aboulayt/projects/6)

Chaque grande tâche est une user story avec une date et ses sous-tâches, comme dans la première partie.

| Date | Grande tâche |
| --- | --- |
| 28/10 | Comprendre le brief et organiser le projet. |
| 29/10 | Construire les zones de la page Arène. |
| 30/10 | Vérifier et remettre la maquette HTML et Tailwind. |
| 02/11 | Préparer la partie, les cartes et la sauvegarde. |
| 03/11 | Ajouter les tours, le combat et l’adversaire. |
| 04/11 | Tester et préparer la publication sur Vercel. |
| 05/11 avant 11 h 59 | Remettre le jeu et préparer la présentation. |

[Dépôt GitHub](https://github.com/Yassine-aboulayt/mythoria-collectible-cards-2)

## Vérifications du premier livrable

Les images et les chemins locaux ont été vérifiés. Les deux terrains contiennent dix emplacements chacun. Le rendu a été contrôlé sur ordinateur et sur un écran mobile de 390 pixels. La page ne charge aucun script.

Les autres navigateurs, le combat et la publication Vercel seront vérifiés pendant la suite du projet.
