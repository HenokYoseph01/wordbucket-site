"use client";

import { FocusEvent, useEffect, useState } from "react";

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
const storageKey = "wordbucket-site-theme";

export default function ThemePalettePreview() {
  const [selectedId, setSelectedId] = useState<PaletteId | null>(null);
  const [previewName, setPreviewName] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey) as PaletteId | null;
      const palette = palettes.find((item) => item.id === stored);
      if (palette) {
        setSelectedId(palette.id);
        document.documentElement.dataset.previewTheme = palette.id;
      }
    } catch (_) {
      // The temporary hover preview still works when storage is unavailable.
    }
  }, []);

  function preview(id: PaletteId, name: string) {
    document.documentElement.dataset.previewTheme = id;
    setPreviewName(name);
  }

  function restore() {
    if (selectedId) {
      document.documentElement.dataset.previewTheme = selectedId;
    } else {
      delete document.documentElement.dataset.previewTheme;
    }
    setPreviewName(null);
  }

  function select(id: PaletteId, name: string) {
    try {
      window.localStorage.setItem(storageKey, id);
    } catch (_) {
      // Apply the choice for this visit even if the browser blocks storage.
    }
    document.documentElement.dataset.previewTheme = id;
    setSelectedId(id);
    setPreviewName(name);
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
            className={`palette ${palette.id}${selectedId === palette.id ? " selected" : ""}`}
            key={palette.id}
            type="button"
            onMouseEnter={() => preview(palette.id, palette.name)}
            onFocus={() => preview(palette.id, palette.name)}
            onClick={() => select(palette.id, palette.name)}
            aria-label={`Preview and select ${palette.name} across the page`}
            aria-pressed={selectedId === palette.id}
          >
            <b>Aa</b>
            {palette.name}
          </button>
        ))}
      </div>
      <p className="palette-preview-status" aria-live="polite">
        {previewName && palettes.find((item) => item.name === previewName)?.id === selectedId
          ? `${previewName} selected — saved for your next visit`
          : previewName
            ? `Previewing ${previewName} — click or tap to keep it`
            : selectedId
              ? `${palettes.find((item) => item.id === selectedId)?.name} selected — hover to try another`
              : "Hover to preview · Click or tap to keep a palette"}
      </p>
    </div>
  );
}
