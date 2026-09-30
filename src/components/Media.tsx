"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Media — every image on the site goes through here.
 * Uses next/image, so Vercel serves resized AVIF/WebP files for each
 * screen instead of the original upload. When the file is missing (or the
 * item is a placeholder), a clearly labelled placeholder box is shown with
 * the expected format so you know exactly what to drop in.
 */
type Props = {
  src?: string;
  alt: string;
  // Tells the browser how wide the image is rendered, e.g. "(min-width: 768px) 50vw, 100vw".
  sizes: string;
  // Wrapper classes — must set the aspect ratio or a height.
  className?: string;
  imgClassName?: string;
  fit?: "cover" | "contain";
  priority?: boolean;
  placeholder?: boolean;
  // Shown inside the placeholder box, e.g. "1600 × 2000 px · JPG".
  spec?: string;
};

export default function Media({
  src,
  alt,
  sizes,
  className = "",
  imgClassName = "",
  fit = "cover",
  priority,
  placeholder,
  spec,
}: Props) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = placeholder || !src || failed;

  return (
    <div className={`relative overflow-hidden bg-ink/[0.06] ${className}`}>
      {showPlaceholder ? (
        <PlaceholderBox label={alt} spec={spec} path={src} />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={80}
          onError={() => setFailed(true)}
          className={`${fit === "cover" ? "object-cover" : "object-contain"} ${imgClassName}`}
        />
      )}
    </div>
  );
}

function PlaceholderBox({
  label,
  spec,
  path,
}: {
  label: string;
  spec?: string;
  path?: string;
}) {
  return (
    <div
      className="absolute inset-0 flex flex-col justify-between p-4 text-ink"
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgb(var(--color-ink) / 0.05) 0 1px, transparent 1px 14px)",
      }}
    >
      <span className="label self-start bg-accent px-2 py-1 text-paper">
        Placeholder
      </span>
      <span className="space-y-1">
        <span className="block font-display text-lg font-bold leading-tight">
          {label}
        </span>
        {spec && <span className="label block text-ink/70">{spec}</span>}
        {path && (
          <span className="block break-all text-label text-ink/50">
            {path}
          </span>
        )}
      </span>
    </div>
  );
}
