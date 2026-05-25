import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import { CLASS_LEVELS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Classes',
  description: 'Tamil language classes for all ages and skill levels — Saturdays in Surrey, BC.',
}

export default function ClassesPage() {
  return (
    <>
      <Hero
        title="Tamil Classes"
        titleTamil="தமிழ் வகுப்புகள்"
        subtitle="Seven grade levels from LKG through G5. Saturday sessions designed around busy family schedules."
      />

      {/* ── Level detail cards ── */}
      <section className="py-8 pb-16 bg-gray-50" aria-labelledby="levels-heading">
        <div className="section">
          <SectionHeading
            title="Grade Levels"
            subtitle="What your child will learn at each stage."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLASS_LEVELS.map((cls) => (
              <div key={cls.id} className="card">
                <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                  <span aria-hidden="true">{cls.icon}</span>{cls.level}
                </h3>
                <p className="tamil text-sm text-gold mb-2">{cls.levelTamil}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{cls.description}</p>
                <p className="tamil text-gray-500 text-sm leading-relaxed mt-4">{cls.descriptionTamil}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Curriculum overview ── */}
      <section className="py-16" aria-labelledby="curriculum-heading">
        <div className="section">
          <SectionHeading
            title="Curriculum Highlights"
            titleTamil="பாடத்திட்டம்"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔤', title: 'Alphabet & Phonics', desc: 'உயிர், மெய், உயிர்மெய் எழுத்துக்கள் — all 247 characters.' },
              { icon: '📖', title: 'Reading & Writing', desc: 'Graded texts, dictation, and creative writing exercises.' },
              { icon: '🗣️', title: 'Spoken Tamil', desc: 'Conversational practice through roleplay, songs, and storytelling.' },
              { icon: '📜', title: 'Thirukkural', desc: 'Verse memorisation and discussion of ethical values from the Kural.' },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <span className="text-4xl" aria-hidden="true">{item.icon}</span>
                <h3 className="font-semibold text-gray-900 mt-3 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enroll CTA ── */}
      <section className="py-12 bg-gold/10 border-y border-gold/30">
        <div className="section text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Questions about which level is right for your child?
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Send us a message and we'll help you find the best fit based on age and prior exposure.
          </p>
          <Link href="/contact" className="btn-primary mt-6 inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
