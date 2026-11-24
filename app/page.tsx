import rawData from '@/data/templates.json';
import { LawCaFirmTemplateData } from '@/types/templates.types';
import { Hero } from '@/components/sections/Hero';
import { AboutUs } from '@/components/sections/AboutUs';
import { Services } from '@/components/sections/Services';
import { Team } from '@/components/sections/Team';
import { Testimonials } from '@/components/sections/Testimonials';
import { ContactInfo } from '@/components/sections/ContactInfo';
import { Faq } from '@/components/sections/Faq';
import { Consult } from '@/components/sections/Consult';

export default function Home() {
  const data = rawData as LawCaFirmTemplateData;
  const sections = data.categories.LawCaFirm.sections;

  return (
    <main className="flex min-h-screen w-full min-w-0 flex-col bg-[var(--color-bg-main)]">
      <Hero data={sections.Hero.variants.LawCaFirmHero2} />
      <AboutUs data={sections.AboutUs.variants.LawCaFirmAboutUs2} />
      <Services data={sections.Services.variants.LawCaFirmServices2} />
      <Team data={sections.Team.variants.LawCaFirmTeam2} />
      <Testimonials data={sections.Testimonials.variants.LawCaFirmTestimonials2} />
      <Faq data={sections.Faq.variants.LawCaFirmFaq2} />
      <ContactInfo data={sections.ContactInfo.variants.LawCaFirmContactInfo2} />
      <Consult data={sections.Consult.variants.LawCaFirmConsult2} />
    </main>
  );
}
