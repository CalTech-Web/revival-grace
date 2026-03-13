import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <p className="text-[80px] font-serif font-bold text-primary/20 leading-none mb-2">404</p>
        <h1 className="font-serif text-[28px] font-bold text-heading mb-3">
          Page Not Found
        </h1>
        <p className="text-[14px] text-text mb-8 leading-relaxed">
          The page you are looking for does not exist or may have been moved. Let us help you find your way back.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-2.5 bg-primary text-white text-[13px] font-medium tracking-wide rounded-md hover:bg-primary-dark transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/devotionals"
            className="px-6 py-2.5 border border-black/15 text-heading text-[13px] font-medium rounded-md hover:bg-black/5 transition-colors"
          >
            Browse Devotionals
          </Link>
        </div>
      </div>
    </div>
  );
}
