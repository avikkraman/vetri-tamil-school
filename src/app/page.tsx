import Link from 'next/link'
import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import Card from '@/components/Card'
import { SCHOOL, CLASS_LEVELS } from '@/lib/data'
import { loadEvents, formatDisplayDate } from '@/lib/parseEvents'

export default function HomePage() {
  const now = new Date()
  const upcomingEvents = loadEvents()
    .filter((e) => new Date(e.date) >= now)
    .slice(0, 3)

  return (
    <>
      {/* ── Hero ── */}
      <Hero
        variant="home"
        title={SCHOOL.name}
        titleTamil={SCHOOL.nameTamil}
        subtitle={`${SCHOOL.tagline} — Saturday Tamil classes for children in ${SCHOOL.location}.`}
        primaryCta={{ label: 'Enroll Your Child', href: '/contact' }}
        secondaryCta={{ label: 'View Classes', href: '/classes' }}
      />

      {/* ── Thirukkural banner ── */}
      <section
        className="bg-gold/10 border-y border-gold/30 py-8"
        aria-label="Thirukkural verse"
      >
        <div className="section text-center">
          <blockquote>
            <p className="tamil text-xl sm:text-2xl text-primary font-medium">
              {SCHOOL.thirukkural.verse}
            </p>
            <p className="text-gray-600 text-sm sm:text-base mt-2 italic">
              "{SCHOOL.thirukkural.translation}"
            </p>
            <footer className="text-gray-400 text-xs mt-1">
              {SCHOOL.thirukkural.attribution}
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── Why Vetri ── */}
      <section className="py-16" aria-labelledby="why-heading">
        <div className="section">
          <SectionHeading
            title="Why Vetri Tamil School?"
            titleTamil="ஏன் வெற்றி தமிழ்ப்பள்ளி?"
            subtitle="We go beyond language — we connect children to their roots, heritage, and community."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '📚',
                title: 'Structured Curriculum',
                desc: 'Seven progressive levels from alphabet basics to classical literature, designed for heritage learners.',
              },
              {
                icon: '🎭',
                title: 'Culture & Arts',
                desc: 'Thirukkural recitation, Pongal, classical music, and cultural performances woven into learning.',
              },
              {
                icon: '👨‍👩‍👧',
                title: 'Community',
                desc: 'A welcoming space for Tamil families in the Lower Mainland to connect and celebrate together.',
              },
              {
                icon: '🗓️',
                title: 'Flexible Saturdays',
                desc: 'All classes on Saturdays — no weekday disruption to school or activities.',
              },
              {
                icon: '🌟',
                title: 'Dedicated Teachers',
                desc: 'Experienced instructors passionate about Tamil language preservation and child development.',
              },
              {
                icon: '📍',
                title: 'Surrey Based',
                desc: 'Conveniently located in Surrey, BC — serving families across the Lower Mainland.',
              },
            ].map((item) => (
              <div key={item.title} className="card flex gap-4 items-start">
                <span className="text-3xl" aria-hidden="true">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Class levels preview ── */}
      <section className="py-16 bg-gray-50" aria-labelledby="classes-preview-heading">
        <div className="section">
          <SectionHeading
            title="Our Classes"
            titleTamil="வகுப்புகள்"
            subtitle="Seven levels for all ages — from first letters to fluent reading and writing."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLASS_LEVELS.map((cls) => (
              <div key={cls.id} className="card">
                <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                  <span aria-hidden="true">{cls.icon}</span>{cls.level}
                </h3>
                <p className="tamil text-sm text-gold mb-2">{cls.levelTamil}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{cls.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/classes" className="btn-outline">
              Full Class Details →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Upcoming events ── */}
      <section className="py-16" aria-labelledby="events-preview-heading">
        <div className="section">
          <SectionHeading
            title="Upcoming Events"
            titleTamil="நிகழ்வுகள்"
            subtitle="Celebrations, performances, and community gatherings throughout the year."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {upcomingEvents.length === 0 && (
              <p className="text-gray-500 col-span-3 text-center">No upcoming events scheduled. Check back soon!</p>
            )}
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                title={event.title}
                badge={event.category}
                badgeColor={event.category === 'Cultural' ? 'gold' : event.category === 'Academic' ? 'primary' : 'green'}
                footer={
                  <p className="text-gray-500 text-xs">
                    📅 {formatDisplayDate(event.date)} · {event.time}
                  </p>
                }
              >
                <p>{event.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/events" className="btn-outline">
              All Events →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="bg-primary py-16" aria-labelledby="cta-heading">
        <div className="section text-center text-white">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold">
            Ready to enroll?
          </h2>
          <p className="mt-3 text-white/80 max-w-xl mx-auto">
            Registration for the 2025–26 school year is open. Spaces are limited — reach out today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-light text-white font-semibold
                         px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us to Enroll
            </Link>
            <Link
              href="/about"
              className="inline-block border-2 border-white/60 hover:border-white text-white
                         font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
