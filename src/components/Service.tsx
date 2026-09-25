import { services } from "@/data/services";
import { PlaceholderVisual } from "./PlaceholderVisual";
import { Reveal } from "./Reveal";

export function Service() {
  return (
    <section className="section section--ivory" id="service">
      <div className="container">
        <div className="section-head">
          <span className="en">SERVICE</span>
          <h2>特別な一日の、三つのかたち</h2>
          <p>プロポーズ・誕生日・記念日。いずれも、空間と花と時間で丁寧に組み立てます。</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <Reveal key={service.id} delayMs={index * 90}>
              <article className="service-card">
                <div className="service-visual">
                  {service.image ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={service.image} alt={`${service.ja}の演出イメージ`} loading="lazy" />
                      <span className="image-note">演出イメージ</span>
                    </>
                  ) : (
                    <PlaceholderVisual tone={service.id} caption={service.en} />
                  )}
                </div>
                <div className="service-meta">
                  <span className="en">
                    {service.number} {service.en}
                  </span>
                  <h3>{service.ja}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
