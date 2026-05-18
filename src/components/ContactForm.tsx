'use client'

import { useState } from 'react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate(data: FormData) {
    const e: Record<string, string> = {}
    if (!data.get('name')) e.name = 'Name is required.'
    if (!data.get('email') || !/\S+@\S+\.\S+/.test(data.get('email') as string))
      e.email = 'A valid email is required.'
    if (!data.get('message')) e.message = 'Please include a message.'
    return e
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const errs = validate(data)
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setErrors({})
    setStatus('submitting')
    try {
      const res = await fetch('https://formspree.io/f/xojbvqej', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'error') {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center" role="alert">
        <p className="text-red-700 font-semibold text-lg">Something went wrong.</p>
        <p className="text-red-600 mt-2 text-sm">
          Please try again or email us directly at{' '}
          <a href="mailto:vetritamilschool@gmail.com" className="underline">vetritamilschool@gmail.com</a>.
        </p>
      </div>
    )
  }

  if (status === 'success') {
    return (
      <div
        className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
        role="alert"
      >
        <p className="text-green-700 font-semibold text-lg">Message sent!</p>
        <p className="text-green-600 mt-2 text-sm">
          We'll get back to you within 2–3 business days.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      className="space-y-5"
    >
      <Field
        id="name"
        label="Your Name"
        type="text"
        name="name"
        autoComplete="name"
        error={errors.name}
        required
      />
      <Field
        id="email"
        label="Email Address"
        type="email"
        name="email"
        autoComplete="email"
        error={errors.email}
        required
      />
      <Field
        id="phone"
        label="Phone (optional)"
        type="tel"
        name="phone"
        autoComplete="tel"
      />
      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
          I'm interested in
        </label>
        <select
          id="interest"
          name="interest"
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900
                     focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white"
        >
          <option value="">Select an option</option>
          <option value="enroll">Enrolling my child</option>
          <option value="info">General information</option>
          <option value="volunteer">Volunteering / Teaching</option>
          <option value="sponsor">Sponsorship / Support</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-required="true"
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full border rounded-lg px-3 py-2.5 text-sm text-gray-900
                      focus:outline-none focus:ring-2 focus:ring-primary resize-none
                      ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
          placeholder="Tell us about your child's age and Tamil background…"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-600" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}

interface FieldProps {
  id: string
  label: string
  type: string
  name: string
  autoComplete?: string
  error?: string
  required?: boolean
}

function Field({ id, label, type, name, autoComplete, error, required }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        autoComplete={autoComplete}
        required={required}
        aria-required={required}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full border rounded-lg px-3 py-2.5 text-sm text-gray-900
                    focus:outline-none focus:ring-2 focus:ring-primary
                    ${error ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
