"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiImage, FiX, FiZoomIn, FiZoomOut, FiExternalLink } from "react-icons/fi";

export function Proof({
  src,
  width,
  height,
  label,
  source,
}: {
  src: string;
  width: number;
  height: number;
  label: string;
  source: "LinkedIn" | "Slack";
}) {
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  const close = () => {
    setOpen(false);
    setZoomed(false);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-black underline underline-offset-4 transition hover:text-zinc-500"
        aria-label={`View proof: ${label}`}
      >
        <FiImage className="h-4 w-4" /> View proof
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={label}
          className="fixed inset-0 z-[100] flex flex-col bg-black/85 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="mx-auto mb-3 flex w-full max-w-5xl items-center justify-between text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="truncate font-mono text-xs text-zinc-300">
              {label} · {source} screenshot
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setZoomed((z) => !z)}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-black"
              >
                {zoomed ? <FiZoomOut /> : <FiZoomIn />}
                {zoomed ? "Fit" : "Zoom"}
              </button>
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-black"
              >
                <FiExternalLink /> Open original
              </a>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black"
              >
                <FiX />
              </button>
            </div>
          </div>

          <div
            className="mx-auto min-h-0 w-full max-w-5xl flex-1 overflow-auto rounded-xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={label}
              width={width}
              height={height}
              onClick={() => setZoomed((z) => !z)}
              className={
                zoomed
                  ? "h-auto max-w-none cursor-zoom-out"
                  : "h-auto w-full cursor-zoom-in"
              }
              style={zoomed ? { width: `${width}px` } : undefined}
            />
          </div>
        </div>
      )}
    </>
  );
}
