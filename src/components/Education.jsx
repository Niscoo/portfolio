export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Formation</p>
          <h2>Parcours académique et certifications</h2>
          <p>Un socle solide en data, cloud et ingénierie logicielle.</p>
        </div>
        <div className="education-grid">
          <div className="card">
            <h3>Master Data Engineering</h3>
            <p className="muted">2024 — 2026 · Université Lumière</p>
            <p>
              Architecture data, systèmes distribués, MLOps, gouvernance et sécurité.
            </p>
          </div>
          <div className="card">
            <h3>Licence Informatique</h3>
            <p className="muted">2021 — 2024 · Université de Lyon</p>
            <p>Programmation avancée, bases de données, cloud et DevOps.</p>
          </div>
          <div className="card">
            <h3>Certifications</h3>
            <ul className="list">
              <li>Google Cloud Fundamentals (2025)</li>
              <li>Data Engineering with Python (2024)</li>
              <li>SQL Advanced for Analytics (2024)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
