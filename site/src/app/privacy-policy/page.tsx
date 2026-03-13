import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Revival Grace Ministry privacy policy to learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://www.revivalgrace.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral">
        <h1 className="text-4xl font-bold text-heading mb-8">Privacy Policy</h1>
        <p className="text-black/50 mb-8">Last updated: March 2026</p>

        <h2 className="text-2xl font-bold text-heading mt-8 mb-4">Information We Collect</h2>
        <p className="text-black/60 leading-relaxed mb-4">
          Revival Grace Ministry collects personal information that you voluntarily provide when you subscribe to our newsletter, fill out a contact form, or interact with our website. This may include your name and email address.
        </p>

        <h2 className="text-2xl font-bold text-heading mt-8 mb-4">How We Use Your Information</h2>
        <p className="text-black/60 leading-relaxed mb-4">
          We use the information we collect to send you weekly devotionals, ministry updates, and respond to your inquiries. We do not sell, trade, or share your personal information with third parties.
        </p>

        <h2 className="text-2xl font-bold text-heading mt-8 mb-4">Cookies</h2>
        <p className="text-black/60 leading-relaxed mb-4">
          Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-bold text-heading mt-8 mb-4">Contact</h2>
        <p className="text-black/60 leading-relaxed">
          If you have any questions about this privacy policy, please contact us through our contact page.
        </p>
      </div>
    </section>
  );
}
