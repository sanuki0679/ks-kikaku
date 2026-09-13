import SectionHeading from "@/components/SectionHeading";
import WorkVisual from "@/components/WorkVisual";
import { works } from "@/lib/data";

export default function Works() {
  return (
    <section id="works" className="scroll-mt-20 bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          label="Works"
          title="制作実績"
          description="予約、シフト、送迎の記録。現場の困りごとを、日々の仕事に合わせたアプリで形にしています。"
        />
        <div className="space-y-10 md:space-y-14">
          {works.map((work, index) => (
            <article key={work.id} aria-labelledby={`work-${work.id}`} className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className="grid lg:grid-cols-2">
                <WorkVisual work={work} />
                <div className="p-6 md:p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="font-medium tabular-nums text-navy-600">{String(index + 1).padStart(2, "0")}</span>
                    <span className="rounded-full bg-navy-50 px-3 py-1 font-medium text-navy-700">{work.category}</span>
                    {work.status && <span className="text-gray-600">{work.status}</span>}
                  </div>
                  <h3 id={`work-${work.id}`} className="mt-4 text-xl font-bold text-navy-900 md:text-2xl">{work.title}</h3>
                  <p className="mt-3 text-lg font-medium leading-relaxed text-navy-800">{work.summary}</p>
                  <dl className="mt-6 space-y-5 border-t border-gray-100 pt-6">
                    <div>
                      <dt className="text-sm font-bold text-gray-500">現場の課題</dt>
                      <dd className="mt-2 text-base leading-relaxed text-gray-700">{work.challenge}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-bold text-navy-700">実現したこと</dt>
                      <dd className="mt-2 text-base leading-relaxed text-gray-700">{work.outcome}</dd>
                    </div>
                  </dl>
                  <h4 className="mt-6 text-sm font-bold text-navy-700">主な機能</h4>
                  <ul className="mt-3 space-y-2">
                    {work.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm leading-relaxed text-gray-600">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-600" />
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
