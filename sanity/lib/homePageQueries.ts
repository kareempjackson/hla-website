import { client } from "../lib/client";

export interface HomePage {
  heroSection?: {
    title?: string;
    subtitle?: string;
    description?: string;
    ctaText?: string;
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
      asset: {
        _ref: string;
        _type: string;
      };
      alt?: string;
    };
  };
  whyGreatSection?: {
    title?: string;
    problems?: string[];
    description?: string;
    consequencesTitle?: string;
    consequences?: string[];
    closingText?: string;
    image?: {
      asset: {
        _ref: string;
        _type: string;
      };
      alt?: string;
    };
  };
  whatWeDoSection?: {
    label?: string;
    title?: string;
    description1?: string;
    description2?: string;
    ctaButton1?: string;
    ctaButton2?: string;
    servicesTitle?: string;
    services?: Array<{
      title?: string;
      description?: string;
    }>;
    image?: {
      asset: {
        _ref: string;
        _type: string;
      };
      alt?: string;
    };
  };
  showHowCanWeHelp?: boolean;
  howCanWeHelpSection?: {
    title?: string;
    items?: Array<{
      image?: {
        asset: {
          _ref: string;
          _type: string;
        };
        alt?: string;
      };
      title?: string;
      description?: string;
    }>;
    footerTitle?: string;
    footerDescription?: string;
  };
  showOurProcess?: boolean;
  showBlogPosts?: boolean;
  testimonialSection?: {
    showTestimonials?: boolean;
    testimonials?: Array<{
      name?: string;
      title?: string;
      organization?: string;
      quote?: string;
      image?: {
        asset: {
          _ref: string;
          _type: string;
        };
        alt?: string;
      };
      socialLinks?: {
        twitter?: string;
        linkedin?: string;
        instagram?: string;
      };
    }>;
  };
  ctaSection?: {
    title?: string;
    buttonText?: string;
    buttonLink?: string;
  };
}

// Fetch homepage data
export async function getHomePageData(): Promise<HomePage | null> {
  return client.fetch(
    `*[_type == "homePage" && _id == "homePage"][0] {
      heroSection{
        title,
        subtitle,
        description,
        ctaText,
        heroMedia{
          mediaType,
          image,
          video{asset->{url}},
          posterImage
        },
        heroImage
      },
      whyGreatSection,
      whatWeDoSection,
      showHowCanWeHelp,
      howCanWeHelpSection,
      showOurProcess,
      showBlogPosts,
      testimonialSection,
      ctaSection
    }`
  );
}
