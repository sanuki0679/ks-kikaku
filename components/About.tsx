import SectionHeading from "@/components/SectionHeading";
import { aboutPoints, siteConfig } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          label="About"
          title="開発者紹介"
          description="現場の声を大切にしながら、使い続けられるWebアプリを一つずつ作っています。"
        />

        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-10">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-navy-800 text-2xl font-bold text-white">
                KS
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-navy-900 md:text-2xl">
                  {siteConfig.name}
                </h3>
                <p className="mt-1 text-base text-gray-500">
                  飲食店・介護施設向け Webアプリ開発
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-700">
                  予約管理やシフト作成、送迎記録など、現場で「毎日使う」アプリを開発しています。
                  ITに詳しくない方でも迷わず使えるよう、文字の大きさやボタンの配置にも配慮しています。
                </p>
              </div>
            </div>

            <ul className="mt-8 space-y-4 border-t border-gray-200 pt-8">
              {aboutPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-base leading-relaxed text-gray-700"
                >
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-navy-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
