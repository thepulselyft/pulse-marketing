export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  img: string;
  imgAlt: string;
  author: string;
  body: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "meta-ads-creative-testing-framework",
    title: "A Meta ads creative testing framework that actually scales spend",
    excerpt:
      "Most teams burn budget on random creative swaps. Here is a simple structure for hooks, angles, and kill rules that keeps Meta ads CAC honest.",
    category: "Meta ads",
    date: "2026-05-12",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=85",
    imgAlt: "Marketer reviewing Meta ads creative performance dashboards on a laptop",
    author: "PulseLyft Team",
    body: [
      {
        type: "p",
        text: "A creative testing framework for Meta ads is a repeatable structure for isolating one variable at a time—hook, angle, or format—so you can tell what actually moved cost per lead (CPL) instead of guessing after a budget swing. Scaling Meta is rarely a bidding problem first; it is a creative throughput problem. When every new ad is a one-off, you cannot tell what actually moved CPL or MER.",
      },
      {
        type: "h2",
        text: "The three layers to test in Meta ads creative",
      },
      {
        type: "p",
        text: "Start with three layers: hook (first 2 seconds), angle (promise + proof), and format (static, UGC, carousel). Test one layer at a time. Change the hook while holding angle and format constant for at least 48 hours of stable delivery so Meta's algorithm has enough signal to judge the change fairly.",
      },
      {
        type: "h2",
        text: "Kill rules to set before you launch",
      },
      {
        type: "ul",
        items: [
          "If CPA is 2× target after 1,000 impressions with no purchase signal, pause the ad.",
          "If an ad wins, graduate it to a scaling ad set with capped daily budget increases (no more than 20% per day).",
          "Never duplicate a winning ad across five ad sets on day one—let it prove stability first.",
          "Document every test in a shared sheet: hypothesis, asset link, result, next action.",
        ],
      },
      {
        type: "p",
        text: "That log becomes your creative playbook and cuts rework by half within a quarter—every new media buyer on the account inherits the reasoning, not just the winning ads.",
      },
    ],
  },
  {
    slug: "seo-clusters-for-revenue-keywords",
    title: "SEO clusters built for revenue keywords—not vanity traffic",
    excerpt:
      "Intent-led content systems compound when technical foundations and internal linking work together. A practical cadence for B2B and DTC teams running Meta ads alongside organic.",
    category: "SEO",
    date: "2026-04-28",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1432888498266-38ffec068eaf?w=1200&q=85",
    imgAlt: "Content team mapping keyword clusters on a whiteboard",
    author: "PulseLyft Team",
    body: [
      {
        type: "p",
        text: "A revenue keyword cluster is a pillar page plus its supporting articles, built around one core offer and mapped to buyer stage—not a random batch of blog posts chasing search volume. Traffic that does not map to pipeline is expensive decoration.",
      },
      {
        type: "h2",
        text: "Map keywords to buyer stage before you write",
      },
      {
        type: "p",
        text: "Before writing, map money keywords to buyer stages: problem-aware, solution-aware, and vendor comparison. Build clusters around one pillar page per core offer. Each supporting article should answer a specific long-tail query and link back with descriptive anchor text—not \"click here.\"",
      },
      {
        type: "h2",
        text: "Ship technical fixes in the same sprint as content",
      },
      {
        type: "ul",
        items: [
          "Crawl budget and indexation—make sure new pages are discoverable.",
          "Canonical tags on every templated page to avoid duplicate-content splits.",
          "Core Web Vitals on the templates you're scaling, not just the homepage.",
          "Schema markup on FAQs and articles so both Google and AI answer engines can extract the content.",
        ],
      },
      {
        type: "p",
        text: "Google rewards sites that feel maintained, not just published. Review rankings monthly but judge success on assisted conversions and demo requests from organic—not position alone.",
      },
    ],
  },
  {
    slug: "attribution-leaders-trust",
    title: "Attribution your leadership team will actually trust",
    excerpt:
      "Server-side events, clean UTMs, and a single weekly dashboard beat twelve conflicting reports every time—especially when Meta ads spend is on the line.",
    category: "Analytics",
    date: "2026-04-10",
    readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85",
    imgAlt: "Weekly marketing attribution dashboard showing spend, ROAS, and CAC",
    author: "PulseLyft Team",
    body: [
      {
        type: "p",
        text: "Marketing attribution is the practice of matching revenue to the channel and campaign that produced it—done well, it is one source of truth everyone in the room trusts, not twelve conflicting reports. When finance and marketing disagree on numbers, growth stalls.",
      },
      {
        type: "h2",
        text: "Standardize events before you add another tool",
      },
      {
        type: "p",
        text: "The fix is not another tool—it is one source of truth with documented definitions. Standardize event names across Meta CAPI, GA4, and your CRM. Match on email hash or order ID where possible. Document what \"lead\" and \"qualified lead\" mean in writing.",
      },
      {
        type: "h2",
        text: "What belongs on the weekly dashboard",
      },
      {
        type: "ul",
        items: [
          "Spend by channel, with Meta ads broken out separately from other paid media.",
          "MER or ROAS against the agreed target, not last month's number.",
          "CAC and payback window.",
          "Pipeline influenced, sourced from the CRM—not a self-reported form field.",
        ],
      },
      {
        type: "p",
        text: "Remove metrics that nobody acts on. Run a 30-minute review every Monday—decisions beat dashboards when the same five people look at the same five numbers.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
