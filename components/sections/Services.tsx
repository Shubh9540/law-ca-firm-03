import Link from 'next/link';
import Image from 'next/image';
import { ServicesProps } from '@/types/templates.types';

export const Services = ({ data }: ServicesProps) => {
  if (!data) return null;

  return (
    <section id="services" className="bg-[var(--color-bg-main)] py-10 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 lg:mb-10">
          {/* Eyebrow: — OUR SERVICES — */}
          <div className="flex items-center gap-3">
            <span className="h-[1.5px] w-8 bg-[var(--color-accent)]" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#6B1728] uppercase">
              {data.eyebrow}
            </span>
            <span className="h-[1.5px] w-8 bg-[var(--color-accent)]" />
          </div>

          {/* Headline */}
          <h2 className="mt-3.5 font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#221816] leading-[1.15]">
            {data.titleStart}{' '}
            <span className="font-serif text-[#6B1728]">
              {data.titleAccent}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 text-sm sm:text-base text-[#554C48] max-w-3xl leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Services List with Top Border & Clean Horizontal Rows */}
        <div className="border-t border-[#E8DFD5]">
          {data.services.map((service) => (
            <div
              key={service.id}
              className="py-4 sm:py-5 border-b border-[#E8DFD5] flex flex-col md:flex-row md:items-center gap-4 sm:gap-6 lg:gap-8"
            >
              {/* Number + Gold Vertical Line */}
              <div className="flex items-center gap-3.5 sm:gap-4 shrink-0 w-20 sm:w-24">
                <span className="font-serif italic font-bold text-3xl sm:text-[34px] text-[#6B1728] leading-none">
                  {service.number}
                </span>
                <span className="h-8 sm:h-9 w-[1.5px] bg-[var(--color-accent)] shrink-0" />
              </div>

              {/* Wide Photographic Banner Thumbnail */}
              <div className="relative h-[95px] sm:h-[105px] lg:h-[110px] w-full md:w-[320px] lg:w-[360px] xl:w-[380px] shrink-0 overflow-hidden rounded-md border border-[#E8DFD3] shadow-xs bg-[#FAF8F5]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Title & Description */}
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-xl sm:text-[22px] lg:text-2xl font-bold text-[#6B1728] leading-snug">
                  <Link href={service.url} className="hover:underline">
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm lg:text-[14px] text-[#4F4744] leading-relaxed max-w-xl">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
