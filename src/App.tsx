import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { Mail, Globe, Code, ExternalLink, Menu, X } from 'lucide-react'

const HI_URL = 'https://www.ai-interpretability.com'
const HI_RESULTS_URL = 'https://www.ai-interpretability.com/results'
const HI_PAPER_URL = 'https://www.ai-interpretability.com/writing'

// ─── Fade-up animation variant ───────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Writing', href: '#writing' },
    { label: 'Speaking', href: '#speaking' },
    { label: 'Contact', href: '#contact' },
  ]
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/85 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Monogram */}
        <a href="#" className="text-sm font-bold text-cyan-400 tracking-widest select-none uppercase">
          MK
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-zinc-500 hover:text-zinc-200"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0a0a0a]">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Backdrop photo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/backdrop.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
        aria-hidden="true"
      />
      {/* Charcoal gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.88) 60%, rgba(10,10,10,0.98) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          className="text-xs font-semibold tracking-[0.25em] text-zinc-600 mb-6 uppercase"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Senior Applied Scientist · AI Enablement · Interpretability
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-zinc-100">Building AI at scale.</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
            Researching how to understand it.
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
        >
          I lead AI initiatives at Uber — from RAG-based production systems to
          educational infrastructure for 1,000+ data scientists — and do
          independent research on what language models are actually doing when
          they generate text.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <a
            href={HI_RESULTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-colors duration-200 text-sm"
          >
            Explore the Research →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 hover:border-white/20 text-zinc-400 hover:text-zinc-200 font-medium transition-colors duration-200 text-sm"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  const highlights = [
    { label: 'UC Berkeley MIDS', sub: 'May 2025' },
    { label: '#OneUber Award', sub: 'Finalist · 2025' },
    { label: '3× Food / Media', sub: 'Netflix · Food Network · Chopped' },
    { label: 'Keynote Speaker', sub: 'Legal Innovators CA · 2025' },
  ]

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left: text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase mb-4">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-8">
            An unusual path to AI.
          </h2>
          <div className="space-y-5 text-zinc-400 leading-relaxed">
            <p>
              I started with philosophy, psychology, and history at UCSB, then
              earned a single-subject teaching credential in mathematics. That
              combination — thinking rigorously about systems, explaining complex
              ideas to skeptical audiences — turned out to be the right
              foundation for applied AI.
            </p>
            <p>
              Along the way, I co-won Food Network's{' '}
              <em className="text-zinc-300">Great Food Truck Race</em> (Series
              7), was a finalist on{' '}
              <em className="text-zinc-300">Chopped</em>, and appeared on
              Netflix's <em className="text-zinc-300">You Are What You Eat</em>
              . I mention this not as a non-sequitur but because it shaped how I
              communicate: making technical work legible to any audience is a
              skill, and I've had unusually good training in it.
            </p>
            <p>
              Today I lead AI and data science work at Uber across ethics,
              compliance, legal, and security — building RAG-based agentic
              systems, NLP/ML pipelines, and the educational infrastructure that
              helps 1,000+ Uber data scientists work with AI effectively. I also
              do independent research on language model interpretability: what
              probability distributions reveal about model behavior that weights
              alone cannot.
            </p>
          </div>
        </motion.div>

        {/* Right: photo + highlight cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col gap-4"
        >
          <img
            src="/profile.jpg"
            alt="Michael Kalish"
            className="w-1/2 mx-auto rounded-2xl object-contain"
          />
          <motion.div
            className="grid grid-cols-2 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {highlights.map(h => (
              <motion.div
                key={h.label}
                variants={fadeUp}
                className="rounded-xl border border-white/[0.06] bg-[#111111] p-5 flex flex-col gap-1"
              >
                <span className="text-zinc-200 font-semibold text-sm">{h.label}</span>
                <span className="text-zinc-600 text-xs leading-snug">{h.sub}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Einstein trace ───────────────────────────────────────────────────────────
// Real GPT-2 teacher-forced values for "Albert Einstein won the Nobel Prize
// for his theory of relativity". nucleus = p90 nucleus size in tokens.
// "his" = divergence point (model wanted "Physics" at 56%);
// "relativity" = confident-wrong (75% probability, but factually incorrect).
const EINSTEIN = [
  { word: 'Albert',     bits: 0.00,   nucleus: 1,    risk: 'confident'    },
  { word: 'Einstein',  bits: 10.995, nucleus: 2047, risk: 'uncertain'    },
  { word: 'won',        bits: 7.316,  nucleus: 159,  risk: 'uncertain'    },
  { word: 'the',        bits: 4.190,  nucleus: 18,   risk: 'uncertain'    },
  { word: 'Nobel',      bits: 0.678,  nucleus: 1,    risk: 'confident'    },
  { word: 'Prize',      bits: 1.144,  nucleus: 3,    risk: 'confident'    },
  { word: 'for',        bits: 1.825,  nucleus: 2,    risk: 'uncertain'    },
  { word: 'his',        bits: 2.901,  nucleus: 12,   risk: 'hallucination'},
  { word: 'theory',     bits: 6.069,  nucleus: 75,   risk: 'uncertain'    },
  { word: 'of',         bits: 0.866,  nucleus: 2,    risk: 'confident'    },
  { word: 'relativity', bits: 1.813,  nucleus: 4,    risk: 'hallucination'},
] as const

type Risk = 'confident' | 'uncertain' | 'hallucination'

const RISK_BAR: Record<Risk, string> = {
  confident:     'bg-cyan-500',
  uncertain:     'bg-amber-500',
  hallucination: 'bg-rose-500',
}
const RISK_LABEL: Record<Risk, string> = {
  confident:     'text-zinc-500',
  uncertain:     'text-amber-600/80',
  hallucination: 'text-rose-500',
}

function EinsteinTrace() {
  const maxBits = 10.995
  const maxNucleus = 2047

  return (
    <div className="space-y-3">
      {/* Entropy bars + labels */}
      <div>
        <div className="flex items-end gap-[3px] h-16">
          {EINSTEIN.map((t, i) => (
            <motion.div
              key={i}
              className={`flex-1 rounded-sm ${RISK_BAR[t.risk]}`}
              style={{
                height: `${Math.max(2, (t.bits / maxBits) * 100)}%`,
                opacity: 0.55 + (t.bits / maxBits) * 0.45,
              }}
              initial={{ scaleY: 0, originY: 1 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04, ease: 'easeOut' }}
            />
          ))}
        </div>
        <div className="flex gap-[3px] mt-1">
          {EINSTEIN.map((t, i) => (
            <div key={i} className="flex-1 overflow-hidden">
              <span className={`block text-center text-[7px] leading-tight truncate ${RISK_LABEL[t.risk]}`}>
                {t.word}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Nucleus fraction row */}
      <div>
        <p className="text-[8px] text-zinc-700 uppercase tracking-widest mb-1">
          p90 nucleus — tokens needed to cover 90% of probability mass
        </p>
        <div className="flex items-end gap-[3px] h-6">
          {EINSTEIN.map((t, i) => (
            <motion.div
              key={i}
              className={`flex-1 rounded-sm ${RISK_BAR[t.risk]}`}
              style={{
                height: `${Math.max(4, (t.nucleus / maxNucleus) * 100)}%`,
                opacity: 0.35 + (t.nucleus / maxNucleus) * 0.5,
              }}
              initial={{ scaleY: 0, originY: 1 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.45 + i * 0.04, ease: 'easeOut' }}
            />
          ))}
        </div>
        <div className="flex gap-[3px] mt-0.5">
          {EINSTEIN.map((t, i) => (
            <div key={i} className="flex-1 overflow-hidden">
              <span className={`block text-center text-[7px] font-mono leading-tight ${
                t.nucleus === 1 ? 'text-cyan-500' : t.nucleus > 100 ? 'text-rose-500/70' : 'text-zinc-600'
              }`}>
                {t.nucleus > 999 ? '2k' : t.nucleus}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 pt-1 border-t border-white/5">
        {(['confident', 'uncertain', 'hallucination'] as Risk[]).map(r => (
          <div key={r} className="flex items-center gap-1">
            <div className={`w-2 h-2 rounded-sm ${RISK_BAR[r]} opacity-70`} />
            <span className="text-[8px] text-zinc-600">{r}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Work ─────────────────────────────────────────────────────────────────────
function Work() {
  const tags1 = ['HuggingFace', 'PyTorch', 'Shannon Entropy', 'Nucleus Fraction', 'DistilBERT', 'GPT-2', 'Gemma']
  const tags2 = ['LangChain', 'LLMs', 'Python', 'Education']
  const tags3 = ['RAG', 'LangGraph', 'Agentic AI', 'NLP', 'SQL']

  return (
    <section id="work" className="py-28 px-6 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase mb-4">
            Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
            Selected Projects
          </h2>
        </motion.div>

        {/* Featured card — Horizonal Interpretability */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative rounded-2xl border border-cyan-500/15 bg-[#111111] p-8 md:p-10 mb-8 overflow-hidden"
        >
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-start">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">
                Research · Open Source
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-1 tracking-tight">
                Horizonal Interpretability Framework
              </h3>
              <a
                href={HI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
              >
                <Globe size={11} />
                ai-interpretability.com
              </a>
              <p className="text-zinc-400 text-sm font-medium mb-4">
                Reading the behavioral surface of language models — not their weights.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-2 text-sm md:text-base">
                HIF characterizes a model as a function from prompts to output distributions
                and measures that function systematically — across five metrics, eight prompt
                regimes, and three models (GPT-2 Small, GPT-2 Medium, Gemma 3 1B IT). Every
                metric is entropy, derived from entropy, or computed by comparing two entropy
                traces: Volatility · Dispersion · Sensitivity · Stability · Goldilocks. Per-step
                nucleus fraction tracks what share of the vocabulary the model needed at each
                generation step — a direct concentration percentile. Extends to closed models
                via surrogate scaffold. Full paper and interactive results published at the site.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {tags1.map(t => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-cyan-500/8 border border-cyan-500/15 text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                <a
                  href={HI_RESULTS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium transition-colors duration-200"
                >
                  Explore Results →
                </a>
                <a
                  href={HI_PAPER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-cyan-500/30 hover:border-cyan-400/60 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200"
                >
                  Read the Paper →
                </a>
                <a
                  href="https://github.com/michaelkalish2008/horizonal-interpretability"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 hover:border-white/20 text-zinc-400 hover:text-zinc-200 text-sm font-medium transition-colors duration-200"
                >
                  <Code size={15} />
                  GitHub
                </a>
              </div>
            </div>

            {/* Einstein trace visualization */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold tracking-widest text-zinc-600 uppercase">
                Live analysis · GPT-2 · teacher-forced
              </p>
              <div className="rounded-xl bg-[#0a0a0a] border border-white/5 p-4">
                <EinsteinTrace />
              </div>
              <p className="text-xs text-zinc-700 leading-relaxed">
                <span className="text-rose-500/80">Rose</span> = hallucination token.
                {' '}<span className="text-zinc-400">"his"</span> — model predicted "Physics" at 56%, forced to "his" at 2.7%.
                {' '}<span className="text-zinc-400">"relativity"</span> — 75% confidence, factually wrong.
                {' '}Bottom row: p90 nucleus size in tokens — how many the model needed to cover 90% of its probability mass.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Two smaller cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 — AI Enablement */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-2xl border border-white/[0.06] bg-[#111111] p-7 flex flex-col"
          >
            <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">
              Production · Uber
            </span>
            <h3 className="text-xl font-bold text-zinc-100 mb-3 tracking-tight">
              AI Enablement Infrastructure
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-1">
              Built and maintain the DS/AI educational onboarding resource used
              by 1,000+ data scientists across Uber. Led cross-functional teams
              delivering end-to-end MVPs for AI automation across Ethics,
              Compliance, and Security.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {tags2.map(t => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-[#1a1a1a] border border-white/[0.06] text-zinc-500"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              #OneUber Award Finalist · 2025
            </div>
          </motion.div>

          {/* Card 2 — RAG Legal */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-2xl border border-white/[0.06] bg-[#111111] p-7 flex flex-col"
          >
            <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">
              Production · Uber
            </span>
            <h3 className="text-xl font-bold text-zinc-100 mb-3 tracking-tight">
              RAG-Based Intelligence Platform
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-1">
              Lead data scientist for cross-functional team (Engineers, SMEs,
              Community Ops) building and deploying RAG-based agentic solutions
              for global support ticket labeling and trending insights at Uber.
            </p>
            <div className="flex flex-wrap gap-2">
              {tags3.map(t => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-[#1a1a1a] border border-white/[0.06] text-zinc-500"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Writing ──────────────────────────────────────────────────────────────────
const writingArticles = [
  {
    title: 'Transformer Architecture and the Limits of Propositional Assumptions',
    subtitle: 'A phenomenological interpretation',
    date: 'Jan 2026',
    tag: 'Philosophy of AI',
    description: 'Why transformer architecture succeeds precisely by rejecting propositional logic — and why language was already a compression of high-dimensional being-in-the-world before LLMs arrived.',
    url: 'https://readysetgo.substack.com/p/against-atomism',
  },
  {
    title: 'Language & Vector Space: What Merleau-Ponty Reveals About LLMs',
    subtitle: 'An existential phenomenology perspective',
    date: 'Jun 2025',
    tag: 'Philosophy of AI',
    description: "Merleau-Ponty's account of perception explains what the numbers in vector space actually represent — meaning-vectors as vortices, not points — and why hallucinations are structural, not accidental.",
    url: 'https://readysetgo.substack.com/p/language-vector-space-what-merleau-ponty-reveals-about-llms-2b18aef32c72',
  },
  {
    title: 'LLMs and Critical Thinking: An Inauthentic Phenomenon for Authentic Discovery',
    subtitle: 'An existential phenomenological perspective',
    date: 'May 2025',
    tag: 'Philosophy of AI',
    description: "Heidegger's They, they-self, and falling applied to LLMs. The model is a personified derivative of the anonymous They — and how we interact with it determines whether we fall further in, or find a path out.",
    url: 'https://readysetgo.substack.com/p/llms-and-critical-thinking-an-inauthentic-phenomenon-for-authentic-discovery-f2d473e2d033',
  },
  {
    title: 'A Review of "Why Language Models Hallucinate" (OpenAI)',
    subtitle: 'A thought-provoking paper with significant caveats',
    date: 'Sep 2025',
    tag: 'Critical Reading',
    description: "What the paper gets right (evaluation frameworks penalizing \"I don't know\" reinforce hallucination), what it gets wrong (the IIV threshold assumption), and what it leaves unexplained.",
    url: 'https://readysetgo.substack.com/p/a-review-of-why-language-models-hallucinate',
  },
  {
    title: 'A High-Level, Step-by-Step Overview of "Attention Is All You Need"',
    subtitle: 'A technical foundation',
    date: 'Jun 2025',
    tag: 'Technical',
    description: 'A semi-technical walkthrough of transformer architecture — tokenization, embeddings, positional encodings, multi-head attention, and the Goldilocks problem.',
    url: 'https://readysetgo.substack.com/p/a-high-level-step-by-step-overview-of-attention-is-all-you-need-a857b747329c',
  },
  {
    title: 'Read This Before Learning Data Science',
    subtitle: '',
    date: '',
    tag: 'Orientation',
    description: 'An orienting perspective before diving into the technical and philosophical deep end of machine learning.',
    url: 'https://readysetgo.substack.com/p/read-this-before-learning-data-science',
  },
]

const tagColors: Record<string, string> = {
  'Philosophy of AI': 'bg-sky-500/8 text-sky-400 border-sky-500/15',
  'Critical Reading': 'bg-amber-500/8 text-amber-400 border-amber-500/15',
  'Technical':        'bg-cyan-500/8 text-cyan-400 border-cyan-500/15',
  'Orientation':      'bg-emerald-500/8 text-emerald-400 border-emerald-500/15',
}

function Writing() {
  return (
    <section id="writing" className="py-28 px-6 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-10"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase mb-4">
            Writing
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
              Philosophy of AI
            </h2>
            <a
              href="https://readysetgo.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors shrink-0 pb-1 no-underline"
            >
              <ExternalLink size={12} />
              Follow on Substack
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {writingArticles.map((article, i) => (
            <motion.a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: (i % 2) * 0.07 } } }}
              className="group rounded-xl border border-white/[0.06] bg-[#111111] hover:border-white/[0.12] p-5 flex flex-col gap-3 transition-colors no-underline"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full border ${tagColors[article.tag] ?? tagColors['Technical']}`}>
                    {article.tag}
                  </span>
                  {article.date && (
                    <span className="text-xs text-zinc-700">{article.date}</span>
                  )}
                </div>
                <ExternalLink size={13} className="text-zinc-800 group-hover:text-zinc-500 transition-colors shrink-0 mt-0.5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-300 group-hover:text-zinc-100 transition-colors leading-snug mb-1">
                  {article.title}
                </h3>
                {article.subtitle && (
                  <p className="text-xs text-zinc-700 italic">{article.subtitle}</p>
                )}
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">{article.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Speaking & Writing ───────────────────────────────────────────────────────
function Speaking() {
  return (
    <section id="speaking" className="py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Speaking column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase mb-6">
            Speaking
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-cyan-500/30 pl-5">
              <p className="text-zinc-100 font-semibold mb-1">Legal Innovators California</p>
              <p className="text-zinc-600 text-xs mb-2">Keynote · June 2025</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                "Building and Deploying RAG-Based Agentic Workflows for Legal
                Support Ticket Labeling." Non-technical audience.
              </p>
            </div>
            <div className="border-l-2 border-white/[0.08] pl-5">
              <p className="text-zinc-100 font-semibold mb-1">Uber Tech Talks</p>
              <p className="text-zinc-600 text-xs mb-2">Internal · Ongoing</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Internal thought leadership and guest speaker for Senior
                Directors' organizations on AI strategy and enablement.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Writing & Media column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase mb-6">
            Writing &amp; Media
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-cyan-500/15 bg-cyan-500/[0.04] p-4">
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <p className="text-zinc-100 text-sm font-semibold">Philosophy of AI — Substack</p>
                  <a
                    href="https://readysetgo.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-xs hover:text-cyan-300 transition-colors no-underline"
                  >
                    readysetgo.substack.com →
                  </a>
                </div>
                <ExternalLink size={14} className="text-cyan-600 shrink-0 mt-0.5" />
              </div>
              <ul className="space-y-1.5">
                {[
                  'Transformer Architecture and the Limits of Propositional Assumptions',
                  'Language & Vector Space: What Merleau-Ponty Reveals About LLMs',
                  'LLMs and Critical Thinking: An Inauthentic Phenomenon for Authentic Discovery',
                ].map(title => (
                  <li key={title} className="flex items-start gap-1.5">
                    <span className="text-cyan-500/50 mt-1 shrink-0 text-[10px]">◆</span>
                    <span className="text-zinc-500 text-xs leading-snug">{title}</span>
                  </li>
                ))}
              </ul>
            </div>
            {[
              { network: 'Netflix', title: 'You Are What You Eat', sub: 'January 2025' },
              { network: 'Food Network', title: 'Great Food Truck Race', sub: 'Series 7 · Co-winner' },
              { network: 'Food Network', title: 'Chopped', sub: 'Co-finalist · Twins for the Win' },
            ].map(item => (
              <div key={item.title} className="rounded-xl border border-white/[0.06] bg-[#111111] p-4">
                <p className="text-xs text-amber-400 font-semibold tracking-widest uppercase mb-2">
                  {item.network}
                </p>
                <p className="text-zinc-100 text-sm font-medium">{item.title}</p>
                <p className="text-zinc-600 text-xs">{item.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 border-t border-white/5 bg-[#0c0c0c]"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4">
            Let's work together.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-10">
            I'm open to research collaborations, speaking engagements, and
            advisory conversations around AI enablement and interpretability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:mtkalish@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium transition-colors duration-200"
            >
              <Mail size={16} />
              mtkalish@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/michael-fsg/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/10 hover:border-white/20 text-zinc-400 hover:text-zinc-200 text-sm font-medium transition-colors duration-200"
            >
              <Globe size={16} />
              LinkedIn
            </a>
            <a
              href="https://github.com/michaelkalish2008"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/10 hover:border-white/20 text-zinc-400 hover:text-zinc-200 text-sm font-medium transition-colors duration-200"
            >
              <Code size={16} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-700 text-xs">
        <span>© 2026 Michael Kalish</span>
        <a
          href="https://readysetgo.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-400 transition-colors no-underline"
        >
          readysetgo.substack.com →
        </a>
      </div>
    </section>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-200">
      <Nav />
      <main className="pt-16">
        <Hero />
        <About />
        <Work />
        <Writing />
        <Speaking />
        <Contact />
      </main>
    </div>
  )
}
