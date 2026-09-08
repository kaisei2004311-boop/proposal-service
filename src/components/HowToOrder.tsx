import { howToOrder } from "@/data/howToOrder";
import { siteConfig } from "@/data/siteConfig";
import { LineLink } from "./Cta";
import { Reveal } from "./Reveal";

export function HowToOrder() {
  return (
    <section className="section section--paper" id="flow">
      <div className="container">
        <div className="section-head">
          <span className="en">{howToOrder.en}</span>
          <h2>{howToOrder.heading}</h2>
          <p>{howToOrder.lead}</p>
        </div>

        <div className="steps">
          {howToOrder.steps.map((step, index) => (
            <Reveal key={step.step} delayMs={index * 60}>
              <article className="step">
                <div className="step-num">STEP {step.step}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="center-cta">
          <a className="btn btn--dark" href="#contact">
            {siteConfig.contact.webCtaLong}
          </a>
          <LineLink />
        </div>
      </div>
    </section>
  );
}
