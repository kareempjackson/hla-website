"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  /**
   * If true, start loading as soon as the component mounts (good for above-the-fold heroes).
   * If false, wait until it is near the viewport.
   */
  eager?: boolean;
  /**
   * How early (in px) to start loading before it enters the viewport.
   */
  rootMargin?: string;
};

export default function HeroVideo({
  src,
  poster,
  className,
  eager = true,
  rootMargin = "600px",
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (eager) {
      setShouldLoad(true);
      return;
    }

    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [eager, rootMargin]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = isMuted;
  }, [isMuted]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (!shouldLoad) return;

    // Best-effort: if autoplay doesn't kick in, this nudges playback once metadata is available.
    const tryPlay = () => {
      void el.play().catch(() => {
        // Autoplay can be blocked; user can still click the sound toggle to start audio.
      });
    };

    if (el.readyState >= 2) {
      tryPlay();
      return;
    }

    el.addEventListener("canplay", tryPlay, { once: true });
    return () => el.removeEventListener("canplay", tryPlay);
  }, [shouldLoad]);

  const toggleMute = async () => {
    const el = videoRef.current;
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);

    // If user is unmuting, try to ensure playback resumes with audio.
    if (el && !nextMuted) {
      try {
        await el.play();
      } catch {
        // ignore
      }
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        // Avoid loading the actual video until we decide to.
        src={shouldLoad ? src : undefined}
        poster={poster}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        preload={shouldLoad ? "metadata" : "none"}
        className={className}
      />

      <button
        type="button"
        onClick={toggleMute}
        className="absolute bottom-3 right-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-sm transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/80"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        aria-pressed={!isMuted}
      >
        {isMuted ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5 6 9H3v6h3l5 4V5Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 9l5 6M21 9l-5 6"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5 6 9H3v6h3l5 4V5Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.5 8.5a4.5 4.5 0 0 1 0 7"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.5 6a8 8 0 0 1 0 12"
            />
          </svg>
        )}
      </button>
    </>
  );
}


