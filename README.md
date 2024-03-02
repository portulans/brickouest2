# README

## TODO

- [X] Faire passer la carte derrière la navbar
- [X] Back-end vers CSV pour les infos des expos
- [ ] Rendre responsive l'iframe Facebook
- [ ] Rendre le site entièrement responsive

## Aide
### Evènements
Les évènements sont listés dans le fichier [evenements.csv](https://github.com/portulans/brickouest/blob/main/public/data/evenements.csv). Il peut être ouvert dans un tableur comme Excel, LibreOffice Calc ou Google Sheet (ou dans un éditeur de texte).

Les colonnes du tableau sont :
- *statut* : écrire **avenir** si l'évènement est à venir, **passe** s'il est passe
- *titreevent* : nom de l'évènement
- *type* : **exposition** ou **animation**
- *jour1* : date et horaires du premier jour de l'évènement
- *jour2* : date et horaires du deuxième jour de l'évènement (laisser vide si l'évènment n'a lieu que sur une journée)
- *lieu* : nom du lieu accueillant l'évènement (ex:*Salle des sports de Saint-Renan*)
- *adresse* : rue/lieu-dit du lieu accueillant l'évènement
- *code postal* : code postal du lieu accueillant l'évènement
- *ville* : commune où a lieu l'évènement
- *affiche* : nom de l'image qui correspond à l'affiche. Si pas d'affiche, utiliser les images *animation.jpg* ou *exposition.jpg*
- *tarif* : tarifs de l'évènement
- *organiseavec* : orgnisateur de l'expo (ex: MFR de Saint-Renan)
- *autresinfos* : autres informations sur l'évènement
- *lien* : lien vers le site ou le réseau social de l'expo

### Carte
Pour mettre à jour les points affichés sur la carte:
- éditer le fichier .geojson qui permet d'afficher les points sur la carte avec Umap: 
https://umap.openstreetmap.fr/fr/map/lieux_1032319
- télécharger le fichier et le mettre dans le dossier data (en vérifiant qu'il s'appelle bien *lieux.geojson*)

## Crédit des images non BO utilisées
Licence Unsplash
- *animation.jpg* : https://unsplash.com/fr/photos/jaune-rouge-bleu-et-vert-blocs-lego-kn-UmDZQDjM
- *exposition.jpg* : https://unsplash.com/fr/photos/lot-de-tete-pour-figurine-7Z03R1wOdmI