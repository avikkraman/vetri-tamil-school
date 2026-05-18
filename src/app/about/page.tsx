import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import { SCHOOL, TEACHERS, BOARD_MEMBERS, FAQ } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Vetri Tamil School — our mission, history, teachers, and values.',
}

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Us"
        titleTamil="எங்களைப் பற்றி"
        subtitle="A community school dedicated to keeping Tamil language and culture alive for the next generation."
      />

      {/* ── Mission ── */}
      <section className="py-16" aria-labelledby="mission-heading">
        <div className="section">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Our Mission"
              titleTamil="எங்கள் நோக்கம்"
            />
            <div className="prose prose-gray max-w-none space-y-4 text-gray-700 leading-relaxed">
              <p>
                Vetri Tamil School was founded in {SCHOOL.founded} to provide Tamil-Canadian children in Surrey, BC a
                structured, joyful environment to learn their mother tongue.
              </p>
              <p>
                Our name <em>Vetri</em> (வெற்றி) means <strong>victory</strong> — a testament to
                our belief that every child who learns Tamil carries forward a 2,000-year-old
                literary tradition and wins a lifelong connection to their identity.
              </p>
              <p>
                We teach language through culture: festivals, Thirukkural recitation, folk songs,
                and storytelling are as central to our curriculum as grammar and writing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-12 bg-gray-50" aria-labelledby="values-heading">
        <div className="section">
          <SectionHeading title="Our Values" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: '🌱', title: 'Heritage', desc: 'We honour 2,000+ years of Tamil literature, philosophy, and art as living tradition.' },
              { icon: '🤝', title: 'Community', desc: 'Tamil families in the diaspora deserve a welcoming space to celebrate and connect.' },
              { icon: '🎓', title: 'Excellence', desc: 'High standards delivered with warmth — every child progresses at their own pace.' },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <span className="text-5xl" aria-hidden="true">{v.icon}</span>
                <h3 className="font-bold text-gray-900 mt-3 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Teachers ── */}
      <section className="py-16" aria-labelledby="teachers-heading">
        <div className="section">
          <SectionHeading
            title="Our Teachers"
            titleTamil="ஆசிரியர்கள்"
            subtitle="Dedicated educators who bring both expertise and heart to every class."
          />
          <div className="max-w-2xl mx-auto">
            <Image
              src="/VetriTeachers.png"
              alt="Vetri School Teachers 2025 Team"
              width={900}
              height={900}
              className="rounded-2xl w-full h-auto shadow-md"
              priority
            />
          </div>
          <ul className="sr-only">
            {TEACHERS.map((t) => (
              <li key={t.name}>{t.name} — {t.role}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Board ── */}
      <section className="py-16 bg-gray-50" aria-labelledby="board-heading">
        <div className="section">
          <SectionHeading
            title="School Board"
            titleTamil="பள்ளி குழு"
            subtitle="Committed volunteers who guide and support Vetri Tamil School's mission."
          />
          <div className="max-w-2xl mx-auto">
            <Image
              src="/VetriBoard.png"
              alt="Vetri School Board 2025 Team"
              width={900}
              height={900}
              className="rounded-2xl w-full h-auto shadow-md"
            />
          </div>
          <ul className="sr-only">
            {BOARD_MEMBERS.map((m) => (
              <li key={m.name}>{m.name} — {m.role}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16" aria-labelledby="faq-heading">
        <div className="section max-w-3xl mx-auto">
          <SectionHeading title="Frequently Asked Questions" />
          <dl className="space-y-6">
            {FAQ.map((item, i) => (
              <div key={i} className="card">
                <dt className="font-semibold text-gray-900 mb-2">{item.q}</dt>
                <dd className="text-gray-600 text-sm leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Thirukkural ── */}
      <section className="py-12 bg-primary text-white text-center" aria-label="Thirukkural">
        <div className="section max-w-2xl mx-auto">
          <blockquote>
            <p className="tamil text-2xl font-medium">{SCHOOL.thirukkural.verse}</p>
            <p className="text-white/70 italic mt-3">"{SCHOOL.thirukkural.translation}"</p>
            <footer className="text-gold mt-2 text-sm">{SCHOOL.thirukkural.attribution}</footer>
          </blockquote>
        </div>
      </section>
    </>
  )
}
