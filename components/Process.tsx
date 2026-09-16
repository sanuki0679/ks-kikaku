import SectionHeading from "@/components/SectionHeading";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="section-tint scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          label="Process"
          title="相談の流れ"
          description="初めての方でも安心してご相談いただけるよう、シンプルな流れで進めます。"
        />

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute top-12 right-8 left-8 hidden h-px bg-gradient-to-r from-navy-100 via-gold-300 to-navy-100 lg:block"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.step}
                className="reveal relative rounded-3xl border border-navy-100 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="font-display mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 text-lg font-bold text-gold-300 ring-4 ring-white">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-navy-900">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-navy-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
