/**
 * お問い合わせフォームの選択肢
 * 項目の追加・文言変更はここを編集してください。
 */

export const serviceChoices = [
  { value: "proposal", label: "プロポーズ" },
  { value: "birthday", label: "誕生日" },
  { value: "anniversary", label: "記念日" },
  { value: "other", label: "その他" },
] as const;

export const budgetChoices = [
  { value: "undecided", label: "まだ決まっていない" },
  { value: "consult", label: "相談して決めたい" },
  { value: "under-30k", label: "〜3万円" },
  { value: "30-50k", label: "3〜5万円" },
  { value: "50-100k", label: "5〜10万円" },
  { value: "over-100k", label: "10万円〜" },
] as const;

export type InquiryPayload = {
  name: string;
  service: string;
  preferredDate: string;
  location: string;
  budget: string;
  message: string;
};
