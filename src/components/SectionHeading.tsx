interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
      {label && (
        <p className={`text-sm font-semibold tracking-wider uppercase mb-3 ${light ? 'text-gold' : 'text-gold'}`}>
          {label}
        </p>
      )}
      <h2
        className={`text-2xl md:text-3xl font-semibold ${
          light ? 'text-white' : 'text-text-dark'
        }`}
      >
        {title}
      </h2>
      <span className={`accent-line mt-4 ${align === 'center' ? 'mx-auto' : ''}`} />
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-white/70' : 'text-text-body'}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
