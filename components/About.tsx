import SectionHeading from "@/components/SectionHeading";
import { aboutPoints, siteConfig } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          label="About"
          title="開発者紹介"
          description="現場の声を大切にしながら、使い続けられるWebアプリを一つずつ作っています。"
        />

        <div className="reveal mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card">
            <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 p-7 md:p-10">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                <div className="font-display flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-300 to-gold-500 text-2xl font-bold text-navy-900 shadow-lg shadow-gold-500/20">
                  KS
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {siteConfig.name}
                  </h3>
                  <p className="font-display mt-1 text-sm font-medium tracking-[0.14em] text-gold-300 uppercase">
                    Web App Development
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-navy-100">
                    予約管理やシフト作成、送迎記録など、現場で「毎日使う」アプリを開発しています。
                    ITに詳しくない方でも迷わず使えるよう、文字の大きさやボタンの配置にも配慮しています。
                  </p>
                </div>
              </div>
            </div>

            <ul className="grid gap-4 p-7 md:grid-cols-2 md:p-10">
              {aboutPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-2xl bg-navy-50 p-4 text-base leading-relaxed text-navy-700"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400 text-navy-900"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
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
