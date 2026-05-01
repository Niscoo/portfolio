export default function Home({ profile }) {
  return (
    <section className="hero" id="about">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{profile.availability}</p>
          <h1>{profile.headline}</h1>
          <p className="lead">{profile.summary}</p>
          <div className="hero-actions">
            <a className="btn primary" href="#contact">
              Travaillons ensemble
            </a>
            <a className="btn ghost" href="#projects">
              Voir mes projets
            </a>
          </div>
          <div className="hero-metrics">
            <div>
              <span className="metric-value">3+</span>
              <span className="metric-label">projets data complets</span>
            </div>
            <div>
              <span className="metric-value">12</span>
              <span className="metric-label">pipelines déployés en local</span>
            </div>
            <div>
              <span className="metric-value">100%</span>
              <span className="metric-label">focus qualité &amp; observabilité</span>
            </div>
          </div>
        </div>
        <div className="hero-card">
          <h2>Ce que j’apporte</h2>
          <ul>
            <li>Pipelines propres, documentés et testés.</li>
            <li>Une culture data quality &amp; observabilité.</li>
            <li>Collaboration fluide avec les équipes data et produit.</li>
          </ul>
          <div className="hero-card-highlight">
            <h3>Ce que je recherche</h3>
            <p>
              Une équipe qui valorise la fiabilité des flux, le partage de
              connaissances et l’impact business.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
