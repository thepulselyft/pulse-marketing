export type Stat = { value: string; label: string };

export type ServiceItem = { title: string; body: string; img: string };

export type PortfolioItem = { title: string; category: string; img: string; href: string };

export type CaseItem = { title: string; tag: string; result: string; img: string; featured: boolean };

export type ProcessStep = { n: string; title: string; body: string };

export type Quote = { quote: string; name: string; role: string; avatar: string };

export type FaqItem = { question: string; answer: string };

export type SiteContent = {
  version: number;
  hero: {
    badge: string;
    headlineBefore: string;
    headlineItalic: string;
    headlineAfter: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
    heroImage: string;
    heroImageAlt: string;
    stats: Stat[];
    floatCard: { kicker: string; title: string; body: string };
  };
  logos: { line: string; brands: string[] };
  services: { kicker: string; title: string; intro: string; items: ServiceItem[] };
  metrics: { kicker: string; title: string; body: string; stats: Stat[] };
  work: { kicker: string; title: string; intro: string; cta: string; caseBody: string; cases: CaseItem[] };
  portfolio: { kicker: string; title: string; intro: string; cta: string; items: PortfolioItem[] };
  process: { kicker: string; title: string; intro: string; steps: ProcessStep[] };
  testimonials: { kicker: string; title: string; quotes: Quote[] };
  faq: { kicker: string; title: string; intro: string; items: FaqItem[] };
  cta: { kicker: string; title: string; sub: string; button: string };
  bookCall: { kicker: string; title: string; sub: string; calendlyUrl: string };
};

