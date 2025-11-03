import * as React from "react";

export interface ColorSwatchProps {
  name: string;
  tokenClass: string; // e.g. "bg-brand-deep" or "bg-accent"
  textClass?: string; // optional override for text color
}

export function ColorSwatch({ name, tokenClass, textClass }: ColorSwatchProps) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={`h-20 w-full rounded-lg border border-border/40 ${tokenClass}`}
      ></div>
      <span className={`text-sm ${textClass ?? "text-white/85"}`}>{name}</span>
    </div>
  );
}

export default ColorSwatch;
