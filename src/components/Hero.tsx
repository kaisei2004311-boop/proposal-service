import { siteConfig } from "@/data/siteConfig";
import { LineLink } from "./Cta";

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="メインビジュアル">
      <div className="hero-visual" aria-hidden="true">
        {/* Generated concept image. Keep the scenery separate from actual project photos. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/proposal-service/images/scene/proposal.webp" alt="" fetchPriority="high" />
      </div>
      <div className="hero-veil" aria-hidden />
      <div className="hero-content">
        <span className="hero-en">{siteConfig.englishLabel}</span>
        <p
          style={{
            margin: "0 0 18px",
            fontSize: 12,
            letterSpacing: "0.28em",
            opacity: 0.8,
          }}
        >
          {siteConfig.brandName}
          <span style={{ opacity: 0.55 }}> — {siteConfig.tagline} —</span>
        </p>
        <h1>{siteConfig.catchCopy}</h1>
        <p className="hero-sub">{siteConfig.subCopy}</p>
        <div className="hero-actions">
          <a className="btn btn--light" href="#plan">
            プランを見る
          </a>
          <LineLink variant="line" />
        </div>
      </div>
      <div className="hero-scroll en" aria-hidden>
        SCROLL
      </div>
      <span className="hero-image-note">写真は演出イメージです</span>
    </section>
  );
}
