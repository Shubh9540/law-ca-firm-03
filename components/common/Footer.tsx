'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FooterProps } from '@/types/templates.types';

export const Footer = ({ data }: FooterProps) => {
  if (!data) return null;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
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
    }
  };

  return (
    <footer className="border-t border-[#E8DFD5] bg-[#FFFFFF] text-[#221816]">
      <div className="mx-auto max-w-[1280px] px-4 pt-10 pb-8 sm:px-6 lg:px-8 lg:pt-12 lg:pb-8">
        {/* Main 4 Columns with vertical divider lines on desktop */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-0 items-start">
          {/* Column 1: Logo & Tagline (Enlarged) */}
          <div className="lg:col-span-4 lg:pr-10 lg:border-r lg:border-[#EFE8DF] flex flex-col justify-start">
            <Link
              href="/#hero"
              onClick={(e) => handleScroll(e, '/#hero')}
              className="inline-block"
            >
              <Image
                src={data.logo || '/logo.webp'}
                alt={data.logoAlt}
                width={320}
                height={100}
                unoptimized
                className="h-16 sm:h-[72px] lg:h-[80px] w-auto max-w-[280px] object-contain"
              />
            </Link>
            <p className="mt-5 text-base sm:text-[17px] lg:text-lg leading-relaxed text-[#3D3331] font-normal max-w-[320px]">
              {data.description}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 lg:px-8 lg:border-r lg:border-[#EFE8DF]">
            <h4 className="font-serif text-xl sm:text-[22px] font-bold text-[#221816]">
              {data.quickLinksTitle}
            </h4>
            <div className="mt-2 mb-5 h-[2.5px] w-10 bg-[#C5A059]" />
            <ul className="space-y-3 text-[15px] sm:text-base">
              {data.quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.url}
                    onClick={(e) => handleScroll(e, link.url)}
                    className="group inline-flex items-center gap-2.5 text-[#4A3E3D] transition-colors hover:text-[#6B1728]"
                  >
                    <span className="text-xs font-bold text-[#C5A059] group-hover:translate-x-0.5 transition-transform">
                      &gt;
                    </span>
                    <span className="font-medium">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="lg:col-span-2 lg:px-8 lg:border-r lg:border-[#EFE8DF]">
            <h4 className="font-serif text-xl sm:text-[22px] font-bold text-[#221816]">
              {data.usefulLinksTitle}
            </h4>
            <div className="mt-2 mb-5 h-[2.5px] w-10 bg-[#C5A059]" />
            <ul className="space-y-3 text-[15px] sm:text-base">
              {data.usefulLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.url}
                    onClick={(e) => handleScroll(e, link.url)}
                    className="group inline-flex items-center gap-2.5 text-[#4A3E3D] transition-colors hover:text-[#6B1728]"
                  >
                    <span className="text-xs font-bold text-[#C5A059] group-hover:translate-x-0.5 transition-transform">
                      &gt;
                    </span>
                    <span className="font-medium">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="lg:col-span-4 lg:pl-10">
            <h4 className="font-serif text-xl sm:text-[22px] font-bold text-[#221816]">
              {data.contactTitle}
            </h4>
            <div className="mt-2 mb-5 h-[2.5px] w-10 bg-[#C5A059]" />
            <div className="space-y-4 text-[15px] sm:text-base">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#6B1728] text-white">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <div className="text-[#4A3E3D] leading-snug font-medium whitespace-pre-line">
                  {data.address}
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#6B1728] text-white">
                  <FaPhoneAlt className="text-xs" />
                </div>
                <a
                  href={`tel:${data.phone.replace(/[^+\d]/g, '')}`}
                  className="text-[#4A3E3D] font-medium transition-colors hover:text-[#6B1728]"
                >
                  {data.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#6B1728] text-white">
                  <FaEnvelope className="text-xs" />
                </div>
                <a
                  href={`mailto:${data.email}`}
                  className="text-[#4A3E3D] font-medium transition-colors hover:text-[#6B1728]"
                >
                  {data.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Warm Gold Divider Line */}
        <div className="mt-12 mb-6 h-[1.5px] w-full bg-[#C5A059]" />

        {/* Copyright Bar - Left Aligned */}
        <p className="text-xs sm:text-sm text-[#594742] text-left">
          {data.copyrightText}
        </p>
      </div>
    </footer>
  );
};
