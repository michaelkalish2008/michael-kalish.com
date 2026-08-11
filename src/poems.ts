// Poetry content loader.
//
// Poems are authored as markdown, one work per file, in src/content/poems/.
// Drop a new .md file in that directory and it appears as a sub-tab — there is
// nothing to register here and no build step to run. Vite inlines each file's
// raw text at build time, so the poems ship in the bundle rather than being
// fetched.
//
// A file is either a single poem (the default) or a `type: collection` — a
// chapbook whose `#` headings delimit the poems inside it. A collection keeps
// its identity as one file, which matters because these arrive as one export
// from a word processor and get re-dropped after edits.
//
// The body is taken verbatim by default: line breaks and indentation are
// preserved exactly as typed, and nothing is passed through a markdown renderer.
// Markdown would collapse single newlines into spaces, which is the one
// structure a poem cannot afford to lose.
//
// Frontmatter is a `---` delimited block of `key: value` lines at the very top
// of the file. See src/content/poems/_README.md for the full key reference.

// Rendered under every work automatically, so a rights line never has to be
// typed into a poem file (and so it cannot go missing from one). A `copyright:`
// key in a file's frontmatter overrides it for that work.
//
// This notice is not what creates the copyright — that exists from the moment
// the poem is fixed in a file, with or without a line saying so. What the notice
// does is remove an infringer's "I didn't know" defence, which is why it is
// worth having on the page even though it is not legally required.
export const DEFAULT_COPYRIGHT =
  '© Michael Kalish. All rights reserved. No part of this work may be reproduced, ' +
  'distributed, or sold in any form without the written permission of the author.'

export type Section = {
  id: string       // anchor slug, derived from the heading
  title: string
  text: string
  isPreface: boolean // prose, rendered above the index rather than listed in it
}

export type Poem = {
  id: string           // slug from the filename; stable across edits to the title
  title: string        // sub-tab label and heading
  date?: string        // optional, e.g. 'Aug 2026'
  note?: string        // optional one-line epigraph or context, rendered italic
  order?: number       // optional sort key; lower sorts first
  byline?: string      // optional, e.g. 'By Michael Kalish'
  image?: string       // optional resolved URL for a plate above the work
  imageCaption?: string
  copyright: string    // rights notice; DEFAULT_COPYRIGHT unless overridden
  text: string         // the work itself — empty for a collection
  sections: Section[]  // the poems inside a collection; empty for a single poem
}

type Frontmatter = Record<string, string>

/**
 * Split a `---` delimited frontmatter block off the top of a file.
 *
 * Values are taken literally to the end of the line — no quoting, no escapes,
 * no nesting. A value may itself contain colons (`note: after all: this`),
 * because only the first colon separates key from value. A file with no
 * frontmatter is returned whole as the body.
 */
function parseFrontmatter(raw: string): { data: Frontmatter; body: string } {
  const text = raw.replace(/\r\n/g, '\n')
  if (!text.startsWith('---\n')) return { data: {}, body: text }

  const end = text.indexOf('\n---', 3)
  if (end === -1) return { data: {}, body: text }

  const block = text.slice(4, end)
  // Body starts after the closing `---` and its newline.
  const afterClose = text.indexOf('\n', end + 1)
  const body = afterClose === -1 ? '' : text.slice(afterClose + 1)

  const data: Frontmatter = {}
  for (const line of block.split('\n')) {
    if (!line.trim() || line.trimStart().startsWith('#')) continue
    const colon = line.indexOf(':')
    if (colon === -1) continue
    const key = line.slice(0, colon).trim()
    const value = line.slice(colon + 1).trim()
    if (key) data[key] = value
  }
  return { data, body }
}

/** Trim leading and trailing blank lines without touching internal whitespace. */
function trimBlankLines(s: string): string {
  return s.replace(/^\n+/, '').replace(/\n+$/, '')
}

/**
 * `lineBreaks: collapse` — for bodies exported from a word processor, where
 * every verse line was separated by a blank line.
 *
 * A run of one blank line is a line break and is removed; a run of two or more
 * is a stanza break and becomes a single blank line. Trailing whitespace goes,
 * leading indentation stays. Applied only when the frontmatter asks for it:
 * a hand-written file uses blank lines for stanzas and must not be touched.
 */
function collapseBlankLines(s: string): string {
  const lines = s.split('\n').map(l => l.replace(/[ \t]+$/, ''))
  const out: string[] = []
  let blanks = 0
  for (const line of lines) {
    if (line.trim() === '') { blanks++; continue }
    if (out.length > 0 && blanks >= 2) out.push('')  // stanza break
    blanks = 0
    out.push(line)
  }
  return out.join('\n')
}

