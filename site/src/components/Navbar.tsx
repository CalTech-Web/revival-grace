"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/statement-of-belief", label: "Beliefs" },
  { href: "/devotionals", label: "Devotionals" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/favicon.png"
              alt="Revival Grace Ministry"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-serif text-lg font-bold text-heading hidden sm:block">
              Revival Grace Ministry
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text hover:text-heading transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="ml-2 px-5 py-2 bg-dark text-white text-sm font-medium rounded-full hover:bg-dark-light transition-colors"
            >
              Donate
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-heading p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-black/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-text hover:text-heading transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="block mt-3 px-4 py-2 bg-dark text-white text-center text-sm font-medium rounded-full hover:bg-dark-light transition-colors"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
