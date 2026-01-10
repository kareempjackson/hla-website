import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

type SanityImageUrlOptions = {
  width: number;
  height?: number;
  quality?: number;
};

/**
 * Builds an optimized Sanity CDN image URL.
 * - Uses `auto=format` to let the CDN pick modern formats (webp/avif when supported)
 * - Applies a sane default quality
 * - Accepts a target width (and optional height)
 */
export function sanityImageUrl(
  source: SanityImageSource,
  { width, height, quality = 75 }: SanityImageUrlOptions
) {
  let img = builder.image(source).width(width).quality(quality).auto("format");
  if (height) img = img.height(height);
  return img.url();
}

/**
 * Creates a Next/Image loader that requests the correct width (and optional proportional height)
 * directly from Sanity's CDN. This prevents Next from repeatedly downloading oversized originals.
 */
export function makeSanityImageLoader(
  source: SanityImageSource,
  intrinsic?: { width: number; height: number }
) {
  return ({ width, quality }: { width: number; quality?: number }) => {
    const height = intrinsic
      ? Math.max(1, Math.round((width * intrinsic.height) / intrinsic.width))
      : undefined;
    return sanityImageUrl(source, { width, height, quality });
  };
}
