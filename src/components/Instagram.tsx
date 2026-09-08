import { siteConfig } from "@/data/siteConfig";
import { Reveal } from "./Reveal";

export function Instagram() {
  const { instagram, instagramHandle, tiktok, x } = siteConfig.sns;

  return (
    <section className="section section--night" id="instagram">
      <div className="container">
        <Reveal>
          <div className="ig-box">
            <div className="section-head">
              <span className="en">INSTAGRAM</span>
              <h2>日常と、演出の記録</h2>
              <p>最新のイメージや設営の空気感は、Instagramでお届けします。</p>
            </div>
            <a className="ig-handle" href={instagram} target="_blank" rel="noopener noreferrer">
              {instagramHandle}
            </a>
            <div>
              <a className="btn btn--ghost" href={instagram} target="_blank" rel="noopener noreferrer">
                Instagramを見る
              </a>
            </div>
            {(tiktok || x) && (
              <div className="sns-row">
                {tiktok ? (
                  <a href={tiktok} target="_blank" rel="noopener noreferrer">
                    TikTok
                  </a>
                ) : null}
                {x ? (
                  <a href={x} target="_blank" rel="noopener noreferrer">
                    X
                  </a>
                ) : null}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
