import { useEffect, useRef } from "react";
import { asset } from "@/lib/asset";
import type { Clip } from "@/lib/clips";

/**
 * A muted looping clip that only plays while it is on screen.
 *
 * The poster carries the whole thing when playback never starts — iOS refuses
 * autoplay in Low Power Mode, so play() is allowed to fail silently.
 */
export default function AutoVideo({
  clip,
  className = "",
  eager = false,
}: {
  clip: Clip;
  className?: string;
  eager?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          void el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster={asset(clip.poster)}
      preload={eager ? "auto" : "none"}
      muted
      loop
      playsInline
      disablePictureInPicture
      tabIndex={-1}
      aria-hidden="true"
    >
      <source src={asset(clip.src)} type="video/mp4" />
    </video>
  );
}
