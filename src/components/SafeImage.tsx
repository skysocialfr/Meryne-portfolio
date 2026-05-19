"use client";

import { useState } from "react";

/**
 * Image with a soft fallback — hides itself when the source 404s so the
 * placeholder background of the parent shows through. Lets us keep working
 * even before the real photos are dropped in /public/images.
 */
type Props = React.ImgHTMLAttributes<HTMLImageElement>;

export default function SafeImage({ onError, style, ...rest }: Props) {
  const [hidden, setHidden] = useState(false);
  return (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img
      {...rest}
      style={{ ...style, opacity: hidden ? 0 : undefined }}
      onError={(e) => {
        setHidden(true);
        onError?.(e);
      }}
    />
  );
}
