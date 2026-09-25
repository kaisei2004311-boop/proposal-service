"use client";

import { useMemo, useState } from "react";
import { gallery, galleryCategories, type GalleryCategory } from "@/data/gallery";
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
          <h2>演出のイメージ</h2>
          <p>施工事例が増え次第、写真を差し替えていきます。現在はイメージです。</p>
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
