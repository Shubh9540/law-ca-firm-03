'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiArrowLongRight } from 'react-icons/hi2';
import { HeaderProps } from '@/types/templates.types';

export const Header = ({ data }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!data) return;

    const sectionIds = [...data.navLinks, data.contactButton]
      .map((link) => link.url.split('#')[1])
      .filter(Boolean);

    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const marker = window.scrollY + Math.min(window.innerHeight * 0.35, 300) + 80;
      let currentId = sectionIds[0] ?? 'hero';

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) currentId = id;
      });

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 5) {
        currentId = sectionIds[sectionIds.length - 1] ?? currentId;
      }

      setActiveId(currentId);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [data]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    const hash = url.split('#')[1];
    if (!hash) return;

    const target = document.getElementById(hash);
    if (target) {
      e.preventDefault();
      const headerOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', `#${hash}`);
      setActiveId(hash);
    }
  };

  if (!data) return null;

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-[#E8E2D8] bg-[#FFFFFF] transition-all duration-200 ${
        scrolled ? 'shadow-md py-0' : 'shadow-sm py-0'
      }`}
    >
      <div className="mx-auto flex h-[84px] w-full max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-[92px] lg:px-8">
        {/* Left: Brand Logo (Large & Prominent) & Vertical Divider */}
        <div className="flex shrink-0 items-center gap-4 sm:gap-6">
          <Link href="/#hero" aria-label={data.logoAlt} className="flex items-center py-1">
            <Image
              src={data.logo || '/logo.webp'}
              alt={data.logoAlt}
              width={600}
              height={165}
              priority
              unoptimized
              className="h-12 w-auto max-w-[220px] object-contain sm:h-14 sm:max-w-[270px] lg:h-[64px] lg:max-w-[320px]"
            />
          </Link>
          {/* Subtle Vertical Divider matching logo height */}
          <span className="hidden h-9 sm:h-11 w-[1.5px] bg-[#D4CECA] md:block" />
        </div>

        {/* Center: Navigation Links in Title Case (NO UNDERLINE on active or normal) */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8 2xl:gap-9" aria-label="Primary navigation">
          {data.navLinks.map((link) => {
            const sectionId = link.url.split('#')[1];
            const isActive = activeId === sectionId;
            return (
              <Link
                key={link.id}
                href={link.url}
                onClick={(e) => handleNavClick(e, link.url)}
                aria-current={isActive ? 'page' : undefined}
                className={`py-1 text-[16px] xl:text-[17px] transition-colors no-underline ${
                  isActive
                    ? 'font-bold text-[var(--color-primary)]'
                    : 'font-semibold text-[#2D2825] hover:text-[var(--color-primary)]'
                }`}
              >
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA Button with Designer Gold L-Bracket Frame */}
        <div className="flex shrink-0 items-center gap-3">
          <div className="relative hidden sm:inline-block">
            {/* Top-Right Decorative Gold L-Bracket Outline */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-1.5 -right-1.5 h-[80%] w-[55%] rounded-tr-xl border-t-2 border-r-2 border-[var(--color-accent)] transition-all duration-300"
            />
            {/* Main Maroon Button */}
            <Link
              href={data.contactButton.url}
              onClick={(e) => handleNavClick(e, data.contactButton.url)}
              className="relative z-10 inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-6 py-2.5 text-[15px] font-semibold tracking-wide text-[var(--color-white)] shadow transition-all duration-300 hover:bg-[var(--color-primary-hover)]"
            >
              <span>{data.contactButton.label}</span>
              <HiArrowLongRight className="text-lg transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? data.closeMenuLabel : data.openMenuLabel}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-lg border border-[#DCD5CB] text-[#2D2825] transition hover:bg-[#F9F6F0] lg:hidden"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <nav
          className="border-t border-[#E8E2D8] bg-[#FFFFFF] px-5 py-5 shadow-lg lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-[1280px] flex-col gap-1">
            {data.navLinks.map((link) => {
              const sectionId = link.url.split('#')[1];
              const isActive = activeId === sectionId;
              return (
                <Link
                  key={link.id}
                  href={link.url}
                  onClick={(e) => {
                    handleNavClick(e, link.url);
                    setOpen(false);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center justify-between border-b border-[#F0EBE3] py-3 text-[16px] font-semibold transition no-underline ${
                    isActive
                      ? 'text-[var(--color-primary)] font-bold'
                      : 'text-[#2D2825] hover:text-[var(--color-primary)]'
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
            <div className="pt-4">
              <Link
                href={data.contactButton.url}
                onClick={(e) => {
                  handleNavClick(e, data.contactButton.url);
                  setOpen(false);
                }}
                className="flex items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] px-5 py-3 text-[16px] font-semibold text-[var(--color-white)] shadow-md"
              >
                <span>{data.contactButton.label}</span>
                <HiArrowLongRight className="text-base" />
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};
