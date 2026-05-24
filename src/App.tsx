import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { Mail, Globe, Code, ExternalLink, Menu, X } from 'lucide-react'

const HI_URL = 'https://www.ai-interpretability.com'
const HI_RESULTS_URL = 'https://www.ai-interpretability.com/results'
const HI_PAPER_URL = 'https://www.ai-interpretability.com/writing'

// ─── Fade-up animation variant ───────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Monogram */}
        <a href="#" className="text-xl font-bold text-amber-400 tracking-tight select-none">
          MK
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-slate-300 hover:text-white transition-colors"
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
      {/* Dark gradient overlay — heavier at bottom, lighter at top */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(2,6,23,0.65) 0%, rgba(2,6,23,0.82) 60%, rgba(2,6,23,0.97) 100%)',
        }}
        aria-hidden="true"
      />
      {/* Subtle indigo glow — kept for color accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(99,102,241,0.10) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          className="text-xs font-semibold tracking-[0.2em] text-slate-500 mb-6 uppercase"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Senior Applied Scientist · AI Enablement · Interpretability
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="text-white">Building AI at scale.</span>
          <br />
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Researching how to understand it.
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          I lead AI initiatives at Uber — from RAG-based production systems to
          educational infrastructure for 1,000+ data scientists — and do
          independent research on what language models are actually doing when
          they generate text.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href={HI_RESULTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors duration-200 text-sm"
          >
            Explore the Research →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium transition-colors duration-200 text-sm"
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
          <p className="text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase mb-4">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
            An unusual path to AI.
          </h2>
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              I started with philosophy, psychology, and history at UCSB, then
              earned a single-subject teaching credential in mathematics. That
              combination — thinking rigorously about systems, explaining complex
              ideas to skeptical audiences — turned out to be the right
              foundation for applied AI.
            </p>
            <p>
              Along the way, I co-won Food Network's{' '}
              <em className="text-slate-300">Great Food Truck Race</em> (Series
              7), was a finalist on{' '}
              <em className="text-slate-300">Chopped</em>, and appeared on
              Netflix's <em className="text-slate-300">You Are What You Eat</em>
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
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {highlights.map(h => (
              <motion.div
                key={h.label}
                variants={fadeUp}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5 flex flex-col gap-1"
              >
                <span className="text-white font-semibold text-sm">{h.label}</span>
                <span className="text-slate-500 text-xs leading-snug">{h.sub}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Entropy bar visual ───────────────────────────────────────────────────────
function EntropyBar() {
  // Simulated entropy trace across generation steps
  const bars = [
    0.4, 0.55, 0.7, 0.85, 0.6, 0.45, 0.9, 0.75, 0.5, 0.65,
    0.8, 0.35, 0.6, 0.95, 0.7, 0.55, 0.4, 0.75, 0.88, 0.5,
    0.62, 0.78, 0.42, 0.68, 0.82, 0.56, 0.44, 0.72, 0.66, 0.58,
  ]
  return (
    <div className="flex items-end gap-[3px] h-20 px-1">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-sm"
          style={{
            height: `${h * 100}%`,
            background: `rgba(99,102,241,${0.4 + h * 0.6})`,
          }}
          initial={{ scaleY: 0, originY: 1 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.02, ease: 'easeOut' }}
        />
      ))}
    </div>
  )
}

// ─── Work ─────────────────────────────────────────────────────────────────────
function Work() {
  const tags1 = ['HuggingFace', 'PyTorch', 'Shannon Entropy', 'Nucleus Fraction', 'DistilBERT', 'GPT-2', 'Gemma']
  const tags2 = ['LangChain', 'LLMs', 'Python', 'Education']
  const tags3 = ['RAG', 'LangGraph', 'Agentic AI', 'NLP', 'SQL']

  return (
    <section id="work" className="py-28 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase mb-4">
            Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Selected Projects
          </h2>
        </motion.div>

        {/* Featured card — Horizonal Interpretability */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative rounded-2xl border border-indigo-500/30 bg-slate-900 p-8 md:p-10 mb-8 overflow-hidden"
          style={{
            boxShadow: '0 0 60px rgba(99,102,241,0.08), 0 0 0 1px rgba(99,102,241,0.15)',
          }}
        >
          {/* Subtle indigo glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(circle at top right, rgba(99,102,241,0.12) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-start">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3">
                Research · Open Source
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">
                Horizonal Interpretability Framework
              </h3>
              <a
                href={HI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors mb-4"
              >
                <Globe size={11} />
                ai-interpretability.com
              </a>
              <p className="text-slate-400 text-sm font-medium mb-4">
                Reading the behavioral surface of language models — not their weights.
              </p>
              <p className="text-slate-400 leading-relaxed mb-2 text-sm md:text-base">
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
                    className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300"
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors duration-200"
                >
                  Explore Results →
                </a>
                <a
                  href={HI_PAPER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-indigo-500/40 hover:border-indigo-400 text-indigo-300 hover:text-indigo-200 text-sm font-medium transition-colors duration-200"
                >
                  Read the Paper →
                </a>
                <a
                  href="https://github.com/michaelkalish2008/horizonal-interpretability"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200"
                >
                  <Code size={15} />
                  GitHub
                </a>
              </div>
            </div>

            {/* Entropy visualization */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                Entropy trace · sample generation
              </p>
              <div className="rounded-xl bg-slate-950/60 border border-slate-800 p-4">
                <EntropyBar />
              </div>
              <p className="text-xs text-slate-600">
                Each bar = one generation step. Height ≈ output entropy at that token position.
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
            className="rounded-2xl border border-slate-800 bg-slate-900 p-7 flex flex-col"
          >
            <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">
              Production · Uber
            </span>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
              AI Enablement Infrastructure
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
              Built and maintain the DS/AI educational onboarding resource used
              by 1,000+ data scientists across Uber. Led cross-functional teams
              delivering end-to-end MVPs for AI automation across Ethics,
              Compliance, and Security.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {tags2.map(t => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400"
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
            className="rounded-2xl border border-slate-800 bg-slate-900 p-7 flex flex-col"
          >
            <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">
              Production · Uber
            </span>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
              RAG-Based Legal Intelligence
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
              Lead data scientist for cross-functional team (Engineers, Legal
              SMEs, Community Ops) building and deploying RAG-based agentic
              solutions for global support ticket labeling and trending insights
              for Uber's Legal team.
            </p>
            <div className="flex flex-wrap gap-2">
              {tags3.map(t => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400"
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
  'Philosophy of AI': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  'Critical Reading': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Technical':        'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  'Orientation':      'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
}

function Writing() {
  return (
    <section id="writing" className="py-28 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-10"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase mb-4">
            Writing
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Philosophy of AI
            </h2>
            <a
              href="https://readysetgo.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors shrink-0 pb-1 no-underline"
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
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: (i % 2) * 0.08 } } }}
              className="group rounded-xl border border-slate-800 bg-slate-900 hover:border-slate-700 p-5 flex flex-col gap-3 transition-colors no-underline"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full border ${tagColors[article.tag] ?? tagColors['Technical']}`}>
                    {article.tag}
                  </span>
                  {article.date && (
                    <span className="text-xs text-slate-600">{article.date}</span>
                  )}
                </div>
                <ExternalLink size={13} className="text-slate-700 group-hover:text-slate-500 transition-colors shrink-0 mt-0.5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors leading-snug mb-1">
                  {article.title}
                </h3>
                {article.subtitle && (
                  <p className="text-xs text-slate-600 italic">{article.subtitle}</p>
                )}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{article.description}</p>
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
          <p className="text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase mb-6">
            Speaking
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-indigo-500/40 pl-5">
              <p className="text-white font-semibold mb-1">Legal Innovators California</p>
              <p className="text-slate-500 text-xs mb-2">Keynote · June 2025</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                "Building and Deploying RAG-Based Agentic Workflows for Legal
                Support Ticket Labeling." Non-technical audience.
              </p>
            </div>
            <div className="border-l-2 border-slate-700 pl-5">
              <p className="text-white font-semibold mb-1">Uber Tech Talks</p>
              <p className="text-slate-500 text-xs mb-2">Internal · Ongoing</p>
              <p className="text-slate-400 text-sm leading-relaxed">
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
          <p className="text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase mb-6">
            Writing &amp; Media
          </p>
          <div className="space-y-5">
            <div className="rounded-xl border border-indigo-500/25 bg-indigo-500/5 p-4">
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <p className="text-white text-sm font-semibold">Philosophy of AI — Substack</p>
                  <a
                    href="https://readysetgo.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 text-xs hover:text-indigo-300 transition-colors no-underline"
                  >
                    readysetgo.substack.com →
                  </a>
                </div>
                <ExternalLink size={14} className="text-indigo-500 shrink-0 mt-0.5" />
              </div>
              <ul className="space-y-1.5">
                {[
                  'Transformer Architecture and the Limits of Propositional Assumptions',
                  'Language & Vector Space: What Merleau-Ponty Reveals About LLMs',
                  'LLMs and Critical Thinking: An Inauthentic Phenomenon for Authentic Discovery',
                ].map(title => (
                  <li key={title} className="flex items-start gap-1.5">
                    <span className="text-indigo-500/60 mt-1 shrink-0 text-[10px]">◆</span>
                    <span className="text-slate-400 text-xs leading-snug">{title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs text-amber-400 font-semibold tracking-widest uppercase mb-2">
                Netflix
              </p>
              <p className="text-white text-sm font-medium">You Are What You Eat</p>
              <p className="text-slate-500 text-xs">January 2025</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs text-amber-400 font-semibold tracking-widest uppercase mb-2">
                Food Network
              </p>
              <p className="text-white text-sm font-medium">Great Food Truck Race</p>
              <p className="text-slate-500 text-xs">Series 7 · Co-winner</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs text-amber-400 font-semibold tracking-widest uppercase mb-2">
                Food Network
              </p>
              <p className="text-white text-sm font-medium">Chopped</p>
              <p className="text-slate-500 text-xs">Co-finalist · Twins for the Win</p>
            </div>
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
      className="py-28 px-6 border-t border-slate-800 bg-slate-900/20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Let's work together.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            I'm open to research collaborations, speaking engagements, and
            advisory conversations around AI enablement and interpretability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:mtkalish@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors duration-200"
            >
              <Mail size={16} />
              mtkalish@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/michael-fsg/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              <Globe size={16} />
              LinkedIn
            </a>
            <a
              href="https://github.com/michaelkalish2008"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              <Code size={16} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600 text-xs">
        <span>© 2026 Michael Kalish</span>
        <a
          href="https://readysetgo.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-400 transition-colors no-underline"
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
    <div className="min-h-screen bg-[#020617] text-slate-200">
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
