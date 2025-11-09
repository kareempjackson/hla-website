import { client } from "./client";

// Define types for the Services Page
export interface ServiceSection {
  title?: string;
  subtitle?: string;
  deliveryTitle?: string;
  deliveryItems?: string[];
  offerTitle?: string;
  offerItems?: string[];
  provideTitle?: string;
  provideItems?: string[];
  outcome?: string;
  ctaText?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
}

export interface SpecializedServicesSection {
  title?: string;
  description?: string;
  provideTitle?: string;
  provideItems?: string[];
  ctaText?: string;
  images?: Array<{
    asset?: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  }>;
}

export interface HeroSection {
  label?: string;
  title?: string;
  ctaText?: string;
  heroImage?: {
    asset?: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
}

export interface CtaSection {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export interface ServicesPage {
  heroSection?: HeroSection;
  bookkeepingService?: ServiceSection;
  controllerService?: ServiceSection;
  complianceService?: ServiceSection;
  strategicAddons?: ServiceSection;
  specializedServices?: SpecializedServicesSection;
  ctaSection?: CtaSection;
}

export async function getServicesPageData(): Promise<ServicesPage | null> {
  return client.fetch(
    `*[_type == "servicesPage" && _id == "servicesPage"][0] {
      heroSection,
      bookkeepingService,
      controllerService,
      complianceService,
      strategicAddons,
      specializedServices,
      ctaSection
    }`
  );
}
