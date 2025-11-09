import { client } from "../lib/client";

export interface Insight {
  _id: string;
  title: string;
  slug: { current: string };
  author: string;
  featured?: boolean;
  mainImage?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  category?: string;
  publishedAt: string;
  excerpt?: string;
  body?: any[];
}

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  company?: string;
  image?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  quote: string;
  rating: number;
  featured: boolean;
}

export interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  icon?: string;
  features?: string[];
  fullDescription?: any[];
  order: number;
}

// Fetch all insights
export async function getInsights(): Promise<Insight[]> {
  return client.fetch(
    `*[_type == "insight"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author,
      featured,
      mainImage,
      category,
      publishedAt,
      excerpt
    }`
  );
}

// Fetch featured insight (only one)
export async function getFeaturedInsight(): Promise<Insight | null> {
  return client.fetch(
    `*[_type == "insight" && featured == true] | order(publishedAt desc)[0] {
      _id,
      title,
      slug,
      author,
      featured,
      mainImage,
      category,
      publishedAt,
      excerpt
    }`
  );
}

// Fetch recent insights (excluding featured)
export async function getRecentInsightsExcludingFeatured(
  limit: number = 4
): Promise<Insight[]> {
  return client.fetch(
    `*[_type == "insight" && featured != true] | order(publishedAt desc)[0...${limit}] {
      _id,
      title,
      slug,
      author,
      featured,
      mainImage,
      category,
      publishedAt,
      excerpt
    }`
  );
}

// Fetch insights by category
export async function getInsightsByCategory(
  category: string
): Promise<Insight[]> {
  return client.fetch(
    `*[_type == "insight" && category == $category] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author,
      featured,
      mainImage,
      category,
      publishedAt,
      excerpt
    }`,
    { category }
  );
}

// Get all unique categories
export async function getInsightCategories(): Promise<string[]> {
  return client.fetch(
    `array::unique(*[_type == "insight" && defined(category)].category)`
  );
}

// Get insights count
export async function getInsightsCount(): Promise<number> {
  return client.fetch(`count(*[_type == "insight"])`);
}

// Fetch a single insight by slug
export async function getInsightBySlug(slug: string): Promise<Insight | null> {
  return client.fetch(
    `*[_type == "insight" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      author,
      featured,
      mainImage,
      category,
      publishedAt,
      excerpt,
      body
    }`,
    { slug }
  );
}

// Fetch recent insights (limit)
export async function getRecentInsights(limit: number = 3): Promise<Insight[]> {
  return client.fetch(
    `*[_type == "insight"] | order(publishedAt desc)[0...${limit}] {
      _id,
      title,
      slug,
      author,
      featured,
      mainImage,
      category,
      publishedAt,
      excerpt
    }`
  );
}

// Fetch all testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  return client.fetch(
    `*[_type == "testimonial"] | order(_createdAt desc) {
      _id,
      name,
      role,
      company,
      image,
      quote,
      rating,
      featured
    }`
  );
}

// Fetch featured testimonials
export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  return client.fetch(
    `*[_type == "testimonial" && featured == true] | order(_createdAt desc) {
      _id,
      name,
      role,
      company,
      image,
      quote,
      rating,
      featured
    }`
  );
}

// Fetch all services
export async function getServices(): Promise<Service[]> {
  return client.fetch(
    `*[_type == "service"] | order(order asc) {
      _id,
      title,
      slug,
      description,
      icon,
      features,
      order
    }`
  );
}

// Fetch a single service by slug
export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return client.fetch(
    `*[_type == "service" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      icon,
      features,
      fullDescription,
      order
    }`,
    { slug }
  );
}
