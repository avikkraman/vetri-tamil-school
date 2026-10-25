import Link from 'next/link'
import { SCHOOL } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white mt-20">
      <div className="section py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
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

          {/* Follow */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gold mb-4">
              Follow
            </h3>
            <a
              href={`https://instagram.com/${SCHOOL.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 shrink-0"
                aria-hidden="true"
              >
                <path d="M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47a4.92 4.92 0 0 0-1.78 1.16A4.92 4.92 0 0 0 2.5 5.47c-.25.64-.42 1.37-.47 2.43C1.98 8.96 1.97 9.3 1.97 12s.01 3.04.06 4.1c.05 1.06.22 1.79.47 2.43.26.66.6 1.22 1.16 1.78.56.56 1.12.9 1.78 1.16.64.25 1.37.42 2.43.47 1.06.05 1.4.06 4.12.06s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47a4.92 4.92 0 0 0 1.78-1.16 4.92 4.92 0 0 0 1.16-1.78c.25-.64.42-1.37.47-2.43.05-1.06.06-1.4.06-4.1s-.01-3.04-.06-4.1c-.05-1.06-.22-1.79-.47-2.43a4.92 4.92 0 0 0-1.16-1.78A4.92 4.92 0 0 0 18.55.53c-.64-.25-1.37-.42-2.43-.47C15.06.01 14.72 0 12 0zm0 2.16c2.67 0 2.99.01 4.04.06.98.04 1.5.21 1.86.35.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.36.3.88.35 1.86.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.98-.21 1.5-.35 1.86-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.36.14-.88.3-1.86.35-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.98-.04-1.5-.21-1.86-.35a3.1 3.1 0 0 1-1.15-.75 3.1 3.1 0 0 1-.75-1.15c-.14-.36-.3-.88-.35-1.86-.05-1.05-.06-1.37-.06-4.04s.01-2.99.06-4.04c.04-.98.21-1.5.35-1.86.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.36-.14.88-.3 1.86-.35C9.01 2.17 9.33 2.16 12 2.16zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.84-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
              </svg>
              {SCHOOL.instagram}
            </a>
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
