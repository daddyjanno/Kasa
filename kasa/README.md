![Kasa banner](https://user.oc-static.com/upload/2022/06/24/16560899769906_FR_811_P8_Banner-Kasa%20%281%29.png)

__CONTEXTE__

Kasa vous recrute en tant que développeur Front-end en freelance pour développer leur nouvelle plateforme web. Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour Kasa fait partie des leaders de la location d’appartements entre particuliers en France.

L'occasion parfaite pour vous d'ajouter une belle référence à votre portfolio de freelance !

Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté Back-end, et React côté Front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel, qui est en freelance. Un gros chantier pour cette année !

__OBJECTIF__

Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives !) et toutes les infos ci-dessous. Et ce avec un code de qualité !

__Back-end / data :__ Le recrutement de la personne en charge du Back-End n'est pas terminé et va prendre plus de temps que prévu. Du coup, il va falloir que tu fasses sans pour le moment. Je t'ai extrait les 20 dernières annonces de logements dans [ce fichier JSON](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json) pour que tu puisses construire le Front qui correspond.

__Contraintes techniques :__

Les coding guidelines de Kasa sont [ici](https://course.oc-static.com/projects/Front-End+V2/P9+React+1/Coding+guidelines+Kasa+FR.pdf). Create React App est habituellement utilisé pour créer les applications React, mais un autre bundler comme Vite est autorisé.

__Design :__

Voici [les maquettes sur Figma](https://www.figma.com/file/qEno0LwL4ZLkWyeY59kxp1/UI-Design-Kasa-FR?type=design&node-id=0-1&mode=design&t=BeorNz9YLHk4zv3O-0) pour le design d’interface. Pour avoir un rendu le plus réaliste possible de l'application, les prototypes du site sont disponibles [ici](https://www.figma.com/proto/qEno0LwL4ZLkWyeY59kxp1/UI-Design-Kasa-FR?type=design&node-id=3-0&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=3%3A0&show-proto-sidebar=1). Il y a des animations sur les menus déroulants mais ce n'est pas indispensable de les intégrer à ce stade.

Kasa a l’habitude de travailler avec la logique de composants sur Figma, ce qui facilite le travail sur React. Toutes les ressources sont directement dans la maquette (logo, icônes pour les composants, etc.). Pour cela, il suffit de cliquer sur la ressource souhaitée et de faire "Exporter" au format voulu. Sur les vignettes des logements, pour les images de couverture, le rectangle orange peut être remplacer par l'image correspondante.

__Contraintes fonctionnelles :__

Quelques précisions sur les fonctionnalités du site :

- Pour le défilement des photos dans la galerie (composant Gallery) :
    - Si l'utilisateur se trouve à la première image et qu'il clique sur "image précédente", la galerie affiche la dernière image.
    - Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "image suivante", la galerie affiche la première image.
    - S'il n'y a qu'une seule image, les boutons "suivant" et "précédent" ainsi que la numérotation n'apparaissent pas.
- La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
- Collapse : Par défaut, les Collapse sont fermés à l'initialisation de la page.
- Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
    - Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.
