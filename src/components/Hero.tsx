import Link from 'next/link'

interface HeroProps {
  title: string
  titleTamil?: string
  subtitle: string
  primaryCta?: { label: string; href: string; external?: boolean }
  secondaryCta?: { label: string; href: string; external?: boolean }
  /** Use 'home' for the large landing hero, 'page' for inner page banners */
  variant?: 'home' | 'page'
}

export default function Hero({
  title,
  titleTamil,
  subtitle,
  primaryCta,
  secondaryCta,
  variant = 'page',
}: HeroProps) {
  const isHome = variant === 'home'

  return (
    <section
      className={`relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white
        ${isHome ? 'py-24 sm:py-32' : 'py-14 sm:py-20'}`}
      aria-labelledby="hero-heading"
    >
      {/* Decorative background kolam pattern (CSS only, no image dependency) */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 50%, #C8943A 1px, transparent 1px), radial-gradient(circle at 75% 50%, #C8943A 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="section relative z-10 text-center">
        {titleTamil && (
          <p className="tamil text-gold text-xl sm:text-2xl mb-2" aria-hidden="true">
            {titleTamil}
          </p>
        )}
        <h1
          id="hero-heading"
          className={`font-bold text-white ${
            isHome ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-3xl sm:text-4xl'
          }`}
        >
          {title}
        </h1>
        <p
          className={`mt-4 text-white/80 max-w-2xl mx-auto ${
            isHome ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
          }`}
        >
          {subtitle}
        </p>

        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCta && (
              primaryCta.external ? (
                <a
                  href={primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gold hover:bg-gold-light text-white font-semibold
                             px-8 py-3 rounded-lg transition-colors duration-200
                             focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-primary"
                >
                  {primaryCta.label}
                </a>
              ) : (
                <Link
                  href={primaryCta.href}
                  className="inline-block bg-gold hover:bg-gold-light text-white font-semibold
                             px-8 py-3 rounded-lg transition-colors duration-200
                             focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-primary"
                >
                  {primaryCta.label}
                </Link>
              )
            )}
            {secondaryCta && (
              secondaryCta.external ? (
                <a
                  href={secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-white/70 hover:border-white text-white
                             font-semibold px-8 py-3 rounded-lg transition-colors duration-200
                             focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                >
                  {secondaryCta.label}
                </a>
              ) : (
                <Link
                  href={secondaryCta.href}
                  className="inline-block border-2 border-white/70 hover:border-white text-white
                             font-semibold px-8 py-3 rounded-lg transition-colors duration-200
                             focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                >
                  {secondaryCta.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </section>
  )
}
