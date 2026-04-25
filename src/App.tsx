const classTypes = [
  {
    title: 'Vanta 45',
    meta: 'Signature · 45 min',
    copy: 'Slow-count Lagree, quick transitions, and full-body tension built around the Megaformer.',
  },
  {
    title: 'Foundations',
    meta: 'Beginner-friendly · 40 min',
    copy: 'A sharper first-class experience: machine setup, form cues, and controlled pacing without watering it down.',
  },
  {
    title: 'Sculpt + Sweat',
    meta: 'Advanced · 45 min',
    copy: 'High-intensity, low-impact sequencing for clients who want the shake, the burn, and the reset.',
  },
]

const firstClass = [
  'Arrive 10 minutes early for machine setup',
  'Grip socks required in studio',
  'Classes stay small so coaching feels personal',
  'Expect slow movements, fast transitions, and shaking muscles',
]

const schedulePreview = [
  ['6:00 AM', 'Vanta 45', 'Waitlist soon'],
  ['7:15 AM', 'Foundations', 'Founding access'],
  ['12:15 PM', 'Vanta 45', 'Lunch reset'],
  ['5:30 PM', 'Sculpt + Sweat', 'Prime time'],
]

export default function App() {
  return (
    <div className="site">
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Vanta Lagree home">
          <span>Vanta</span>
          <strong>Lagree</strong>
        </a>
        <div className="nav-links">
          <a href="#method">Method</a>
          <a href="#classes">Classes</a>
          <a href="#schedule">Schedule</a>
          <a href="#first-class">First class</a>
        </div>
        <a className="nav-cta" href="mailto:founding@vantalagree.com?subject=Founding%20List%20-%20Vanta%20Lagree">
          Join founding list
        </a>
      </nav>

      <main id="top">
        <section className="hero">
          <div className="hero-media" aria-hidden="true">
            <img src="/images/hero-1.jpg" alt="" />
          </div>
          <div className="hero-content">
            <p className="kicker">Elmhurst, IL · Opening soon</p>
            <h1>Low impact. High intensity. Built for the shake.</h1>
            <p className="lede">
              A boutique Lagree studio coming to Elmhurst with small-format Megaformer classes, polished hospitality,
              and the kind of programming that makes 45 minutes feel efficient, focused, and impossible to fake.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="mailto:founding@vantalagree.com?subject=Founding%20List%20-%20Vanta%20Lagree">
                Claim founding access
              </a>
              <a className="button button-light" href="#first-class">New clients start here</a>
            </div>
          </div>
          <aside className="booking-card" aria-label="Opening preview">
            <span className="card-label">Founding drop</span>
            <h2>Early rates before public launch.</h2>
            <p>Founding members get first pick of schedule, preview classes, and launch-week pricing.</p>
            <div className="mini-stats">
              <div><strong>45</strong><span>min classes</span></div>
              <div><strong>12</strong><span>machines planned</span></div>
              <div><strong>Fall</strong><span>2026 target</span></div>
            </div>
          </aside>
        </section>

        <section className="marquee" aria-label="Lagree benefits">
          <span>Core</span>
          <span>Strength</span>
          <span>Endurance</span>
          <span>Balance</span>
          <span>Flexibility</span>
          <span>Shake</span>
        </section>

        <section id="method" className="section two-col">
          <div>
            <p className="kicker">The method</p>
            <h2>Everything moves slower than your ego wants it to.</h2>
          </div>
          <div className="copy-stack">
            <p>
              Lagree works because it keeps your muscles under tension: slow movement, controlled transitions,
              full-body sequencing, and a machine designed to expose every shortcut.
            </p>
            <p>
              The studio should feel simple to book, easy to understand, and premium from the first scroll — more like a
              real class business, less like a coming-soon mood board.
            </p>
          </div>
        </section>

        <section id="classes" className="section cards-section">
          <div className="section-heading">
            <p className="kicker">Classes</p>
            <h2>Pick your version of the shake.</h2>
          </div>
          <div className="class-grid">
            {classTypes.map((item) => (
              <article className="class-card" key={item.title}>
                <p>{item.meta}</p>
                <h3>{item.title}</h3>
                <span>{item.copy}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="schedule" className="section schedule-section">
          <div className="schedule-copy">
            <p className="kicker">Schedule preview</p>
            <h2>Built around real studio behavior.</h2>
            <p>
              Studio sites that convert make booking obvious. This preview leaves room for Mariana Tek class embeds once the
              account is ready, while still making the launch feel active today.
            </p>
          </div>
          <div className="schedule-card">
            {schedulePreview.map(([time, name, note]) => (
              <div className="schedule-row" key={time}>
                <strong>{time}</strong>
                <span>{name}</span>
                <em>{note}</em>
              </div>
            ))}
            <a className="button button-dark full" href="mailto:founding@vantalagree.com?subject=Schedule%20Preview%20-%20Vanta%20Lagree">
              Get schedule updates
            </a>
          </div>
        </section>

        <section className="image-band" aria-label="Studio preview images">
          <img src="/images/studio-1.jpg" alt="Megaformer studio class" />
          <img src="/images/studio-2.jpg" alt="Modern boutique fitness studio" />
          <img src="/images/studio-3.jpg" alt="Luxury Lagree studio detail" />
        </section>

        <section id="first-class" className="section first-class">
          <div>
            <p className="kicker">First class</p>
            <h2>What to know before you show up.</h2>
          </div>
          <ul>
            {firstClass.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="final-cta">
          <p className="kicker">Founding list</p>
          <h2>Be first in when Elmhurst opens.</h2>
          <p>No spam. Just launch timing, preview classes, and the first membership drop.</p>
          <a className="button button-dark" href="mailto:founding@vantalagree.com?subject=Founding%20List%20-%20Vanta%20Lagree">
            Request founding access
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <strong>Vanta Lagree</strong>
          <span>Coming soon to Elmhurst, Illinois.</span>
        </div>
        <div className="powered">
          <a href="https://lagreenearme.com" target="_blank" rel="noreferrer">Powered by Lagree Near Me</a>
          <span>Powered by Mariana Tek</span>
        </div>
      </footer>
    </div>
  )
}
