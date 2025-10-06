## 🚀 turbo-shadcn-boilerplate

**Description**  
Ce projet est une **boilerplate monorepo** bâtie avec Turborepo, conçue pour offrir une structure moderne et modulaire dès le départ. Elle combine une application Next.js avec des packages partagés comme Tailwind CSS et une bibliothèque UI via **shadcn/ui**, facilitant le développement d’UI réutilisables à travers les différents modules.  
Le dépôt est open source (MIT).

---

### 🛠️ Technologies & architecture

- **Turborepo** — orchestration du monorepo, builds parallèles, mise en cache  
- **Next.js** — framework React pour le front-end  
- **TypeScript** — typage statique à travers tout le projet  
- **Tailwind CSS** — pour le style utilitaire partagé entre les paquets  
- **shadcn/ui** — bibliothèque de composants UI réutilisables  
- Structure en packages partagés :
  - `packages/tailwindcss` : configuration Tailwind et styles globaux
  - `packages/ui` : composants UI avec shadcn/ui
  - `apps/web` : application Next.js de démonstration intégrant ces paquets

---

### 💡 Compétences mises en avant

- **Architecture modulaire / monorepo** : conception d’un projet scalable et maintenable  
- **Partage de code & composants** : mise en place de paquets réutilisables entre plusieurs apps  
- **Intégration UI & design system** : usage de Tailwind + shadcn pour créer une cohérence visuelle  
- **Optimisation & performance** : benefit des avantages de Turborepo (caching, builds rapides)  
- **TypeScript + typage strict** : assurance de robustesse et de maintenabilité du code  
- **Expérience développeur** : structure pensée pour faciliter le dev, le partage et l’évolution  

---

### 📁 Lien & licence

