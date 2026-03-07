import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen } from "lucide-react";
import { devotionals, getDevotionalBySlug, getDevotionalsByCategory, getCategoryBySlug } from "@/data/devotionals";
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

  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-dark via-dark-light to-primary-dark overflow-hidden">
        {devotional.image && (
          <>
            <Image
              src={devotional.image}
              alt=""
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-dark/75" />
          </>
        )}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/devotionals"
            className="inline-flex items-center gap-2 text-sm text-secondary-light/70 hover:text-secondary-light transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            Back to Devotionals
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-secondary-light/60" strokeWidth={1.5} />
            <span className="text-sm text-secondary-light/60">{category?.name}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {devotional.title}
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 pb-8 border-b border-black/10 text-sm text-black/50 space-y-3">
            <p className="font-medium text-black/60">By Mfortaw, Ewang Nelson</p>
            <p>Copyright &copy; 2014 by Mfortaw, Ewang Nelson.</p>
            <div>
              <p className="font-medium text-black/60 mb-1">SCRIPTURE QUOTATIONS MARKED</p>
              <p>
                Scripture quotations marked (NIV) are taken from the Holy Bible, New International Version&reg;, NIV&reg;. Copyright &copy; 1973, 1978, 1984 by International Bible Society. Used by Permission of Zondervan. All rights reserved worldwide, www.zondervan.com.
              </p>
              <p className="mt-2">
                Unless otherwise indicated, all other quotations from scripture have been taken from the Holy Bible, Authorized King James Version&reg;.
              </p>
            </div>
            <p>
              These devotionals are designed for Christians. If you still need to become a Christian, we encourage you to download our free e-book,{" "}
              <Link href="/contact" className="text-accent hover:text-accent-light underline transition-colors">
                The Flame of Revival
              </Link>.
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
              <h3 className="text-lg font-semibold text-dark mb-4">
                More from {category?.name}
              </h3>
              <div className="space-y-3">
                {categoryDevotionals.map((d, i) => (
                  <Link
                    key={d.slug}
                    href={`/devotionals/${d.slug}`}
                    className={`block p-4 rounded-lg transition-colors ${
                      d.slug === devotional.slug
                        ? "bg-secondary-light/10 border border-secondary-light/20"
                        : "bg-black/5 hover:bg-black/10"
                    }`}
                  >
                    <span className={`text-sm font-medium ${
                      d.slug === devotional.slug ? "text-secondary" : "text-dark"
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
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors"
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
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors"
              >
                Next
                <ArrowLeft className="w-4 h-4 rotate-180" strokeWidth={1.5} />
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
