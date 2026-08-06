"use client";

import { FocusEvent, useState } from "react";

const palettes = [
  { id: "classic", name: "Classic Ink" },
  { id: "forest", name: "Forest Journal" },
  { id: "sepia", name: "Sepia Library" },
  { id: "plum", name: "Plum Notebook" },
  { id: "midnight", name: "Midnight Blue" },
  { id: "mono", name: "Monochrome" },
  { id: "rose", name: "Rose Petal" },
  { id: "matcha", name: "Matcha & Honey" },
] as const;

type PaletteId = (typeof palettes)[number]["id"];

export default function ThemePalettePreview() {
  const [activeName, setActiveName] = useState<string | null>(null);

  function preview(id: PaletteId, name: string) {
    document.documentElement.dataset.previewTheme = id;
    setActiveName(name);
  }

  function restore() {
    delete document.documentElement.dataset.previewTheme;
    setActiveName(null);
  }

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      restore();
    }
  }

  return (
    <div>
      <div
        className="palette-stack"
        aria-label="Preview WordBucket theme palettes"
        onMouseLeave={restore}
        onBlur={handleBlur}
      >
        {palettes.map((palette) => (
          <button
            className={`palette ${palette.id}`}
            key={palette.id}
            type="button"
            onMouseEnter={() => preview(palette.id, palette.name)}
            onFocus={() => preview(palette.id, palette.name)}
            onClick={() => preview(palette.id, palette.name)}
            aria-label={`Preview ${palette.name} across the page`}
          >
            <b>Aa</b>
            {palette.name}
          </button>
        ))}
      </div>
      <p className="palette-preview-status" aria-live="polite">
        {activeName ? `Previewing ${activeName}` : "Hover a palette to preview it"}
      </p>
    </div>
  );
}