/** `# **Note from the author** {#note-from-the-author}` → `Note from the author` */
function cleanHeading(h: string): string {
  return h
    .replace(/\{#[^}]*\}\s*$/, '')  // trailing explicit-anchor attribute
    .replace(/\*\*/g, '')            // bold markers the export wrapped it in
    .replace(/\s+/g, ' ')
    .trim()
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Split a collection body on its `#` headings.
 *
 * Anything before the first heading is dropped — in an exported chapbook that
 * is the title page and table of contents, both of which are reproduced from
 * frontmatter and generated navigation instead.
 */
function splitSections(body: string, prefaceTitle: string): Section[] {
  const lines = body.split('\n')
  const sections: Section[] = []
  let current: { title: string; lines: string[] } | null = null

  for (const line of lines) {
    const heading = /^#{1,6}\s+(.*)$/.exec(line)
    if (heading) {
      if (current) sections.push(finish(current))
      current = { title: cleanHeading(heading[1]), lines: [] }
    } else if (current) {
      current.lines.push(line)
    }
  }
  if (current) sections.push(finish(current))

  function finish(s: { title: string; lines: string[] }): Section {
    return {
      id: slugify(s.title),
      title: s.title,
      text: s.lines.join('\n'),
      isPreface: prefaceTitle !== '' && s.title.toLowerCase() === prefaceTitle.toLowerCase(),
    }
  }

  return sections
}

/** `.../poems/the-quiet-hour.md` → `the-quiet-hour` */
function slugFromPath(path: string): string {
  return path.split('/').pop()!.replace(/\.md$/, '')
}

// `_README.md` is authoring documentation for this directory — excluded so it
// does not ride along in the bundle to every visitor. `_intro.md` is content and
// stays.
const files = import.meta.glob<string>(
  ['./content/poems/*.md', '!./content/poems/_README.md'],
  { query: '?raw', import: 'default', eager: true },
)

// Images referenced by an `image:` key. Vite hashes and copies each one and
// hands back its final URL, so the frontmatter can name a repo-relative path
// (`images/alps.png`) without knowing anything about the build.
const images = import.meta.glob<string>('./content/poems/images/*', {
  query: '?url',
  import: 'default',
  eager: true,
})

function resolveImage(ref: string | undefined): string | undefined {
  if (!ref) return undefined
  const key = `./content/poems/${ref.replace(/^\.?\//, '')}`
  return images[key]
}

// ── Intro ─────────────────────────────────────────────────────────────────────
// `_intro.md` is the leading tab, not a poem. The underscore keeps it out of the
// poem list without needing a `type:` key in every other file.

const INTRO_PATH = './content/poems/_intro.md'
const introParsed = parseFrontmatter(files[INTRO_PATH] ?? '')

export const poetryIntro = {
  label: introParsed.data.label || 'On Poetry',
  body: trimBlankLines(introParsed.body),
}

// ── Poems ─────────────────────────────────────────────────────────────────────
// Sorted by `order` when present, then by filename. Files without `order` sort
// after those with one, so adding a poem without thinking about ordering appends
// it rather than silently landing it in the middle.

export const poems: Poem[] = Object.entries(files)
  .filter(([path]) => !slugFromPath(path).startsWith('_'))
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw)
    const id = data.id || slugFromPath(path)
    const parsedOrder = data.order === undefined ? NaN : Number(data.order)
    const collapse = data.lineBreaks === 'collapse'
    const isCollection = data.type === 'collection'
    // The preface is prose, and its blank lines separate paragraphs rather than
    // verse lines — so it is exempt from `collapse`, which would run the
    // paragraphs together. Sections are split from the raw body and shaped
    // individually for that reason.
    const shape = (s: string) => trimBlankLines(collapse ? collapseBlankLines(s) : s)

    return {
      id,
      title: data.title || id,
      date: data.date || undefined,
      note: data.note || undefined,
      order: Number.isFinite(parsedOrder) ? parsedOrder : undefined,
      byline: data.byline || undefined,
      image: resolveImage(data.image),
      imageCaption: data.imageCaption || undefined,
      copyright: data.copyright || DEFAULT_COPYRIGHT,
      text: isCollection ? '' : shape(body),
      sections: isCollection
        ? splitSections(body, data.preface ?? 'Note from the author').map(s => ({
            ...s,
            text: s.isPreface ? trimBlankLines(s.text) : shape(s.text),
          }))
        : [],
      _path: path,
    }
  })
  .sort((a, b) => {
    const ao = a.order ?? Infinity
    const bo = b.order ?? Infinity
    if (ao !== bo) return ao - bo
    return a._path.localeCompare(b._path)
  })
  .map(({ _path, ...poem }) => {
    void _path
    return poem
  })
