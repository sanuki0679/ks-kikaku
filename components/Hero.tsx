import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-gradient-to-b from-gray-50 to-white pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-navy-200 bg-white px-4 py-1.5 text-sm font-medium text-navy-700">
            飲食店・介護施設向け Webアプリ開発
          </p>
          <h1 className="text-3xl leading-tight font-bold text-navy-900 md:text-5xl md:leading-tight">
            現場の困りごとを、
            <br className="hidden sm:block" />
            わかりやすいWebアプリで解決
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg md:leading-relaxed">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-lg bg-navy-800 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-navy-700 sm:w-auto"
            >
              無料相談はこちら
            </a>
            <a
              href="#works"
              className="w-full rounded-lg border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-navy-800 transition-colors hover:bg-gray-50 sm:w-auto"
            >
              制作実績を見る
            </a>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3 md:mt-16">
          {[
            { label: "対象", value: "飲食店・介護施設" },
            { label: "強み", value: "現場目線の開発" },
            { label: "対応", value: "ココナラ・直接相談" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-gray-200 bg-white px-5 py-4 text-center shadow-sm"
            >
              <p className="text-sm font-medium text-gray-500">{item.label}</p>
              <p className="mt-1 text-base font-bold text-navy-900 md:text-lg">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
