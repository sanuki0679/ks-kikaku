"use client";

import { FormEvent, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/data";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const facility = formData.get("facility") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(`【${siteConfig.name}】お問い合わせ`);
    const body = encodeURIComponent(
      `お名前: ${name}\n施設名・店舗名: ${facility}\n\nお問い合わせ内容:\n${message}`,
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          label="Contact"
          title="お問い合わせ"
          description="予約管理、シフト作成、送迎記録など、現場の困りごとをお気軽にご相談ください。初回相談は無料です。"
        />

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-5">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 lg:col-span-2">
            <h3 className="text-lg font-bold text-navy-900">ご相談例</h3>
            <ul className="mt-4 space-y-3 text-base text-gray-700">
              {[
                "予約管理を紙からWebに移行したい",
                "シフト作成のやりとりを楽にしたい",
                "送迎記録をスマホで残したい",
                "LINE予約を導入したい",
              ].map((example) => (
                <li key={example} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-600" />
                  {example}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <p className="text-sm font-medium text-gray-500">メール</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 block text-base font-semibold text-navy-800 hover:underline"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-3"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-gray-700"
                >
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900 focus:border-navy-600 focus:ring-2 focus:ring-navy-100 focus:outline-none"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label
                  htmlFor="facility"
                  className="block text-base font-medium text-gray-700"
                >
                  施設名・店舗名
                </label>
                <input
                  type="text"
                  id="facility"
                  name="facility"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900 focus:border-navy-600 focus:ring-2 focus:ring-navy-100 focus:outline-none"
                  placeholder="〇〇デイサービス / 〇〇食堂"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-medium text-gray-700"
                >
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900 focus:border-navy-600 focus:ring-2 focus:ring-navy-100 focus:outline-none"
                  placeholder="現在の困りごとや、理想の運用イメージをお書きください"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-navy-800 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-navy-700"
            >
              送信する（メールアプリが開きます）
            </button>

            {submitted && (
              <p className="mt-4 text-center text-sm text-gray-600">
                メールアプリが開きます。送信ボタンを押してお問い合わせを完了してください。
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
