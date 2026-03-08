"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";

const leftLinks = [
  { href: "/devotionals", label: "Read" },
  { href: "/devotionals#prayer-fasting", label: "Topics" },
];

const rightLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Connect" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Top bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center gap-6">
              <Search className="w-4 h-4 text-text" strokeWidth={1.5} />
              {leftLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium text-heading hover:text-accent transition-colors hidden sm:block"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-6">
              {rightLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium text-heading hover:text-accent transition-colors hidden sm:block"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/donate"
                className="px-4 py-1.5 bg-dark text-white text-[13px] font-medium rounded-full hover:bg-dark-light transition-colors"
              >
                Donate
              </Link>
              <button
                onClick={() => setOpen(!open)}
                className="sm:hidden p-1"
                aria-label="Toggle menu"
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Logo bar */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-14">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/favicon.png"
              alt="Revival Grace Ministry"
              width={28}
              height={28}
              className="rounded-full"
            />
            <span className="font-serif text-xl font-bold text-heading tracking-tight">
              Revival Grace Ministry
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden bg-white border-b border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {[...leftLinks, ...rightLinks].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-heading hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
