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
    <div className="mb-10 text-center md:mb-14">
      <p className="mb-2 text-sm font-semibold tracking-widest text-navy-600 uppercase">
        {label}
      </p>
      <h2 className="text-2xl font-bold text-navy-900 md:text-3xl">{title}</h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
