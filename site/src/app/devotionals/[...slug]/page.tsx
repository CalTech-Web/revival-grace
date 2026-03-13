import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen } from "lucide-react";
import { devotionals, getDevotionalBySlug, getDevotionalsByCategory, getCategoryBySlug } from "@/data/devotionals";
import DevotionalContent from "@/components/DevotionalContent";
import EbookDownloadButton from "@/components/EbookDownloadButton";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  return devotionals.map((d) => ({
    slug: d.slug.split("/"),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const devotional = getDevotionalBySlug(slug);
  if (!devotional) return { title: "Not Found" };
  return {
    title: `${devotional.title} | Revival Grace Ministry`,
    description: devotional.excerpt,
    alternates: { canonical: `https://www.revivalgrace.com/devotionals/${slug.join("/")}` },
    openGraph: devotional.image
      ? { images: [{ url: devotional.image, width: 1200, height: 630, alt: devotional.title }] }
      : undefined,
  };
}

export default async function DevotionalPage({ params }: Props) {
  const { slug } = await params;
  const devotional = getDevotionalBySlug(slug);

  if (!devotional) {
    notFound();
  }

  const category = getCategoryBySlug(devotional.categorySlug);
  const categoryDevotionals = getDevotionalsByCategory(devotional.categorySlug);
  const currentIndex = categoryDevotionals.findIndex((d) => d.slug === devotional.slug);

  const paragraphs = devotional.content.split("\n\n").filter(Boolean);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.revivalgrace.com" },
      { "@type": "ListItem", position: 2, name: "Devotionals", item: "https://www.revivalgrace.com/devotionals" },
      { "@type": "ListItem", position: 3, name: category?.name || "Category", item: `https://www.revivalgrace.com/devotionals/${devotional.categorySlug}` },
      { "@type": "ListItem", position: 4, name: devotional.title },
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: devotional.title,
    description: devotional.excerpt,
    image: devotional.image ? `https://www.revivalgrace.com${devotional.image}` : undefined,
    author: { "@type": "Person", name: "Pastor Ewang Nelson" },
    publisher: {
      "@type": "Organization",
      name: "Revival Grace Ministry",
      logo: { "@type": "ImageObject", url: "https://www.revivalgrace.com/images/og-image.png" },
    },
    mainEntityOfPage: `https://www.revivalgrace.com/devotionals/${slug.join("/")}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative py-20 bg-primary overflow-hidden">
        {devotional.image && (
          <>
            <Image
              src={devotional.image}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-primary/80" />
          </>
        )}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/devotionals"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            Back to Devotionals
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-white/60" strokeWidth={1.5} />
            <span className="text-sm text-white/60">{category?.name}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {devotional.title}
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <DevotionalContent preview={paragraphs[0]}>
            <div className="mb-10 pb-8 border-b border-black/10 text-sm text-text/70 space-y-3">
              <p className="font-medium text-heading">By Mfortaw, Ewang Nelson</p>
              <p>Copyright &copy; 2014 by Mfortaw, Ewang Nelson.</p>
              <div>
                <p className="font-medium text-heading mb-1">SCRIPTURE QUOTATIONS MARKED</p>
                <p>
                  Scripture quotations marked (NIV) are taken from the Holy Bible, New International Version&reg;, NIV&reg;. Copyright &copy; 1973, 1978, 1984 by International Bible Society. Used by Permission of Zondervan. All rights reserved worldwide, www.zondervan.com.
                </p>
                <p className="mt-2">
                  Unless otherwise indicated, all other quotations from scripture have been taken from the Holy Bible, Authorized King James Version&reg;.
                </p>
              </div>
              <p>
                These devotionals are designed for Christians. If you still need to become a Christian, we encourage you to download our free e-book,{" "}
                <EbookDownloadButton className="text-primary hover:text-primary-light underline transition-colors cursor-pointer">
                  The Flame of Revival
                </EbookDownloadButton>.
              </p>
            </div>

            <article className="prose prose-lg max-w-none">
              {paragraphs.map((paragraph, i) => (
                <p key={i} className="text-text leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </article>

            {categoryDevotionals.length > 1 && (
              <div className="mt-16 pt-8 border-t border-black/10">
                <h3 className="font-serif text-lg font-semibold text-heading mb-4">
                  More from {category?.name}
                </h3>
                <div className="space-y-3">
                  {categoryDevotionals.map((d) => (
                    <Link
                      key={d.slug}
                      href={`/devotionals/${d.slug}`}
                      className={`block p-4 rounded-lg transition-colors ${
                        d.slug === devotional.slug
                          ? "bg-primary/10 border border-primary/20"
                          : "bg-black/5 hover:bg-black/10"
                      }`}
                    >
                      <span className={`text-sm font-medium ${
                        d.slug === devotional.slug ? "text-primary" : "text-heading"
                      }`}>
                        {d.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 flex justify-between">
              {currentIndex > 0 ? (
                <Link
                  href={`/devotionals/${categoryDevotionals[currentIndex - 1].slug}`}
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
                  Previous
                </Link>
              ) : (
                <div />
              )}
              {currentIndex < categoryDevotionals.length - 1 && (
                <Link
                  href={`/devotionals/${categoryDevotionals[currentIndex + 1].slug}`}
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors"
                >
                  Next
                  <ArrowLeft className="w-4 h-4 rotate-180" strokeWidth={1.5} />
                </Link>
              )}
            </div>
          </DevotionalContent>
        </div>
      </section>
    </>
  );
}
