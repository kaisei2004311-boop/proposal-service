import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { legalInfo } from "@/data/legal";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: `${siteConfig.brandName}の特定商取引法に基づく表記です。`,
};

export default function LegalPage() {
  return (
    <main className="legal">
      <div className="container">
        <h1>特定商取引法に基づく表記</h1>
        <p>事業者情報が確定次第、以下を更新します。</p>

        <h2>販売業者</h2>
        <p>{legalInfo.businessName}</p>

        <h2>運営統括責任者</h2>
        <p>{legalInfo.representative}</p>

        <h2>所在地</h2>
        <p>{legalInfo.address}</p>

        <h2>電話番号</h2>
        <p>{legalInfo.tel}</p>

        <h2>メールアドレス</h2>
        <p>{legalInfo.email}</p>

        <h2>販売価格</h2>
        <p>{legalInfo.priceNote}</p>

        <h2>商品代金以外の必要料金</h2>
        <p>{legalInfo.extraFeeNote}</p>

        <h2>支払方法・時期</h2>
        <p>{legalInfo.paymentNote}</p>

        <h2>役務の提供時期</h2>
        <p>{legalInfo.deliveryNote}</p>

        <h2>キャンセルについて</h2>
        <p>{legalInfo.cancelNote}</p>

        <p>
          <Link href="/">トップへ戻る</Link>
        </p>
      </div>
    </main>
  );
}
