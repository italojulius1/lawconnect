"use client";

import { useState } from "react";
import { funnelStages, cities, practiceAreas, seoGrid, growthInitiatives, socialAds, semAds, pageComparison, aiFlowSteps, seoOpportunities, currentCommsAudit, proposedSequences, ninetyDayPlan } from "./data";

type Section = "plan" | "campaign" | "funnel" | "seo" | "email" | "matrix";

const NAV: { id: Section; label: string; description: string }[] = [
  { id: "plan", label: "90-Day Plan", description: "First 90 days if I join" },
  { id: "campaign", label: "Campaign Flow", description: "AI hook · ads · page mockups" },
  { id: "funnel", label: "Funnel CRO", description: "Stage-by-stage analysis" },
  { id: "seo", label: "SEO Gap Map", description: "City × practice area coverage" },
  { id: "email", label: "Email & SMS", description: "Current gaps + full sequence" },
  { id: "matrix", label: "Growth Matrix", description: "Impact vs effort priorities" },
];

const EFFORT_COLORS: Record<string, string> = {
  Low: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950 dark:text-emerald-400",
  Medium: "text-amber-600 bg-amber-50 dark:bg-amber-950 dark:text-amber-400",
  High: "text-red-600 bg-red-50 dark:bg-red-950 dark:text-red-400",
};

const STATUS_CONFIG = {
  exists: { label: "Live", bg: "bg-emerald-100 dark:bg-emerald-900/40", text: "text-emerald-700 dark:text-emerald-400", dot: "bg-emerald-500" },
  opportunity: { label: "Gap — High Volume", bg: "bg-amber-100 dark:bg-amber-900/40", text: "text-amber-700 dark:text-amber-400", dot: "bg-amber-500" },
  gap: { label: "Gap", bg: "bg-zinc-100 dark:bg-zinc-800", text: "text-zinc-500 dark:text-zinc-400", dot: "bg-zinc-300 dark:bg-zinc-600" },
};

