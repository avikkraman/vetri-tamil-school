interface CardProps {
  title: string
  titleTamil?: string
  badge?: string
  badgeColor?: 'gold' | 'primary' | 'green' | 'blue'
  children: React.ReactNode
  footer?: React.ReactNode
}

const badgeStyles: Record<string, string> = {
  gold: 'bg-gold/10 text-gold-dark',
  primary: 'bg-primary/10 text-primary',
  green: 'bg-green-100 text-green-700',
  blue: 'bg-blue-100 text-blue-700',
}

export default function Card({
  title,
  titleTamil,
  badge,
  badgeColor = 'primary',
  children,
  footer,
}: CardProps) {
  return (
    <article className="card flex flex-col h-full">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          {titleTamil && (
            <p className="tamil text-gold text-sm mb-0.5">{titleTamil}</p>
          )}
          <h3 className="text-lg font-semibold text-gray-900 leading-snug">{title}</h3>
        </div>
        {badge && (
          <span
            className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${badgeStyles[badgeColor]}`}
          >
            {badge}
          </span>
        )}
      </div>
      <div className="flex-1 text-gray-600 text-sm leading-relaxed">{children}</div>
      {footer && <div className="mt-4 pt-4 border-t border-gray-100 text-sm">{footer}</div>}
    </article>
  )
}
