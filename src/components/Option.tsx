import { options, optionsIntro } from "@/data/options";
import { Reveal } from "./Reveal";

export function Option() {
  return (
    <section className="section section--blush" id="option">
      <div className="container">
        <div className="section-head">
          <span className="en">{optionsIntro.en}</span>
          <h2>{optionsIntro.heading}</h2>
          <p>{optionsIntro.lead}</p>
        </div>
        <div className="option-grid">
          {options.map((option, index) => (
            <Reveal key={option.id} delayMs={index * 50}>
              <article className="option-card">
                <span className="en">{option.en}</span>
                <h3>{option.ja}</h3>
                <p>{option.description}</p>
                {!option.available ? <span className="soon">今後追加予定</span> : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