- Dépôt GitHub : [ZukaBri3k/turbo-shadcn-boilerplate](https://github.com/ZukaBri3k/turbo-shadcn-boilerplate) 
- Licence : **MIT**

---

> “A modern, scalable monorepo boilerplate built with Turborepo that provides reusable UI components from Shadcn-ui and styling packages for rapid application development.” 

&nbsp;

&nbsp;

## 📖 craftinginterpreters-fr

**Description**  
Ce projet est une **traduction française (incomplète, mais en cours)** du célèbre livre *Crafting Interpreters*, qui explique comment concevoir et implémenter un langage de programmation interprété. Le dépôt regroupe les contenus en Markdown du livre original, ainsi que les implémentations en **C** et **Java** des interprètes *clox* et *jlox*.

La structure du projet inclut aussi un générateur de site statique (via Dart développé par l'auteur) pour assembler le texte et les extraits de code. 

---

### 🛠️ Technologies & architecture

- **Markdown / MD** — pour le texte des chapitres  
- **C & Java** — pour les implémentations des interpréteurs
- **Dart** — pour les scripts de build / transformation du contenu en site statique
- **Make / scripts** — pour automatiser les tâches (génération, tests, affichage local) 
- Structure de dossier organisée :  
  - `book/` : fichiers Markdown des chapitres 
  - `c/` et `java/` : code source des interpréteurs 
  - `site/` : version générée du livre en HTML 
  - `tool/` : scripts Dart pour builder le site 
  - `test/` : suites de tests pour les interpréteurs 

---

### 💡 Compétences mises en avant

- **Traduction & adaptation technique** : compréhension approfondie du contenu technique original + adaptation dans une autre langue  
- **Organisation de contenu / documentation technique** : structuration en chapitres, liaison entre code et texte  
- **Automatisation / génération statique** : usage de scripts pour construire le site à partir du contenu source  
- **Langages systèmes & interprétation** : connaissance des langages C et Java, concepts d’interpréteurs  
- **Gestion de projet open source** : travail progressif, contributions, versioning  
- **Travail collaboratif & évolutif** : le projet est encore en cours, ce qui montre capacité à maintenir et faire évoluer  

---

### 📁 Lien & statut

- Dépôt GitHub : [ZukaBri3k/craftinginterpreters-fr](https://github.com/ZukaBri3k/craftinginterpreters-fr) 
- Statut : traduction en cours, projet non finalisé  

---

> *“Repository of the non official french traduction of the book ‘Crafting Interpreters’”* 

&nbsp;

&nbsp;

## 🪟 portfolio-windows

**Description**  
Ce projet est un **portfolio interactif** dont l’ambition est de reproduire l’interface et l’expérience de **Windows 11** via une application web. L’idée est de transformer l’UI/UX du système d’exploitation en un environnement personnalisé qui héberge les contenus de portfolio (projets, CV, etc.). Le tout est développé en **React** avec **TypeScript** et stylisé via **Tailwind CSS**.  
Le dépôt est disponible sur GitHub.

---

### 🛠️ Technologies & architecture

- **React + TypeScript** — base applicative pour construire l’interface interactive  
- **Tailwind CSS** — pour la mise en forme stylisée, les utilitaires CSS, et la personnalisation visuelle  
- **Composants & gestion d’état** — pour reproduire les fenêtres, menus, animations, interactions système  
- Architecture modulaire (composants réutilisables) pour les éléments UI (barre des tâches, fenêtres, icônes, context menus, etc.)  
- **Routing / navigation interne** — pour changer de “bureau”, ouvrir des modules de portfolio, etc.  
- Optimisations et expériences visuelles : transitions, animations, gestion du focus clavier & souris  

---

### 💡 Compétences mises en avant

- **UI/UX “système d’exploitation”** : capacité à transposer une expérience desktop dans un contexte web  
- **Création de composants complexes** : fenêtres, gestion des z-index, appels modaux, interactions utilisateur  
- **Maîtrise du style utilitaire** : Tailwind pour contrôler précisément l’apparence visuelle  
- **Gestion d’état & navigation** : orchestrer les changements d’écran, de fenêtres, d’ouverture/fermeture  
- **TypeScript & robustesse** : typage fort pour sécuriser les interactions  
- **Optimisation frontend** : performance, transitions fluides, rapidité de rendu  
- **Design & personnalisation** : capacité à “rejouer” une interface familière (Windows) tout en la personnalisant  

---

### 📁 Lien & statut

- Dépôt GitHub : [ZukaBri3k/portfolio-windows](https://github.com/ZukaBri3k/portfolio-windows)  
- Site en ligne : [zukabri3k.github.io/portfolio-windows/](https://zukabri3k.github.io/portfolio-windows/) 

---

> *“The goals of this project is to reproduce Windows 11 interface style using React and TypeScript to make my portfolio.”* 

&nbsp;

&nbsp;

## 🔧 adonis-hexagonal-architecture

**Description**  
Ce projet est une **implémentation d’exemple** de l’architecture hexagonale (Ports & Adapters) utilisant **AdonisJS** en **TypeScript**. L’idée est de structurer une application backend de manière modulable, testable et claire, en séparant la logique métier des détails externes (base de données, frameworks, interfaces web, etc.). Le dépôt sert de référence pour comprendre comment appliquer ce pattern dans le contexte d’Adonis. ([github.com](https://github.com/ZukaBri3k/adonis-hexagonal-architecture))  

---

### 🛠️ Technologies & architecture

- **AdonisJS** — framework web Node.js / TypeScript utilisé comme socle pour le backend  
- **TypeScript** — typage statique pour plus de sécurité et de clarté dans les contrats entre modules  
- **Architecture hexagonale (Ports & Adapters)** — séparation claire entre :
  - les ports (interfaces ou points d’entrée)  
  - les adapters (implémentations concrètes externes)  
- Tests automatisés (présence d’un dossier `tests`) pour valider le comportement des composants métier sans dépendre de l’infrastructure externe. 
- Configuration & outils de développement : ESLint, fichiers de configuration (`tsconfig.json`, etc.) pour la qualité de code.

---

### 💡 Compétences mises en avant

- **Conception de backend robuste** : mise en place d’une architecture maintenable et scalable  
- **Séparation des responsabilités** : capacité à découpler les composants métier des détails techniques externes  
- **Tests & qualité de code** : tests unitaires / fonctionnels pour le cœur métier, bonne configuration d’outils de linting / typage  
- **TypeScript & bonnes pratiques Node.js** : typage, structure de projet claire, configuration sensible (fichiers `.env`, etc.)  
- **Maîtrise de frameworks backend modernes** : utilisation efficace d’AdonisJS pour les controllers, services, infrastructure  

---

### 📁 Lien & statut

- Dépôt GitHub : [ZukaBri3k/adonis-hexagonal-architecture](https://github.com/ZukaBri3k/adonis-hexagonal-architecture) 
- Langage principal : **TypeScript**  
- Statut : démonstration / exemple pédagogique, utilisation possible comme base pour d’autres API  

