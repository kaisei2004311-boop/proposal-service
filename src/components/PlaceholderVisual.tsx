import type { GalleryCategory } from "@/data/gallery";
import type { ServiceId } from "@/data/services";

type Tone = ServiceId | Lowercase<GalleryCategory> | "neutral";

const flowers: Record<string, string> = {
  proposal:
    "M48 8c6 14 4 22-6 30 14-2 22 4 28 16-8-10-20-10-30-4 8 12 6 22-4 32-2-14-10-22-22-26 12 2 18-6 18-18-12 6-22 2-32-8 14 2 24-4 30-16 0 12 8 20 18 22z",
  birthday:
    "M50 10c0 10-6 16-14 18 10 2 16 10 16 20 0-10 8-18 20-18-10 0-16-8-16-20 8 8 18 8 26 0-10 2-16-4-18-14 4 12-2 20-14 24z",
  anniversary:
    "M20 70c18-28 28-38 40-44-8 16-6 28 4 40 12-22 28-30 44-32-22 8-32 20-36 38 20-8 34-4 48 8-24-2-38 8-44 26 10-14 8-28-4-40-6 18-18 28-34 34 8-14 6-26-4-36z",
};

function Ornament({ tone }: { tone: string }) {
  const d = flowers[tone] ?? flowers.proposal;
  const stroke = tone === "birthday" ? "rgba(43,41,39,.45)" : "rgba(246,241,235,.55)";
  return (
    <svg className="ph-ornament" viewBox="0 0 100 100" aria-hidden>
      <path d={d} fill="none" stroke={stroke} strokeWidth="0.8" />
      <circle cx="50" cy="48" r="2.2" fill={stroke} />
    </svg>
  );
}

type Props = {
  tone: Tone;
  caption?: string;
  className?: string;
};

/** 写真未投入時の上品なプレースホルダー（外部画像は使用しない） */
export function PlaceholderVisual({ tone, caption, className = "" }: Props) {
  return (
    <div className={`ph-visual ph-visual--${tone} ${className}`}>
      <Ornament tone={tone} />
      {caption ? <span className="ph-caption en">{caption}</span> : null}
    </div>
  );
}
