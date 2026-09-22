import { useState, useEffect } from 'react'
import { Link, routes, useLocation } from '@redwoodjs/router'
import { Menu, X } from 'lucide-react'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const navLinks = [
    { label: 'Home', to: routes.home() },
    { label: 'Contact', to: routes.contact() },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-chalk-100 font-read text-cyanotype-800 antialiased">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-cyanotype-900 bg-chalk-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link
              to={routes.home()}
              className="flex items-center"
              aria-label="Okwe home"
            >
              <img
                src="/okwe-image/okwe-stacked.png"
                alt="Okwe Import Export Solutions"
                className="h-9 w-auto object-contain sm:h-10"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-10 md:flex">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="font-ui text-[15px] font-medium text-cyanotype-700 transition-colors hover:text-cyanotype-900 hover:underline hover:decoration-sulphur-400 hover:decoration-2 hover:underline-offset-4"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                to={routes.contact()}
                className="inline-flex items-center bg-cyanotype-900 px-5 py-2.5 font-ui text-sm font-medium text-chalk-50 transition-colors hover:bg-cyanotype-700"
              >
                Request a Quote
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="-mr-2 p-2 text-cyanotype-900 transition-colors hover:text-cyanotype-600 md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-[60] md:hidden ${
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* backdrop */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-cyanotype-900/70 transition-opacity duration-200 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* panel — slides in from the right */}
        <div
          className={`absolute right-0 top-0 h-full w-72 max-w-[82%] border-l border-cyanotype-900 bg-chalk-100 transition-transform duration-200 ease-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b border-chalk-300 px-6">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-label text-cyanotype-600">
              Menu
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="-mr-2 p-2 text-cyanotype-900 transition-colors hover:text-cyanotype-600"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 px-6 py-8">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="font-ui text-xl font-medium text-cyanotype-900 transition-colors hover:underline hover:decoration-sulphur-400 hover:decoration-2 hover:underline-offset-4"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to={routes.contact()}
              className="mt-4 inline-flex items-center justify-center bg-cyanotype-900 px-5 py-3.5 font-ui text-sm font-medium text-chalk-50 transition-colors hover:bg-cyanotype-700"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      </div>

      {/* PAGE */}
      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer className="bg-cyanotype-900 text-chalk-100">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="mb-5 flex items-center">
                <img
                  src="/okwe-image/okwe-stacked.png"
                  alt="Okwe Import Export Solutions"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="max-w-sm text-[15px] leading-relaxed text-cyanotype-300">
                Integrated trade and logistics. We help you know the
                opportunity, connect the trade, and move the goods.
              </p>
            </div>

            <div className="md:col-span-2">
              <h4 className="mb-5 font-ui text-xs font-semibold uppercase tracking-label text-chalk-50">
                Services
              </h4>
              <ul className="space-y-3 font-ui text-sm">
                <li>
                  <a
                    href="/#knows"
                    className="transition-colors hover:text-chalk-50 hover:underline hover:decoration-sulphur-400 hover:underline-offset-4"
                  >
                    Okwe Knows
                  </a>
                </li>
                <li>
                  <a
                    href="/#coms"
                    className="transition-colors hover:text-chalk-50 hover:underline hover:decoration-sulphur-400 hover:underline-offset-4"
                  >
                    Okwe Coms
                  </a>
                </li>
                <li>
                  <a
                    href="/#move"
                    className="transition-colors hover:text-chalk-50 hover:underline hover:decoration-sulphur-400 hover:underline-offset-4"
                  >
                    Okwe Move
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="mb-5 font-ui text-xs font-semibold uppercase tracking-label text-chalk-50">
                Company
              </h4>
              <ul className="space-y-3 font-ui text-sm">
                <li>
                  <a
                    href="/#how"
                    className="transition-colors hover:text-chalk-50 hover:underline hover:decoration-sulphur-400 hover:underline-offset-4"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="/#customers"
                    className="transition-colors hover:text-chalk-50 hover:underline hover:decoration-sulphur-400 hover:underline-offset-4"
                  >
                    Customers
                  </a>
                </li>
                <li>
                  <Link
                    to={routes.contact()}
                    className="transition-colors hover:text-chalk-50 hover:underline hover:decoration-sulphur-400 hover:underline-offset-4"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="mb-5 font-ui text-xs font-semibold uppercase tracking-label text-chalk-50">
                Contact
              </h4>
              <ul className="space-y-3 font-ui text-sm">
                <li>hello@okwe.com</li>
                <li>+234 000 000 0000</li>
                <li>Lagos, Nigeria</li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-chalk-50/25 pt-8 sm:flex-row">
            <p className="font-mono text-[11px] tracking-call text-cyanotype-300">
              © {new Date().getFullYear()} Okwe Import Export Solutions. All
              rights reserved.
            </p>
            <p className="font-mono text-[11px] uppercase tracking-label text-sulphur-400">
              Know. Connect. Move.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
