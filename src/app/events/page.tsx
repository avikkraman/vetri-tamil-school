import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import { loadEvents, type SchoolEvent } from '@/lib/parseEvents'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Upcoming events, cultural celebrations, and school calendar for Vetri Tamil School.',
}

const categoryColors: Record<string, string> = {
  Cultural: 'bg-gold/10 text-gold-dark border-gold/20',
  Academic: 'bg-primary/10 text-primary border-primary/20',
  Enrollment: 'bg-green-50 text-green-700 border-green-200',
  General: 'bg-gray-50 text-gray-600 border-gray-200',
}

const categoryAccent: Record<string, string> = {
  Cultural: 'border-l-gold',
  Academic: 'border-l-primary',
  Enrollment: 'border-l-green-500',
  General: 'border-l-gray-300',
}

export default function EventsPage() {
  const events = loadEvents()
  const now = new Date()
  const upcoming = events.filter((e) => new Date(e.date) >= now)
  const past = events.filter((e) => new Date(e.date) < now)

  return (
    <>
      <Hero
        title="Events & Calendar"
        titleTamil="நிகழ்வுகள்"
        subtitle="Cultural celebrations, academic milestones, and community gatherings throughout the year."
      />

      {/* ── Upcoming ── */}
      <section className="py-16" aria-labelledby="upcoming-heading">
        <div className="section max-w-4xl mx-auto">
          <SectionHeading
            title="Upcoming Events"
            subtitle={upcoming.length === 0 ? 'No upcoming events scheduled. Check back soon!' : undefined}
          />

          {upcoming.length > 0 && (
            <div className="space-y-6">
              {upcoming.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Past ── */}
      {past.length > 0 && (
        <section className="py-12 bg-gray-50" aria-labelledby="past-heading">
          <div className="section max-w-4xl mx-auto">
            <SectionHeading title="Past Events" />
            <div className="space-y-4 opacity-70">
              {past.map((event) => (
                <EventCard key={event.id} event={event} compact />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── School Closures ── */}
      <section className="py-16" aria-labelledby="calendar-heading">
        <div className="section max-w-4xl mx-auto">
          <SectionHeading
            title="School Calendar"
            subtitle="Stay up to date with school closures, holidays, and important dates throughout the year."
          />
          <div className="w-full rounded-xl border shadow-sm overflow-hidden">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=fd2a68b93744ce86222562227f4f29aab9c0e33bf86b40912b91527c30ca5a7b%40group.calendar.google.com&ctz=America%2FVancouver&mode=AGENDA"
              style={{ border: 0 }}
              width="100%"
              height="700"
            />
          </div>
        </div>
      </section>

      {/* ── Add to calendar CTA ── */}
      <section className="py-12 bg-primary text-white text-center">
        <div className="section">
          <h2 className="text-2xl font-bold">Stay in the loop</h2>
          <p className="text-white/80 mt-2 max-w-lg mx-auto">
            Want event reminders and school updates by email? Reach out and we'll add you to our
            mailing list.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 bg-gold hover:bg-gold-light text-white font-semibold
                       px-8 py-3 rounded-lg transition-colors"
          >
            Subscribe to Updates
          </Link>
        </div>
      </section>
    </>
  )
}

// ── EventCard sub-component ──────────────────────────────────────────────────

interface EventCardProps {
  event: SchoolEvent
  compact?: boolean
}

function EventCard({ event, compact }: EventCardProps) {
  const [year, month, day] = event.date.split('-').map(Number)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return (
    <article
      className={`bg-white rounded-xl border shadow-sm overflow-hidden flex flex-col sm:flex-row
                  border-l-4 ${categoryAccent[event.category] ?? 'border-l-gray-300'}`}
      aria-label={event.title}
    >
      {/* Date block */}
      <div className="bg-primary text-white flex flex-row sm:flex-col items-center justify-center
                       px-6 py-4 sm:py-6 sm:min-w-[90px] gap-4 sm:gap-0 text-center">
        <span className="text-3xl font-bold leading-none">{String(day).padStart(2, '0')}</span>
        <span className="text-sm uppercase tracking-wider opacity-80 sm:mt-1">{months[month - 1]}</span>
        <span className="text-sm opacity-60 sm:mt-0.5">{year}</span>
      </div>

      {/* Content */}
      <div className="p-5 flex-1">
        <div className="flex flex-wrap items-start gap-3 mb-2">
          <h3 className="flex-1 font-bold text-gray-900 text-lg leading-snug">{event.title}</h3>
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full border shrink-0 ${
              categoryColors[event.category] ?? categoryColors.General
            }`}
          >
            {event.category}
          </span>
        </div>

        {!compact && (
          <p className="text-gray-600 text-sm leading-relaxed mb-3">{event.description}</p>
        )}

        <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 text-xs text-gray-400">
          <span>🕐 {event.time}</span>
          <span>📍 {event.location}</span>
        </div>
      </div>
    </article>
  )
}
