
## **Design Philosophy and UX Concept**

- **User-Centric Design**: Finesse frontend is developed with a user-first approach. This design focus ensures a simple and intuitive search experience, enhancing user engagement and making the interface effortlessly accessible for a diverse user base.
- **Overall User Experience Goal**: Our core aim is to facilitate an efficient and streamlined user experience, where users can access information and complete searches with ease. The frontend design of Finesse is driven by this objective, ensuring a seamless and intuitive interaction with the application, thereby enhancing the overall user experience in agency-related searches.

## Finesse React Project Component Structure
### **Component Relationship Diagram**

![FinesseFrontendComponentDiagram](https://github.com/ai-cfia/finesse-frontend/assets/133677161/b7bf92a1-cc24-48a9-8814-30b1b291e4e4)

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

This structure illustrates a separation of concerns between pages (`Home` and `SearchPage`) and shared components, and the encapsulation of state management in context components.

**Details**

- The React application follows a parent-child relationship as shown in the diagram above.
- The diagram illustrates the flow of component props and the location at which components are imported.

---

## **CSS**

- As for CSS and styling, [styled components](https://styled-components.com/) was used.
- Styled components is a library that allows you to write CSS in JS while building custom components in Reactjs.
- Styled components library can be installed via npm with `npm i styled-components`.
- Any component that uses styled components, will import from the `src/components/styles/indexElements.tsx` file.

---
