# BRAND NAME — みなとみらいプロポーズ専門店

横浜・みなとみらいを中心に、プロポーズ・誕生日・記念日の演出を行うサービスサイトです。

## 起動

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

本番ビルド:

```bash
npm run build
npm start
```

## 文章・連絡先の更新

デザインを変えずに内容だけ直す場合は `src/data/` を編集します。

| ファイル | 内容 |
|---|---|
| `src/data/siteConfig.ts` | ブランド名・コピー・LINE / メール / Instagram URL・SEO |
| `src/data/services.ts` | サービス3本柱 |
| `src/data/plans.ts` | プランと料金に関する文章 |
| `src/data/gallery.ts` | ギャラリー写真 |
| `src/data/howToOrder.ts` | 注文の流れ |
| `src/data/options.ts` | オプション |
| `src/data/faq.ts` | FAQ（キャンセル規定含む） |
| `src/data/notices.ts` | ホテル装飾の注意書き |
| `src/data/contactForm.ts` | フォームの選択肢 |
| `src/data/legal.ts` | 特定商取引法の表記 |

## ギャラリー写真の追加

1. 画像を `public/images/gallery/` に置く
2. `src/data/gallery.ts` に項目を追加し、`image: "/images/gallery/ファイル名.jpg"` を入れる
3. AI生成や参考画像の場合は `isConceptImage: true`（「イメージ」表示）

## 問い合わせフォーム

初期状態ではバックエンド未接続です。接続する場合は `.env.example` を参考に `NEXT_PUBLIC_INQUIRY_ENDPOINT` を設定するか、`src/lib/submitInquiry.ts` を編集します。
