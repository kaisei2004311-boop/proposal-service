import { siteConfig } from "@/data/siteConfig";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.brandName,
    alternateName: siteConfig.tagline,
    description: siteConfig.seo.description,
    url: siteConfig.siteUrl,
    email: siteConfig.contact.email,
    areaServed: ["横浜", "みなとみらい", "神奈川県"],
    image: `${siteConfig.siteUrl}/og.png`,
    sameAs: [siteConfig.sns.instagram, siteConfig.contact.lineUrl].filter(Boolean),
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "プロポーズ演出" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "誕生日サプライズ演出" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "記念日演出" } },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
