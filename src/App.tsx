const points = [
  'Opening soon in Elmhurst, Illinois',
  'Official Lagree-style training on the Megaformer',
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
        <h1>Lagree is coming to Elmhurst.</h1>
        <p className="lede">
          Vanta Lagree is a boutique studio in development for Elmhurst — focused on the slow, controlled,
          high-intensity Lagree workout people drive across town to find.
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
          <h2>A clean coming-soon page for a real studio launch.</h2>
        </div>
        <ul>
          {points.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </section>

      <section className="method">
        <p className="kicker">Why Lagree</p>
        <h2>Low impact. High intensity. Serious results.</h2>
        <p>
          Lagree is built around controlled resistance, core strength, endurance, balance, and the shake.
          Vanta will bring that method to Elmhurst in a polished, boutique setting once the studio opens.
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
            href="https://lagreenearme.com/oak-brook-il/mirs-lagree-mmfxy1ar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Vanta Lagree on Lagree Near Me"
          >
            <img
              src="https://lagreenearme.com/api/badge/mirs-lagree-mmfxy1ar?style=full"
              alt="Vanta Lagree on Lagree Near Me"
            />
          </a>
          <span className="mariana-badge">Powered by Mariana Tek</span>
        </div>
      </footer>
    </main>
  )
}
