const perks = [
  'Founding member pricing before public launch',
  'First access to class schedules and preview nights',
  'Premium Lagree programming in a quieter, more refined setting',
  'Elmhurst launch updates as the studio comes to life',
]

const pillars = [
  {
    title: 'Luxury without the performance',
    copy:
      'Vanta Lagree is designed to feel elevated, not loud — exacting classes, thoughtful service, and a studio experience that feels composed from the first minute in.',
  },
  {
    title: 'The room is part of the ritual',
    copy:
      'Warm natural tones, clean lines, sculptural lighting, and a layout that feels closer to a downtown design studio than a typical group fitness box.',
  },
  {
    title: 'Built for the woman who notices everything',
    copy:
      'The details matter here: pacing, instruction, music, flow, finishes, and the feeling you leave with after a 45-minute session that actually lands.',
  },
]

export default function App() {
  return (
    <div className="page">
      <div className="shell">
        <header className="topbar">
          <div className="wordmark">
            <span className="wordmark-kicker">Coming Soon</span>
            <span className="wordmark-name">Vanta Lagree</span>
          </div>
          <div className="top-pill">Elmhurst, Illinois · Founding list now open</div>
        </header>

        <section className="hero">
          <div>
            <div className="eyebrow">
              <span className="dot" />
              Opening Fall 2026
            </div>
            <h1>Elmhurst’s next luxury fitness address.</h1>
            <p className="hero-copy">
              Vanta Lagree is a new boutique studio coming to Elmhurst — premium Lagree classes, hospitality-grade interiors,
              and a brand built to feel sharp, modern, and unmistakably high end.
            </p>
            <div className="hero-actions">
              <a href="mailto:founding@vantalagree.com?subject=Founding%20List%20-%20Vanta%20Lagree">
                <button className="primary-btn">Join the founding list</button>
              </a>
              <div className="secondary-copy">Preview invitations, early rates, and launch updates.</div>
            </div>
          </div>

          <div className="hero-card-wrap">
            <div className="hero-card">
              <img className="hero-image" src="/images/hero-1.jpg" alt="Lagree reformer studio interior" />
              <div className="hero-overlay" />
              <div className="hero-panel">
                <div className="hero-panel-top">
                  <div>
                    <div className="wordmark-kicker" style={{ color: 'rgba(255,255,255,0.48)' }}>Founding access</div>
                    <h2>First look. First pick. First in.</h2>
                  </div>
                  <div className="panel-badge">Elmhurst, IL</div>
                </div>
                <p className="panel-copy">
                  The first members will get access before the public launch — preferred schedules, preview events, and the best rates we will offer.
                </p>
                <ul className="detail-list">
                  {perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="grid-3">
            {pillars.map((pillar) => (
              <article className="card" key={pillar.title}>
                <div className="card-kicker">Why Vanta</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="gallery">
          <div className="gallery-grid">
            <img src="/images/studio-1.jpg" alt="Lagree class on megaformers" />
            <img src="/images/studio-2.jpg" alt="Modern studio atmosphere" />
            <img src="/images/studio-3.jpg" alt="Luxury fitness studio design details" />
          </div>
        </section>

        <section className="split">
          <div>
            <div className="card-kicker">The brand</div>
            <h2 className="section-title">Vanta feels sleek, expensive, and easy to trust.</h2>
          </div>
          <div>
            <p className="body-copy">
              The name has weight. It feels modern without being cold, premium without sounding forced, and distinctive enough to stand alone in a crowded fitness market.
              That is the right lane for a Lagree brand meant to look established before the doors even open.
            </p>
            <p className="body-copy">
              The creative direction follows the same logic: controlled typography, restrained color, real photography, and copy that sounds like a proper brand — not a promo flyer.
            </p>
            <div className="location-pill">Planned for Elmhurst, Illinois</div>
          </div>
        </section>

        <section className="cta">
          <div className="card-kicker">Stay close</div>
          <h2 className="section-title">Get on the list before the opening drop.</h2>
          <p>
            Founding members will be the first to hear when schedules, memberships, and preview events are released.
            No clutter. Just the updates that matter.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <a href="mailto:founding@vantalagree.com?subject=Founding%20List%20-%20Vanta%20Lagree">
              <button className="primary-btn">Request founding access</button>
            </a>
          </div>
        </section>

        <footer className="footer">© 2026 Vanta Lagree. Coming soon to Elmhurst, Illinois.</footer>
      </div>
    </div>
  )
}
