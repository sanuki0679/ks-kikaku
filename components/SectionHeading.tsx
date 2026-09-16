type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="reveal mb-12 text-center md:mb-16">
      <p className="font-display inline-flex items-center gap-3 text-xs font-semibold tracking-[0.28em] text-gold-600 uppercase">
        <span aria-hidden="true" className="h-px w-8 bg-gold-400" />
        {label}
        <span aria-hidden="true" className="h-px w-8 bg-gold-400" />
      </p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy-600 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
