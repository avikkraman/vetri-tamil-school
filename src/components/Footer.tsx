import Link from 'next/link'
import { SCHOOL } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white mt-20">
      <div className="section py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Brand */}
          <div>
            <p className="font-bold text-lg">{SCHOOL.name}</p>
            <p className="tamil text-gold-light text-base mt-1">{SCHOOL.nameTamil}</p>
            <p className="text-primary-light mt-3 text-sm leading-relaxed">
              {SCHOOL.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gold mb-4">
              Contact
            </h3>
            <address className="not-italic space-y-2 text-sm text-white/80">
              <p>{SCHOOL.location}</p>
              <p>
                <a href={`tel:${SCHOOL.phone}`} className="hover:text-white transition-colors">
                  {SCHOOL.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${SCHOOL.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SCHOOL.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-white/50">
          <p>© {year} {SCHOOL.name}. All rights reserved.</p>
          <p className="tamil text-xs text-gold/70">
            {SCHOOL.thirukkural.verse.slice(0, 40)}…
          </p>
        </div>
      </div>
    </footer>
  )
}
