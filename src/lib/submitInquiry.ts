import type { InquiryPayload } from "@/data/contactForm";
import { siteConfig } from "@/data/siteConfig";

export type SubmitResult =
  | { ok: true; mode: "endpoint" | "preview"; message: string }
  | { ok: false; message: string };

/**
 * 問い合わせ送信の差し替えポイント。
 *
 * 現在:
 * - NEXT_PUBLIC_INQUIRY_ENDPOINT（または siteConfig.inquiryEndpoint）があれば POST
 * - なければフロントエンドのみ（送信せずプレビュー成功）
 *
 * 後から選べる実装例:
 * - Formspree / Basin などのフォームエンドポイント
 * - Next.js Route Handler（src/app/api/inquiry/route.ts）
 * - Google Apps Script
 * - メール転送サービス
 */
export async function submitInquiry(payload: InquiryPayload): Promise<SubmitResult> {
  const endpoint = siteConfig.inquiryEndpoint;

  if (!endpoint) {
    return {
      ok: true,
      mode: "preview",
      message:
        "内容を受け付けました（現在は送信機能の接続前です）。公式LINEからも同じ内容をお送りいただくと、より確実にご案内できます。",
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return {
        ok: false,
        message: "送信に失敗しました。公式LINEからご連絡ください。",
      };
    }

    return {
      ok: true,
      mode: "endpoint",
      message: "送信しました。内容を確認のうえ、ご希望の方法でご連絡いたします。",
    };
  } catch {
    return {
      ok: false,
      message: "通信エラーが発生しました。時間をおいて再度お試しいただくか、公式LINEからご連絡ください。",
    };
  }
}
