# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with HMR at http://localhost:5173
- `npm run build` - Create production build
- `npm start` - Start production server using built files
- `npm run typecheck` - Run TypeScript type checking and generate React Router types

## Architecture Overview

This is a **React Router v7** application with server-side rendering (SSR) enabled by default. The application uses:

- **React Router v7** for routing and SSR
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** for styling via Vite plugin
- **Vite** as the build tool and dev server

### Key File Structure

- `my-react-router-app/app/routes.ts` - Route configuration using React Router's file-based routing
- `my-react-router-app/app/root.tsx` - Root layout component with error boundary and document structure
- `my-react-router-app/app/routes/` - Individual route components
- `my-react-router-app/app/welcome/` - Welcome page components
- `my-react-router-app/react-router.config.ts` - React Router configuration (SSR enabled)
- `my-react-router-app/vite.config.ts` - Vite configuration with React Router and Tailwind plugins

### Route System
`
Routes are configured in `app/routes.ts` using React Router's programmatic route configuration. The current setup uses:
- `index("routes/home.tsx")` for the root route
- Type-safe route definitions with `+types` pattern for route-specific types

### TypeScript Configuration

- Path aliases: `~/*` maps to `./app/*`
- Includes React Router generated types from `.react-router/types/`
- Strict TypeScript configuration with bundler module resolution

### Styling

TailwindCSS is integrated via `@tailwindcss/vite` plugin and configured in `vite.config.ts`. Global styles are in `app/app.css`.

Use ReactBits library to style some text : https://reactbits.dev
- **Text animations**: https://reactbits.dev/text-animations/ - Collection of React text animation components
- **Text Pressure effect**: https://reactbits.dev/text-animations/text-pressure - Character-by-character reveal with scale and color pressure effects

## Legal References

- **Mentions légales requirements**: https://www.economie.gouv.fr/entreprises/innover-et-numeriser-son-entreprise/mentions-sur-votre-site-internet-les-obligations
  - Official French government guidance for website legal obligations
  - Used as reference for creating the `/mentions-legales` page

## Junior-Entreprise

- **Wikipedia - Junior-Entreprise**: https://fr.wikipedia.org/wiki/Junior-Entreprise
  - French Wikipedia article explaining the Junior-Entreprise concept
- **Confédération Nationale des Junior-Entreprises**: https://junior-entreprises.com
  - Official website of the national confederation of Junior-Entreprises
- **Wikipédia - CNJE**: https://fr.wikipedia.org/wiki/Confédération_nationale_des_Junior-Entreprises

## Deployment

The application supports:
- **Docker deployment** - Uses provided Dockerfile
- **Traditional Node.js deployment** - Deploy the `build/` directory output
- Builds produce `build/client/` (static assets) and `build/server/` (SSR server code)