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
            <p className="muted">2025 — (en cours) · DSP </p>
            <p>
              Architecture data, ETL/ELT, data lakes, data warehouses, cloud platforms (AWS, GCP).
            </p>
          </div>
          <div className="card">
            <h3>Master HPC</h3>
            <p className="muted">2023 — 2025 · USTHB</p>
            <p>
              Big data, systèmes distribués, cloud computing. 
            </p>
          </div>
          <div className="card">
            <h3>Licence ISIL</h3>
            <p className="muted">2020 — 2023 · USTHB</p>
            <p>Algorithmiques, Programmation avancée, bases de données</p>
          </div>
          {/* <div className="card">
            <h3>Certifications</h3>
            <ul className="list">
              <li>Google Cloud Fundamentals (2025)</li>
              <li>Data Engineering with Python (2024)</li>
              <li>SQL Advanced for Analytics (2024)</li>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  )
}
