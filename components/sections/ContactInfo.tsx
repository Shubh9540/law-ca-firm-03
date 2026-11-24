import Image from 'next/image';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { FiPhoneCall } from 'react-icons/fi';
import { ContactInfoProps } from '@/types/templates.types';

export const ContactInfo = ({ data }: ContactInfoProps) => {
  if (!data) return null;

  return (
    <section id="contact" className="scroll-mt-20 bg-[var(--color-bg-main)] overflow-hidden w-full">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[420px] lg:min-h-[460px]">
        
        {/* Left Column (Details) - Aligned with container */}
        <div className="lg:col-span-5 flex flex-col justify-center py-8 lg:py-12 px-4 sm:px-6 lg:pl-[max(1.5rem,calc((100vw-1280px)/2+2rem))] lg:pr-8 xl:pr-10">
          
          {/* Eyebrow: — GET IN TOUCH — */}
          <div className="flex items-center gap-3">
            <span className="h-[1.5px] w-8 sm:w-10 bg-[var(--color-accent)]" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#6B1728] uppercase">
              {data.eyebrow}
            </span>
            <span className="h-[1.5px] w-8 sm:w-10 bg-[var(--color-accent)]" />
          </div>

          {/* Headline: Contact Us */}
          <h2 className="mt-3.5 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-[#221816] leading-[1.14]">
            {data.titleStart || 'Contact'}{' '}
            <span className="font-serif text-[#6B1728]">
              {data.titleAccent || 'Us'}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 text-sm sm:text-base text-[#554C48] leading-relaxed max-w-md">
            {data.subtitle}
          </p>

          {/* Divider Line */}
          <div className="border-t border-[#EDE6DC] mt-6" />

          {/* 3 Contact Rows */}
          <div className="divide-y divide-[#EDE6DC]">
            
            {/* Row 1: EMAIL */}
            <div className="py-4 sm:py-4.5 flex items-center gap-4 sm:gap-5">
              <div className="grid h-10 w-10 shrink-0 place-items-center text-[var(--color-accent)]">
                <HiOutlineMail className="text-2xl sm:text-[26px]" />
              </div>
              <span className="h-7 w-[1.5px] bg-[var(--color-accent)] shrink-0" />
              <div>
                <div className="text-[11px] font-bold tracking-wider text-[#221816] uppercase">
                  EMAIL
                </div>
                <a
                  href={`mailto:${data.email}`}
                  className="mt-0.5 font-serif italic font-bold text-base sm:text-lg text-[#6B1728] hover:underline block"
                >
                  {data.email}
                </a>
              </div>
            </div>

            {/* Row 2: PHONE */}
            <div className="py-4 sm:py-4.5 flex items-center gap-4 sm:gap-5">
              <div className="grid h-10 w-10 shrink-0 place-items-center text-[var(--color-accent)]">
                <FiPhoneCall className="text-xl sm:text-[22px]" />
              </div>
              <span className="h-7 w-[1.5px] bg-[var(--color-accent)] shrink-0" />
              <div>
                <div className="text-[11px] font-bold tracking-wider text-[#221816] uppercase">
                  PHONE
                </div>
                <a
                  href={`tel:${data.phone.replace(/[^+\d]/g, '')}`}
                  className="mt-0.5 font-serif italic font-bold text-base sm:text-lg text-[#6B1728] hover:underline block"
                >
                  {data.phone}
                </a>
              </div>
            </div>

            {/* Row 3: OFFICE */}
            <div className="py-4 sm:py-4.5 flex items-start gap-4 sm:gap-5">
              <div className="grid h-10 w-10 shrink-0 place-items-center text-[var(--color-accent)] pt-0.5">
                <HiOutlineLocationMarker className="text-2xl sm:text-[26px]" />
              </div>
              <span className="h-10 w-[1.5px] bg-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <div className="text-[11px] font-bold tracking-wider text-[#221816] uppercase">
                  OFFICE
                </div>
                <div className="mt-0.5 font-serif italic font-bold text-sm sm:text-base text-[#6B1728] leading-snug">
                  {data.office}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Right Column: Full-Bleed Flush Image (Touching the right edge & full height) */}
        <div className="lg:col-span-7 relative w-full h-[360px] sm:h-[420px] lg:h-auto min-h-[360px] lg:min-h-[520px]">
          <Image
            src={data.image || '/contact/executive-office.webp'}
            alt={data.imageAlt}
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
};
