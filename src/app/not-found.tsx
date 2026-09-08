import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "ページが見つかりません",
};

export default function NotFound() {
  return (
    <main className="legal">
      <div className="container" style={{ textAlign: "center" }}>
        <p className="en" style={{ color: "var(--gold)" }}>
          404
        </p>
        <h1>ページが見つかりません</h1>
        <p>お探しのページは移動または削除された可能性があります。</p>
        <p>
          <Link className="btn btn--dark" href="/">
            {siteConfig.brandName} トップへ
          </Link>
        </p>
      </div>
    </main>
  );
}
