# Adding a poem

One poem per file, in this directory, named for its slug:

```
src/content/poems/the-quiet-hour.md
```

The filename becomes the poem's `id` and its fallback sort key. Nothing needs to
be registered anywhere — the file appearing here is what adds the sub-tab. Files
whose names start with `_` are not poems: `_intro.md` is the leading tab, and
this file is inert.

## Frontmatter

A `---` delimited block of `key: value` lines at the very top of the file.

| key | | |
|---|---|---|
| `title` | required | sub-tab label and heading |
| `date` | optional | free text, e.g. `Aug 2026` — shown under the title |
| `note` | optional | one line of epigraph or context, rendered in italic |
| `order` | optional | integer, lower sorts first; unset sorts last, by filename |
| `id` | optional | override the filename-derived slug |
| `byline` | optional | e.g. `By Michael Kalish` |
| `image` | optional | path relative to this directory, e.g. `images/alps.png` |
| `imageCaption` | optional | caption shown under the image |

| `copyright` | optional | overrides the standard rights notice for this work |
| `lineBreaks` | optional | `verbatim` (default) or `collapse` — see below |
| `type` | optional | `poem` (default) or `collection` — see below |
| `preface` | collections | heading treated as prose, default `Note from the author` |

## Images

To add one, create an `images/` directory here and point `image:` at the file —
`image: images/alps.png`. Anything in that directory is bundled whether or not a
poem references it, so **resize before adding**: these ship to every visitor who
opens the tab. Original-resolution sources belong in `raw-assets/` at the project
root, which is gitignored and never bundled.

**You never need to add a copyright line to a poem.** A rights notice is
rendered under every work automatically, from `DEFAULT_COPYRIGHT` in
`src/poems.ts`. Set `copyright:` only when one work needs different wording.

## `lineBreaks`

`verbatim` (the default) takes the body exactly as typed — blank lines are
stanza breaks.

`collapse` is for bodies exported from a word processor, where every verse line
ended up separated by a blank line. It treats a run of one blank line as a line
break and removes it, and a run of two or more as a stanza break. Use it only
when the file actually looks that way; on a hand-written poem it would eat your
stanzas.

## Collections

A `type: collection` file is a chapbook rather than a single poem. Its `#`
headings delimit the poems inside it, and it renders as one tab: image, byline,
preface, a **generated** index, then the poems in sequence.

The index is built from the headings, so it cannot drift from the contents —
don't hand-write a table of contents, and delete one if the export includes it.
Anything before the first `#` heading is ignored, so a title page can be deleted
too; `title`, `byline`, and `image` in the frontmatter cover it.

Heading noise from an export is cleaned automatically: `# **Awake** {#awake}`
becomes `Awake`.

Values run to the end of the line. No quotes, no escapes — a value may itself
contain colons, because only the first colon separates key from value. Lines
starting with `#` are ignored, so you can leave notes to yourself in the block.

Because unset `order` sorts *last*, adding a poem without thinking about
ordering appends it rather than silently landing it in the middle.

## The body

Everything after the closing `---` is the poem, taken **verbatim**. Line breaks,
indentation, and stanza spacing are preserved exactly as typed; only leading and
trailing blank lines are trimmed.

Nothing is passed through a markdown renderer — deliberately. Markdown collapses
single newlines into spaces, which is the one structure a poem cannot afford to
lose. The practical upshot: `*`, `#`, `_`, `>` and backticks are just characters
here. Use them freely, and don't expect `**bold**` to do anything.

## A complete example

```
---
title: The Quiet Hour
date: Aug 2026
note: after a line of Bishop's
order: 1
---

The first stanza starts here,
    with whatever indentation it wants.

The second follows a blank line.
```

## Where this is rendered

`src/poems.ts` globs this directory with Vite's `import.meta.glob(..., '?raw')`,
parses the frontmatter, and exports `poetryIntro` and `poems`. The `Poetry()`
section in `src/App.tsx` renders them. Poems are inlined into the bundle at build
time, so there is no fetch at runtime and no build step to remember.
