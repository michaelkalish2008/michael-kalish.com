// Server entry, used only at build time by scripts/prerender.js.
//
// The site is a single-page app, so without this the shipped index.html is an
// empty <div id="root"> — anything that reads HTML without running JavaScript
// (link previews, AI tools, most crawlers) sees a blank page. Rendering the app
// to a string once at build time puts the real content in the HTML; the client
// then hydrates it in main.tsx.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.tsx'

export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
