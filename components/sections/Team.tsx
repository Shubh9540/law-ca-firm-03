import Image from 'next/image';
import { FaBalanceScale } from 'react-icons/fa';
import { TeamProps } from '@/types/templates.types';

export const Team = ({ data }: TeamProps) => {
  if (!data) return null;

  return (
    <section id="team" className="bg-[var(--color-bg-main)] pt-6 pb-8 lg:pt-8 lg:pb-14">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Centered Scales Icon, Eyebrow & Headline */}
        <div className="mb-8 lg:mb-10 text-center max-w-3xl mx-auto">
          {/* Centered Scales Icon */}
          <div className="flex justify-center mb-2.5">
            <FaBalanceScale className="text-[var(--color-accent)] text-2xl sm:text-3xl" />
          </div>

          {/* Eyebrow: — OUR TEAM — */}
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
        </div>

        {/* 4 Team Member Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {data.members.map((member) => (
            <div
              key={member.id}
              className="group rounded-2xl sm:rounded-3xl border border-[#EAE2D5] bg-[#FAF7F2] overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              {/* Member Portrait Photo */}
              <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-[#F0EBE1]">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Name, Designation & Gold Underline Accent */}
              <div className="p-5 sm:p-6 text-center flex-1 flex flex-col justify-center bg-[#FAF7F2]">
                <h3 className="font-serif text-lg sm:text-[21px] font-bold text-[#6B1728] leading-snug">
                  {member.name}
                </h3>
                <p className="mt-1.5 text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#695F5B] uppercase">
                  {member.role}
                </p>
                {/* Centered Short Gold Accent Line */}
                <div className="h-[2px] w-10 bg-[var(--color-accent)] mx-auto mt-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
