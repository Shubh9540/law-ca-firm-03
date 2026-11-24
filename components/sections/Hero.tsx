import Image from 'next/image';
import { HeroProps } from '@/types/templates.types';

export const Hero = ({ data }: HeroProps) => {
  if (!data) return null;

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#410413] min-h-[440px] sm:min-h-[500px] lg:min-h-[560px] flex items-center"
    >
      {/* Background Hero Banner Image (Gavel, Law Books & Lady Justice on the right) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.backgroundImage || '/hero/hero-banner.webp'}
          alt="Law Firm Chambers with Gavel and Lady Justice Statue"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right sm:object-right md:object-right lg:object-right"
        />
        {/* Soft Vignette / Gradient Overlay to ensure text readability on all viewports */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#410413] via-[#410413]/95 sm:via-[#410413]/85 md:via-[#410413]/70 to-transparent sm:w-[65%] lg:w-[55%]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow: — JURISTRA LAW FIRM — */}
          <div className="flex items-center gap-3">
            <span className="h-[1.5px] w-6 sm:w-8 bg-[var(--color-accent)]" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[var(--color-accent)] uppercase">
              {data.eyebrow}
            </span>
            <span className="h-[1.5px] w-6 sm:w-8 bg-[var(--color-accent)]" />
          </div>

          {/* Headline:
              Strategic Legal
              Solutions for Your
              Rights & Business (Italic Gold)
          */}
          <h1 className="mt-4 sm:mt-5 font-serif text-3xl font-bold tracking-tight text-[var(--color-white)] sm:text-5xl lg:text-[58px] leading-[1.12]">
            {data.titleLine1 || 'Strategic Legal'}
            <br />
            {data.titleLine2 || 'Solutions for Your'}
            <br />
            <span className="font-serif italic font-normal text-[var(--color-accent)]">
              {data.titleAccent}
            </span>
          </h1>

          {/* Subtitle / Description */}
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm lg:text-base leading-relaxed text-[#F3EBE8]/90 max-w-md sm:max-w-lg">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
};
