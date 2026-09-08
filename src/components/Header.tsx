"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import { LineLink } from "./Cta";

const nav = [
  { href: "/#concept", en: "CONCEPT", ja: "コンセプト" },
  { href: "/#service", en: "SERVICE", ja: "サービス" },
  { href: "/#plan", en: "PLAN", ja: "プラン" },
  { href: "/#gallery", en: "GALLERY", ja: "事例" },
  { href: "/#flow", en: "FLOW", ja: "流れ" },
  { href: "/#faq", en: "FAQ", ja: "質問" },
  { href: "/#contact", en: "CONTACT", ja: "相談" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`header ${scrolled || open ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
        <div className="header-inner">
          <Link className="brand" href="/#top" onClick={() => setOpen(false)}>
            <span className="brand-name">{siteConfig.brandName}</span>
            <span className="brand-tag">{siteConfig.tagline}</span>
          </Link>

          <nav className="nav-desktop" aria-label="主要ナビゲーション">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.ja}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <LineLink className="header-line" short />
            <button
              className="menu-btn"
              aria-label={open ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <nav className={`nav-panel ${open ? "is-open" : ""}`} aria-label="モバイルメニュー">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            <span className="en">{item.en}</span>
            {item.ja}
          </Link>
        ))}
        <div style={{ marginTop: 28 }}>
          <LineLink className="btn--full" />
        </div>
      </nav>
    </>
  );
}
