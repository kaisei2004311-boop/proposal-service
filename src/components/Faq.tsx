import { faq, faqIntro } from "@/data/faq";
import { Reveal } from "./Reveal";

export function Faq() {
  return (
    <section className="section section--ivory" id="faq">
      <div className="container">
        <div className="section-head">
          <span className="en">{faqIntro.en}</span>
          <h2>{faqIntro.heading}</h2>
        </div>
        <Reveal>
          <div className="faq-list">
            {faq.map((item) => (
              <details key={item.id} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
