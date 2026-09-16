import SectionHeading from "@/components/SectionHeading";
import WorkVisual from "@/components/WorkVisual";
import { works } from "@/lib/data";

export default function Works() {
  return (
    <section id="works" className="section-tint scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          label="Works"
          title="制作実績"
          description="予約、シフト、送迎の記録。現場の困りごとを、日々の仕事に合わせたアプリで形にしています。"
        />
        <div className="space-y-8 md:space-y-12">
          {works.map((work, index) => (
            <article
              key={work.id}
              aria-labelledby={`work-${work.id}`}
              className="reveal overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card transition duration-300 hover:shadow-lift"
            >
              <div className="grid lg:grid-cols-2">
                <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                  <WorkVisual work={work} />
                </div>
                <div className="p-7 md:p-10 lg:p-12">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-display text-3xl font-bold tabular-nums text-navy-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-bold text-navy-700 ring-1 ring-navy-100">
                      {work.category}
                    </span>
                    {work.status && (
                      <span className="rounded-full bg-gold-100 px-3 py-1 text-xs font-bold text-gold-600 ring-1 ring-gold-200">
                        {work.status}
                      </span>
                    )}
                  </div>
                  <h3
                    id={`work-${work.id}`}
                    className="mt-4 text-2xl font-bold tracking-tight text-navy-900 md:text-3xl"
                  >
                    {work.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed font-medium text-navy-700">
                    {work.summary}
                  </p>
                  <dl className="mt-7 space-y-5 border-t border-navy-100 pt-7">
                    <div>
                      <dt className="text-sm font-bold text-navy-500">現場の課題</dt>
                      <dd className="mt-2 text-base leading-relaxed text-navy-600">
                        {work.challenge}
                      </dd>
                    </div>
                    <div className="rounded-2xl border-l-2 border-gold-400 bg-gold-100/40 px-4 py-3">
                      <dt className="text-sm font-bold text-gold-600">実現したこと</dt>
                      <dd className="mt-2 text-base leading-relaxed text-navy-700">
                        {work.outcome}
                      </dd>
                    </div>
                  </dl>
                  <h4 className="mt-7 text-sm font-bold text-navy-800">主な機能</h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {work.features.map((feature) => (
                      <li
                        key={feature}
                        className="rounded-full bg-navy-50 px-3 py-1.5 text-sm leading-relaxed text-navy-700"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
