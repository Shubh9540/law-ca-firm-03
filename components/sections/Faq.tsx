'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaBalanceScale, FaChevronDown } from 'react-icons/fa';
import { FaqProps } from '@/types/templates.types';

export const Faq = ({ data }: FaqProps) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  if (!data) return null;

  return (
    <section id="faqs" className="bg-[var(--color-bg-soft)] py-8 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading & Image */}
          <div className="lg:col-span-5">
            <div className="section-kicker">
              <FaBalanceScale className="text-xs" />
              <span>{data.eyebrow}</span>
            </div>
            <h2 className="mt-3 font-serif-title text-2xl font-bold tracking-tight text-[var(--color-heading)] sm:text-4xl leading-tight">
              {data.titleStart}{' '}
              <span className="text-[var(--color-primary)]">
                {data.titleAccent}
              </span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
              {data.subtitle}
            </p>

            <div className="mt-6 relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[var(--color-border)] shadow-md hidden sm:block">
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {data.items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-white)] shadow-md'
                      : 'border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-heading)] hover:border-[var(--color-primary-border)]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left font-serif-title text-sm sm:text-base font-bold transition-colors"
                  >
                    <span>{item.question}</span>
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-[var(--color-primary-dark)] text-[var(--color-accent)]'
                          : 'bg-[var(--color-bg-soft)] text-[var(--color-text-muted)]'
                      }`}
                    >
                      <FaChevronDown />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm leading-relaxed text-[var(--color-white)]/90 border-t border-white/10 pt-3">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
