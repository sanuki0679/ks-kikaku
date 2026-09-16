import { siteConfig } from "@/lib/data";

const highlights = [
  { label: "対象", value: "飲食店・介護施設" },
  { label: "強み", value: "現場目線の開発" },
  { label: "対応", value: "ココナラ・直接相談" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate scroll-mt-24 overflow-hidden bg-navy-950 pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div
        aria-hidden="true"
        className="hero-decor absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800"
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="hero-in mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-navy-100 backdrop-blur-sm">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            飲食店・介護施設向け Webアプリ開発
          </p>
          <h1 className="mt-6 text-3xl leading-snug font-bold tracking-tight text-white sm:text-4xl md:text-5xl md:leading-[1.25]">
            現場の困りごとを、
            <br />
            <span className="text-gold-gradient">わかりやすいWebアプリ</span>
            で解決
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-navy-100 md:text-lg md:leading-relaxed">
            {siteConfig.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-full bg-gradient-to-r from-gold-300 to-gold-400 px-8 py-4 text-base font-bold text-navy-900 shadow-lg shadow-gold-500/20 transition hover:from-gold-200 hover:to-gold-300 hover:shadow-xl hover:shadow-gold-500/25 sm:w-auto"
            >
              無料相談はこちら
            </a>
            <a
              href="#works"
              className="w-full rounded-full border border-white/25 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10 sm:w-auto"
            >
              制作実績を見る
            </a>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/12 bg-white/5 px-5 py-5 text-center backdrop-blur-sm"
              >
                <p className="font-display text-xs font-semibold tracking-[0.2em] text-gold-300 uppercase">
                  {item.label}
                </p>
                <p className="mt-2 text-base font-bold text-white md:text-lg">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent"
      />
    </section>
  );
}
