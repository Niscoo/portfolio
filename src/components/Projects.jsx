export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Projets</p>
          <h2>Des projets concrets, orientés métier</h2>
          <p>
            Chaque projet est pensé pour fournir des données fiables, traçables et
            prêtes à être consommées.
          </p>
        </div>
        <div className="projects-grid">
          <article className="card project-card">
            <div className="project-header">
              <h3>Youtube Tech-sphere Radar</h3>
              <span className="badge">Airflow · MinIO · Metabase</span>
            </div>
            <p>
              Ingestion de commandes et events web via Kafka, transformation en
              modèles analytiques et exposition KPI. Monitoring qualité automatisé.
            </p>
            <ul className="project-list">
              <li>Latence moyenne &lt; 5 minutes</li>
              <li>30+ tests de qualité de données</li>
              <li>Catalogue de données documenté</li>
            </ul>
          </article>
          <article className="card project-card">
            <div className="project-header">
              <h3>Lakehouse RH &amp; analytics</h3>
              <span className="badge">dbt · Spark</span>
            </div>
            <p>
              Centralisation des données RH, normalisation des référentiels et
              préparation de modèles pour dashboards et scoring attrition.
            </p>
            <ul className="project-list">
              <li>Réduction 40% du temps de reporting</li>
              <li>Modèles SCD2 pour l’historisation</li>
              <li>Pipeline CI/CD automatisé</li>
            </ul>
          </article>
          <article className="card project-card">
            <div className="project-header">
              <h3>Observabilité des flux data</h3>
              <span className="badge">Python · Great Expectations</span>
            </div>
            <p>
              Mise en place de checks critiques, alerting Slack et tableaux de bord
              pour suivre la fraîcheur et la complétude des datasets.
            </p>
            <ul className="project-list">
              <li>Score qualité visuel par domaine</li>
              <li>Alertes temps réel en cas d’anomalie</li>
              <li>Playbook d’incidents data</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
