import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${siteConfig.brandName}のプライバシーポリシーです。`,
};

export default function PrivacyPage() {
  return (
    <main className="legal">
      <div className="container">
        <h1>プライバシーポリシー</h1>
        <p>
          {siteConfig.brandName}（以下「当サービス」）は、お客様からお預かりする個人情報を、以下のとおり取り扱います。
        </p>

        <h2>1. 取得する情報</h2>
        <p>
          お問い合わせ・ご相談時に、お名前、メールアドレス、電話番号、ご希望内容、会場情報などを取得します。
        </p>

        <h2>2. 利用目的</h2>
        <p>
          ご相談への回答、お見積もり、ご予約の確認、サービス向上のための連絡に利用します。目的外の利用はしません。
        </p>

        <h2>3. 第三者提供</h2>
        <p>
          法令に基づく場合、または会場確認など業務遂行に必要な範囲でお客様の同意を得た場合を除き、第三者に提供しません。
        </p>

        <h2>4. お問い合わせ</h2>
        <p>
          個人情報に関するお問い合わせは、
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
          または公式LINEまでご連絡ください。
        </p>

        <p>
          <Link href="/">トップへ戻る</Link>
        </p>
      </div>
    </main>
  );
}
