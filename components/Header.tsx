"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Header({
  variant = 'default',
  hireMeHref = '/book-a-session',
}: {
  variant?: 'default' | 'transparent';
  hireMeHref?: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const isTransparent = variant === 'transparent';
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isTransparent) return;

    const headerHeight = headerRef.current?.offsetHeight ?? 0;
    const mainEl = document.querySelector('main');
    const heroEl = mainEl?.children?.[1] as Element | undefined;

    if (!heroEl) {
      setHasScrolled(window.scrollY > 24);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHasScrolled(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.01,
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
      },
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, [isTransparent]);

  const showSolidHeader = !isTransparent || hasScrolled;
  const navLinkClasses = `inline-flex items-center px-3 py-2 rounded-md hover:text-primary hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 transition-colors ${showSolidHeader ? 'text-mono-1' : 'text-contrast-light hover:bg-white/10'}`;
  const mobileNavLinkClasses = 'w-full text-center inline-flex items-center justify-center px-4 py-3 rounded-md hover:text-primary hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 transition-colors text-mono-1';
  const mobileMenuButtonClasses = `inline-flex items-center justify-center rounded-md px-3 py-3 shadow-sm ring-1 backdrop-blur-xl backdrop-saturate-150 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
    showSolidHeader
      ? 'bg-white/25 text-mono-1 ring-black/10 hover:bg-white/32'
      : 'bg-white/12 text-contrast-light ring-white/35 hover:bg-white/18'
  }`;

  return (
    <header
      ref={(el) => {
        headerRef.current = el;
      }}
      className={`${
        isTransparent
          ? hasScrolled
            ? 'fixed top-0 left-0 right-0'
            : 'absolute top-0 left-0 right-0'
          : 'sticky top-0'
      } z-50 py-3 sm:py-4 px-4 sm:px-6 transition-colors duration-200 ${
        showSolidHeader
          ? 'text-mono-1 bg-white/35 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_10px_30px_rgba(0,0,0,0.10)] border-b border-black/5 ring-1 ring-white/25'
          : 'bg-transparent text-contrast-light'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={48}
              height={48}
              className={`h-10 w-10 sm:h-12 sm:w-12 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] filter ${showSolidHeader ? 'brightness-0' : 'brightness-0 invert'}`}
              aria-hidden="true"
              priority
            />
            <span
              className={`block max-w-[52vw] truncate text-sm sm:text-base ${showSolidHeader ? '!text-contrast-dark' : '!text-contrast-light'}`}
            >
              Kekeli&apos;s Studio
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex justify-center items-center gap-2">
          <Link href="/" className={navLinkClasses}>Home</Link>
          <Link href="/portfolio" className={navLinkClasses}>Portfolio</Link>
          <Link href="/about" className={navLinkClasses}>About</Link>
          <Link href="/contact" className={navLinkClasses}>Contact</Link>
        </nav>
        <div className="hidden md:flex flex-1 justify-end">
          <Link
            href={hireMeHref}
            className="btn-pill-primary"
          >
            HIRE ME
          </Link>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className={mobileMenuButtonClasses}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-base text-mono-1 rounded-lg p-6">
          <nav className="flex flex-col items-center gap-4">
            <Link href="/" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/portfolio" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
            <Link href="/about" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/contact" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link
              href={hireMeHref}
              className="btn-pill-primary mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              HIRE ME
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
