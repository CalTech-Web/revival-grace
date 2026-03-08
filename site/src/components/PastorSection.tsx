import Link from "next/link";

export default function PastorSection() {
  return (
    <section className="py-16 lg:py-20 bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-[32px] sm:text-[40px] font-bold text-white mb-5 leading-tight">
          Welcome to Revival Grace Ministry
        </h2>
        <p className="text-white/80 text-[15px] sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
          Revival Grace Ministry is the teaching ministry of Pastor Ewang Nelson and is dedicated to leading people worldwide into a growing relationship with Jesus Christ and strengthening the local church.
        </p>
        <Link
          href="/about"
          className="inline-block px-7 py-3 border-2 border-white text-white text-[13px] font-medium tracking-wide hover:bg-white hover:text-primary transition-colors"
        >
          Learn More About Revival Grace
        </Link>
      </div>
    </section>
  );
}
