# AI Coding Guidelines for Admin-Seguros

## Architecture Overview
This is a full-stack insurance management app with React frontend and Node.js/Express backend. Frontend handles UI and auth, backend provides REST API with mock data.

- **Frontend**: React + Vite, state-based routing (no React Router), localStorage auth
- **Backend**: Express with ES modules, MVC pattern (routers → controllers → models → mock data)
- **Data**: In-memory mock database in `backend/src/data/mock.js`

## Key Conventions
- **File Naming**: Mix of CamelCase (ClienteController.js) and lowercase (polizasmodel.js). Prefer consistent naming.
- **Imports**: Use ES modules (`import/export`). Controllers import from `../models/[name].model.js`, routers from `../controllers/[name].controller.js`
- **API Responses**: Controllers return `{ok: true, data}` for success, `{ok: false, message}` for errors
- **Styling**: CSS modules in `frontend/src/styles/` with base/, components/, pages/ subfolders. Import in components as `../styles/pages/home.css`
- **Auth**: Mock login at `/api/login` with hardcoded credentials (codigo: "1234", password: "1234")

## Workflows
- **Development**: Run `npm run dev` from root (starts both frontend on :5173 and backend on :3000 concurrently)
- **Backend Dev**: `npm run dev` in backend/ (nodemon index.js, but note: index.js is minimal; main app logic in src/app.js)
- **Frontend Dev**: `npm run dev` in frontend/ (Vite dev server)
- **Build**: `npm run build` in frontend/ for production

## Common Patterns
- **Backend Routes**: Define in `src/router/`, e.g., `router.get("/", getClientes)` importing from controllers
- **Models**: Filter mockDB arrays, e.g., `mockDB.clientes.filter(c => c.nombre.includes(q))`
- **Frontend Components**: Functional components with props, useState for local state, no hooks beyond useState/useEffect
- **Navigation**: Pass `setCurrentPage` prop to change views (e.g., "home", "login", "carteraCliente")

## Gotchas
- Import paths inconsistent: some use `mock.db.js` (wrong), should be `mock.js`
- Backend entry: index.js has basic setup; src/app.js has full routes but isn't used in scripts
- CORS configured for localhost:5173 in backend

## Examples
- Add client endpoint: Create `getClientes` in ClienteController.js, route in ClienteRouter.js, model in ClienteModel.js
- New page: Add to App.jsx switch, create in pages/, style in styles/pages/</content>
<parameter name="filePath">c:\Users\cuatr\OneDrive\Documentos\admin-seguros-main\.github\copilot-instructions.md