"use client";

import { useSiteContent } from "@/context/SiteContentProvider";

export function FAQ() {
  const { content } = useSiteContent();
  const f = content.faq;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: f.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="scroll-mt-24 bg-page py-24 sm:py-32">
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-lift">{f.kicker}</p>
        <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl text-balance">
          {f.title}
        </h2>
        <p className="mt-4 max-w-2xl text-zinc-600 leading-relaxed">{f.intro}</p>
        <div className="mt-12 divide-y divide-zinc-200/90 border-y border-zinc-200/90">
          {f.items.map((item) => (
            <details key={item.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-medium text-ink marker:content-none">
                {item.question}
                <span
                  aria-hidden
                  className="shrink-0 text-xl text-zinc-400 transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-prose text-sm leading-relaxed text-zinc-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
