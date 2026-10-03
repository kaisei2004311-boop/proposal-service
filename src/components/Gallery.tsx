"use client";

import { useMemo, useState } from "react";
import { featuredCase, gallery, galleryCategories, type GalleryCategory } from "@/data/gallery";
import { PlaceholderVisual } from "./PlaceholderVisual";

type Filter = GalleryCategory | "ALL";

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("ALL");

  const items = useMemo(
    () => (filter === "ALL" ? gallery : gallery.filter((item) => item.category === filter)),
    [filter],
  );

  return (
    <section className="section section--ivory" id="gallery">
      <div className="container">
        <div className="section-head">
          <span className="en">GALLERY</span>
          <h2>施工事例と演出イメージ</h2>
          <p>実際の装飾と、演出を考えるためのイメージをご紹介します。</p>
        </div>

        <article className="featured-case" aria-labelledby="featured-case-title">
          <div className="featured-case-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={featuredCase.image}
              alt="花とバルーン、花びら、LEDキャンドルで飾られたホテル客室の実際の施工写真"
              loading="lazy"
              width="900"
              height="1200"
            />
          </div>
          <div className="featured-case-content">
            <span className="featured-case-label">ACTUAL WORK / 施工事例</span>
            <h3 id="featured-case-title">{featuredCase.title}</h3>
            <p className="featured-case-lead">大切な一日を華やかに迎えるための、ホテル客室の装飾事例です。</p>
            <div className="featured-case-details">
              <h4>装飾内容</h4>
              <ul>
                {featuredCase.decorations.map((decoration) => <li key={decoration}>{decoration}</li>)}
              </ul>
            </div>
            <div className="featured-case-price">
              <span>この事例の費用目安</span>
              <strong>{featuredCase.price}</strong>
            </div>
            <p className="featured-case-note">会場や装飾内容により料金は異なります。</p>
          </div>
        </article>

        <div className="gallery-subhead">
          <span className="en">INSPIRATION</span>
          <h3>演出イメージ</h3>
          <p>以下の写真はイメージです。ご希望の雰囲気を探す際にご覧ください。</p>
        </div>

        <div className="filters" role="group" aria-label="ギャラリーのカテゴリ">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`filter-btn ${filter === category.id ? "is-active" : ""}`}
              aria-pressed={filter === category.id}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {items.map((item) => {
            const tone = item.category.toLowerCase() as "proposal" | "birthday" | "anniversary";
            return (
              <article key={item.id} className="gallery-item">
                {item.isConceptImage ? <span className="badge">イメージ</span> : null}
                {item.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.image} alt={`${item.title}の演出イメージ（${item.location}）`} loading="lazy" />
                ) : (
                  <PlaceholderVisual tone={tone} />
                )}
                <div className="gallery-cap">
                  <span className="en">{item.category}</span>
                  <strong>{item.title}</strong>
                  <span>{item.location}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
