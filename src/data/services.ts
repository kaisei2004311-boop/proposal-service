/**
 * サービス紹介（HERO下の3つの柱）
 * 画像は image にパスを入れると差し替わります。空ならプレースホルダーを表示します。
 */

export type ServiceId = "proposal" | "birthday" | "anniversary";

export type Service = {
  id: ServiceId;
  number: string;
  en: string;
  ja: string;
  description: string;
  /** 例: /images/services/proposal.jpg 。未設定ならプレースホルダー */
  image: string;
};

export const services: Service[] = [
  {
    id: "proposal",
    number: "01",
    en: "PROPOSAL",
    ja: "プロポーズ",
    description:
      "ホテル装飾・花束・バルーンなどを組み合わせ、大切なプロポーズを演出します。会場の雰囲気に合わせ、ふたりらしい時間をつくります。",
    image: "/proposal-service/images/scene/proposal.webp",
  },
  {
    id: "birthday",
    number: "02",
    en: "BIRTHDAY",
    ja: "誕生日",
    description:
      "恋人や大切な人への誕生日サプライズを演出します。客室に戻った瞬間の「わあ」から、そのあとの時間まで含めてご提案します。",
    image: "/proposal-service/images/scene/birthday.webp",
  },
  {
    id: "anniversary",
    number: "03",
    en: "ANNIVERSARY",
    ja: "記念日",
    description:
      "交際記念日・結婚記念日など、特別な日の空間を演出します。毎年の記念日を、静かに贅沢な一夜へ。",
    image: "/proposal-service/images/scene/anniversary.webp",
  },
];
