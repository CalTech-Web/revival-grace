"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/statement-of-belief", label: "Statement of Belief" },
  { href: "/devotionals", label: "Devotionals" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center group">
            <video
              src="/images/logo-animation.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-14 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-secondary-light transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-light transition-colors"
            >
              Get In Touch
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-gray-300 hover:text-secondary-light transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block mt-3 px-4 py-2 bg-accent text-white text-center text-sm font-medium rounded-lg hover:bg-accent-light transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
