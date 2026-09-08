import { siteConfig } from "@/data/siteConfig";
import Link from "next/link";

/** スマートフォン下部の固定導線。PCでは非表示 */
export function StickyCta() {
  return (
    <div className="sticky-cta" aria-label="お問い合わせ">
      <a href={siteConfig.contact.lineUrl} target="_blank" rel="noopener noreferrer">
        {siteConfig.contact.lineCtaShort}
      </a>
      <Link href="/#contact">{siteConfig.contact.webCta}</Link>
    </div>
  );
}
