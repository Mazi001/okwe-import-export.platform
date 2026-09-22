import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  MessagesSquare,
  Ship,
  Globe2,
  Target,
  Handshake,
  Network,
  Package,
  ChevronDown,
} from 'lucide-react'

const HomePage = () => {
  return (
    <div className="overflow-x-hidden bg-chalk-100">
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-chalk-100">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              'linear-gradient(to right, #C3CAC5 1px, transparent 1px), linear-gradient(to bottom, #C3CAC5 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-20 lg:pt-20">
          <div className="max-w-4xl">
            <p className="mb-6 flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-label text-cyanotype-700 sm:mb-8 sm:text-xs">
              <span className="h-[7px] w-[7px] shrink-0 bg-sulphur-400" />
              Integrated trade & logistics
            </p>
            <h1 className="stretch-display mb-8 font-display text-[2.5rem] font-semibold leading-[1.08] tracking-display text-cyanotype-900 sm:mb-10 sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="flex items-start gap-4">
                <span className="mt-3 h-3 w-3 shrink-0 bg-sulphur-400 sm:mt-4 sm:h-4 sm:w-4" />
                Know the opportunity.
              </span>
              <br />
              <span className="flex items-start gap-4">
                <span className="mt-3 h-3 w-3 shrink-0 bg-sulphur-400 sm:mt-4 sm:h-4 sm:w-4" />
                Connect the trade.
              </span>
              <br />
              <span className="flex items-start gap-4">
                <span className="mt-3 h-3 w-3 shrink-0 bg-sulphur-400 sm:mt-4 sm:h-4 sm:w-4" />
                Move the goods.
              </span>
            </h1>

            <p className="mb-8 max-w-2xl font-read text-xl leading-relaxed text-cyanotype-800 sm:mb-10">
              One integrated trade and logistics business — from market
              intelligence to delivery at destination.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                to={routes.contact()}
                className="inline-flex items-center justify-center gap-2 bg-sulphur-400 px-6 py-3.5 font-ui text-sm font-semibold text-cyanotype-900 transition-colors hover:bg-sulphur-300 sm:px-7 sm:py-4 sm:text-base"
              >
                Start a Trade Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#how"
                className="inline-flex items-center justify-center gap-2 border border-cyanotype-900 px-6 py-3.5 font-ui text-sm font-medium text-cyanotype-900 transition-colors hover:bg-cyanotype-900/[0.07] sm:px-7 sm:py-4 sm:text-base"
              >
                How It Works
              </a>
            </div>
          </div>
        </div>

        {/* ruled audience band */}
        <div className="relative border-t border-cyanotype-900">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-2 px-5 py-4 sm:px-6 lg:px-8">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-label text-chalk-500">
              Trusted across
            </span>
            {[
              'Importers',
              'Exporters',
              'Manufacturers',
              'Distributors',
              'Retailers',
            ].map((a) => (
              <span
                key={a}
                className="font-mono text-[11px] uppercase tracking-label text-cyanotype-700"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CORE IDEA ===================== */}
      <section className="border-y border-chalk-300 bg-chalk-50 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl sm:mb-14">
            <Eyebrow>The Core Idea</Eyebrow>
            <h2 className="stretch-display mb-4 font-display text-2xl font-semibold leading-tight tracking-display text-cyanotype-900 sm:mb-6 sm:text-[31px] lg:text-5xl">
              One operating system for trade.
            </h2>
            <p className="font-read text-[17px] leading-relaxed text-cyanotype-800 sm:text-xl">
              Okwe is built around a simple trade journey. Three connected
              processes that work as one — from market intelligence and sourcing
              through commercial execution and logistics.
            </p>
          </div>

          <div className="grid gap-px border border-chalk-300 bg-chalk-300 md:grid-cols-3">
            {[
              {
                icon: Target,
                step: '01',
                title: 'Know',
                text: 'Understand the product, market, supplier, buyer, and commercial environment.',
              },
              {
                icon: Handshake,
                step: '02',
                title: 'Connect',
                text: 'Communicate, build relationships, negotiate, and facilitate the transaction.',
              },
              {
                icon: Ship,
                step: '03',
                title: 'Move',
                text: 'Coordinate the physical movement of goods from origin to destination.',
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.step}
                  className="border-t-[3px] border-t-cyanotype-900 bg-chalk-50 p-7 sm:p-10"
                >
                  <div className="mb-6 flex items-start justify-between sm:mb-8">
                    <div className="flex h-11 w-11 items-center justify-center bg-cyanotype-900 sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5 text-chalk-50 sm:h-6 sm:w-6" />
                    </div>
                    <span className="font-mono text-xs text-chalk-500">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="mb-2 font-ui text-xl font-semibold tracking-tight text-cyanotype-900 sm:mb-3 sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="font-read text-[15px] leading-relaxed text-cyanotype-800 sm:text-[17px]">
                    {item.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===================== OKWE SERVICES (accordion) ===================== */}
      <section
        id="services"
        className="scroll-mt-20 bg-chalk-100 py-16 sm:py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl sm:mb-14">
            <Eyebrow>What Okwe Does</Eyebrow>
            <h2 className="stretch-display mb-4 font-display text-2xl font-semibold leading-tight tracking-display text-cyanotype-900 sm:mb-6 sm:text-[31px] lg:text-5xl">
              Three processes. One business.
            </h2>
            <p className="font-read text-[17px] leading-relaxed text-cyanotype-800 sm:text-xl">
              Click any process to see what it covers.
            </p>
          </div>

          <div className="border-t border-chalk-300">
            {[
              {
                id: 'knows',
                n: '01',
                t: 'Okwe Knows',
                sub: 'Knowledge & Intelligence',
                d: 'We gather, organize, and apply the information needed to make informed trade decisions — so you know what is available, where it is available, and who needs it.',
                purpose:
                  'Know what is available, where it is available, who needs it, and how the trade can be executed.',
                icon: Search,
                items: [
                  'Market & product research',
                  'Supplier & buyer research',
                  'Product sourcing',
                  'Pricing & availability',
                  'Regulatory & documentation',
                  'Opportunity identification',
                ],
              },
              {
                id: 'coms',
                n: '02',
                t: 'Okwe Coms',
                sub: 'Communication & Commerce',
                d: 'We connect the parties involved in a transaction and help move an opportunity toward an actual trade.',
                purpose:
                  'Turn information and opportunities into commercial relationships and transactions.',
                icon: MessagesSquare,
                items: [
                  'Buyer & supplier communication',
                  'Business introductions',
                  'Procurement coordination',
                  'Negotiation & quotations',
                  'Transaction coordination',
                  'Trade documentation',
                ],
              },
              {
                id: 'move',
                n: '03',
                t: 'Okwe Move',
                sub: 'Movement & Logistics',
                d: 'Once a trade is agreed, we coordinate the physical movement of goods through the right logistics channels.',
                purpose:
                  'Get the right goods from the right place to the right destination, efficiently.',
                icon: Ship,
                items: [
                  'Freight & shipping coordination',
                  'Import & export logistics',
                  'Cargo handling & warehousing',
                  'Distribution & delivery',
                  'Shipment tracking',
                  'Origin-to-destination management',
                ],
              },
            ].map((s) => (
              <ServiceRow key={s.id} data={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section
        id="how"
        className="scroll-mt-20 border-y border-chalk-300 bg-chalk-50 py-16 sm:py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl sm:mb-14">
            <Eyebrow>How It Works</Eyebrow>
            <h2 className="stretch-display mb-4 font-display text-2xl font-semibold leading-tight tracking-display text-cyanotype-900 sm:mb-6 sm:text-[31px] lg:text-5xl">
              From opportunity to destination.
            </h2>
            <p className="font-read text-[17px] leading-relaxed text-cyanotype-800 sm:text-xl">
              Five steps. One integrated pathway through the entire trade
              process — use all of it, or only the part you need.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {[
              {
                n: '01',
                t: 'Identify',
                d: 'We find the product, supplier, buyer, or opportunity.',
                tag: 'Knows',
              },
              {
                n: '02',
                t: 'Connect',
                d: 'We establish communication and facilitate the deal.',
                tag: 'Coms',
              },
              {
                n: '03',
                t: 'Transact',
                d: 'Terms are agreed and the transaction is coordinated.',
                tag: 'Coms',
              },
              {
                n: '04',
                t: 'Move',
                d: 'We coordinate the logistics to move the goods.',
                tag: 'Move',
              },
              {
                n: '05',
                t: 'Deliver',
                d: 'Goods reach their destination. Trade is complete.',
                tag: 'Move',
              },
            ].map((s) => (
              <div key={s.n} className="relative">
                <div className="mb-4 flex items-center gap-3 sm:mb-5">
                  <span className="font-mono text-xs font-semibold tracking-call text-chalk-500">
                    {s.n}
                  </span>
                  <div className="h-px flex-1 bg-chalk-300" />
                  <span className="border border-chalk-300 bg-chalk-100 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-label text-cyanotype-700">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mb-2 font-ui text-lg font-semibold text-cyanotype-900">
                  {s.t}
                </h3>
                <p className="font-read text-[15px] leading-relaxed text-cyanotype-800">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHO WE SERVE ===================== */}
      <section
        id="customers"
        className="scroll-mt-20 bg-chalk-100 py-16 sm:py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>Who We Serve</Eyebrow>
              <h2 className="stretch-display mb-4 font-display text-2xl font-semibold leading-tight tracking-display text-cyanotype-900 sm:mb-6 sm:text-[31px] lg:text-5xl">
                Built for everyone in the trade cycle.
              </h2>
              <p className="font-read text-[17px] leading-relaxed text-cyanotype-800 sm:text-xl">
                From SMEs entering new markets to established cross-border
                traders — Okwe fits into different parts of the trade cycle
                depending on your needs.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  'Importers',
                  'Exporters',
                  'Manufacturers',
                  'Wholesalers',
                  'Distributors',
                  'Retailers',
                  'SMEs',
                  'International Suppliers',
                  'International Buyers',
                  'Cross-border Traders',
                ].map((c) => (
                  <span
                    key={c}
                    className="cursor-default border border-chalk-300 bg-chalk-50 px-4 py-2 font-ui text-xs font-medium text-cyanotype-800 transition-colors hover:border-cyanotype-900 hover:bg-cyanotype-900 hover:text-chalk-50 sm:px-5 sm:py-2.5 sm:text-sm"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== POSITIONING PILLARS ===================== */}
      <section className="border-y border-chalk-300 bg-chalk-50 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl sm:mb-14">
            <Eyebrow>Positioning</Eyebrow>
            <h2 className="stretch-display mb-4 font-display text-2xl font-semibold leading-tight tracking-display text-cyanotype-900 sm:mb-6 sm:text-[31px] lg:text-5xl">
              At the intersection of trade.
            </h2>
            <p className="font-read text-[17px] leading-relaxed text-cyanotype-800 sm:text-xl">
              Our differentiation comes from combining four things most
              companies handle separately.
            </p>
          </div>

          <div className="grid gap-px border border-chalk-300 bg-chalk-300 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Globe2,
                t: 'Information',
                d: 'Market intelligence, sourcing, and opportunity data.',
              },
              {
                icon: Network,
                t: 'Relationships',
                d: 'Buyers, suppliers, and partners connected with trust.',
              },
              {
                icon: Handshake,
                t: 'Trade',
                d: 'Negotiation, coordination, and commercial execution.',
              },
              {
                icon: Package,
                t: 'Movement',
                d: 'Freight, handling, and delivery to destination.',
              },
            ].map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.t}
                  className="border-t-[3px] border-t-cyanotype-900 bg-chalk-50 p-7 text-center sm:p-8"
                >
                  <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center border border-cyanotype-900 bg-cyanotype-900">
                    <Icon className="h-5 w-5 text-chalk-50" />
                  </div>
                  <h3 className="mb-2 font-ui font-semibold text-cyanotype-900">
                    {p.t}
                  </h3>
                  <p className="font-read text-[15px] leading-relaxed text-cyanotype-800">
                    {p.d}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===================== VALUE PROPOSITION (closing part) ===================== */}
      <section className="bg-sulphur-400 py-16 text-cyanotype-900 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-4xl sm:mb-20">
            <p className="mb-3 flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-label sm:mb-4 sm:text-xs">
              <span className="h-[7px] w-[7px] bg-cyanotype-900" />
              The Okwe Promise
            </p>
            <h2 className="stretch-display text-2xl font-semibold leading-[1.2] tracking-display sm:text-[31px] lg:text-5xl">
              We help you know the opportunity, connect the trade, and move the
              goods.
            </h2>
          </div>

          <div className="border-t border-cyanotype-900">
            {[
              {
                n: '01',
                t: 'Integrated',
                d: 'Information, relationships, trade, and movement in one business.',
              },
              {
                n: '02',
                t: 'Efficient',
                d: 'One pathway instead of juggling separate suppliers and logistics.',
              },
              {
                n: '03',
                t: 'Connected',
                d: 'An ecosystem where information leads to connections, and connections to movement.',
              },
            ].map((v) => (
              <div
                key={v.n}
                className="grid grid-cols-1 gap-2 border-b border-cyanotype-900 py-8 sm:py-10 md:grid-cols-12 md:gap-10"
              >
                <span className="font-mono text-xs tracking-call md:col-span-1">
                  {v.n}
                </span>
                <h3 className="font-ui text-xl font-semibold tracking-tight sm:text-2xl md:col-span-4">
                  {v.t}
                </h3>
                <p className="font-read text-[15px] leading-relaxed sm:text-[17px] md:col-span-7">
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== VISION ===================== */}
      <section className="bg-cyanotype-900 py-16 text-chalk-50 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="mb-4 flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-label text-sulphur-400 sm:text-xs">
                <span className="h-[7px] w-[7px] bg-sulphur-400" />
                Long-Term Vision
              </p>
              <h2 className="stretch-display mb-4 font-display text-2xl font-semibold leading-tight tracking-display sm:mb-6 sm:text-[31px] lg:text-5xl">
                A connected ecosystem around trade.
              </h2>
              <p className="font-read text-[17px] leading-relaxed text-cyanotype-300 sm:text-xl">
                Okwe is growing into an integrated trade platform — where
                information leads to connections, connections to transactions,
                and transactions to movement.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="divide-y divide-chalk-50/15 border border-chalk-50/25">
                {[
                  ['Information', 'Discover opportunities with confidence'],
                  ['Connections', 'Build commercial relationships'],
                  ['Transactions', 'Execute trade with coordination'],
                  ['Movement', 'Deliver goods across markets'],
                ].map(([t, d], i) => (
                  <div
                    key={t}
                    className="flex items-center gap-4 p-5 transition-colors hover:bg-chalk-50/5 sm:gap-6 sm:p-6"
                  >
                    <span className="shrink-0 font-mono text-xs text-sulphur-400">
                      0{i + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="font-ui text-sm font-semibold text-chalk-50 sm:text-base">
                        {t}
                      </p>
                      <p className="font-read text-[13px] text-cyanotype-300 sm:text-sm">
                        {d}
                      </p>
                    </div>
                    <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-cyanotype-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section
        id="faq"
        className="scroll-mt-20 bg-chalk-100 py-16 sm:py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="stretch-display mb-4 font-display text-2xl font-semibold leading-tight tracking-display text-cyanotype-900 sm:text-[31px] lg:text-4xl">
                Understanding Okwe, simply.
              </h2>
              <p className="mb-6 font-read text-[15px] leading-relaxed text-cyanotype-800 sm:text-[17px]">
                Short answers to what people ask us most.
              </p>
              <Link
                to={routes.contact()}
                className="inline-flex items-center gap-2 border-b-2 border-sulphur-400 pb-1 font-ui text-sm font-semibold text-cyanotype-900 transition-colors hover:border-cyanotype-900"
              >
                Ask us anything
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-8">
              <div className="border-t border-chalk-300">
                {[
                  {
                    q: 'Are you just a logistics / shipping company?',
                    a: 'No. Logistics (Okwe Move) is only one of three processes. We also handle research and sourcing (Okwe Knows) and commercial coordination (Okwe Coms). That combination is what makes Okwe integrated.',
                  },
                  {
                    q: 'Can I use only one part — e.g. just sourcing or just movement?',
                    a: 'Yes. The five steps (Identify → Connect → Transact → Move → Deliver) work as one pathway, but you can enter at any point. Need only research? Only freight coordination? We fit into the part of the trade cycle you need.',
                  },
                  {
                    q: 'Who do you work with?',
                    a: 'Importers, exporters, manufacturers, wholesalers, distributors, retailers, SMEs entering new markets, and any business involved in cross-border trade — whether seeking suppliers or buyers.',
                  },
                  {
                    q: 'How do we start?',
                    a: 'Send a message through the Contact page describing your product, market, or deal. We review it, identify the opportunity, and propose the right Know → Connect → Move pathway for you.',
                  },
                  {
                    q: 'What does “Know. Connect. Move.” mean in practice?',
                    a: 'Know: we research the product, market, and counterparties. Connect: we introduce parties, negotiate, and coordinate the transaction. Move: we coordinate freight, handling, and delivery to destination.',
                  },
                ].map((f) => (
                  <FaqItem key={f.q} q={f.q} a={f.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="border-t-[3px] border-t-sulphur-400 bg-cyanotype-900 py-16 text-chalk-50 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-label text-sulphur-400 sm:mb-6 sm:text-xs">
              <span className="h-[7px] w-[7px] bg-sulphur-400" />
              Ready to trade?
            </p>
            <h2 className="stretch-display mb-6 font-display text-2xl font-semibold leading-[1.1] tracking-display sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
              Let&apos;s move your next trade forward.
            </h2>
            <p className="mb-8 max-w-2xl font-read text-[17px] leading-relaxed text-chalk-100 sm:mb-10 sm:text-xl">
              Tell us what you need. We&apos;ll help you know the opportunity,
              connect the trade, and move the goods.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                to={routes.contact()}
                className="inline-flex items-center justify-center gap-2 bg-sulphur-400 px-7 py-3.5 font-ui text-sm font-semibold text-cyanotype-900 transition-colors hover:bg-sulphur-300 sm:px-8 sm:py-4 sm:text-base"
              >
                Contact Okwe
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-chalk-50/30 px-7 py-3.5 font-ui text-sm font-medium text-chalk-50 transition-colors hover:bg-chalk-50/10 sm:px-8 sm:py-4 sm:text-base"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ---------- small helpers ---------- */

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-3 flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-label text-cyanotype-600 sm:mb-4 sm:text-xs">
    <span className="h-[7px] w-[7px] shrink-0 bg-sulphur-400" />
    {children}
  </p>
)

const ServiceRow = ({
  data,
}: {
  data: {
    id: string
    n: string
    t: string
    sub: string
    d: string
    purpose: string
    icon: React.ComponentType<{ className?: string }>
    items: string[]
  }
}) => {
  const [open, setOpen] = useState(false)
  const Icon = data.icon

  return (
    <div id={data.id} className="scroll-mt-24 border-b border-chalk-300">
      {/* HEADER — always visible */}
      <button
        onClick={() => setOpen(!open)}
        className="group flex w-full items-center gap-4 py-6 text-left sm:gap-6 sm:py-8"
        aria-expanded={open}
      >
        <span className="font-mono text-xs text-chalk-500 sm:text-sm">
          {data.n}
        </span>

        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center border transition-colors sm:h-12 sm:w-12 ${
            open
              ? 'border-cyanotype-900 bg-cyanotype-900'
              : 'border-chalk-300 bg-chalk-50 group-hover:border-cyanotype-900'
          }`}
        >
          <Icon
            className={`h-4 w-4 transition-colors sm:h-5 sm:w-5 ${
              open ? 'text-chalk-50' : 'text-cyanotype-700'
            }`}
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="font-ui text-lg font-semibold tracking-tight text-cyanotype-900 sm:text-xl lg:text-2xl">
            {data.t}
          </h3>
          <p className="mt-0.5 font-read text-[13px] text-cyanotype-600 sm:text-sm">
            {data.sub}
          </p>
        </div>

        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-colors ${
            open
              ? 'border-cyanotype-900 bg-cyanotype-900 text-chalk-50'
              : 'border-chalk-300 text-cyanotype-700 group-hover:border-cyanotype-900'
          }`}
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              open ? 'rotate-180' : ''
            }`}
          />
        </span>
      </button>

      {/* BODY — collapses */}
      <div
        className={`grid transition-all duration-200 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid gap-8 pb-8 sm:pb-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="mb-5 font-read text-[15px] leading-relaxed text-cyanotype-800 sm:text-[17px]">
                {data.d}
              </p>
              <div className="border-l-[3px] border-l-sulphur-400 py-1 pl-4">
                <p className="font-read text-[15px] leading-relaxed text-cyanotype-800">
                  <span className="font-ui font-semibold text-cyanotype-900">
                    Purpose:{' '}
                  </span>
                  {data.purpose}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-px border border-chalk-300 bg-chalk-300 sm:grid-cols-2">
                {data.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-chalk-50 p-4 sm:p-5"
                  >
                    <span className="mt-1.5 h-[7px] w-[7px] shrink-0 bg-sulphur-400" />
                    <span className="font-ui text-sm font-medium text-cyanotype-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-chalk-300">
      <button
        onClick={() => setOpen(!open)}
        className="group flex w-full items-center justify-between gap-4 py-5 text-left sm:py-6"
        aria-expanded={open}
      >
        <span className="font-ui text-sm font-semibold text-cyanotype-900 transition-colors group-hover:underline group-hover:decoration-sulphur-400 group-hover:underline-offset-4 sm:text-base">
          {q}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center border transition-colors ${
            open
              ? 'border-cyanotype-900 bg-cyanotype-900 text-chalk-50'
              : 'border-chalk-300 text-cyanotype-700'
          }`}
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              open ? 'rotate-180' : ''
            }`}
          />
        </span>
      </button>
      <div
        className={`grid transition-all duration-200 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-8 font-read text-[15px] leading-relaxed text-cyanotype-800 sm:pb-6 sm:pr-12 sm:text-[17px]">
            {a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
