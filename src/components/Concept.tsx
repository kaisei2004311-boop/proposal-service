import { siteConfig } from "@/data/siteConfig";
import { Reveal } from "./Reveal";

export function Concept() {
  return (
    <section className="section section--paper" id="concept">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="en">CONCEPT</span>
            <h2>{siteConfig.conceptHeading}</h2>
          </div>
          <div className="gold-rule" />
          <div className="concept-body">
            {siteConfig.conceptBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>{siteConfig.area.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
