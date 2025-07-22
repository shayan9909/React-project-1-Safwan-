# Copilot Instructions for AI Coding Agents

## Project Overview
- **Type:** React + Vite SPA
- **Main entry:** `src/main.jsx` (mounts `App.jsx`)
- **Styling:** Tailwind CSS (`tailwind.config.js`, `postcss.config.js`)
- **Build tool:** Vite (`vite.config.js`)
- **Linting:** ESLint (`eslint.config.js`)

## Key Directories & Files
- `src/components/`: Reusable UI components (e.g., `Button.jsx`, `Flex.jsx`, `Container.jsx`)
- `src/assets/`: Static assets (SVGs, images)
- `public/`: Publicly served files (e.g., `vite.svg`)
- `App.jsx`: Main app component, imports and composes other components
- `index.html`: Vite HTML entry point

## Patterns & Conventions
- **Component Props:** Most components accept `children` and `className` for flexible composition and styling (see `Flex.jsx` example).
- **Styling:** Use Tailwind utility classes via `className` prop. Avoid inline styles unless necessary.
- **Component Structure:** Prefer functional components. Keep logic minimal in UI components; lift state up if needed.
- **Imports:** Use relative imports within `src/`.
- **SVGs:** Imported as React components from `src/assets/`.

## Developer Workflows
- **Start Dev Server:**
  ```powershell
  npm run dev
  ```
- **Build for Production:**
  ```powershell
  npm run build
  ```
- **Preview Production Build:**
  ```powershell
  npm run preview
  ```
- **Lint:**
  ```powershell
  npm run lint
  ```

## Integration Points
- **Vite Plugins:** Uses official React plugin for HMR and Fast Refresh.
- **Tailwind:** Configured via `tailwind.config.js` and `postcss.config.js`.
- **ESLint:** Configured in `eslint.config.js` (expand as needed).

## Examples
- **Flexible Layout:**
  ```jsx
  <Flex className="items-center justify-between">
    <Button>Click Me</Button>
    <Images src="..." />
  </Flex>
  ```
- **Component Usage:**
  ```jsx
  <Container>
    <List />
  </Container>
  ```

## Tips for AI Agents
- Follow the Tailwind utility-first approach for styling.
- Compose UI using small, focused components from `src/components/`.
- Reference `App.jsx` for the main app structure and routing (if present).
- Use Vite commands for builds and previews; do not use `react-scripts`.

---
If any conventions or workflows are unclear, ask the user for clarification or examples from their codebase.
