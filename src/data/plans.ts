/**
 * プラン・料金に関する文章
 * ----------------------------------------
 * 現時点では固定料金を掲載しません。
 * お見積もり運用に合わせて、見出し・本文・補足だけを編集してください。
 */

export type Plan = {
  id: string;
  en: string;
  ja: string;
  summary: string;
  includes: string[];
};

export const plansIntro = {
  heading: "プラン",
  en: "PLAN",
  lead: "お客様のご希望・装飾内容・会場等によって異なるため、お見積もりいたします。",
  priceLabel: "料金：要相談",
  reassurance:
    "ご予算に合わせたご提案も可能です。まずはお気軽にご相談ください。理想のイメージやご予算をお聞きしたうえで、無理のない範囲でご提案します。",
};

/** 相談時の目安として見せるプランの方向性（金額は出さない） */
export const plans: Plan[] = [
  {
    id: "proposal-produce",
    en: "PROPOSAL",
    ja: "プロポーズプロデュース",
    summary: "花束・客室装飾・バルーンなどを組み合わせた、プロポーズの一日づくり。",
    includes: ["ヒアリング", "会場に合わせた装飾提案", "当日の設営"],
  },
  {
    id: "surprise-stay",
    en: "SURPRISE STAY",
    ja: "バースデー・記念日ステイ",
    summary: "ホテル滞在に合わせた客室演出。戻った瞬間が、特別な時間の始まりになります。",
    includes: ["客室装飾", "花・バルーンのコーディネート", "ご予算に応じた調整"],
  },
  {
    id: "custom",
    en: "CUSTOM",
    ja: "フルオーダー",
    summary: "ご希望の世界観から組み立てるオーダーメイド。イメージ写真や色味からご相談いただけます。",
    includes: ["世界観の設計", "装飾アイテムの選定", "当日オペレーション"],
  },
];
