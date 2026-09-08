/**
 * オプション
 * 新しいオプションは配列に追加するだけで OPTION セクションに反映されます。
 */

export type OptionItem = {
  id: string;
  en: string;
  ja: string;
  description: string;
  /** 未提供の場合は「準備中」表示 */
  available: boolean;
};

export const optionsIntro = {
  heading: "オプション",
  en: "OPTION",
  lead: "花束、バルーン、客室装飾を組み合わせてご提案します。単体でのご相談も可能です。",
};

export const options: OptionItem[] = [
  {
    id: "bouquet",
    en: "BOUQUET",
    ja: "花束",
    description: "プロポーズや誕生日に合わせた、持ち込みやすいブーケ。色味・ボリュームをご相談いただけます。",
    available: true,
  },
  {
    id: "balloon",
    en: "BALLOON",
    ja: "バルーン装飾",
    description: "数字バルーン、アーチ、床置きなど。客室の広さと規約に合わせてご提案します。",
    available: true,
  },
  {
    id: "hotel-room",
    en: "HOTEL ROOM",
    ja: "ホテル客室装飾",
    description: "ベッド周り、入口、テーブルを中心に、戻った瞬間が特別になる空間づくり。",
    available: true,
  },
  {
    id: "candle",
    en: "CANDLE",
    ja: "キャンドル",
    description: "ホテル規約の範囲で、落ち着いた灯りの演出をご提案します。",
    available: false,
  },
  {
    id: "photo-deco",
    en: "PHOTO",
    ja: "写真装飾",
    description: "おふたりの写真をあしらった装飾。データをご共有いただき、世界観に合わせて配置します。",
    available: false,
  },
  {
    id: "gift",
    en: "GIFT",
    ja: "オーダーメイドギフト",
    description: "その日のための小さな贈り物。花や装飾と合わせてご相談ください。",
    available: false,
  },
  {
    id: "photography",
    en: "SHOOTING",
    ja: "撮影",
    description: "当日の記録撮影。パートナーのご紹介を含めて、今後ご案内予定です。",
    available: false,
  },
];
