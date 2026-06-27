import SectionHeading from "@/components/SectionHeading";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          label="Process"
          title="相談の流れ"
          description="初めての方でも安心してご相談いただけるよう、シンプルな流れで進めます。"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.step}
              className="relative rounded-2xl border border-gray-200 bg-white p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy-800 text-lg font-bold text-white">
                {step.step}
              </div>
              <h3 className="text-lg font-bold text-navy-900">{step.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
