import { client } from "./client";

// Define types for the About Page
export interface HeroSection {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  heroMedia?: {
    mediaType?: "image" | "video";
    image?: {
      asset: {
        _ref: string;
        _type: string;
      };
      alt?: string;
    };
    video?: {
      asset?: {
        url?: string;
      };
    };
    posterImage?: {
      asset: {
        _ref: string;
        _type: string;
      };
      alt?: string;
    };
  };
  heroImage?: {
    asset?: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
}

export interface MissionSection {
  title?: string;
  description1?: string;
  description2?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
}

export interface ClientType {
  title?: string;
  description?: string;
}

export interface WhoWeServeSection {
  title?: string;
  introduction?: string;
  clientTypes?: ClientType[];
  closingText?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  images?: Array<{
    asset?: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  }>;
}

export interface ApproachSection {
  label?: string;
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  features?: string[];
  additionalInfo?: string[];
  bottomText?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
}

export interface TeamMember {
  name?: string;
  role?: string;
  photo?: {
    asset?: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  quote?: string;
  bio?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
}

export interface TeamSection {
  title?: string;
  teamMembers?: TeamMember[];
}

export interface TestimonialsSection {
  title?: string;
  showTestimonials?: boolean;
  testimonials?: Array<{
    name?: string;
    role?: string;
    company?: string;
    quote?: string;
    rating?: number;
  }>;
}

export interface CtaSection {
  title?: string;
  description?: string;
  buttonText?: string;
}

export interface AboutPage {
  heroSection?: HeroSection;
  missionSection?: MissionSection;
  whoWeServeSection?: WhoWeServeSection;
  approachSection?: ApproachSection;
  teamSection?: TeamSection;
  testimonialsSection?: TestimonialsSection;
  ctaSection?: CtaSection;
}

export async function getAboutPageData(): Promise<AboutPage | null> {
  return client.fetch(
    `*[_type == "aboutPage" && _id == "aboutPage"][0] {
      heroSection{
        title,
        description,
        primaryButtonText,
        secondaryButtonText,
        heroMedia{
          mediaType,
          image,
          video{asset->{url}},
          posterImage
        },
        heroImage
      },
      missionSection,
      whoWeServeSection,
      approachSection,
      teamSection,
      testimonialsSection{
        title,
        showTestimonials,
        testimonials[]->{
          name,
          role,
          company,
          quote,
          rating
        }
      },
      ctaSection
    }`
  );
}
