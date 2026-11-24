export interface LinkItem {
  id: string;
  label: string;
  url: string;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  navLinks: LinkItem[];
  contactButton: LinkItem;
  openMenuLabel: string;
  closeMenuLabel: string;
}

export interface HeaderProps {
  data?: HeaderData;
}

export interface HeroData {
  eyebrow: string;
  titleStart: string;
  titleLine1?: string;
  titleLine2?: string;
  titleAccent: string;
  titleEnd?: string;
  description: string;
  primaryButton?: LinkItem;
  secondaryButton?: LinkItem;
  backgroundImage: string;
  experienceHighlight?: string;
}

export interface HeroProps {
  data?: HeroData;
}

export interface AboutStat {
  id: string;
  value: string;
  percent?: number;
  title: string;
  description: string;
}

export interface AboutUsData {
  eyebrow: string;
  titleStart: string;
  titleFor?: string;
  titleAccent: string;
  titleEnd?: string;
  description: string;
  image: string;
  imageAlt: string;
  experienceBadge: {
    value: string;
    label: string;
  };
  stats: AboutStat[];
}

export interface AboutUsProps {
  data?: AboutUsData;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  url: string;
}

export interface ServicesData {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  titleEnd?: string;
  subtitle: string;
  services: ServiceItem[];
}

export interface ServicesProps {
  data?: ServicesData;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
}

export interface TeamData {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  titleEnd?: string;
  subtitle: string;
  members: TeamMember[];
}

export interface TeamProps {
  data?: TeamData;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
  imageAlt: string;
}

export interface TestimonialsData {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  titleEnd?: string;
  subtitle: string;
  items: TestimonialItem[];
}

export interface TestimonialsProps {
  data?: TestimonialsData;
}

export interface ContactInfoData {
  eyebrow: string;
  title: string;
  titleStart?: string;
  titleAccent?: string;
  subtitle: string;
  email: string;
  phone: string;
  office: string;
  image: string;
  imageAlt: string;
}

export interface ContactInfoProps {
  data?: ContactInfoData;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqData {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  titleEnd?: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  items: FaqItem[];
}

export interface FaqProps {
  data?: FaqData;
}

export interface ConsultData {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  titleEnd?: string;
  subtitle: string;
  formTitle: string;
  servicesPlaceholder: string;
  serviceOptions: string[];
  submitText: string;
  mapEmbedUrl: string;
  mapAddress: string;
}

export interface ConsultProps {
  data?: ConsultData;
}

export type ContactData = ConsultData;
export type ContactProps = ConsultProps;

export interface SocialLink extends LinkItem {
  icon: string;
  ariaLabel: string;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  description: string;
  quickLinksTitle: string;
  quickLinks: LinkItem[];
  usefulLinksTitle: string;
  usefulLinks: LinkItem[];
  contactTitle: string;
  address: string;
  phone: string;
  email: string;
  copyrightText: string;
  socialLinks: SocialLink[];
}

export interface FooterProps {
  data?: FooterData;
}

export interface SiteTheme {
  fontFamily: string;
}

export interface LawCaFirmSections {
  Header: { variants: { LawCaFirmHeader2: HeaderData } };
  Hero: { variants: { LawCaFirmHero2: HeroData } };
  AboutUs: { variants: { LawCaFirmAboutUs2: AboutUsData } };
  Services: { variants: { LawCaFirmServices2: ServicesData } };
  Team: { variants: { LawCaFirmTeam2: TeamData } };
  Testimonials: { variants: { LawCaFirmTestimonials2: TestimonialsData } };
  ContactInfo: { variants: { LawCaFirmContactInfo2: ContactInfoData } };
  Faq: { variants: { LawCaFirmFaq2: FaqData } };
  Consult: { variants: { LawCaFirmConsult2: ConsultData } };
}

export interface PageComponentItem {
  key: string;
  component: string;
}

export interface LawCaFirmTemplateData {
  common: {
    theme: SiteTheme;
    Footer: FooterData;
  };
  categories: {
    LawCaFirm: {
      sections: LawCaFirmSections;
    };
  };
  pages: {
    home: {
      components: PageComponentItem[];
    };
  };
}
