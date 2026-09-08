/**
 * サイト全体の設定
 * ----------------------------------------
 * ブランド名・連絡先・SNS・SEO など、運営でよく変える値はここに集約しています。
 * デザインを触らずに、このファイルを編集するだけでサイト文言の大半を更新できます。
 */

export const siteConfig = {
  /** ブランド名（ロゴ・フッター・SEO に使用） */
  brandName: "BRAND NAME",

  /** ブランド名の下に出すサブタイトル */
  tagline: "みなとみらいプロポーズ専門店",

  /** ヒーローのメインコピー */
  catchCopy: "一生に一度を、想像以上に。",

  /** ヒーローのサブコピー */
  subCopy:
    "横浜・みなとみらいを中心に、\nプロポーズ・誕生日・記念日の特別な一日をプロデュース。",

  /** デザイン用の英語ラベル（装飾。本文の説明は日本語で行う） */
  englishLabel: "PROPOSAL & ANNIVERSARY PRODUCE",

  /** コンセプト見出し */
  conceptHeading: "大切な日を、忘れられない一日にする。",

  /** コンセプト本文 */
  conceptBody: [
    "プロポーズ、誕生日、記念日——。",
    "人生のなかで、何度もない特別な時間を、横浜・みなとみらいの景色とともに演出します。",
    "ホテルの客室装飾、花束、バルーン。ひとつひとつの選択を、丁寧に、静かに、美しく。",
    "飾り付けだけではなく、その日の空気ごと、記憶に残る一日へ。",
  ],

  /** 対応エリア（「必ず対応可能」とは書かない） */
  area: {
    heading: "横浜・みなとみらいを中心に対応",
    body: "横浜・みなとみらい周辺のホテルを中心に、神奈川県内のご相談を受け付けています。会場や施設の規約により、対応できる装飾は異なります。まずはご希望の場所をお知らせください。",
  },

  /** 連絡先 */
  contact: {
    email: "info@example.com",
    /** 公式LINEのURL。発行後に差し替え */
    lineUrl: "https://line.me/R/ti/p/@YOUR_LINE_ID",
    lineCta: "LINEで無料相談",
    lineCtaShort: "LINEで相談",
    webCta: "WEBから相談",
    webCtaLong: "無料相談・ご注文",
    heading: "まずはお気軽にご相談ください",
    lead: "日程や場所がまだ決まっていなくても大丈夫です。ご希望のイメージやご予算をお伺いしながら、最適な演出をご提案いたします。",
    note: "ご相談・お見積もりは無料です。",
  },

  /**
   * SNS URL
   * 空文字 "" の場合、フッター等では非表示になります。
   */
  sns: {
    instagram: "https://www.instagram.com/YOUR_INSTAGRAM/",
    instagramHandle: "@YOUR_INSTAGRAM",
    tiktok: "",
    x: "",
  },

  /** サイトURL（canonical / OGP）。環境変数があればそちらを優先 */
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://kaisei2004311-boop.github.io/proposal-service",

  /**
   * フォーム送信先
   * 空の場合はフロントエンドのみ（送信は行わず、確認画面＋LINE案内）。
   * Formspree や自前APIを後から設定できます。
   */
  inquiryEndpoint: process.env.NEXT_PUBLIC_INQUIRY_ENDPOINT || "",

  /** SEO */
  seo: {
    title: "横浜・みなとみらいのプロポーズ・記念日演出 | BRAND NAME",
    description:
      "横浜・みなとみらいを中心に、プロポーズ・誕生日・記念日の特別な一日をプロデュース。ホテル客室の装飾、花束、バルーン装飾まで、相談から演出までサポートします。",
    keywords: [
      "横浜 プロポーズ",
      "みなとみらい プロポーズ",
      "横浜 プロポーズ ホテル",
      "みなとみらい ホテル プロポーズ",
      "横浜 誕生日 サプライズ",
      "横浜 記念日",
      "ホテル 飾り付け 横浜",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
