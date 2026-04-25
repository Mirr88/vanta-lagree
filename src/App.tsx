const points = [
  'Opening soon in Elmhurst, Illinois',
  'Focused Lagree method in a boutique studio setting',
  'Founding list gets first access to preview classes and launch pricing',
]

export default function App() {
  return (
    <main className="page">
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Vanta Lagree home">
          Vanta <strong>Lagree</strong>
        </a>
        <a className="nav-link" href="mailto:founding@vantalagree.com?subject=Founding%20List%20-%20Vanta%20Lagree">
          Founding list
        </a>
      </nav>

      <section id="top" className="hero">
        <p className="kicker">Elmhurst, Illinois · Coming soon</p>
        <h1>Elmhurst, meet Lagree.</h1>
        <p className="lede">
          Vanta Lagree is a boutique Lagree studio coming soon to Elmhurst, Illinois — designed for slow,
          controlled strength training in a polished local setting.
        </p>

        <div className="actions">
          <a className="button primary" href="mailto:founding@vantalagree.com?subject=Founding%20List%20-%20Vanta%20Lagree">
            Join the founding list
          </a>
          <a className="button secondary" href="mailto:founding@vantalagree.com?subject=Vanta%20Lagree%20Elmhurst%20Updates">
            Get opening updates
          </a>
        </div>
      </section>

      <section className="brief" aria-label="Studio details">
        <div>
          <p className="kicker">What this is</p>
          <h2>A simple opening page for Elmhurst.</h2>
        </div>
        <ul>
          {points.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </section>

      <section className="method">
        <p className="kicker">Why Lagree</p>
        <h2>The workout is slow. The shake is real.</h2>
        <p>
          Lagree combines slow resistance, core work, endurance, and low-impact intensity. Vanta will bring
          that method to Elmhurst without the big-box fitness feel.
        </p>
      </section>

      <section className="cta">
        <p className="kicker">Founding access</p>
        <h2>Be first to know when Vanta opens.</h2>
        <p>Join for preview invites, launch timing, and early membership information.</p>
        <a className="button primary" href="mailto:founding@vantalagree.com?subject=Founding%20List%20-%20Vanta%20Lagree">
          Request founding access
        </a>
      </section>

      <footer className="footer">
        <span>© 2026 Vanta Lagree · Elmhurst, Illinois</span>
        <div className="footer-badges">
          <a
            className="lnm-badge"
            href="https://lagreenearme.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Vanta Lagree on Lagree Near Me"
          >
            <img
              src="/lagree-near-me-badge.svg"
              alt="Verified on Lagree Near Me"
            />
          </a>
          <span className="mariana-logo" aria-label="Powered by Mariana Tek">
            <img src="/mariana-tek-logo-cropped.png" alt="Powered by Mariana Tek" />
          </span>
        </div>
      </footer>
    </main>
  )
}
