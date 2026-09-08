import { siteConfig } from "@/data/siteConfig";

/** 公式LINEへの誘導のみ。URLは siteConfig.contact.lineUrl を変更 */
export function Contact() {
  const { lineUrl, lineCta, heading, lead, note } = siteConfig.contact;

  return (
    <section className="section section--paper" id="contact">
      <div className="container">
        <div className="contact-block">
          <div className="section-head">
            <span className="en">CONTACT</span>
            <h2>{heading}</h2>
          </div>
          <div className="gold-rule" />
          <p className="contact-lead">{lead}</p>
          <div className="contact-cta">
            <a
              className="btn btn--dark contact-line-btn"
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {lineCta}
            </a>
          </div>
          <p className="contact-note">{note}</p>
        </div>
      </div>
    </section>
  );
}
