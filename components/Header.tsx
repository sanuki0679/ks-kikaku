"use client";

import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/lib/data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = isScrolled || isOpen;

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-300 ${
        isSolid
          ? "border-b border-navy-100 bg-white/90 shadow-sm backdrop-blur-md"
          : "border-b border-white/10 bg-navy-950/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a
          href="#top"
          className={`font-display text-lg font-bold tracking-tight transition-colors md:text-xl ${
            isSolid ? "text-navy-900" : "text-white"
          }`}
          onClick={() => setIsOpen(false)}
        >
          {siteConfig.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`group relative text-sm font-medium transition-colors ${
                isSolid ? "text-navy-700 hover:text-navy-900" : "text-navy-100 hover:text-white"
              }`}
            >
              {item.label}
              <span
                aria-hidden="true"
                className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-gold-400 transition-all duration-300 group-hover:w-full"
              />
            </a>
          ))}
          <a
            href="#contact"
            className={`rounded-full px-5 py-2 text-sm font-bold transition ${
              isSolid
                ? "bg-navy-900 text-white hover:bg-navy-800"
                : "bg-gradient-to-r from-gold-300 to-gold-400 text-navy-900 hover:from-gold-200 hover:to-gold-300"
            }`}
          >
            お問い合わせ
          </a>
        </nav>

        <button
          type="button"
          className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors md:hidden ${
            isSolid ? "border-navy-200 text-navy-900" : "border-white/25 text-white"
          }`}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">メニュー</span>
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-navy-100 bg-white px-4 py-4 md:hidden">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="mt-2 block rounded-full bg-gradient-to-r from-gold-300 to-gold-400 px-3 py-3 text-center text-base font-bold text-navy-900"
                onClick={() => setIsOpen(false)}
              >
                お問い合わせ
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
