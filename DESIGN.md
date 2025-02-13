# Design documentation

([*Le français est disponible au bas de la
page*](#documentation-de-conception))

## Design Philosophy and UX Concept

Refer to our comprehensive [Design and UX Philosophy
documentation](https://github.com/ai-cfia/dev-rel-docs/blob/91-document-design-philosophy-and-ux-concept/Design-UX/DESIGN-UX-PHILOSOPHY.md)
for a detailed guide on our approach to standardizing frontend development
practices across the CFIA AI Lab's projects.

The Design and UX Philosophy emphasizes a user-centric approach, ensuring that
the applications we develop are intuitive, accessible, and efficient. This
philosophy aligns with our commitment to providing an exceptional user
experience, where the needs and preferences of users are at the forefront of
every design decision.

## Benefits of Using Styled Components over Traditional CSS

1. **Component-Level Styling:** Styled Components enable defining styles at the
   component level, enhancing modularity and reusability. This encapsulation
   ensures styles remain confined to their respective components.
2. **Dynamic Styling:** Easily pass props to dynamically alter styles with
   Styled Components, offering greater flexibility and control over component
   appearance.
3. **Reduced Naming Conflicts:** Styled Components generate unique class names,
   significantly reducing the risk of naming conflicts in a large codebase.
4. **Easier Deletion of Unused Styles:** Deleting a component also removes its
   associated styles, preventing the accumulation of unused CSS.
5. **Improved Developer Experience:** Styled Components integrate with modern
   development tools, providing features like syntax highlighting and style
   linting, thus enhancing the overall development process.

## Finesse React Project Component Structure

### Component Relationship Diagram

Below is the visual representation of the Finesse Frontend component structure:

![Finesse Frontend Component
Diagram](https://github.com/ai-cfia/finesse-frontend/assets/133677161/b7bf92a1-cc24-48a9-8814-30b1b291e4e4)

For a detailed view and interactive experience with the diagram, visit the
[Finesse Component Diagram on
Lucidchart](https://lucid.app/lucidchart/ae5c689e-25cb-4679-bb5f-aa509955a50f/edit?invitationId=inv_d4b29dba-3c6a-4c79-921e-fae853739ed4&page=0_0#).

### Root (`src` Folder)

- The root source folder branches into two main parts:
  - `App.tsx`
  - `contexts` (folder)

### App Component (`App.tsx`)

- Serves as the entry point, branching out to:
  - `Home.tsx`
  - `SearchPage.tsx`

### Home Page (`Home.tsx`)

- Utilizes several shared components:
  - `Header.tsx`
  - `DebugPanel.tsx`
  - `CFIALogo.tsx`
  - `SearchBar.tsx`
- Has a unique component:
  - `AlertBanner.tsx`

### Search Page (`SearchPage.tsx`)

- Also uses shared components:
  - `Header.tsx`
  - `DebugPanel.tsx`
  - `CFIALogo.tsx`
  - `SearchBar.tsx`
- Exclusive components:
  - `SearchResultList.tsx`
  - `HighlightedContent.tsx`

### Contexts (Folder)

- Contains three context components:
  - `AlertContext.tsx`
  - `DataContext.tsx`
  - `LayoutContext.tsx`

This structure illustrates a separation of concerns between pages (`Home` and
`SearchPage`) and shared components, and the encapsulation of state management
in context components.

## **Details**

- The React application follows a parent-child relationship as shown in the
  diagram above.
- The diagram illustrates the flow of component props and the location at which
  components are imported.

---

## **Styled Components**

- As for CSS and styling, [styled components](https://styled-components.com/)
  was used.
- Styled components is a library that allows you to write CSS in JS while
  building custom components in Reactjs.
- Styled components library can be installed via npm with `npm i
  styled-components`.
- Any component that uses styled components, will import from the
  `src/components/styles/indexElements.tsx` file.

### Why Choose Styled Components?

The decision to adopt Styled Components is rooted in the desire to address the
complexities and limitations of traditional CSS, especially in large-scale and
dynamic application environments. Styled Components offer a solution that
couples the visual design directly with the component logic, resulting in a more
cohesive development process. This approach not only streamlines the styling of
applications but also aligns with the modern trends of component-based
architecture, promoting better maintainability and scalability.

For a detailed explanation and the rationale behind this decision, refer to our
ADR on [Styling with Styled
Components](https://github.com/ai-cfia/dev-rel-docs/blob/37a0ec5cfb23e6e156f908b4ddde09a489cf40e5/adr/009-styling-with-styled-components.md).

### Contrast with Alternatives

While traditional CSS is familiar and straightforward, it often leads to
challenges like global scope, naming conflicts, and difficulties in maintaining
a large codebase. Other CSS-in-JS solutions offer similar benefits to Styled
Components but may lack the comprehensive feature set, developer tooling
support, and community backing that Styled Components provide.

By choosing Styled Components, we leverage a robust and community-endorsed
framework that integrates seamlessly with the React ecosystem, offering a
future-proof solution for our styling needs.

---

## Documentation de conception

## Philosophie de conception et UX

Consultez notre [documentation complète sur la Philosophie de Conception et UX](https://github.com/ai-cfia/dev-rel-docs/blob/91-document-design-philosophy-and-ux-concept/Design-UX/DESIGN-UX-PHILOSOPHY.md) pour un guide détaillé de notre approche visant à standardiser les pratiques de développement frontend dans les projets du labo d'IA de l'ACIA.

La Philosophie de Conception et UX met l'accent sur une approche centrée sur l'utilisateur, garantissant que les applications que nous développons soient intuitives, accessibles et efficaces. Cette philosophie reflète notre engagement à offrir une expérience utilisateur exceptionnelle, où les besoins et les préférences des utilisateurs sont au cœur de chaque décision de conception.

## Avantages des Styled Components par rapport au CSS traditionnel

1. **Styling au niveau des composants :** Les Styled Components permettent de définir des styles au niveau des composants, renforçant la modularité et la réutilisabilité. Cette encapsulation garantit que les styles restent confinés à leurs composants respectifs.
2. **Styling dynamique :** Les Styled Components permettent de modifier facilement les styles en fonction des props, offrant une plus grande flexibilité et un meilleur contrôle sur l'apparence des composants.
3. **Réduction des conflits de noms :** Les Styled Components génèrent des noms de classes uniques, réduisant considérablement le risque de conflits dans un codebase important.
4. **Suppression facile des styles inutilisés :** Supprimer un composant entraîne également la suppression de ses styles associés, évitant l'accumulation de CSS inutilisé.
5. **Amélioration de l'expérience développeur :** Styled Components s'intègre aux outils modernes de développement, offrant des fonctionnalités comme la coloration syntaxique et le linting des styles, améliorant ainsi le processus de développement global.

## Structure des composants

### Diagramme des relations entre les composants

Voici une représentation visuelle de la structure des composants du frontend de Finesse :

![Diagramme des Composants Frontend de Finesse](https://github.com/ai-cfia/finesse-frontend/assets/133677161/b7bf92a1-cc24-48a9-8814-30b1b291e4e4)

### Racine (Dossier `src`)

- Le dossier source racine se divise en deux parties principales :
  - `App.tsx`
  - `contexts` (dossier)

### Composant App (`App.tsx`)

- Sert de point d'entrée, se ramifiant vers :
  - `Home.tsx`
  - `SearchPage.tsx`

### Page d'accueil (`Home.tsx`)

- Utilise plusieurs composants partagés :
  - `Header.tsx`
  - `DebugPanel.tsx`
  - `CFIALogo.tsx`
  - `SearchBar.tsx`
- Contient un composant unique :
  - `AlertBanner.tsx`

### Page de recherche (`SearchPage.tsx`)

- Utilise également des composants partagés :
  - `Header.tsx`
  - `DebugPanel.tsx`
  - `CFIALogo.tsx`
  - `SearchBar.tsx`
- Contient des composants exclusifs :
  - `SearchResultList.tsx`
  - `HighlightedContent.tsx`

### Contexts (Dossier)

- Contient trois composants de contexte :
  - `AlertContext.tsx`
  - `DataContext.tsx`
  - `LayoutContext.tsx`

Cette structure illustre une séparation des préoccupations entre les pages (`Home` et `SearchPage`) et les composants partagés, ainsi que l'encapsulation de la gestion d'état dans les composants de contexte.

---

## **Styled Components**

- En ce qui concerne le CSS et le stylisme, nous utilisons [Styled Components](https://styled-components.com/).
- Styled Components est une bibliothèque permettant d’écrire du CSS en JS tout en construisant des composants personnalisés dans Reactjs.
- La bibliothèque Styled Components peut être installée via npm avec `npm i styled-components`.
- Tout composant utilisant Styled Components importe depuis le fichier `src/components/styles/indexElements.tsx`.

### Pourquoi choisir Styled Components ?

Le choix de Styled Components repose sur le besoin d’aborder les complexités et les limites du CSS traditionnel, en particulier dans des environnements applicatifs à grande échelle et dynamiques. Styled Components offrent une solution qui associe le design visuel directement à la logique des composants, résultant en un processus de développement plus cohérent. Cette approche simplifie le stylisme des applications et s’aligne sur les tendances modernes d’architecture basée sur les composants, favorisant une meilleure maintenabilité et évolutivité.

Pour une explication détaillée et les raisons de ce choix, consultez notre ADR sur le [stylisme avec Styled Components](https://github.com/ai-cfia/dev-rel-docs/blob/37a0ec5cfb23e6e156f908b4ddde09a489cf40e5/adr/009-styling-with-styled-components.md).

### Comparaison avec les alternatives

Bien que le CSS traditionnel soit familier et simple, il engendre souvent des défis tels que la portée globale, les conflits de noms et les difficultés de maintenance d’un grand codebase. D'autres solutions CSS-in-JS offrent des avantages similaires à Styled Components, mais peuvent manquer des fonctionnalités complètes, du support des outils de développement et du soutien de la communauté que propose Styled Components.

En choisissant Styled Components, nous profitons d’un framework robuste et soutenu par la communauté, qui s’intègre parfaitement à l’écosystème React, offrant une solution pérenne pour nos besoins en stylisme.
