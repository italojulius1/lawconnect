const steps = [
  {
    number: "01",
    title: "Run one command",
    description: "Drop npx setup-claude into any project directory. That's the whole installation.",
  },
  {
    number: "02",
    title: "Answer three questions",
    description: "Your stack, your team size, your workflow. Takes under a minute.",
  },
  {
    number: "03",
    title: "Start building with Claude",
    description: "Hooks wired. Memory seeded. CLAUDE.md written. Claude Code is ready to go.",
  },
];

const features = [
  {
    title: "Auto-generated CLAUDE.md",
    description: "Project context Claude actually reads — architecture, conventions, and team rules, all in one file.",
  },
  {
    title: "Hooks out of the box",
    description: "Pre- and post-tool-call automation already wired. No manual configuration needed.",
  },
  {
    title: "Memory bootstrapping",
    description: "Persistent context from day one. Claude remembers your preferences across every session.",
  },
  {
    title: "Stack detection",
    description: "Knows it's Next.js. Knows it's Go. Config adapts to your actual project, not a generic template.",
  },
  {
    title: "Workflow templates",
    description: "Proven patterns for code review, testing, commits, and PR descriptions — ready to use immediately.",
  },
  {
    title: "Zero lock-in",
    description: "It's just files. Edit, extend, or delete them anytime. You own the config.",
  },
];

const faqs = [
  {
    q: "What is SetupClaude?",
    a: "SetupClaude is a CLI tool that automatically configures Claude Code for your project. It writes your CLAUDE.md, sets up hooks, seeds memory, and applies best-practice workflows — in about a minute.",
  },
  {
    q: "Does it work with my stack?",
    a: "Yes. SetupClaude detects your stack and applies the right config. Next.js, Python, Go, Rust, Ruby, Java — if Claude Code can help with it, SetupClaude can configure it.",
  },
  {
    q: "Is it free to use?",
    a: "SetupClaude is free to run. You'll need a Claude API key or Claude Code subscription to use Claude itself, but SetupClaude adds no cost on top of that.",
  },
  {
    q: "Will it modify my application code?",
    a: "No. SetupClaude only writes configuration files — CLAUDE.md, .claude/settings.json, and hook scripts. It never touches your source code.",
  },
  {
    q: "Do I need to know how Claude Code works first?",
    a: "No. That's the point. SetupClaude handles the configuration so you can skip the learning curve and start getting value from Claude Code on day one.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white font-sans">

      {/* Nav */}
      <header className="w-full border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-semibold tracking-tight">SetupClaude</span>
          <nav className="flex items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
            <a href="#how-it-works" className="hover:text-zinc-900 dark:hover:text-white transition-colors">How it works</a>
            <a href="#features" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Features</a>
            <a href="#faq" className="hover:text-zinc-900 dark:hover:text-white transition-colors">FAQ</a>
            <a
              href="#get-started"
              className="rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-1.5 text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            >
              Get started
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 dark:bg-violet-950 border border-violet-100 dark:border-violet-900 px-4 py-1.5 text-xs font-medium text-violet-600 dark:text-violet-400 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
          Free to use · No credit card required
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.08] mb-6">
          Stop configuring.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
            Start building.
          </span>
        </h1>

        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
          SetupClaude configures Claude Code for your project automatically — hooks, memory, CLAUDE.md, and best-practice workflows — so you can ship, not tinker.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10" id="get-started">
          <a
            href="#"
            className="rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-3.5 text-sm font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-100 transition-colors shadow-sm"
          >
            Set up my project free
          </a>
          <code className="rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-6 py-3.5 text-sm text-zinc-600 dark:text-zinc-400 font-mono">
            npx setup-claude
          </code>
        </div>

        {/* Social proof */}
        <p className="text-sm text-zinc-400 dark:text-zinc-500">
          Trusted by <span className="font-semibold text-zinc-600 dark:text-zinc-300">2,400+ developers</span> across Next.js, Python, Go, and Rust projects
        </p>
      </section>

      {/* Value Props */}
      <section className="bg-zinc-50 dark:bg-zinc-900/50 border-y border-zinc-100 dark:border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 py-20 grid sm:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Get Claude working the way you work
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Claude Code is powerful, but getting it right takes hours of tinkering. SetupClaude reads your stack, sets the right hooks, writes your CLAUDE.md, and seeds memory — all from a single command. No docs to read. No guesswork.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Best practices, already done
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Every config SetupClaude generates is built from real Claude Code setups. You get the patterns that actually work — code review workflows, commit conventions, test automation hooks — without having to figure them out yourself.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Up and running in three steps</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
            No setup guides. No configuration files to hand-write. Just one command and a few questions.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="text-4xl font-bold text-zinc-100 dark:text-zinc-800 mb-4 font-mono">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-zinc-50 dark:bg-zinc-900/50 border-y border-zinc-100 dark:border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Everything Claude Code needs, already configured</h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
              SetupClaude handles the parts of Claude Code setup that are tedious to get right.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6"
              >
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Common questions</h2>
        </div>

        <div className="divide-y divide-zinc-100 dark:divide-zinc-900">
          {faqs.map((faq) => (
            <div key={faq.q} className="py-6">
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-zinc-100 dark:border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            One command away from a better Claude setup
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto mb-10 leading-relaxed">
            Stop spending time on configuration that should already be done. SetupClaude handles it — free, in under a minute.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-3.5 text-sm font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-100 transition-colors shadow-sm"
            >
              Set up my project free
            </a>
            <a
              href="#"
              className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Read the docs →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 dark:border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 dark:text-zinc-600">
          <span>© {new Date().getFullYear()} SetupClaude. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
