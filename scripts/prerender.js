// Injects the server-rendered app into dist/index.html. Runs after both the
// client build (dist/) and the SSR build of src/entry-server.tsx (dist-ssr/).
import { readFileSync, rmSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const { render } = await import(`${root}dist-ssr/entry-server.js`)

const file = `${root}dist/index.html`
const template = readFileSync(file, 'utf8')
const placeholder = '<div id="root"></div>'
if (!template.includes(placeholder)) {
  throw new Error(`prerender: ${placeholder} not found in dist/index.html`)
}

writeFileSync(file, template.replace(placeholder, `<div id="root">${render()}</div>`))
rmSync(`${root}dist-ssr`, { recursive: true, force: true })
