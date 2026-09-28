import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// A production build ships prerendered HTML (see src/entry-server.tsx), which
// is hydrated in place; the dev server ships an empty root, which is rendered.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
