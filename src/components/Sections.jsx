import Button        from './Button.jsx';
import SectionHeader from './SectionHeader.jsx';
import MockupCard    from './MockupCard.jsx';
import FaqItem       from './FaqItem.jsx';

import {
  heroAvatars,
  trustBrands,
  painPoints,
  aboutChecklist,
  aboutStats,
  benefits,
  steps,
  testimonials,
  plans,
  faqs,
  footerLinks,
  waLink,
} from '../data/index.js';

/* ─────────────────────────────────────────────────────── */
/*  HERO                                                   */
/* ─────────────────────────────────────────────────────── */
export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Section principale"
      className="relative pt-[152px] pb-20 bg-midnight overflow-hidden"
    >
      {/* Ambient glows */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-44 -right-44 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(79,115,92,0.09)_0%,transparent_70%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -left-28 w-[440px] h-[440px] rounded-full bg-[radial-gradient(circle,rgba(201,150,10,0.06)_0%,transparent_70%)]" />

      <div className="container-page relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Copy */}
          <div>
            <p
              className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30
                         text-gold-light px-4 py-1.5 rounded-full text-xs font-semibold
                         tracking-wide mb-6 animate-fade-up"
            >
              🇨🇮 Spécialiste landing pages · Abidjan
            </p>

            <h1
              className="font-serif font-extrabold text-cloud leading-[1.1]
                         tracking-[-0.025em] mb-5 animate-fade-up-1 text-balance"
              style={{ fontSize: 'clamp(2.2rem, 4.8vw, 3.5rem)' }}
            >
              Arrêtez de perdre des clients sur une page qui ne{' '}
              <em className="not-italic text-forest-muted relative">
                convainc pas
                <span aria-hidden="true" className="absolute bottom-0.5 inset-x-0 h-0.5 bg-gold opacity-45 rounded" />
              </em>
              .
            </h1>

            <p className="text-[1.1rem] text-cloud/70 leading-[1.8] max-w-[460px] mb-9 animate-fade-up-2">
              Je crée des landing pages qui transforment vos visiteurs en acheteurs — livrées
              en 1 weekend, sans que vous ayez à toucher une seule ligne de code.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 mb-10 animate-fade-up-3">
              <Button variant="primary" href="#pricing">
                Obtenir ma landing page →
              </Button>
              <Button variant="secondary" href="#process">
                Voir comment ça marche
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 text-[0.85rem] text-cloud/55 animate-fade-up-3">
              <div className="flex" aria-label="Avatars de clients satisfaits" role="img">
                {heroAvatars.map(({ initials, bg }, i) => (
                  <div
                    key={initials}
                    className="w-8 h-8 rounded-full border-2 border-midnight flex items-center justify-center text-[0.58rem] font-bold text-cloud"
                    style={{ background: bg, marginLeft: i === 0 ? 0 : -8 }}
                    aria-hidden="true"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span>
                <strong className="text-cloud font-semibold">12+ entrepreneurs</strong>{' '}
                ont déjà lancé leur projet
              </span>
            </div>
          </div>

          {/* Mockup — hidden on small screens */}
          <div className="hidden lg:block">
            <MockupCard />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────── */
/*  TRUST BAR                                             */
/* ─────────────────────────────────────────────────────── */
export function TrustBar() {
  return (
    <section aria-label="Marques qui font confiance" className="py-6 bg-midnight-deep">
      <div className="container-page">
        <div className="flex items-center justify-center gap-10 flex-wrap overflow-x-auto">
          <p className="flex items-center gap-2 text-cloud/35 text-[0.82rem] font-medium whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
            Déjà utilisé par 12 entrepreneurs ivoiriens et francophones
          </p>
          {trustBrands.map((brand) => (
            <span
              key={brand}
              className="text-cloud/18 text-[0.88rem] font-bold tracking-[0.1em] uppercase"
              aria-label={brand}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────── */
/*  PROBLEM                                               */
/* ─────────────────────────────────────────────────────── */
export function ProblemSection() {
  return (
    <section id="problem" aria-labelledby="problem-title" className="py-24 bg-midnight">
      <div className="container-page">
        <SectionHeader
          label="❌ Le problème"
          title={
            <>
              Vous avez un projet solide.<br />
              Mais personne ne le{' '}
              <span className="text-forest-muted">voit vraiment.</span>
            </>
          }
          sub="Ce n'est pas votre idée le problème. C'est la façon dont elle est présentée en ligne."
        />

        <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {painPoints.map(({ icon, title, desc }) => (
            <li
              key={title}
              className="card-hover group relative overflow-hidden p-7 rounded-2xl"
            >
              {/* Top gradient line on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-forest to-gold
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div
                className="w-11 h-11 rounded-xl bg-forest/20 flex items-center justify-center
                           text-xl mb-4"
                aria-hidden="true"
              >
                {icon}
              </div>
              <h3 className="font-bold text-cloud mb-2">{title}</h3>
              <p className="text-[0.88rem] text-cloud/55 leading-relaxed">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────── */
/*  SOLUTION / ABOUT                                       */
/* ─────────────────────────────────────────────────────── */
export function SolutionSection() {
  return (
    <section id="solution" aria-labelledby="about-title" className="py-24 bg-midnight-mid">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-18 items-center">

          {/* Bio */}
          <div>
            <div className="section-label">✦ À propos</div>
            <div
              className="w-24 h-24 rounded-full bg-gradient-to-br from-forest to-forest-light
                         flex items-center justify-center text-[2.4rem] mb-6
                         shadow-card-lg border-[3px] border-[rgba(122,170,144,0.3)]"
              role="img"
              aria-label="Photo de profil de Steve Kouadio"
            >
              👨🏾‍💻
            </div>

            <h2 id="about-title" className="font-serif text-[1.9rem] font-extrabold text-cloud mb-1.5">
              Steve Kouadio
            </h2>
            <p className="flex items-center gap-2 flex-wrap text-[0.85rem] text-forest-muted font-semibold mb-6">
              <span className="bg-forest/20 text-forest-muted px-2.5 py-0.5 rounded-full text-[0.75rem] font-bold">
                🇨🇮 Basé à Abidjan
              </span>
              Créateur de landing pages qui convertissent
            </p>

            <p className="text-[0.97rem] text-cloud/70 leading-[1.85] mb-5">
              J'ai grandi avec une conviction :{' '}
              <strong className="text-cloud">une bonne idée mérite d'être vue.</strong> En
              Côte d'Ivoire, des centaines d'entrepreneurs ont des projets solides — mais leur
              présence en ligne ne leur rend pas justice.
            </p>
            <p className="text-[0.97rem] text-cloud/70 leading-[1.85] mb-5">
              Je me suis formé aux techniques de{' '}
              <strong className="text-cloud">design persuasif et de copywriting</strong> qui
              font vraiment convertir les pages. Chaque page que je livre est construite avec
              une seule obsession :{' '}
              <strong className="text-cloud">transformer vos visiteurs en acheteurs.</strong>
            </p>
            <p className="text-[0.97rem] text-cloud/70 leading-[1.85] mb-7">
              Ce qui me distingue ?{' '}
              <strong className="text-cloud">Je livre en 1 weekend</strong> — pas dans 3
              semaines. Joignable sur WhatsApp, en français, avec la réactivité d'un
              partenaire, pas d'une agence.
            </p>

            {/* Stats */}
            <dl className="flex gap-7 flex-wrap">
              {aboutStats.map(({ value, label }) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-serif text-[1.9rem] font-extrabold text-cloud leading-none">
                    {value}
                  </dd>
                  <p className="text-[0.8rem] text-cloud/55 mt-1">{label}</p>
                </div>
              ))}
            </dl>
          </div>

          {/* Checklist card */}
          <div>
            <div
              className="bg-cloud/[0.04] border border-cloud/[0.08] rounded-[20px]
                         p-9 shadow-card-lg"
            >
              <div className="section-label mb-7">✦ Ce que vous obtenez</div>
              <ul role="list" className="space-y-0">
                {aboutChecklist.map(({ title, desc }) => (
                  <li
                    key={title}
                    className="flex items-start gap-3.5 py-4 border-b border-cloud/[0.08] last:border-0"
                  >
                    <span
                      className="w-6 h-6 rounded-full bg-forest/20 flex items-center justify-center
                                 text-forest-muted text-[0.78rem] flex-shrink-0 mt-0.5 font-bold"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <div className="text-[0.92rem] text-cloud/70 leading-relaxed">
                      <strong className="text-cloud block mb-0.5">{title}</strong>
                      {desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────── */
/*  BENEFITS                                              */
/* ─────────────────────────────────────────────────────── */
export function BenefitsSection() {
  return (
    <section id="benefits" aria-labelledby="benefits-title" className="py-24 bg-midnight">
      <div className="container-page">
        <SectionHeader
          label="✦ Ce que vous obtenez"
          title={
            <>Tout ce qu'il faut pour{' '}<span className="text-forest-muted">lancer et convertir</span></>
          }
          sub="Chaque détail est pensé pour que votre page travaille pour vous — même quand vous dormez."
        />

        <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map(({ icon, title, desc, tag }) => (
            <li
              key={title}
              className="card group relative overflow-hidden p-8 rounded-2xl
                         hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              {/* Animated border on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl border-[1.5px] border-forest
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />
              <div
                className="w-13 h-13 rounded-xl bg-forest/20 flex items-center justify-center
                           text-2xl mb-5 transition-transform duration-300
                           group-hover:scale-110 group-hover:-rotate-3"
                aria-hidden="true"
              >
                {icon}
              </div>
              <h3 className="font-bold text-cloud mb-2.5">{title}</h3>
              <p className="text-[0.86rem] text-cloud/55 leading-relaxed mb-3.5">{desc}</p>
              <span className="inline-block bg-forest/20 text-forest-muted text-[0.72rem] font-bold px-3 py-0.5 rounded-full tracking-wide">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────── */
/*  PROCESS                                               */
/* ─────────────────────────────────────────────────────── */
export function ProcessSection() {
  return (
    <section id="process" aria-labelledby="process-title" className="py-24 bg-midnight-mid">
      <div className="container-page">
        <SectionHeader
          label="⚡ Le processus"
          title={
            <>Comment ça marche{' '}<span className="text-gold-light">en 1 weekend</span></>
          }
          sub="Un processus rodé et simple. Vous donnez votre brief, je m'occupe du reste."
        />

        <ol
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          aria-label="Étapes du processus"
        >
          {/* Connector line — desktop only */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[35px] left-[12.5%] right-[12.5%]
                       h-px bg-gradient-to-r from-forest to-gold opacity-35"
          />

          {steps.map(({ num, title, desc, time }, i) => (
            <li key={num} className="text-center relative z-10">
              <div
                className={`w-[70px] h-[70px] rounded-full mx-auto mb-5 flex items-center justify-center
                            font-serif text-[1.4rem] font-extrabold shadow-card
                            transition-transform duration-300 hover:scale-105
                            ${i === steps.length - 1
                              ? 'border-2 border-gold text-gold-light bg-gold/10'
                              : 'border-2 border-forest text-forest-muted bg-midnight'
                            }`}
                aria-label={`Étape ${num}`}
              >
                {num}
              </div>
              <h3 className="font-bold text-cloud mb-2">{title}</h3>
              <p className="text-[0.83rem] text-cloud/55 leading-relaxed mb-3">{desc}</p>
              <span className="inline-block bg-cloud/[0.08] border border-cloud/15 text-cloud/55 text-[0.72rem] font-semibold px-2.5 py-0.5 rounded-full">
                {time}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────── */
/*  TESTIMONIALS                                          */
/* ─────────────────────────────────────────────────────── */
export function TestimonialsSection() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="py-24 bg-midnight">
      <div className="container-page">
        <SectionHeader
          label="💬 Témoignages"
          title={
            <>Ce que disent les{' '}<span className="text-forest-muted">entrepreneurs qui ont lancé</span></>
          }
        />

        <ul
          role="list"
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          aria-label="Témoignages clients"
        >
          {testimonials.map(({ name, role, initials, bg, result, featured, quote }) => (
            <li
              key={name}
              className={`relative rounded-2xl p-8 transition-all duration-300
                         hover:shadow-card hover:-translate-y-0.5
                         ${featured
                           ? 'bg-gradient-to-br from-forest to-forest-light border-transparent'
                           : 'card border-cloud/[0.08] hover:border-cloud/15'
                         }`}
            >
              {/* Decorative quote */}
              <span aria-hidden="true" className="absolute top-6 right-7 font-serif text-[3.5rem] leading-none text-cloud/[0.08] pointer-events-none select-none">
                "
              </span>

              {/* Stars */}
              <div aria-label="5 étoiles sur 5" className="text-gold text-[0.95rem] tracking-widest mb-4">
                ★★★★★
              </div>

              {/* Result badge */}
              <span className="inline-flex items-center gap-1.5 bg-gold/18 text-gold-light text-[0.78rem] font-bold px-3 py-1 rounded-full mb-4">
                🏆 {result}
              </span>

              {/* Quote */}
              <blockquote
                className={`text-[0.97rem] leading-relaxed mb-6
                           ${featured ? 'text-cloud/90' : 'text-cloud/70'}`}
              >
                "{quote}"
              </blockquote>

              {/* Author */}
              <footer className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center
                             text-cloud font-bold flex-shrink-0"
                  style={{ background: bg }}
                  aria-hidden="true"
                >
                  {initials}
                </div>
                <div>
                  <cite className="not-italic font-bold text-[0.92rem] text-cloud block">
                    {name}
                  </cite>
                  <p className={`text-[0.78rem] mt-0.5 ${featured ? 'text-cloud/60' : 'text-cloud/55'}`}>
                    {role}
                  </p>
                </div>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────── */
/*  PRICING                                               */
/* ─────────────────────────────────────────────────────── */
export function PricingSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="py-24 bg-midnight-mid">
      <div className="container-page">
        <SectionHeader
          label="💰 Tarifs"
          title={
            <>Des prix pensés pour{' '}<span className="text-forest-muted">l'entrepreneur africain</span></>
          }
          sub="Pas de surprise. Pas de frais cachés. Choisissez ce qui vous correspond."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto items-start">
          {plans.map(({ id, plan, name, desc, price, currency, popular, features, cta }) => (
            <article
              key={id}
              aria-label={`Offre ${name}`}
              className={`relative rounded-3xl p-11 transition-all duration-300
                         ${popular
                           ? 'bg-forest border-transparent shadow-[0_16px_48px_rgba(79,115,92,0.3)] md:scale-[1.025]'
                           : 'bg-cloud/[0.05] border border-cloud/[0.08] hover:shadow-card-lg hover:border-cloud/15'
                         }`}
            >
              {popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2
                             bg-gold text-white text-[0.76rem] font-bold
                             px-5 py-1.5 rounded-full whitespace-nowrap tracking-wide
                             shadow-gold"
                  aria-label="Offre la plus populaire"
                >
                  ⭐ Le plus populaire
                </div>
              )}

              <p className={`text-[0.76rem] font-bold tracking-[0.1em] uppercase mb-2.5 ${popular ? 'text-cloud/65' : 'text-forest-muted'}`}>
                {plan}
              </p>
              <h3 className="font-serif text-[1.45rem] font-extrabold text-cloud mb-2">{name}</h3>
              <p className={`text-[0.86rem] leading-relaxed mb-7 ${popular ? 'text-cloud/80' : 'text-cloud/55'}`}>
                {desc}
              </p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="font-serif text-[2.6rem] font-extrabold text-cloud leading-none">
                  {price}
                </span>
                <span className={`font-medium ${popular ? 'text-cloud/65' : 'text-cloud/55'}`}>
                  {currency}
                </span>
              </div>

              <ul role="list" className="space-y-0 mb-9">
                {features.map((feat) => (
                  <li
                    key={feat}
                    className={`flex items-start gap-2.5 py-2.5 border-b text-[0.88rem]
                               ${popular
                                 ? 'text-cloud/90 border-cloud/12'
                                 : 'text-cloud/70 border-cloud/[0.08]'
                               } last:border-0`}
                  >
                    <span
                      className={`font-bold flex-shrink-0 mt-0.5 ${popular ? 'text-cloud' : 'text-forest-muted'}`}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              <Button
                variant={popular ? 'gold' : 'secondary'}
                href={waLink(`Bonjour Steve, je veux le ${name}`)}
                className="w-full justify-center"
                aria-label={`${cta} — ${name}`}
              >
                {cta} →
              </Button>

              <p className={`text-[0.76rem] text-center mt-3.5 ${popular ? 'text-cloud/50' : 'text-cloud/35'}`}>
                {popular ? '💳 Orange Money · MTN MoMo · Wave · Virement' : 'Accès immédiat après paiement'}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────── */
/*  FAQ                                                   */
/* ─────────────────────────────────────────────────────── */
export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-24 bg-midnight">
      <div className="container-page">
        <SectionHeader
          label="❓ FAQ"
          title={<>Les questions{' '}<span className="text-forest-muted">que vous vous posez</span></>}
        />

        <div className="max-w-[720px] mx-auto">
          {faqs.map(({ question, answer }) => (
            <FaqItem key={question} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────── */
/*  FINAL CTA                                             */
/* ─────────────────────────────────────────────────────── */
export function CtaSection() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-title"
      className="relative py-24 bg-midnight-deep overflow-hidden"
    >
      <div aria-hidden="true" className="absolute -top-44 -right-44 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(79,115,92,0.12)_0%,transparent_70%)]" />
      <div aria-hidden="true" className="absolute -bottom-44 -left-44 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,150,10,0.08)_0%,transparent_70%)]" />

      <div className="container-page relative z-10 text-center">
        <p className="inline-flex items-center gap-2 bg-gold/12 border border-gold/28 text-gold-light text-xs font-semibold px-4 py-1.5 rounded-full mb-7">
          ⏰ Seulement 2 places disponibles ce weekend
        </p>

        <h2
          id="cta-title"
          className="font-serif font-extrabold text-cloud leading-[1.15] tracking-tight mb-5 text-balance"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}
        >
          Votre concurrent, lui,<br />
          <span className="text-gold-light">a déjà sa page. Et vous ?</span>
        </h2>

        <p className="text-cloud/55 text-base leading-[1.8] max-w-[500px] mx-auto mb-11">
          Chaque semaine sans page qui convertit, c'est des clients perdus. Donnez-moi
          10 minutes pour votre brief — je vous livre une page professionnelle ce weekend.
        </p>

        <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-stretch sm:items-center mb-9">
          <Button variant="gold" href="#pricing">
            Je veux ma page ce weekend →
          </Button>
          <Button variant="ghost" href={waLink()}>
            💬 Poser une question sur WhatsApp
          </Button>
        </div>

        <p className="text-cloud/35 text-[0.82rem] flex flex-wrap justify-center gap-2">
          <span>🛡️ Remboursé si non satisfait</span>
          <span aria-hidden="true">·</span>
          <span>Paiement Mobile Money</span>
          <span aria-hidden="true">·</span>
          <span>Réponse en moins d'1h</span>
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────── */
/*  FOOTER                                                */
/* ─────────────────────────────────────────────────────── */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-[#161616] py-11 border-t border-cloud/[0.08]"
    >
      <div className="container-page">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 flex-wrap">

          <a
            href="#hero"
            className="font-serif text-[1.15rem] font-extrabold text-cloud tracking-tight
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-muted rounded-sm"
            aria-label="Steve.dev — retour en haut de page"
          >
            Steve<span className="text-gold" aria-hidden="true">.</span>dev
          </a>

          <nav aria-label="Liens du pied de page">
            <ul role="list" className="flex flex-wrap gap-6 list-none">
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[0.82rem] text-cloud/35 hover:text-cloud/70 transition-colors duration-200
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-muted rounded-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={waLink()}
                  className="text-[0.82rem] text-cloud/35 hover:text-cloud/70 transition-colors duration-200
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-muted rounded-sm"
                  aria-label="Contacter Steve sur WhatsApp"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </nav>

          <p className="text-[0.78rem] text-cloud/18">
            <small>© {currentYear} Steve Kouadio · Abidjan, Côte d'Ivoire 🇨🇮</small>
          </p>
        </div>
      </div>
    </footer>
  );
}
