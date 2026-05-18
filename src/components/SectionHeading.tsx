interface SectionHeadingProps {
  title: string
  titleTamil?: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeading({
  title,
  titleTamil,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      {titleTamil && (
        <p className="tamil text-gold font-medium text-base mb-1">{titleTamil}</p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 bg-gold rounded ${centered ? 'mx-auto' : ''}`} aria-hidden="true" />
    </div>
  )
}
