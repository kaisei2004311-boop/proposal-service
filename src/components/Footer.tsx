import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

const links = [
  { href: "/#concept", label: "コンセプト" },
  { href: "/#service", label: "サービス" },
  { href: "/#plan", label: "プラン" },
  { href: "/#gallery", label: "ギャラリー" },
  { href: "/#flow", label: "ご注文の流れ" },
  { href: "/#option", label: "オプション" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "無料相談" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/legal", label: "特定商取引法に基づく表記" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const { instagram, tiktok, x } = siteConfig.sns;

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <span className="footer-brand">{siteConfig.brandName}</span>
          <p style={{ margin: "0 0 8px" }}>{siteConfig.tagline}</p>
          <p style={{ margin: 0 }}>{siteConfig.area.heading}</p>
          <p style={{ margin: "16px 0 0" }}>
            <a href={siteConfig.contact.lineUrl} target="_blank" rel="noopener noreferrer">
              公式LINE
            </a>
            {" / "}
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            {instagram ? (
              <>
                {" / "}
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </>
            ) : null}
            {tiktok ? (
              <>
                {" / "}
                <a href={tiktok} target="_blank" rel="noopener noreferrer">
                  TikTok
                </a>
              </>
            ) : null}
            {x ? (
              <>
                {" / "}
                <a href={x} target="_blank" rel="noopener noreferrer">
                  X
                </a>
              </>
            ) : null}
          </p>
        </div>
        <nav className="footer-nav" aria-label="フッター">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="container">
        <p className="footer-copy">
          © {year} {siteConfig.brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
