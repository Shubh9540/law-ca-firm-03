'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { FaBalanceScale, FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { TestimonialsProps } from '@/types/templates.types';

export const Testimonials = ({ data }: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const touchStartX = useRef<number | null>(null);

  const items = data?.items || [];
  const total = items.length;

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // Autoplay functionality: advances every 4 seconds when not hovered
  useEffect(() => {
    if (total <= 1 || isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(timer);
  }, [total, isHovered]);

  if (!data || total === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  // Touch Swipe for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
    touchStartX.current = null;
  };

  return (
    <section
      id="testimonials"
      className="bg-[var(--color-bg-main)] py-12 lg:py-20 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 lg:mb-14 text-center max-w-3xl mx-auto">
          {/* Centered Scales Icon */}
          <div className="flex justify-center mb-2.5">
            <FaBalanceScale className="text-[var(--color-accent)] text-2xl sm:text-3xl" />
          </div>

          {/* Eyebrow: — TESTIMONIALS — */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1.5px] w-8 sm:w-10 bg-[var(--color-accent)]" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#6B1728] uppercase">
              {data.eyebrow}
            </span>
            <span className="h-[1.5px] w-8 sm:w-10 bg-[var(--color-accent)]" />
          </div>

          {/* Headline */}
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-[#221816] leading-[1.15]">
            {data.titleStart}{' '}
            <span className="font-serif text-[#6B1728]">
              {data.titleAccent}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base lg:text-[17px] text-[#554C48] leading-relaxed max-w-2xl mx-auto">
            {data.subtitle}
          </p>

          {/* Short Gold Underline Under Subtitle */}
          <div className="h-[2px] w-14 bg-[var(--color-accent)] mx-auto mt-4" />
        </div>

        {/* Working Carousel Track */}
        <div
          className="relative overflow-hidden pt-5 pb-2"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {[...items, ...items].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="w-full shrink-0 px-3 sm:w-1/2 lg:w-1/3"
              >
                <div className="relative flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl border border-[#EDE5DB] bg-[#FFFFFF] p-6 sm:p-7 shadow-sm transition hover:shadow-md">
                  
                  {/* Top-Left Maroon Quote Badge */}
                  <div className="absolute -top-3.5 left-6 flex h-9 w-9 items-center justify-center rounded-b-md rounded-tl-md bg-[#6B1728] text-white shadow-sm">
                    <FaQuoteLeft className="text-sm" />
                  </div>

                  {/* Top Gold Accent Line along card top border */}
                  <div className="absolute top-0 left-16 right-6 h-[1.5px] bg-[var(--color-accent)]" />

                  {/* Review Quote Text: Straight Regular Font (Not Italic) with Large Size */}
                  <p className="mt-4 text-sm sm:text-base lg:text-[16px] leading-[1.7] text-[#4F4744] font-normal">
                    {item.quote}
                  </p>

                  {/* Author Profile Block */}
                  <div className="mt-7 flex items-center gap-3.5 sm:gap-4 pt-4 border-t border-[#F2ECE3]">
                    {/* Reused High-Res Team Avatar Image */}
                    <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-sm bg-[#FAF7F2]">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        unoptimized
                        sizes="64px"
                        className="object-cover object-top"
                      />
                    </div>

                    {/* Vertical Gold Separator */}
                    <span className="h-9 w-[1.5px] bg-[var(--color-accent)] shrink-0" />

                    {/* Name, Role & 5 Stars */}
                    <div>
                      <h3 className="font-serif text-base sm:text-lg lg:text-[19px] font-bold text-[#6B1728] leading-tight">
                        {item.name}
                      </h3>
                      <p className="mt-0.5 text-xs sm:text-[12px] font-semibold tracking-wider text-[#695F5B] uppercase">
                        {item.role}
                      </p>
                      {/* 5 Stars Rating */}
                      <div className="mt-1 flex items-center gap-1 text-[var(--color-accent)] text-xs sm:text-sm">
                        {Array.from({ length: item.rating || 5 }).map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Controls: [Gold Line] [< Maroon] [> Gold] [Gold Line] */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-3 sm:gap-4">
          {/* Left Decorative Gold Line */}
          <span className="h-[1.5px] w-20 sm:w-36 bg-[var(--color-accent)]" />

          {/* Previous Button (Deep Maroon) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-md bg-[#6B1728] text-white shadow transition hover:bg-[#52101E] active:scale-95 cursor-pointer"
          >
            <FaChevronLeft className="text-xs" />
          </button>

          {/* Next Button (Warm Gold) */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--color-accent)] text-white shadow transition hover:bg-[#B38F48] active:scale-95 cursor-pointer"
          >
            <FaChevronRight className="text-xs" />
          </button>

          {/* Right Decorative Gold Line */}
          <span className="h-[1.5px] w-20 sm:w-36 bg-[var(--color-accent)]" />
        </div>

      </div>
    </section>
  );
};
