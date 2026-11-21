interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="bg-navy relative overflow-hidden">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 border border-white/20 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border border-white/20 rounded-full translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {breadcrumb && (
          <p className="text-gold text-sm font-medium tracking-wider uppercase mb-3">
            {breadcrumb}
          </p>
        )}
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white/70 text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        <span className="accent-line mt-6" />
      </div>
    </section>
  );
}
