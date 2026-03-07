import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsConditionsPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral">
        <h1 className="text-4xl font-bold text-dark mb-8">Terms & Conditions</h1>
        <p className="text-black/50 mb-8">Last updated: March 2026</p>

        <h2 className="text-2xl font-bold text-dark mt-8 mb-4">Use of Content</h2>
        <p className="text-black/60 leading-relaxed mb-4">
          All content on this website, including devotionals, articles, and eBooks, is the property of Revival Grace Ministry and is protected by copyright law. You may share our content for personal, non-commercial use with proper attribution.
        </p>

        <h2 className="text-2xl font-bold text-dark mt-8 mb-4">Newsletter</h2>
        <p className="text-black/60 leading-relaxed mb-4">
          By subscribing to our newsletter, you agree to receive periodic emails from Revival Grace Ministry. You may unsubscribe at any time using the link provided in each email.
        </p>

        <h2 className="text-2xl font-bold text-dark mt-8 mb-4">Donations</h2>
        <p className="text-black/60 leading-relaxed mb-4">
          All donations to Revival Grace Ministry are voluntary and non-refundable unless otherwise stated. Donations are used to support the ministry&apos;s operations and outreach efforts.
        </p>

        <h2 className="text-2xl font-bold text-dark mt-8 mb-4">Limitation of Liability</h2>
        <p className="text-black/60 leading-relaxed mb-4">
          Revival Grace Ministry provides content for spiritual edification. We are not liable for any actions taken based on the content provided on this website.
        </p>

        <h2 className="text-2xl font-bold text-dark mt-8 mb-4">Contact</h2>
        <p className="text-black/60 leading-relaxed">
          For questions regarding these terms, please reach out through our contact page.
        </p>
      </div>
    </section>
  );
}
