export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Expérience</p>
          <h2>Des missions orientées impact</h2>
          <p>
            Je cherche à produire de la valeur rapidement, avec des livrables clairs
            et maintenables.
          </p>
        </div>
        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content">
              <h3>Stage Data Engineer · DataFlow Studio</h3>
              <span className="timeline-meta">Avr 2025 — Sep 2025 · Paris</span>
              <p>
                Construction d’un pipeline ELT pour un client retail, automatisation
                des tests de qualité et documentation des modèles analytiques.
              </p>
              <ul>
                <li>+25% de fiabilité sur les dashboards métiers</li>
                <li>Suppression de 8 tâches manuelles hebdomadaires</li>
              </ul>
            </div>
          </article>
          <article className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content">
              <h3>Projet académique · Plateforme data smart city</h3>
              <span className="timeline-meta">2024 — 2025 · Équipe de 4</span>
              <p>
                Agrégation de données IoT, modélisation d’un lakehouse et création
                d’API pour les équipes data science.
              </p>
              <ul>
                <li>Pipeline ingestion multi-sources</li>
                <li>Data catalog + dictionnaire des KPI</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
