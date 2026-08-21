import { Helmet } from '@dr.pogodin/react-helmet';
import { Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';

import { home } from 'virtual:content';

const siteUrl = 'https://hello-world.example';

export default function HomePage() {
  const [celebrating, setCelebrating] = useState(false);
  const reduceMotion = useReducedMotion();

  const celebrate = () => {
    setCelebrating(true);
    window.setTimeout(() => setCelebrating(false), 900);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: 'Hello World', url: `${siteUrl}/` },
      { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Hello World', url: `${siteUrl}/` },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        name: 'Hello World | Neon Arcade Greeting',
        url: `${siteUrl}/`,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#organization` },
        datePublished: '2026-08-20',
        dateModified: '2026-08-20',
      },
    ],
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Hello World | Neon Arcade Greeting</title>
        <meta name="description" content="A joyful neon arcade Hello World greeting experience." />
        <link rel="canonical" href={`${siteUrl}/`} />
        <meta property="og:title" content="Hello World | Neon Arcade Greeting" />
        <meta property="og:description" content="A joyful neon arcade Hello World greeting experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:image" content="/airo-assets/images/logo/horizontal" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hello World | Neon Arcade Greeting" />
        <meta name="twitter:description" content="A joyful neon arcade Hello World greeting experience." />
        <meta name="twitter:image" content="/airo-assets/images/logo/horizontal" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="relative isolate flex min-h-[100dvh] overflow-hidden bg-background px-5 py-5 text-foreground sm:px-8 sm:py-8 lg:px-12 lg:py-10">
        <div className="arcade-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="scanlines pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-secondary blur-[120px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent blur-[140px]" aria-hidden="true" />

        <motion.div
          className="pointer-events-none absolute right-[7%] top-[12%] h-56 w-56 rounded-full border border-primary sm:h-80 sm:w-80"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
          aria-hidden="true"
        >
          <span className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 bg-primary shadow-[0_0_28px_hsl(var(--primary))]" />
          <span className="absolute right-7 top-3 h-3 w-3 bg-accent shadow-[0_0_24px_hsl(var(--accent))]" />
        </motion.div>
        <motion.div
          className="pointer-events-none absolute right-[13%] top-[18%] h-40 w-40 rounded-full border border-secondary sm:h-56 sm:w-56"
          animate={reduceMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 17, ease: 'linear', repeat: Infinity }}
          aria-hidden="true"
        />

        <div className="relative z-10 flex w-full flex-col justify-between">
          <header className="flex items-start justify-between gap-4" aria-label="Hello World status">
            <div className="min-w-0 rounded-sm border border-border bg-card px-3 py-2 shadow-[0_0_30px_hsl(var(--secondary)/0.12)]">
              <img
                src="/airo-assets/images/logo/horizontal/dark"
                alt={home.hero.brandAlt}
                width={1536}
                height={1024}
                loading="eager"
                fetchPriority="high"
                className="block h-auto max-h-9 w-auto max-w-[8rem] object-contain"
              />
            </div>
            <div className="flex items-center gap-2 border border-primary bg-background px-3 py-2 text-xs font-bold tracking-[0.14em] text-primary">
              <span className="h-2 w-2 bg-primary shadow-[0_0_14px_hsl(var(--primary))]" />
              <span>{home.hero.eyebrow}</span>
            </div>
          </header>

          <section className="relative max-w-5xl py-16 sm:py-20 lg:py-24" aria-labelledby="hello-world-title">
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="mb-5 flex items-center gap-3 text-sm font-bold tracking-[0.18em] text-secondary"
            >
              <span className="h-px w-12 bg-secondary" />
              <span>LEVEL ONE: UNLOCKED</span>
            </motion.p>
            <motion.h1
              id="hello-world-title"
              initial={reduceMotion ? false : { opacity: 0, y: 42, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: 'backOut' }}
              className="relative -ml-1 max-w-4xl text-[clamp(3.7rem,10vw,9.5rem)] leading-[0.82] tracking-[-0.06em] text-foreground"
            >
              <span className="block text-primary [text-shadow:0_0_32px_hsl(var(--primary)/0.5)]">HELLO,</span>
              <span className="block pl-[0.12em] text-foreground [text-shadow:0_0_36px_hsl(var(--secondary)/0.35)]">WORLD!</span>
            </motion.h1>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              {home.hero.subtitle}
            </motion.p>
          </section>

          <footer className="flex flex-col items-start justify-between gap-5 border-t border-border pt-5 sm:flex-row sm:items-end">
            <div className="flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-muted-foreground">
              <span className="h-2 w-2 bg-accent shadow-[0_0_14px_hsl(var(--accent))]" />
              <span>{home.hero.status}</span>
            </div>
            <motion.button
              type="button"
              onClick={celebrate}
              whileHover={reduceMotion ? undefined : { scale: 1.03, rotate: -1 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="group relative inline-flex items-center gap-3 overflow-hidden border border-primary bg-primary px-5 py-3 font-bold text-primary-foreground shadow-[0_0_34px_hsl(var(--primary)/0.35)] outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="relative z-10">{home.hero.button}</span>
              <Sparkles className="relative z-10 h-5 w-5 transition-transform duration-200 group-hover:rotate-12" aria-hidden="true" />
              {celebrating && (
                <motion.span
                  initial={{ scale: 0.2, opacity: 0.9 }}
                  animate={{ scale: 2.8, opacity: 0 }}
                  transition={{ duration: 0.75, ease: 'easeOut' }}
                  className="pointer-events-none absolute inset-0 m-auto h-12 w-12 rounded-full bg-accent"
                  aria-hidden="true"
                />
              )}
            </motion.button>
          </footer>
        </div>
      </main>
    </>
  );
}
