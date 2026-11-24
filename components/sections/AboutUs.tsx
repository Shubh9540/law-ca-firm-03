'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaBalanceScale } from 'react-icons/fa';
import { AboutUsProps } from '@/types/templates.types';

export const AboutUs = ({ data }: AboutUsProps) => {
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || !data?.stats) return;

    data.stats.forEach((stat) => {
      const target = stat.percent ?? parseInt(stat.value.replace(/\D/g, '') || '95', 10);
      const duration = 1600;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.round(ease * target);
        setCounts((prev) => ({ ...prev, [stat.id]: currentVal }));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });
  }, [inView, data]);

  if (!data) return null;

  return (
    <section ref={sectionRef} id="about" className="bg-[var(--color-bg-main)] py-8 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          
          {/* Left Column: Full-sized Framed Photo & Outward-Protruding Badge */}
          <div className="relative pb-10 sm:pb-14 lg:col-span-5 lg:pb-0 lg:pr-4">
            <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[460px] lg:mx-0">
              
              {/* Top-Left Deep Maroon Rounded Accent Block */}
              <div
                aria-hidden="true"
                className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 h-44 w-24 sm:h-56 sm:w-32 rounded-3xl bg-[#5C1021] z-0 shadow-sm"
              />

              {/* Main Lady Justice Photo with Smooth Rounded Corners */}
              <div className="relative z-10 overflow-hidden rounded-3xl border border-[#E8E2D8] bg-[#FDFBF8] shadow-lg">
                <div className="relative aspect-[4/4.75] w-full">
                  <Image
                    src={data.image || '/about/lady-justice-clean.webp'}
                    alt={data.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 460px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Floating Bottom-Right Badge: Protrudes outward to the right and bottom */}
              <div className="absolute -bottom-7 -right-6 sm:-bottom-9 sm:-right-10 lg:-bottom-10 lg:-right-12 z-20 rounded-[28px] sm:rounded-[32px] border border-[#EDE5DB] bg-[#FFFDF9] p-4 sm:p-5 lg:p-6 shadow-[0_20px_45px_rgba(40,10,15,0.13)] text-center w-[165px] sm:w-[190px] lg:w-[205px]">
                {/* Transparent Authentic Gold Laurel Wreath with Classical Pillar Emblem */}
                <div className="relative mx-auto mb-1 h-12 w-24 sm:h-14 sm:w-28 lg:h-16 lg:w-32">
                  <Image
                    src="/about/wreath-emblem.png"
                    alt="Legal Excellence Emblem"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>

                {/* Big Bold Maroon Number */}
                <div className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#6B1728] leading-none">
                  {data.experienceBadge.value}
                </div>

                {/* Subtext */}
                <div className="mt-1.5 text-xs sm:text-[13px] font-semibold leading-snug text-[#4A423F]">
                  {data.experienceBadge.label}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Large Prominent Typography & Animated Working Counters */}
          <div className="flex flex-col justify-center lg:col-span-7 lg:pl-6 xl:pl-8">
            
            {/* Eyebrow: [Scales] ABOUT JURISTRA ────── */}
            <div className="flex items-center gap-3">
              <FaBalanceScale className="text-[var(--color-accent)] text-base sm:text-lg" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#221816] uppercase">
                {data.eyebrow}
              </span>
              <span className="h-[2px] w-12 sm:w-16 bg-[var(--color-accent)]" />
            </div>

            {/* Headline: Prominent, Big & Authoritative Serif */}
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[48px] font-bold tracking-tight text-[#5C1021] leading-[1.16]">
              {data.titleStart}
              <br />
              {data.titleFor ? `${data.titleFor} ` : 'for '}
              <span className="font-serif italic font-normal text-[var(--color-accent)]">
                {data.titleAccent}
              </span>
            </h2>

            {/* Description Paragraph: Clear, Authoritative & Readable */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[16px] leading-[1.75] text-[#554C48] max-w-xl">
              {data.description}
            </p>

            {/* Two Working Animated Counter Metrics */}
            <div className="mt-7 sm:mt-8 space-y-5">
              {data.stats.map((stat) => {
                const targetPercent = stat.percent ?? parseInt(stat.value.replace(/\D/g, '') || '95', 10);
                const displayVal = inView ? (counts[stat.id] ?? 0) : targetPercent;
                const arcVal = inView ? (counts[stat.id] ?? 0) : targetPercent;

                return (
                  <div key={stat.id} className="flex items-center gap-4 sm:gap-5">
                    {/* Donut Progress Ring with Animated Counter */}
                    <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center">
                      <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                        {/* Background Neutral Track */}
                        <path
                          className="text-[#EFE7DC]"
                          strokeWidth="3.2"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        {/* Smooth Active Gold Progress Arc */}
                        <path
                          className="text-[var(--color-accent)] transition-all duration-300"
                          strokeDasharray={`${arcVal}, 100`}
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      {/* Animated Percentage Inside Ring */}
                      <span className="absolute font-serif text-xs sm:text-sm font-bold text-[#221816]">
                        {displayVal}%
                      </span>
                    </div>

                    {/* Vertical Divider */}
                    <span className="h-10 sm:h-12 w-[1.5px] bg-[#E2D8CC] shrink-0" />

                    {/* Metric Title & Description */}
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#5C1021]">
                        {stat.title}
                      </h3>
                      <p className="mt-0.5 text-xs sm:text-[13px] text-[#635B57] leading-relaxed">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
