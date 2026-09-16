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
    <section id="contact" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          label="Contact"
          title="お問い合わせ"
          description="予約管理、シフト作成、送迎記録など、現場の困りごとをお気軽にご相談ください。初回相談は無料です。"
        />

        <div className="reveal mx-auto grid max-w-4xl gap-8 lg:grid-cols-5">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 p-7 shadow-card lg:col-span-2">
            <h3 className="text-lg font-bold text-white">ご相談例</h3>
            <ul className="mt-5 space-y-4 text-base text-navy-100">
              {[
                "予約管理を紙からWebに移行したい",
                "シフト作成のやりとりを楽にしたい",
                "送迎記録をスマホで残したい",
                "LINE予約を導入したい",
              ].map((example) => (
                <li key={example} className="flex items-start gap-3 leading-relaxed">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400"
                  />
                  {example}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="font-display text-xs font-semibold tracking-[0.2em] text-gold-300 uppercase">
                Mail
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block text-base font-semibold text-white underline-offset-4 hover:underline"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-navy-100 bg-white p-7 shadow-card lg:col-span-3"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-navy-800"
                >
                  お名前 <span className="text-gold-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-2 w-full rounded-xl border border-navy-200 bg-navy-50/50 px-4 py-3 text-base text-navy-900 transition focus:border-gold-400 focus:bg-white focus:ring-2 focus:ring-gold-200 focus:outline-none"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label
                  htmlFor="facility"
                  className="block text-base font-medium text-navy-800"
                >
                  施設名・店舗名
                </label>
                <input
                  type="text"
                  id="facility"
                  name="facility"
                  className="mt-2 w-full rounded-xl border border-navy-200 bg-navy-50/50 px-4 py-3 text-base text-navy-900 transition focus:border-gold-400 focus:bg-white focus:ring-2 focus:ring-gold-200 focus:outline-none"
                  placeholder="〇〇デイサービス / 〇〇食堂"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-medium text-navy-800"
                >
                  お問い合わせ内容 <span className="text-gold-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-y rounded-xl border border-navy-200 bg-navy-50/50 px-4 py-3 text-base text-navy-900 transition focus:border-gold-400 focus:bg-white focus:ring-2 focus:ring-gold-200 focus:outline-none"
                  placeholder="現在の困りごとや、理想の運用イメージをお書きください"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-full bg-navy-900 px-6 py-4 text-base font-bold text-white shadow-lg shadow-navy-900/15 transition hover:bg-navy-800 hover:shadow-xl hover:shadow-navy-900/20"
            >
              送信する（メールアプリが開きます）
            </button>

            {submitted && (
              <p className="mt-4 text-center text-sm text-navy-600">
                メールアプリが開きます。送信ボタンを押してお問い合わせを完了してください。
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
