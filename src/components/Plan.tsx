import { notices } from "@/data/notices";
import { plans, plansIntro } from "@/data/plans";
import { siteConfig } from "@/data/siteConfig";
import { LineLink } from "./Cta";
import { Reveal } from "./Reveal";

export function Plan() {
  return (
    <section className="section section--paper" id="plan">
      <div className="container">
        <div className="section-head">
          <span className="en">{plansIntro.en}</span>
          <h2>{plansIntro.heading}</h2>
          <p>{plansIntro.lead}</p>
        </div>

        <Reveal>
          <div style={{ textAlign: "center" }}>
            <span className="price-chip">{plansIntro.priceLabel}</span>
          </div>
        </Reveal>

        <div className="plan-grid">
          {plans.map((plan, index) => (
            <Reveal key={plan.id} delayMs={index * 80}>
              <article className="plan-card">
                <span className="en">{plan.en}</span>
                <h3>{plan.ja}</h3>
                <p>{plan.summary}</p>
                <ul>
                  {plan.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="reassurance">{plansIntro.reassurance}</p>
          <div className="center-cta">
            <a className="btn btn--dark" href="#contact">
              {siteConfig.contact.webCtaLong}
            </a>
            <LineLink />
          </div>
        </Reveal>

        <Reveal>
          <aside className="notice" aria-label={notices.hotel.heading}>
            <h3>{notices.hotel.heading}</h3>
            <p>{notices.hotel.body}</p>
            <ul>
              {notices.hotel.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
