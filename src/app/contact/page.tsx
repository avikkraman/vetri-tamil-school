import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import ContactForm from '@/components/ContactForm'
import { SCHOOL } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Vetri Tamil School — enrollment inquiries, general questions, and more.',
}

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        titleTamil="தொடர்பு கொள்ளுங்கள்"
        subtitle="Questions about enrollment, classes, or events? We'd love to hear from you."
      />

      <section className="py-16" aria-labelledby="contact-heading">
        <div className="section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {/* ── Contact info ── */}
            <div>
              <SectionHeading title="Get in Touch" centered={false} />

              <address className="not-italic space-y-6 text-gray-700">
                <ContactDetail
                  icon="📧"
                  label="Email"
                  value={SCHOOL.email}
                  href={`mailto:${SCHOOL.email}`}
                />
                <ContactDetail
                  icon="📞"
                  label="Phone"
                  value={SCHOOL.phone}
                  href={`tel:${SCHOOL.phone}`}
                />
                <ContactDetail
                  icon="📍"
                  label="Location"
                  value={SCHOOL.location}
                />
              </address>
            </div>

            {/* ── Contact form ── */}
            <div>
              <SectionHeading title="Send a Message" centered={false} />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Enrollment note ── */}
      <section className="py-10 bg-primary/5 border-y border-primary/10">
        <div className="section max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900">Ready to enroll?</h2>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            Complete our online registration form to enroll your child.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScaHjlUYpSzt4gZQWY9748qU6FohXEkkrsA0weyGJvZ0skxNQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 inline-block"
          >
            Enroll Now
          </a>
        </div>
      </section>
    </>
  )
}

// ── Helper ───────────────────────────────────────────────────────────────────

interface ContactDetailProps {
  icon: string
  label: string
  value: string
  href?: string
}

function ContactDetail({ icon, label, value, href }: ContactDetailProps) {
  return (
    <div className="flex gap-4">
      <span className="text-2xl shrink-0" aria-hidden="true">{icon}</span>
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{label}</p>
        {href ? (
          <a href={href} className="text-primary font-medium hover:underline">
            {value}
          </a>
        ) : (
          <p className="text-gray-800 font-medium">{value}</p>
        )}
      </div>
    </div>
  )
}
