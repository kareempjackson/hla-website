"use client";

import Image, { type ImageProps } from "next/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { makeSanityImageLoader, sanityImageUrl } from "@/sanity/lib/image";

type Props = Omit<ImageProps, "src" | "loader" | "alt"> & {
  source: SanityImageSource;
  alt: string;
  /**
   * Used as the base `src` value; responsive widths will come from the loader.
   */
  baseWidth?: number;
  /**
   * Optional intrinsic size, used to keep aspect ratio when requesting a height.
   * (Not required for `fill` images.)
   */
  intrinsic?: { width: number; height: number };
  quality?: number;
};

export default function SanityImage({
  source,
  alt,
  baseWidth = 1200,
  intrinsic,
  quality,
  ...props
}: Props) {
  const src = sanityImageUrl(source, {
    width: baseWidth,
    height:
      intrinsic && !("fill" in props && props.fill)
        ? intrinsic.height
        : undefined,
    quality,
  });

  return (
    <Image
      {...props}
      alt={alt}
      src={src}
      loader={makeSanityImageLoader(source, intrinsic)}
    />
  );
}