export const defaultSiteContent = (): SiteContent => ({
  version: 1,
  hero: {
    badge: "Meta ads agency for revenue-focused brands",
    headlineBefore: "Meta ads that",
    headlineItalic: "compound",
    headlineAfter: "into pipeline.",
    sub: "PulseLyft is a Meta ads agency running Facebook and Instagram campaigns for brands that measure success in CAC and payback, not impressions. Creative testing, CAPI-led measurement, and SEO layered on top when it earns its place.",
    primaryCta: "Get a Meta ads audit",
    secondaryCta: "View outcomes",
    heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=85",
    heroImageAlt: "Marketing team reviewing campaign performance on screens",
    stats: [
      { value: "3.1×", label: "ROAS" },
      { value: "97%", label: "Retention" },
      { value: "$48M", label: "Managed" },
    ],
    floatCard: {
      kicker: "Live program signal",
      title: "Meta ads, scale-ready in weeks",
      body: "Account audit, creative testing, and CAPI tracking—one operating rhythm.",
    },
  },
  logos: {
    line: "Trusted by teams shipping at scale",
    brands: ["Nimbus", "Vertex", "Lumen", "Northline", "Craft", "Helio", "Aperture", "Signal"],
  },
  services: {
    kicker: "Capabilities",
    title: "Meta ads management, built as a full-funnel system",
    intro: "A senior team runs your Meta ads account end to end—structure, creative, and measurement—then layers in the channels that compound it.",
    items: [
      {
        title: "Meta ads management",
        body: "Facebook and Instagram campaign structure, Advantage+ and CBO setup, budget pacing, and CAPI-led measurement so scaling spend does not scale waste.",
        img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=85",
      },
      {
        title: "Meta ads creative testing",
        body: "Hooks, angles, and UGC-style ad packs built for a structured test-and-kill cadence—engineered for thumb-stopping relevance, not awards-show reels.",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
      },
      {
        title: "SEO & content systems",
        body: "Technical foundations, intent-led clusters, and internal linking that compound organic traffic alongside paid, over quarters not weeks.",
        img: "https://images.unsplash.com/photo-1432888498266-38ffec068eaf?w=900&q=85",
      },
      {
        title: "Analytics & attribution",
        body: "Clean event schemas, server-side Conversions API tagging, and one weekly dashboard leadership actually uses to judge Meta ads spend.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=85",
      },
    ],
  },
  metrics: {
    kicker: "Evidence",
    title: "Numbers your CFO already asks for",
    body: "Benchmarks shift by category—we show ranges, not fairy tales. Blend across SaaS, DTC, and professional-services Meta ads accounts.",
    stats: [
      { value: "$48M+", label: "Meta ad spend managed" },
      { value: "3.1×", label: "Median ROAS across accounts" },
      { value: "4.2 wk", label: "Time to first scale test" },
      { value: "97%", label: "Client retention (24 mo.)" },
    ],
  },
  work: {
    kicker: "Selected work",
    title: "Meta ads outcomes, not mood boards",
    intro: "Representative engagements—anonymized where required. Every program pairs Meta ads account depth with ruthless prioritization. Full case studies coming soon.",
    cta: "Discuss a build",
    caseBody:
      "Strategy, build, and weekly iteration—so wins compound instead of resetting each quarter.",
    cases: [
      {
        title: "B2B SaaS pipeline rebuild",
        tag: "Meta + landing",
        result: "61% lower CPL in 90 days",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85",
        featured: true,
      },
      {
        title: "DTC omnichannel scale",
        tag: "Paid + lifecycle",
        result: "2.4× MER at same spend",
        img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85",
        featured: false,
      },
      {
        title: "Category SEO takeover",
        tag: "Technical + content",
        result: "Top 3 for 38 money keywords",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85",
        featured: false,
      },
    ],
  },
  portfolio: {
    kicker: "Portfolio",
    title: "Recent ships & experiments",
    intro: "Swap images and copy here from the admin panel—use direct image URLs (e.g. Unsplash).",
    cta: "Start a similar build",
    items: [
      {
        title: "Lifecycle email redesign",
        category: "CRM · retention",
        img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=85",
        href: "#book-call",
      },
      {
        title: "Paid social creative pack",
        category: "Meta · performance creative",
        img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=85",
        href: "#book-call",
      },
      {
        title: "Enterprise landing system",
        category: "CRO · landing",
        img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=85",
        href: "#book-call",
      },
      {
        title: "Technical SEO migration",
        category: "SEO · engineering",
        img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=85",
        href: "#book-call",
      },
    ],
  },
  process: {
    kicker: "Engagement",
    title: "How we plug into your team",
    intro: "Senior operators, async-first rituals, and reporting your execs open without prompting.",
    steps: [
      {
        n: "01",
        title: "Audit your Meta ads account",
        body: "Full account, analytics, and SERP audit. Align on margin, payback, and guardrails before spend moves.",
      },
      {
        n: "02",
        title: "Ship the growth system",
        body: "Launch structured Meta ads creative tests, SEO fixes, and CAPI tracking—documented in a living roadmap the whole team can see.",
      },
      {
        n: "03",
        title: "Compound weekly",
        body: "Creative velocity, query expansion, and bid/budget logic tuned in a tight feedback loop with your data.",
      },
    ],
  },
  testimonials: {
    kicker: "Social proof",
    title: "Partners on the record",
    quotes: [
      {
        quote:
          "They replaced three vendors. Our Meta account finally talks to our CRM—and finance trusts the numbers.",
        name: "Jordan M.",
        role: "VP Growth, Series B SaaS",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=85",
      },
      {
        quote:
          "SEO was a black box. Now we ship clusters on a cadence and see compounding sessions every quarter.",
        name: "Priya K.",
        role: "CMO, DTC wellness",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=85",
      },
    ],
  },
  faq: {
    kicker: "FAQ",
    title: "Meta ads agency questions, answered directly",
    intro: "What clients actually ask before they hand us their Meta ads account.",
    items: [
      {
        question: "What does a Meta ads agency do?",
        answer:
          "A Meta ads agency plans, builds, and manages paid campaigns on Facebook and Instagram on a client's behalf—account structure, budget and bid strategy, ad creative, and performance reporting—so an internal team does not have to run it in-house.",
      },
      {
        question: "How much does Meta ads management cost?",
        answer:
          "Meta ads management is typically priced as a flat monthly retainer or a percentage of ad spend (commonly 10–20%), separate from the media budget itself. PulseLyft scopes pricing after a short account audit, once we know your current spend and goals.",
      },
      {
        question: "How long until Meta ads results show up?",
        answer:
          "Most accounts see a first structured scale test within 4–5 weeks: week one for the audit and tracking setup, weeks two to four for creative testing, and scale decisions once a winning ad clears a stable CPA over real delivery volume.",
      },
      {
        question: "Do you run Meta ads for both new and existing accounts?",
        answer:
          "Yes. For an existing account we start with a full audit—campaign structure, pixel and CAPI health, creative fatigue—before changing anything. For a new account we build the tracking foundation and campaign structure from a blank slate.",
      },
      {
        question: "What is Meta's Conversions API (CAPI) and why does it matter?",
        answer:
          "CAPI sends conversion events from your server directly to Meta, alongside browser pixel data. It recovers events lost to ad blockers and iOS tracking limits, giving Meta's algorithm more accurate signal to optimize delivery toward real buyers.",
      },
      {
        question: "Do you only do Meta ads, or other channels too?",
        answer:
          "Meta ads is our core focus and where most engagements start. We also run performance creative, SEO, and analytics/attribution work—either alongside a Meta ads program or as a standalone engagement once the account has clean tracking.",
      },
    ],
  },
  cta: {
    kicker: "Next step",
    title: "Meta ads growth you can defend in a board meeting",
    sub: "Two-week discovery sprints, explicit milestones, and no mystery retainers.",
    button: "Book a strategy call",
  },
  bookCall: {
    kicker: "Book a call",
    title: "Pick a time that works for you",
    sub: "30-minute Meta ads intro to align on goals, stack, and whether PulseLyft is the right partner—no generic deck.",
    calendlyUrl: "https://calendly.com/thepulselyft/30min",
  },
});

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function deepMerge<T extends Record<string, unknown>>(base: T, patch: unknown): T {
  if (!isPlainObject(patch)) return base;
  const out = { ...base } as Record<string, unknown>;
  for (const key of Object.keys(patch)) {
    const pv = patch[key];
    const bv = out[key];
    if (Array.isArray(pv)) {
      out[key] = pv;
    } else if (isPlainObject(pv) && isPlainObject(bv)) {
      out[key] = deepMerge(bv as Record<string, unknown>, pv);
    } else if (pv !== undefined) {
      out[key] = pv;
    }
  }
  return out as T;
}

/** Merge API payload over built-in defaults (nested). */
export function mergeFetchedContent(raw: unknown): SiteContent {
  const base = defaultSiteContent() as unknown as Record<string, unknown>;
  if (!isPlainObject(raw)) return defaultSiteContent();
  return deepMerge(base, raw) as SiteContent;
}
