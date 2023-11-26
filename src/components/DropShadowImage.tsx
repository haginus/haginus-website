"use client";
import { getDominantColor } from "@/lib/utils";
import React from "react";

type DropShadowImageProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
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

  const profilePictureRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    (async () => {
      if(!profilePictureRef.current || !imgProps.src) return;
      if(!profilePictureRef.current.style.filter) {
        profilePictureRef.current.style.transition = `filter 0.5s ease-in-out`;
        profilePictureRef.current.style.filter = `drop-shadow(0 0 0 transparent)`;
      };
      const color = await getDominantColor(profilePictureRef.current);
      profilePictureRef.current.style.filter = `drop-shadow(${dropShadow.x}px ${dropShadow.y}px ${dropShadow.blurRadius}px ${color})`;
    })();
  }, [dropShadow, imgProps.src]);

  return (
    <img {...imgProps} ref={profilePictureRef} />
  )
}