import SectionHeading from "@/components/SectionHeading";
import { works } from "@/lib/data";

export default function Works() {
  return (
    <section id="works" className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          label="Works"
          title="制作実績"
          description="実際に開発・運用しているアプリの例です。現場の課題に合わせて、必要な機能だけを形にしています。"
        />

        <div className="space-y-6">
          {works.map((work, index) => (
            <article
              key={work.title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="border-b border-gray-100 bg-navy-900 px-6 py-5 md:px-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-sm font-medium text-white">
                    {work.category}
                  </span>
                  <span className="text-sm text-navy-200">
                    実績 {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-bold text-white md:text-2xl">
                  {work.title}
                </h3>
                <p className="mt-2 text-base text-navy-100">{work.summary}</p>
              </div>

              <div className="grid gap-6 px-6 py-6 md:grid-cols-2 md:px-8 md:py-8">
                <div>
                  <h4 className="text-sm font-semibold tracking-wide text-navy-700 uppercase">
                    主な機能
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {work.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-base text-gray-700"
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl bg-gray-50 p-5">
                  <h4 className="text-sm font-semibold tracking-wide text-navy-700 uppercase">
                    導入の目的
                  </h4>
                  <p className="mt-3 text-base leading-relaxed text-gray-700">
                    {work.purpose}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
