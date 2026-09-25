/**
 * ギャラリー（施工・演出事例）
 * ----------------------------------------
 * 画像の追加方法:
 * 1. 写真を public/images/gallery/ に置く（例: proposal-01.jpg）
 * 2. 下の配列にオブジェクトを追加する
 *
 * image が空、またはファイルが無い場合はプレースホルダーを表示します。
 * AI生成画像など、実施工と区別したい場合は isConceptImage: true にしてください。
 * 「イメージ」バッジが表示されます。
 */

export type GalleryCategory = "PROPOSAL" | "BIRTHDAY" | "ANNIVERSARY";

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  title: string;
  location: string;
  /** 例: /images/gallery/proposal-01.jpg */
  image: string;
  /** true の場合「イメージ」と表示（AI生成・参考画像） */
  isConceptImage: boolean;
};

export const galleryCategories: { id: GalleryCategory | "ALL"; label: string }[] = [
  { id: "ALL", label: "すべて" },
  { id: "PROPOSAL", label: "プロポーズ" },
  { id: "BIRTHDAY", label: "誕生日" },
  { id: "ANNIVERSARY", label: "記念日" },
];

export const gallery: GalleryItem[] = [
  {
    id: "proposal-rose-suite",
    category: "PROPOSAL",
    title: "ローズとキャンドルの客室",
    location: "横浜・みなとみらい",
    image: "/proposal-service/images/scene/proposal.webp",
    isConceptImage: true,
  },
  {
    id: "proposal-balloon-night",
    category: "PROPOSAL",
    title: "夜景とバルーンアーチ",
    location: "横浜・みなとみらい",
    image: "",
    isConceptImage: true,
  },
  {
    id: "proposal-bouquet",
    category: "PROPOSAL",
    title: "花束を添えたプロポーズ",
    location: "横浜",
    image: "",
    isConceptImage: true,
  },
  {
    id: "birthday-room",
    category: "BIRTHDAY",
    title: "バースデーの客室装飾",
    location: "横浜・みなとみらい",
    image: "/proposal-service/images/scene/birthday.webp",
    isConceptImage: true,
  },
  {
    id: "birthday-balloon",
    category: "BIRTHDAY",
    title: "数字バルーンの演出",
    location: "横浜",
    image: "",
    isConceptImage: true,
  },
  {
    id: "anniversary-stay",
    category: "ANNIVERSARY",
    title: "記念日の静かなステイ",
    location: "横浜・みなとみらい",
    image: "/proposal-service/images/scene/anniversary.webp",
    isConceptImage: true,
  },
  {
    id: "anniversary-floral",
    category: "ANNIVERSARY",
    title: "ベッドサイドのフローラル",
    location: "横浜",
    image: "",
    isConceptImage: true,
  },
  {
    id: "proposal-petals",
    category: "PROPOSAL",
    title: "花びらの小径",
    location: "横浜・みなとみらい",
    image: "",
    isConceptImage: true,
  },
  {
    id: "birthday-table",
    category: "BIRTHDAY",
    title: "テーブルフラワー",
    location: "横浜",
    image: "",
    isConceptImage: true,
  },
];
