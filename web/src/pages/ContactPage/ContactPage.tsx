import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { ArrowLeft, Check, Mail, Phone, MapPin } from 'lucide-react'

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-chalk-100">
      {/* Header band */}
      <div className="bg-cyanotype-900 text-chalk-50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Link
            to={routes.home()}
            className="mb-8 inline-flex items-center gap-2 font-ui text-sm text-cyanotype-300 transition-colors hover:text-chalk-50 hover:underline hover:decoration-sulphur-400 hover:underline-offset-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <p className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-label text-sulphur-400">
            <span className="h-[7px] w-[7px] bg-sulphur-400" />
            Contact
          </p>
          <h1 className="stretch-display mb-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-display md:text-6xl">
            Let&apos;s talk about your next trade.
          </h1>
          <p className="max-w-2xl font-read text-xl leading-relaxed text-chalk-100">
            Tell us what you need. We help you know the opportunity, connect the
            trade, and move the goods.
          </p>
        </div>
      </div>

      {/* Form + info */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left: info */}
          <div className="lg:col-span-4">
            <h2 className="mb-8 font-ui text-xl font-semibold text-cyanotype-900">
              Get in touch
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-chalk-300 bg-chalk-50">
                  <Mail className="h-4 w-4 text-cyanotype-700" />
                </div>
                <div>
                  <p className="mb-1 font-mono text-[11px] uppercase tracking-label text-cyanotype-600">
                    Email
                  </p>
                  <p className="font-ui text-sm font-medium text-cyanotype-900">
                    hello@okwe.com
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-chalk-300 bg-chalk-50">
                  <Phone className="h-4 w-4 text-cyanotype-700" />
                </div>
                <div>
                  <p className="mb-1 font-mono text-[11px] uppercase tracking-label text-cyanotype-600">
                    Phone
                  </p>
                  <p className="font-ui text-sm font-medium text-cyanotype-900">
                    +234 000 000 0000
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-chalk-300 bg-chalk-50">
                  <MapPin className="h-4 w-4 text-cyanotype-700" />
                </div>
                <div>
                  <p className="mb-1 font-mono text-[11px] uppercase tracking-label text-cyanotype-600">
                    Location
                  </p>
                  <p className="font-ui text-sm font-medium text-cyanotype-900">
                    Lagos, Nigeria
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-12 border-t border-chalk-300 pt-8">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-label text-cyanotype-600">
                Okwe promise
              </p>
              <p className="font-read text-[15px] leading-relaxed text-cyanotype-800">
                Know the opportunity. Connect the trade. Move the goods.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-8">
            {submitted ? (
              <div className="border border-verdigris-600 bg-verdigris-100 p-12 text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center bg-verdigris-600">
                  <Check className="h-7 w-7 text-chalk-50" />
                </div>
                <h3 className="mb-3 font-ui text-2xl font-semibold text-cyanotype-900">
                  Message received.
                </h3>
                <p className="mb-8 font-read text-[17px] text-cyanotype-800">
                  Thank you. We&apos;ll review your message and get back to you
                  shortly.
                </p>
                <Link
                  to={routes.home()}
                  className="inline-flex items-center gap-2 bg-cyanotype-900 px-6 py-3 font-ui text-sm font-medium text-chalk-50 transition-colors hover:bg-cyanotype-700"
                >
                  Back to home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Company" name="company" />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>

                <div>
                  <label className="mb-2 block font-mono text-[11px] font-medium uppercase tracking-label text-cyanotype-600">
                    What do you need help with?
                  </label>
                  <select
                    name="service"
                    className="w-full border border-chalk-300 bg-chalk-50 px-4 py-3 font-ui text-sm text-cyanotype-900 transition-colors focus:border-cyanotype-900 focus:bg-chalk-100 focus:outline-none"
                  >
                    <option>Okwe Knows — Research & Sourcing</option>
                    <option>Okwe Coms — Commercial Coordination</option>
                    <option>Okwe Move — Logistics & Movement</option>
                    <option>All of the above</option>
                    <option>Something else</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block font-mono text-[11px] font-medium uppercase tracking-label text-cyanotype-600">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="w-full resize-none border border-chalk-300 bg-chalk-50 px-4 py-3 font-read text-[15px] text-cyanotype-900 transition-colors focus:border-cyanotype-900 focus:bg-chalk-100 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-cyanotype-900 px-7 py-3.5 font-ui font-medium text-chalk-50 transition-colors hover:bg-cyanotype-700"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const Field = ({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) => (
  <div>
    <label className="mb-2 block font-mono text-[11px] font-medium uppercase tracking-label text-cyanotype-600">
      {label}
      {required && <span className="ml-1 text-cyanotype-900">*</span>}
    </label>
    <input
      name={name}
      type={type}
      required={required}
      className="w-full border border-chalk-300 bg-chalk-50 px-4 py-3 font-ui text-sm text-cyanotype-900 transition-colors focus:border-cyanotype-900 focus:bg-chalk-100 focus:outline-none"
    />
  </div>
)

export default ContactPage