function StageScreen({ type }: { type: string }) {
  if (type === "landing-before") return (
    <div className="bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden text-xs">
      <div className="bg-zinc-50 dark:bg-zinc-900 px-3 py-2 flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800">
        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-500" /><span className="font-semibold text-zinc-600 dark:text-zinc-300">LawConnect</span></div>
        <div className="flex gap-2 text-zinc-400 text-[10px]"><span>Find a Lawyer</span><span>How it works</span></div>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-1"><span className="text-yellow-400">★★★★★</span><span className="text-zinc-400 text-[10px]">4.8 · 35,858 reviews</span></div>
        <p className="font-bold text-zinc-800 dark:text-zinc-100 text-sm leading-snug">Find trusted lawyers across Australia</p>
        <p className="text-zinc-500 text-[10px] leading-relaxed">Tell us about your situation, and we'll match you with a lawyer suited to your needs.</p>
        <div className="flex gap-2">
          <div className="flex-1 rounded-lg bg-blue-600 text-white text-[10px] font-semibold text-center py-1.5">Find a lawyer</div>
          <div className="flex-1 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-500 text-[10px] font-medium text-center py-1.5">Ask a question</div>
        </div>
      </div>
    </div>
  );

  if (type === "landing-after") return (
    <div className="bg-white dark:bg-zinc-950 rounded-xl border-2 border-violet-300 dark:border-violet-700 overflow-hidden text-xs">
      <div className="bg-violet-50 dark:bg-violet-950/40 px-3 py-2 flex items-center justify-between border-b border-violet-100 dark:border-violet-900">
        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-violet-500" /><span className="font-semibold text-zinc-600 dark:text-zinc-300">LawConnect</span></div>
        <div className="flex gap-2 text-zinc-400 text-[10px]"><span>Find a Lawyer</span><span>How it works</span></div>
      </div>
      <div className="p-4 space-y-3">
        <div className="inline-flex items-center gap-1 rounded-full bg-violet-50 dark:bg-violet-950 border border-violet-100 dark:border-violet-900 px-2 py-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500" /><span className="text-[10px] text-violet-600 dark:text-violet-400">Free · No sign-up needed</span>
        </div>
        <p className="font-bold text-zinc-800 dark:text-zinc-100 text-sm leading-snug">Understand your rights before you call a lawyer.</p>
        <p className="text-zinc-500 text-[10px] leading-relaxed">Ask our free AI any legal question. Get a plain-English answer in minutes.</p>
        <div className="rounded-lg bg-violet-600 text-white text-[10px] font-semibold text-center py-1.5">Ask the AI — it's free</div>
        <p className="text-center text-[10px] text-zinc-400">or <span className="underline">browse lawyers</span></p>
        <div className="flex items-center justify-center gap-1"><span className="text-yellow-400 text-[10px]">★★★★★</span><span className="text-zinc-400 text-[10px]">4.8 · 35,858 people helped</span></div>
      </div>
    </div>
  );

  if (type === "engage-before") return (
    <div className="bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden text-xs">
      <div className="bg-zinc-50 dark:bg-zinc-900 px-3 py-2 border-b border-zinc-100 dark:border-zinc-800 text-[10px] text-zinc-400">LawConnect AI Assistant</div>
      <div className="p-4 space-y-3">
        <div className="rounded-lg bg-blue-50 dark:bg-blue-950/30 px-3 py-2 text-blue-700 dark:text-blue-300 text-[10px]">Hi! I'm LawConnect's AI. What's your legal question?</div>
        <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 px-3 py-3 text-zinc-300 dark:text-zinc-600 text-[10px] h-12">Type your legal question here...</div>
        <div className="rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-400 text-[10px] font-medium text-center py-1.5">Send</div>
      </div>
    </div>
  );

  if (type === "engage-after") return (
    <div className="bg-white dark:bg-zinc-950 rounded-xl border-2 border-violet-300 dark:border-violet-700 overflow-hidden text-xs">
      <div className="bg-violet-50 dark:bg-violet-950/40 px-3 py-2 border-b border-violet-100 dark:border-violet-900 flex items-center justify-between">
        <span className="text-[10px] text-violet-600 dark:text-violet-400 font-medium">LawConnect AI</span>
        <span className="text-[10px] text-zinc-400">~2 min to your report</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="rounded-lg bg-violet-50 dark:bg-violet-950/30 px-3 py-2 text-violet-700 dark:text-violet-300 text-[10px]">What area does your question relate to?</div>
        <div className="flex flex-wrap gap-1.5">
          {["Family", "Employment", "Property", "Criminal", "Business", "Immigration"].map(a => (
            <span key={a} className="rounded-full border border-zinc-200 dark:border-zinc-700 px-2 py-0.5 text-[10px] text-zinc-600 dark:text-zinc-400 cursor-pointer hover:border-violet-400">{a}</span>
          ))}
        </div>
        <div className="rounded-lg border-2 border-violet-300 dark:border-violet-700 px-3 py-2 text-zinc-500 text-[10px] h-10">e.g. My landlord is keeping my deposit, what are my rights?</div>
        <div className="rounded-lg bg-violet-600 text-white text-[10px] font-semibold text-center py-1.5">Get my free answer →</div>
      </div>
    </div>
  );

  if (type === "report-before") return (
    <div className="bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden text-xs">
      <div className="bg-zinc-50 dark:bg-zinc-900 px-3 py-2 border-b border-zinc-100 dark:border-zinc-800 text-[10px] text-zinc-400">Your Legal Report</div>
      <div className="p-4 space-y-2">
        <p className="font-semibold text-zinc-700 dark:text-zinc-200 text-[11px]">Summary of your matter</p>
        <div className="space-y-1.5">
          {[80, 95, 70, 85, 60].map((w, i) => (
            <div key={i} className={`h-2 rounded bg-zinc-100 dark:bg-zinc-800`} style={{ width: `${w}%` }} />
          ))}
        </div>
        <p className="font-semibold text-zinc-700 dark:text-zinc-200 text-[11px] pt-2">Your legal rights</p>
        <div className="space-y-1.5">
          {[90, 75, 65].map((w, i) => (
            <div key={i} className="h-2 rounded bg-zinc-100 dark:bg-zinc-800" style={{ width: `${w}%` }} />
          ))}
        </div>
        <p className="text-zinc-300 dark:text-zinc-600 text-[10px] italic pt-2">... scroll for more ...</p>
        <div className="mt-2 rounded-lg bg-blue-600 text-white text-[10px] font-semibold text-center py-1.5">Find a lawyer</div>
      </div>
    </div>
  );

  if (type === "report-after") return (
    <div className="bg-white dark:bg-zinc-950 rounded-xl border-2 border-violet-300 dark:border-violet-700 overflow-hidden text-xs">
      <div className="bg-violet-50 dark:bg-violet-950/40 px-3 py-2 border-b border-violet-100 dark:border-violet-900 text-[10px] text-violet-600 dark:text-violet-400 font-medium">Your Legal Report</div>
      <div className="p-4 space-y-2">
        <div className="rounded-lg bg-violet-600 text-white text-[10px] font-semibold px-3 py-2 flex items-center justify-between">
          <span>What should I do next?</span><span>→</span>
        </div>
        <div className="rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 px-2 py-1.5 text-[10px] text-amber-700 dark:text-amber-400">4 lawyers in Sydney available for this matter</div>
        <p className="font-semibold text-zinc-700 dark:text-zinc-200 text-[11px] pt-1">Summary of your matter</p>
        <div className="space-y-1.5">
          {[80, 95, 70].map((w, i) => (
            <div key={i} className="h-2 rounded bg-zinc-100 dark:bg-zinc-800" style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="rounded-lg border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/20 p-2 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-violet-300 dark:bg-violet-700 shrink-0" />
          <div><p className="text-[10px] font-semibold text-zinc-700 dark:text-zinc-200">Sarah M. — Family Law</p><p className="text-[9px] text-zinc-400">★★★★★ 4.9 · 142 reviews</p></div>
          <div className="ml-auto text-[10px] text-violet-600 dark:text-violet-400 font-semibold">Connect</div>
        </div>
      </div>
    </div>
  );

  if (type === "convert-before") return (
    <div className="bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden text-xs">
      <div className="bg-zinc-50 dark:bg-zinc-900 px-3 py-2 border-b border-zinc-100 dark:border-zinc-800 text-[10px] text-zinc-400">Contact lawyer</div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-700" />
          <div><p className="text-[10px] font-semibold text-zinc-700 dark:text-zinc-200">Michael T.</p><p className="text-[9px] text-zinc-400">Family Law Specialist</p></div>
        </div>
        <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 px-3 py-2 text-zinc-300 dark:text-zinc-600 text-[10px] h-14">Write your message...</div>
        <div className="rounded-lg bg-blue-600 text-white text-[10px] font-semibold text-center py-1.5">Send message</div>
      </div>
    </div>
  );

  if (type === "convert-after") return (
    <div className="bg-white dark:bg-zinc-950 rounded-xl border-2 border-violet-300 dark:border-violet-700 overflow-hidden text-xs">
      <div className="bg-violet-50 dark:bg-violet-950/40 px-3 py-2 border-b border-violet-100 dark:border-violet-900 text-[10px] text-violet-600 dark:text-violet-400 font-medium">Contact lawyer</div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-violet-200 dark:bg-violet-800" />
          <div><p className="text-[10px] font-semibold text-zinc-700 dark:text-zinc-200">Michael T. — Family Law</p><p className="text-[9px] text-zinc-400">★★★★★ 4.9 · Responds in ~2 hrs</p></div>
        </div>
        <div className="rounded-lg border-2 border-violet-200 dark:border-violet-800 px-3 py-2 text-zinc-600 dark:text-zinc-400 text-[10px] h-14 leading-relaxed">Hi Michael, I have a family law matter regarding property settlement after separation. I've received a LawConnect report and would like to discuss my options...</div>
        <div className="rounded-lg bg-violet-600 text-white text-[10px] font-semibold text-center py-1.5">Send message</div>
        <p className="text-center text-[10px] text-zinc-400">No obligation — Michael will reach out to you first</p>
      </div>
    </div>
  );

  return null;
}

function FunnelSection() {
  const [activeStage, setActiveStage] = useState(0);
  const stage = funnelStages[activeStage];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Consumer Funnel — CRO Analysis</h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">
          4-stage breakdown with before/after mockups, friction analysis, and A/B test hypotheses for each step.
        </p>
      </div>

      {/* Stage selector */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
        {funnelStages.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActiveStage(i)}
            className={`flex-shrink-0 rounded-xl px-4 py-3 text-left transition-colors border ${
              activeStage === i
                ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-transparent"
                : "border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900"
            }`}
          >
            <div className={`text-xs font-mono mb-0.5 ${activeStage === i ? "text-zinc-400 dark:text-zinc-600" : "text-zinc-300 dark:text-zinc-700"}`}>{s.stage}</div>
            <div className="text-sm font-semibold">{s.name}</div>
          </button>
        ))}
      </div>

      {/* Stage content */}
      <div className="space-y-6">
        {/* Description */}
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{stage.description}</p>

        {/* Before / After mockups */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">Before</span>
            </div>
            <StageScreen type={stage.before.screen.type} />
            <div className="mt-2 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900 px-3 py-2">
              <p className="text-xs text-red-600 dark:text-red-400">{stage.before.issue}</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">After</span>
            </div>
            <StageScreen type={stage.after.screen.type} />
            <div className="mt-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900 px-3 py-2">
              <p className="text-xs text-emerald-600 dark:text-emerald-400">{stage.after.fix}</p>
            </div>
          </div>
        </div>

        {/* Friction */}
        <div className="rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900 px-4 py-3">
          <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-1">Why Users Drop Off</p>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">{stage.friction}</p>
        </div>

        {/* A/B Tests */}
        <div>
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">A/B Test Hypotheses</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {stage.tests.map((test, i) => (
              <div key={i} className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4">
                <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3 leading-relaxed">{test.hypothesis}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">{test.expectedLift}</span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${EFFORT_COLORS[test.effort]}`}>{test.effort} effort</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Win */}
        <div className="flex items-start gap-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 px-4 py-3">
          <span className="text-emerald-500 mt-0.5 text-sm">✓</span>
          <div>
            <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-0.5">Quick Win</p>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">{stage.quickWin}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SEOSection() {
  const [selectedOpp, setSelectedOpp] = useState(0);
  const existing = Object.values(seoGrid).flatMap(Object.values).filter((s) => s === "exists").length;
  const opportunities = Object.values(seoGrid).flatMap(Object.values).filter((s) => s === "opportunity").length;
  const gaps = Object.values(seoGrid).flatMap(Object.values).filter((s) => s === "gap").length;
  const total = cities.length * practiceAreas.length;
  const opp = seoOpportunities[selectedOpp];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Programmatic SEO — Coverage Map</h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">
          LawConnect URL structure: <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">/en-au/find/[practice-area]/[state]/[city]</code>.
          Every gap is a missing page for a real, high-intent search query.
        </p>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Live pages", value: existing, color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900" },
          { label: "Priority gaps", value: opportunities, color: "text-amber-600", bg: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900" },
          { label: "Total gaps", value: gaps, color: "text-zinc-500", bg: "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800" },
        ].map((stat) => (
          <div key={stat.label} className={`rounded-2xl border p-4 text-center ${stat.bg}`}>
            <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr>
              <th className="text-left p-2 text-zinc-400 font-medium w-24">City</th>
              {practiceAreas.map((area) => (
                <th key={area} className="p-2 text-zinc-400 font-medium text-center min-w-[80px] leading-tight">{area}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cities.map((city) => (
              <tr key={city} className="border-t border-zinc-100 dark:border-zinc-900">
                <td className="p-2 font-semibold text-zinc-700 dark:text-zinc-300">{city}</td>
                {practiceAreas.map((area) => {
                  const status = seoGrid[city][area];
                  const config = STATUS_CONFIG[status];
                  const isOpp = status === "opportunity";
                  return (
                    <td key={area} className="p-1.5 text-center">
                      <span className={`inline-flex items-center justify-center rounded-lg px-2 py-1 text-xs font-medium ${config.bg} ${config.text}`}>
                        <span className={`w-1.5 h-1.5 rounded-full mr-1 ${config.dot}`} />
                        {status === "exists" ? "Live" : isOpp ? "★ Gap" : "Gap"}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-xs text-zinc-500">
        <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Live page</div>
        <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500" /> ★ Priority gap — high search volume</div>
        <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-600" /> Gap</div>
      </div>

      {/* Priority gaps deep-dive */}
      <div className="mt-10">
        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Priority Gaps — Why They Matter</p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-5">
          These 5 combinations represent the highest-value missing pages — strong search volume, high-fee matters, and no existing LawConnect competition. Click each to see the opportunity and a page structure example.
        </p>

        {/* Selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {seoOpportunities.map((o, i) => (
            <button
              key={i}
              onClick={() => setSelectedOpp(i)}
              className={`rounded-xl px-3 py-2 text-xs font-medium border transition-colors ${
                selectedOpp === i
                  ? "bg-amber-500 text-white border-transparent"
                  : "border-amber-200 dark:border-amber-900 text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30"
              }`}
            >
              {o.city} — {o.area}
            </button>
          ))}
        </div>

        {/* Detail card */}
        <div className="grid sm:grid-cols-2 gap-5">
          {/* Why valued */}
          <div className="rounded-2xl border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/20 p-5">
            <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-3">Why This Gap Is Valuable</p>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">{opp.whyValued}</p>
            <div>
              <p className="text-xs text-zinc-400 mb-2">Top queries this page would capture:</p>
              <div className="flex flex-wrap gap-1.5">
                {opp.topQueries.map((q) => (
                  <code key={q} className="text-[10px] bg-white dark:bg-zinc-900 border border-amber-200 dark:border-amber-900 rounded-lg px-2 py-0.5 text-zinc-600 dark:text-zinc-400">
                    {q}
                  </code>
                ))}
              </div>
            </div>
          </div>

          {/* Page structure mockup */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
            <div className="bg-zinc-50 dark:bg-zinc-900 px-4 py-3 border-b border-zinc-100 dark:border-zinc-800">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-0.5">Example Page Structure</p>
              <code className="text-[10px] text-violet-600 dark:text-violet-400">
                /en-au/find/{opp.area.toLowerCase().replace(/ /g, "-")}/{opp.city.toLowerCase()}
              </code>
            </div>
            <div className="p-4 space-y-2">
              {opp.pageStructure.map((section, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[10px] font-mono text-zinc-300 dark:text-zinc-700 w-4 shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{section}</p>
                </div>
              ))}
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-950/30 border-t border-indigo-100 dark:border-indigo-900 px-4 py-3">
              <p className="text-xs text-indigo-600 dark:text-indigo-400">
                This page can be generated with Claude in ~10 minutes and published within a day.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900 p-4">
        <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-400 mb-1">
          {gaps + opportunities} missing pages out of {total} possible combinations
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          With Claude-assisted programmatic generation, the full set can be drafted, reviewed, and published in days — each targeting a high-intent local query with zero current LawConnect competition.
        </p>
      </div>
    </div>
  );
}

function CampaignSection() {
  const [activeFlow, setActiveFlow] = useState(0);

  const AD_COLORS: Record<string, string> = {
    violet: "from-violet-500 to-indigo-600",
    pink: "from-pink-500 to-rose-600",
    blue: "from-blue-500 to-cyan-600",
  };

  const FLOW_ICONS: Record<string, string> = {
    ad: "📱",
    landing: "🖥️",
    ai: "🤖",
    report: "📄",
    convert: "✅",
  };

  const FLOW_COLORS: Record<string, string> = {
    ad: "border-pink-200 dark:border-pink-900 bg-pink-50 dark:bg-pink-950/30",
    landing: "border-violet-200 dark:border-violet-900 bg-violet-50 dark:bg-violet-950/30",
    ai: "border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/30",
    report: "border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/30",
    convert: "border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/30",
  };

  return (
    <div className="space-y-14">
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-2">Campaign Flow — AI as the Hook</h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-2xl">
          The core strategic shift: stop selling lawyer access. Start giving free legal answers. The AI tool becomes the acquisition hook across SEM, social, and retargeting — converting warmer because users arrive having already gotten value.
        </p>
      </div>

      {/* Strategic insight callout */}
      <div className="rounded-2xl border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950/30 p-6">
        <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wider mb-3">The Core Insight</p>
        <div className="grid sm:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">Current model</p>
            <p className="text-zinc-500 dark:text-zinc-400">"Find a lawyer" — requires trust the visitor hasn't built yet. High friction. High bounce from cold traffic.</p>
          </div>
          <div className="flex items-center justify-center text-2xl">→</div>
          <div>
            <p className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">Proposed model</p>
            <p className="text-zinc-500 dark:text-zinc-400">"Get a free answer" — zero-friction entry. The AI delivers value first. Lawyer connection follows naturally as the next step.</p>
          </div>
        </div>
      </div>

      {/* Full journey flow */}
      <div>
        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">Full Campaign Journey</p>
        <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
          {aiFlowSteps.map((step, i) => (
            <button
              key={step.step}
              onClick={() => setActiveFlow(i)}
              className={`flex-shrink-0 rounded-xl px-3 py-2 text-xs font-medium transition-colors border ${
                activeFlow === i
                  ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-transparent"
                  : "border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
              }`}
            >
              {FLOW_ICONS[step.type]} {step.label}
            </button>
          ))}
        </div>

        {aiFlowSteps.map((step, i) => {
          if (i !== activeFlow) return null;
          return (
            <div key={step.step} className={`rounded-2xl border p-6 ${FLOW_COLORS[step.type]}`}>
              <div className="flex items-start gap-4">
                <div className="text-3xl">{FLOW_ICONS[step.type]}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-zinc-400">{step.step}</span>
                    <span className="font-semibold">{step.label}</span>
                    <span className="text-xs text-zinc-400 bg-white/60 dark:bg-black/30 rounded-full px-2 py-0.5">{step.channel}</span>
                  </div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">{step.description}</p>
                  <div className="rounded-xl bg-white/70 dark:bg-black/20 border border-white/80 dark:border-white/10 px-4 py-3">
                    <p className="text-xs text-zinc-400 mb-1">Example</p>
                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 italic">{step.example}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Flow connector dots */}
        <div className="flex items-center gap-1 mt-4 justify-center">
          {aiFlowSteps.map((_, i) => (
            <button key={i} onClick={() => setActiveFlow(i)} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === activeFlow ? "bg-zinc-900 dark:bg-white" : "bg-zinc-200 dark:bg-zinc-700"}`} />
          ))}
        </div>
      </div>

      {/* Page mockups — before / after */}
      <div>
        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">Homepage — Before vs After</p>
        <div className="grid sm:grid-cols-2 gap-5">
          {/* Current */}
          <div className="rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 overflow-hidden">
            <div className="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-600" />
              </div>
              <div className="text-xs text-zinc-400 font-mono">lawconnect.com/en-au</div>
              <div className="w-16" />
            </div>
            {/* Nav */}
            <div className="bg-white dark:bg-zinc-950 px-5 py-3 border-b border-zinc-100 dark:border-zinc-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-blue-500" />
                <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">LawConnect</span>
              </div>
              <div className="flex gap-3">
                <div className="text-xs text-zinc-400">Find a Lawyer</div>
                <div className="text-xs text-zinc-400">How it works</div>
                <div className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded">Sign in</div>
              </div>
            </div>
            {/* Hero */}
            <div className="bg-white dark:bg-zinc-950 p-5">
              <div className="mb-3">
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-yellow-400 text-xs">★★★★★</span>
                  <span className="text-xs text-zinc-500">4.8 · 35,858 reviews</span>
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white leading-tight mb-2">
                  Find trusted lawyers across Australia
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                  Tell us about your situation, and we'll match you with a lawyer suited to your needs, giving you a clear and confident starting point.
                </p>
                <div className="flex gap-2">
                  <div className="flex-1 rounded-lg bg-blue-600 text-white text-xs font-semibold text-center py-2">
                    Find a lawyer
                  </div>
                  <div className="flex-1 rounded-lg border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-600 dark:text-zinc-400 font-medium text-center py-2">
                    Ask a question
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-red-50 dark:bg-red-950/20 border-t border-red-100 dark:border-red-900 px-4 py-2">
              <p className="text-xs text-red-500">
                Issue: "Find a lawyer" requires trust the visitor hasn't built yet. Dual CTAs split intent.
              </p>
            </div>
          </div>

          {/* Proposed */}
          <div className="rounded-2xl border-2 border-violet-300 dark:border-violet-700 overflow-hidden">
            <div className="bg-violet-100 dark:bg-violet-900/40 px-4 py-2 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-violet-300 dark:bg-violet-600" />
                <div className="w-3 h-3 rounded-full bg-violet-300 dark:bg-violet-600" />
                <div className="w-3 h-3 rounded-full bg-violet-300 dark:bg-violet-600" />
              </div>
              <div className="text-xs text-violet-500 font-mono">lawconnect.com/en-au</div>
              <div className="w-16" />
            </div>
            {/* Nav */}
            <div className="bg-white dark:bg-zinc-950 px-5 py-3 border-b border-zinc-100 dark:border-zinc-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-violet-500" />
                <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">LawConnect</span>
              </div>
              <div className="flex gap-3">
                <div className="text-xs text-zinc-400">Find a Lawyer</div>
                <div className="text-xs text-zinc-400">How it works</div>
                <div className="text-xs bg-violet-600 text-white px-2 py-0.5 rounded">Sign in</div>
              </div>
            </div>
            {/* Hero */}
            <div className="bg-white dark:bg-zinc-950 p-5">
              <div className="mb-3">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 dark:bg-violet-950 border border-violet-100 dark:border-violet-900 px-2.5 py-1 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                  <span className="text-xs text-violet-600 dark:text-violet-400">Free · No sign-up needed</span>
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white leading-tight mb-2">
                  Understand your rights before you call a lawyer.
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                  Ask LawConnect's free AI any legal question. Get a plain-English answer in minutes — then decide if you need legal help.
                </p>
                <div className="rounded-lg bg-violet-600 text-white text-xs font-semibold text-center py-2 mb-2">
                  Ask the AI — it's free
                </div>
                <div className="text-center text-xs text-zinc-400">or <span className="underline">browse lawyers</span></div>
                <div className="flex items-center justify-center gap-1 mt-3">
                  <span className="text-yellow-400 text-xs">★★★★★</span>
                  <span className="text-xs text-zinc-500">4.8 · 35,858 people helped · No sign-up</span>
                </div>
              </div>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-950/20 border-t border-emerald-100 dark:border-emerald-900 px-4 py-2">
              <p className="text-xs text-emerald-600 dark:text-emerald-400">
                Fix: leads with zero-friction offer. Single CTA. Trust signal repositioned to reinforce free AI, not lawyer marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Ads */}
      <div>
        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">Social Ad Examples</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {socialAds.map((ad) => (
            <div key={ad.hook} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
              {/* Ad creative */}
              <div className={`bg-gradient-to-br ${AD_COLORS[ad.color]} p-5 text-white`}>
                <div className="text-xs opacity-70 mb-3 font-medium">{ad.platform}</div>
                <p className="text-lg font-bold leading-tight mb-2">{ad.hook}</p>
                <p className="text-xs opacity-80 leading-relaxed">{ad.body}</p>
                <div className="mt-4 inline-block rounded-lg bg-white/20 backdrop-blur border border-white/30 text-white text-xs font-semibold px-3 py-1.5">
                  {ad.cta}
                </div>
              </div>
              {/* Details */}
              <div className="p-4 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-zinc-400">Format</span>
                  <span className="text-zinc-600 dark:text-zinc-300 font-medium">{ad.format}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-zinc-400">Audience</span>
                  <span className="text-zinc-600 dark:text-zinc-300 font-medium">{ad.targetAudience}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-zinc-400">Est. CPL</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{ad.estimatedCPL}</span>
                </div>
                <div className="pt-1 border-t border-zinc-100 dark:border-zinc-800">
                  <p className="text-xs text-zinc-400 italic">{ad.intent}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEM Ads */}
      <div>
        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">SEM Ad Examples — Intent-Matched Copy</p>
        <div className="space-y-4">
          {semAds.map((ad) => (
            <div key={ad.query} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
              {/* Google ad mockup */}
              <div className="bg-white dark:bg-zinc-950 p-5 border-b border-zinc-100 dark:border-zinc-900">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 rounded-sm bg-blue-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  <span className="text-xs text-zinc-400">lawconnect.com/en-au</span>
                  <span className="text-xs border border-zinc-300 dark:border-zinc-700 rounded px-1 text-zinc-400">Ad</span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-0.5">
                  {ad.headline1} | {ad.headline2} | {ad.headline3}
                </p>
                <p className="text-xs text-zinc-500 leading-relaxed">{ad.description}</p>
              </div>
              {/* Analysis */}
              <div className="px-5 py-4 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <p className="text-xs text-zinc-400 mb-1">Query</p>
                  <code className="text-xs font-mono text-violet-600 dark:text-violet-400">{ad.query}</code>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-zinc-400 mb-1">Intent</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300">{ad.intent}</p>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-zinc-400 mb-1">Routing insight</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300">{ad.insight}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PlanSection() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeWeek, setActiveWeek] = useState(0);
  const phase = ninetyDayPlan.phases[activePhase];
  const week = phase.weeks[activeWeek];

  const PHASE_COLORS: Record<string, { tab: string; active: string; badge: string; bar: string; metric: string }> = {
    blue: {
      tab: "border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30",
      active: "bg-blue-600 text-white border-transparent",
      badge: "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-900",
      bar: "bg-blue-500",
      metric: "text-blue-600 dark:text-blue-400",
    },
    violet: {
      tab: "border-violet-200 dark:border-violet-900 text-violet-700 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/30",
      active: "bg-violet-600 text-white border-transparent",
      badge: "bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-400 border-violet-200 dark:border-violet-900",
      bar: "bg-violet-500",
      metric: "text-violet-600 dark:text-violet-400",
    },
    emerald: {
      tab: "border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30",
      active: "bg-emerald-600 text-white border-transparent",
      badge: "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900",
      bar: "bg-emerald-500",
      metric: "text-emerald-600 dark:text-emerald-400",
    },
  };

  const c = PHASE_COLORS[phase.color];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-bold tracking-tight">My First 90 Days</h2>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500">Head of Growth · LawConnect</span>
        </div>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-2xl">
          Three phases: diagnose before acting, ship quick wins with real data, then scale what works. Week-by-week plan with concrete deliverables and the metrics I'd commit to moving.
        </p>
      </div>

      {/* Timeline strip */}
      <div className="relative">
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-zinc-100 dark:bg-zinc-800 mx-8" />
        <div className="grid grid-cols-3 gap-4 relative">
          {ninetyDayPlan.phases.map((p, i) => {
            const pc = PHASE_COLORS[p.color];
            const isActive = activePhase === i;
            return (
              <button
                key={p.id}
                onClick={() => { setActivePhase(i); setActiveWeek(0); }}
                className={`rounded-2xl border p-4 text-left transition-all ${isActive ? pc.active : pc.tab}`}
              >
                <div className={`text-xs font-mono mb-1 ${isActive ? "opacity-60" : "opacity-50"}`}>{p.days}</div>
                <div className="font-bold text-sm">{p.label}</div>
                <div className={`text-xs mt-1 ${isActive ? "opacity-80" : "opacity-60"} leading-snug`}>{p.theme}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Phase detail */}
      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        {/* Phase header */}
        <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${c.badge}`}>{phase.phase} · {phase.days}</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">{phase.goal}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-zinc-400 mb-0.5">Phase deliverable</p>
              <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300 max-w-xs text-right">{phase.deliverable}</p>
            </div>
          </div>
        </div>

        {/* Week selector */}
        <div className="flex border-b border-zinc-100 dark:border-zinc-800">
          {phase.weeks.map((w, i) => (
            <button
              key={i}
              onClick={() => setActiveWeek(i)}
              className={`flex-1 px-3 py-3 text-xs transition-colors border-b-2 ${
                activeWeek === i
                  ? "border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-semibold"
                  : "border-transparent text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
              }`}
            >
              <div>{w.week}</div>
              <div className="opacity-60 mt-0.5 font-normal hidden sm:block">{w.focus}</div>
            </button>
          ))}
        </div>

        {/* Week tasks */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className={`w-2 h-2 rounded-full ${c.bar}`} />
            <p className="font-semibold text-sm">{week.focus}</p>
          </div>
          <ul className="space-y-3">
            {week.tasks.map((task, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${c.badge}`}>
                  <span className="text-[10px] font-bold">{i + 1}</span>
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{task}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Phase key metric */}
        <div className={`mx-6 mb-6 rounded-xl px-4 py-3 border flex items-center justify-between ${c.badge}`}>
          <p className="text-xs font-semibold uppercase tracking-wider opacity-70">Phase target metric</p>
          <p className={`text-sm font-bold ${c.metric}`}>{phase.keyMetric}</p>
        </div>
      </div>

      {/* Metrics table */}
      <div>
        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">Metrics I'd Commit to Moving</p>
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                <th className="text-left px-5 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Metric</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Baseline</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Target</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider">By</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-900">
              {ninetyDayPlan.metrics.map((m) => (
                <tr key={m.name}>
                  <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">{m.name}</td>
                  <td className="px-5 py-3 text-zinc-400 font-mono text-xs">{m.baseline}</td>
                  <td className="px-5 py-3">
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{m.target}</span>
                  </td>
                  <td className="px-5 py-3 text-zinc-400 text-xs">{m.timeframe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Closing note */}
      <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-5">
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">One thing I'd do in week 1 that costs nothing: </span>
          fix the broken abandonment SMS. It takes a few hours of engineering time and it's actively destroying conversions right now. Starting there signals that I'm focused on outcomes, not planning decks.
        </p>
      </div>
    </div>
  );
}

function EmailSection() {
  const [activeSeq, setActiveSeq] = useState(0);
  const [activeEmail, setActiveEmail] = useState(0);
  const seq = proposedSequences[activeSeq];
  const email = seq.emails[activeEmail];

  const SEQ_COLORS: Record<string, string> = {
    blue: "border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400",
    violet: "border-violet-200 dark:border-violet-900 bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-400",
    amber: "border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400",
    emerald: "border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400",
  };

  const SEQ_ACTIVE: Record<string, string> = {
    blue: "bg-blue-600 text-white border-transparent",
    violet: "bg-violet-600 text-white border-transparent",
    amber: "bg-amber-500 text-white border-transparent",
    emerald: "bg-emerald-600 text-white border-transparent",
  };

  const IMPACT_COLORS: Record<string, string> = {
    High: "text-red-600 bg-red-50 dark:bg-red-950/30 dark:text-red-400 border-red-100 dark:border-red-900",
    Medium: "text-amber-600 bg-amber-50 dark:bg-amber-950/30 dark:text-amber-400 border-amber-100 dark:border-amber-900",
    Low: "text-zinc-500 bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800",
  };

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-2">Email & SMS — Current State & Strategy</h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-2xl">
          Based on a real user journey through LawConnect — account creation, AI chat, and enquiry abandonment. This shows exactly what fired, what broke, and what was never sent.
        </p>
      </div>

      {/* Current state audit */}
      <div>
        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">What Actually Happened — Real User Evidence</p>
        <div className="space-y-4">
          {currentCommsAudit.received.map((item) => (
            <div key={item.label} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-4 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                  item.type === "sms"
                    ? "bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-900"
                    : "bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-900"
                }`}>
                  {item.type.toUpperCase()}
                </span>
                <div className="flex-1">
                  <span className="font-semibold text-sm">{item.label}</span>
                  <span className="text-xs text-zinc-400 ml-2">{item.timing}</span>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                  item.status === "broken"
                    ? "bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-900"
                    : "bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900"
                }`}>
                  {item.status === "broken" ? "⚠ Broken" : "⚡ Weak"}
                </span>
              </div>

              {/* Message preview mockup */}
              <div className="px-5 py-4 border-b border-zinc-100 dark:border-zinc-800">
                {item.type === "email" ? (
                  <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden text-xs max-w-lg">
                    <div className="bg-zinc-50 dark:bg-zinc-900 px-3 py-2 flex items-center gap-2 border-b border-zinc-100 dark:border-zinc-800">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="text-zinc-500 font-medium">LawConnect</span>
                      <span className="text-zinc-300 dark:text-zinc-700">·</span>
                      <span className="text-zinc-400">to me</span>
                    </div>
                    <div className="p-3 bg-white dark:bg-zinc-950">
                      <p className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">{item.subject}</p>
                      <p className="text-zinc-500 text-[11px]">{item.preview}</p>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl bg-zinc-100 dark:bg-zinc-800 text-xs max-w-xs px-4 py-3">
                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{item.subject}</p>
                    <p className="text-zinc-400 text-[10px] mt-2">Sent twice · Links to admin.finchly.com.au</p>
                  </div>
                )}
              </div>

              {/* Issues */}
              <div className="px-5 py-4">
                <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-2">Issues Found</p>
                <ul className="space-y-1.5">
                  {item.issues.map((issue, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="text-red-400 mt-0.5 shrink-0">×</span>
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Missing emails */}
      <div>
        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">What Was Never Sent — Missing Touchpoints</p>
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                <th className="text-left px-5 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Trigger</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Expected touchpoint</th>
                <th className="px-5 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-900">
              {currentCommsAudit.missing.map((item) => (
                <tr key={item.trigger}>
                  <td className="px-5 py-3 text-zinc-500 dark:text-zinc-400 text-sm">{item.trigger}</td>
                  <td className="px-5 py-3 text-zinc-700 dark:text-zinc-300 text-sm">{item.expected}</td>
                  <td className="px-5 py-3 text-center">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${IMPACT_COLORS[item.impact]}`}>
                      {item.impact}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Proposed sequences */}
      <div>
        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Proposed Sequences</p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-5">
          4 automated sequences covering the full lifecycle. Each email includes the fix rationale — what it replaces or adds.
        </p>

        {/* Sequence selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {proposedSequences.map((s, i) => (
            <button
              key={s.id}
              onClick={() => { setActiveSeq(i); setActiveEmail(0); }}
              className={`rounded-xl px-4 py-2.5 text-sm font-medium border transition-colors text-left ${
                activeSeq === i ? SEQ_ACTIVE[s.color] : SEQ_COLORS[s.color]
              }`}
            >
              <div className="font-semibold">{s.name}</div>
              <div className="text-[11px] opacity-70 mt-0.5">Trigger: {s.trigger}</div>
            </button>
          ))}
        </div>

        {/* Sequence detail */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          {/* Sequence header */}
          <div className="px-5 py-4 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800 flex flex-wrap gap-4 text-xs text-zinc-500">
            <span><span className="font-semibold text-zinc-700 dark:text-zinc-300">Trigger:</span> {seq.trigger}</span>
            <span><span className="font-semibold text-zinc-700 dark:text-zinc-300">Goal:</span> {seq.goal}</span>
            <span><span className="font-semibold text-zinc-700 dark:text-zinc-300">Touchpoints:</span> {seq.emails.length}</span>
          </div>

          {/* Email selector tabs */}
          <div className="flex border-b border-zinc-100 dark:border-zinc-800">
            {seq.emails.map((e, i) => (
              <button
                key={i}
                onClick={() => setActiveEmail(i)}
                className={`flex-1 px-4 py-3 text-xs font-medium transition-colors border-b-2 ${
                  activeEmail === i
                    ? "border-zinc-900 dark:border-white text-zinc-900 dark:text-white"
                    : "border-transparent text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                }`}
              >
                <div className="font-semibold">{e.channel} {e.num}</div>
                <div className="opacity-60 mt-0.5">{e.timing}</div>
              </button>
            ))}
          </div>

          {/* Email detail */}
          <div className="p-5 grid sm:grid-cols-2 gap-5">
            {/* Mockup */}
            <div>
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                {email.channel === "SMS" ? "SMS Preview" : "Email Preview"}
              </p>
              {email.channel === "SMS" ? (
                <div className="rounded-xl bg-zinc-900 p-4 max-w-xs">
                  <div className="text-xs text-zinc-400 mb-2">LawConnect</div>
                  <div className="rounded-2xl rounded-tl-sm bg-zinc-700 px-4 py-3 text-sm text-white leading-relaxed">
                    {email.body}
                  </div>
                  <div className="mt-3 rounded-xl bg-blue-500 text-white text-xs font-medium text-center py-2">
                    {email.cta}
                  </div>
                </div>
              ) : (
                <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden text-xs">
                  <div className="bg-zinc-50 dark:bg-zinc-900 px-3 py-2 border-b border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="font-semibold text-zinc-700 dark:text-zinc-300">LawConnect</span>
                    </div>
                    <p className="font-semibold text-zinc-800 dark:text-zinc-200">{email.subject}</p>
                    <p className="text-zinc-400 text-[10px] mt-0.5">{email.preview}</p>
                  </div>
                  <div className="p-3 bg-white dark:bg-zinc-950 space-y-2">
                    {email.body.split("\n\n").map((para, i) => (
                      <p key={i} className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed">{para}</p>
                    ))}
                    <div className="mt-3 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[11px] font-semibold text-center py-2">
                      {email.cta}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Analysis */}
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Why This Email</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{email.fix}</p>
              </div>
              <div className="rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-3 space-y-2 text-xs">
                <div className="flex justify-between"><span className="text-zinc-400">Channel</span><span className="font-medium text-zinc-700 dark:text-zinc-300">{email.channel}</span></div>
                <div className="flex justify-between"><span className="text-zinc-400">Send timing</span><span className="font-medium text-zinc-700 dark:text-zinc-300">{email.timing}</span></div>
                <div className="flex justify-between"><span className="text-zinc-400">Primary CTA</span><span className="font-medium text-zinc-700 dark:text-zinc-300">{email.cta}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MatrixSection() {
  const CATEGORY_COLORS: Record<string, string> = {
    CRO: "bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-400",
    SEO: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400",
    Paid: "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-400",
    Email: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400",
    Growth: "bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-400",
    Expansion: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-400",
    Brand: "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400",
    Product: "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400",
  };

  const quadrants = [
    {
      label: "Do First",
      sublabel: "High impact · Low effort",
      bg: "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900",
      header: "text-emerald-700 dark:text-emerald-400",
      items: growthInitiatives.filter((i) => i.impact >= 65 && i.effort <= 40),
    },
    {
      label: "Plan & Schedule",
      sublabel: "High impact · High effort",
      bg: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900",
      header: "text-blue-700 dark:text-blue-400",
      items: growthInitiatives.filter((i) => i.impact >= 65 && i.effort > 40),
    },
    {
      label: "Fill-ins",
      sublabel: "Low impact · Low effort",
      bg: "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800",
      header: "text-zinc-500",
      items: growthInitiatives.filter((i) => i.impact < 65 && i.effort <= 40),
    },
    {
      label: "Avoid for Now",
      sublabel: "Low impact · High effort",
      bg: "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900",
      header: "text-red-500",
      items: growthInitiatives.filter((i) => i.impact < 65 && i.effort > 40),
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Growth Matrix — Impact vs Effort</h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">
          13 growth initiatives mapped by expected impact and implementation effort. Start top-left, plan top-right, deprioritise the rest.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {quadrants.map((q) => (
          <div key={q.label} className={`rounded-2xl border p-5 ${q.bg}`}>
            <div className={`font-bold text-sm mb-0.5 ${q.header}`}>{q.label}</div>
            <div className="text-xs text-zinc-400 mb-4">{q.sublabel}</div>
            <div className="space-y-3">
              {q.items.map((item) => (
                <div key={item.id} className="rounded-xl bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 p-3">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-semibold text-sm">{item.name}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${CATEGORY_COLORS[item.category]}`}>
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{item.description}</p>
                  <div className="flex gap-3 mt-2">
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-zinc-400">Impact</span>
                      <div className="w-16 h-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                        <div className="h-full rounded-full bg-indigo-400" style={{ width: `${item.impact}%` }} />
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-zinc-400">Effort</span>
                      <div className="w-16 h-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                        <div className="h-full rounded-full bg-zinc-400" style={{ width: `${item.effort}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AuditPage() {
  const [active, setActive] = useState<Section>("plan");

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
      {/* Top bar */}
      <header className="border-b border-zinc-100 dark:border-zinc-900 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">LawConnect</span>
              <span className="text-zinc-300 dark:text-zinc-700">/</span>
              <span className="text-sm text-zinc-500">Growth Audit</span>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">Consumer growth strategy — April 2026</p>
          </div>
          <a
            href="https://lawconnect.com/en-au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
          >
            lawconnect.com ↗
          </a>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8 flex gap-8">
        {/* Sidebar */}
        <aside className="w-52 shrink-0">
          <nav className="space-y-1 sticky top-8">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`w-full text-left rounded-xl px-3 py-2.5 transition-colors ${
                  active === item.id
                    ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
                    : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                }`}
              >
                <div className="text-sm font-medium">{item.label}</div>
                <div className="text-xs opacity-60 mt-0.5">{item.description}</div>
              </button>
            ))}

            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-900 mt-4">
              <p className="text-xs text-zinc-400 px-3">Built with Claude Code</p>
              <p className="text-xs text-zinc-300 dark:text-zinc-600 px-3 mt-0.5">marketingskills by coreyhaines31</p>
              <p className="text-xs text-zinc-400 px-3 mt-2">Project by Italo Camargo</p>
            </div>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {active === "plan" && <PlanSection />}
          {active === "campaign" && <CampaignSection />}
          {active === "funnel" && <FunnelSection />}
          {active === "seo" && <SEOSection />}
          {active === "email" && <EmailSection />}
          {active === "matrix" && <MatrixSection />}
        </main>
      </div>
    </div>
  );
}
