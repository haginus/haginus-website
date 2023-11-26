"use client";
import { getDominantColor } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type DropShadowImageProps = React.ComponentProps<typeof Image> & {
  dropShadow?: {
    x?: number;
    y?: number;
    blurRadius?: number;
  };
}

export default function DropShadowImage({ dropShadow: _dropShadow, ...imgProps }: DropShadowImageProps) {
  const dropShadow = {
    x: _dropShadow?.x ?? 0,
    y: _dropShadow?.y ?? 0,
    blurRadius: _dropShadow?.blurRadius ?? 180,
  };

  const imageRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    (async () => {
      if(!imageRef.current || !imgProps.src) return;
      if(!imageRef.current.style.filter) {
        imageRef.current.style.transition = `filter 0.5s ease-in-out`;
        imageRef.current.style.filter = `drop-shadow(0 0 0 transparent)`;
      };
      const color = await getDominantColor(imageRef.current);
      imageRef.current.style.filter = `drop-shadow(${dropShadow.x}px ${dropShadow.y}px ${dropShadow.blurRadius}px ${color})`;
    })();
  }, [dropShadow, imgProps.src]);

  return (
    <Image {...imgProps} ref={imageRef} />
  )
}