# 🎴 Papayoo – Compteur de scores

Application web pour gérer les scores d'une partie de **Papayoo** (jeu de cartes de GB Concept, édité par Gigamic), pensée pour être utilisée sur smartphone, mais utilisable aussi sur ordinateur.

Un seul fichier HTML, sans dépendance, sans connexion Internet, sans compte.

> Projet non officiel, sans lien avec Gigamic ni GB Concept. Papayoo est une marque de ses propriétaires.

## 🚀 Utilisation

### En local
Télécharger le zip du dépôt, dézipper et ouvrir simplement `index.html` dans un navigateur (double-clic).

### Hébergée sur GitHub Pages
[https://xiigle.github.io/papayoo_scoring/](https://xiigle.github.io/papayoo_scoring/)

### Sur un smartphone comme application
Lancer l'application depuis le dépôt (lien ci-dessus) et installer via le menu du navigateur comme application (ou utiliser le lien sur la page de démarrage d'une nouvelle partie de l'application)

## ✨ Fonctionnalités

**Partie**
- 3 à 8 joueurs, nombre de manches réglable (5 par défaut, une manche supplémentaire peut être ajoutée en fin de partie)
- Noms des joueurs mémorisés pour relancer une partie rapidement (liste de joueurs enregistrés, suppression possible)
- Donneur indiqué et changé automatiquement à chaque manche
- Lancer de dé animé pour désigner la couleur du Papayoo (le 7 de la couleur tirée)
- Rappel des règles selon le nombre de joueurs : cartes par joueur, cartes à passer à gauche, retrait des 4 As à 7 et 8 joueurs

**Saisie des scores**
- Vérification que le total de la manche fait 250 points
- Bouton **＝** pour compléter automatiquement le score d'un joueur avec le reste
- **Aide au comptage** : on touche les cartes Payoo (1 à 20) et le Papayoo (40) ramassés, le total est calculé
- **Grand chelem** : si un joueur marque 250 points, l'application propose de lui mettre 0 et 250 aux autres
- Sur écran tactile, saisie par un pavé numérique de type calculatrice (pas de clavier du téléphone)

**Suivi**
- Classement en direct avec médailles
- Tableau détaillé manche par manche, avec correction possible de n'importe quelle manche
- Sauvegarde automatique : la partie en cours est conservée si on ferme la page

**Interface**
- Thème sombre inspiré de l'univers du jeu, optimisé pour mobile
- 5 langues : français, anglais, espagnol, allemand, italien (sélection par popup, langue du navigateur détectée au premier lancement)

## 🎲 Rappel du décompte des points

| Carte | Points |
|---|---|
| Carte Payoo (noire) | Sa valeur, de 1 à 20 |
| Papayoo (le 7 de la couleur tirée au dé) | 40 |
| Toutes les autres cartes | 0 |

Le total d'une manche est toujours de **250 points**. Le joueur qui a le moins de points à la fin de la dernière manche gagne.

## 💾 Données

Les données (joueurs enregistrés, partie en cours, langue) sont stockées dans le `localStorage` du navigateur, sous la clé `papayoo-v1`. Elles restent sur l'appareil et ne sont jamais envoyées nulle part.

Effacer les données du site dans le navigateur supprime la partie et les joueurs enregistrés.

## 🛠️ Technique

- HTML, CSS et JavaScript natifs, aucune bibliothèque
- Aucune police ni ressource externe (polices système uniquement), donc fonctionnement hors ligne
- Détection de l'écran tactile via `matchMedia('(pointer: coarse)')`
- Traductions regroupées dans un seul tableau en tête du script : pour ajouter une langue, il suffit d'ajouter une colonne et une entrée dans la liste `LG`
