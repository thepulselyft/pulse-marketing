import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { blogPosts, getPost } from "@/lib/blogPosts";

type Props = { params: Promise<{ slug: string }> };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://thepulselyft.com";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found" };
  const url = `${siteUrl}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.img }],
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.img,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "PulseLyft" },
    mainEntityOfPage: postUrl,
  };

  return (
    <main className="min-h-screen bg-page">
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <article className="pt-[4.25rem]">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <Link href="/blog" className="text-sm font-semibold text-lift transition hover:text-ink">
            ← Back to blog
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
            <span className="text-lift">{post.category}</span>
            <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl text-balance">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600">{post.excerpt}</p>
          <p className="mt-4 text-sm font-medium text-zinc-500">By {post.author}</p>
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-200/90 bg-zinc-100 shadow-card">
            <Image src={post.img} alt={post.imgAlt} fill className="object-cover" sizes="768px" unoptimized />
          </div>
          <div className="prose prose-zinc mt-12 max-w-none space-y-6 text-base leading-relaxed text-zinc-700">
            {post.body.map((block, idx) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={`h2-${idx}`}
                    className="!mt-10 font-display text-2xl font-medium text-ink"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={`ul-${idx}`} className="list-disc space-y-2 pl-6">
                    {block.items.map((item) => (
                      <li key={item.slice(0, 40)}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={`p-${idx}`}>{block.text}</p>;
            })}
          </div>
          <div className="mt-14 rounded-2xl border border-zinc-200/90 bg-paper p-8 text-center shadow-card">
            <p className="font-display text-2xl font-medium text-ink">Want help running this in your stack?</p>
            <p className="mt-3 text-zinc-600">Book a call or send a note—we reply within one business day.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/#book-call"
                className="rounded-full bg-ink px-8 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                Book a call
              </Link>
              <Link
                href="/#contact"
                className="rounded-full border border-zinc-300 bg-page px-8 py-3 text-sm font-semibold text-ink transition hover:border-lift/40"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
