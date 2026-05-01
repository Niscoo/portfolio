import airflowIcon from '../assets/Sans titre.png'
import dbtIcon from '../assets/dbt.png'
import gcsIcon from '../assets/google_cloud_storage.png'
import snowflakeIcon from '../assets/snowflake.png'
import sparkIcon from '../assets/apache_spark.png'
import kubernetesIcon from '../assets/kubernetes.png'
import awsIcon from '../assets/aws.png'
import databricksIcon from '../assets/databricks.png'
import pythonIcon from '../assets/python.png'
import dockerIcon from '../assets/docker.png'

const toolIcons = [
  { src: airflowIcon, alt: 'Apache Airflow' },
  { src: dbtIcon, alt: 'dbt' },
  { src: gcsIcon, alt: 'Google Cloud Storage' },
  { src: snowflakeIcon, alt: 'Snowflake' },
  { src: sparkIcon, alt: 'Apache Spark' },
  { src: kubernetesIcon, alt: 'Kubernetes' },
  { src: awsIcon, alt: 'AWS' },
  { src: databricksIcon, alt: 'Databricks' },
  { src: pythonIcon, alt: 'Python' },
  { src: dockerIcon, alt: 'Docker' },
]

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Compétences</p>
          <h2>Un profil data engineer orienté production</h2>
          <p>
            Je maîtrise le cycle complet : ingestion, transformation, orchestration,
            monitoring et documentation.
          </p>
        </div>
        <div className="skills-grid">
          <div className="card">
            <h3>Data Engineering</h3>
            <div className="tags">
              <span className="tag">ETL/ELT</span>
              <span className="tag">Data Quality</span>
              <span className="tag">Modélisation</span>
              <span className="tag">CDC (bases)</span>
              <span className="tag">Optimisation SQL</span>
            </div>
          </div>
          <div className="card">
            <h3>Outils &amp; Cloud</h3>
            <div className="tool-icons-grid">
              {toolIcons.map((tool) => (
                <span className="tool-icon-tile" key={tool.alt}>
                  <img
                    className="tool-icon-img"
                    src={tool.src}
                    alt={tool.alt}
                    loading="lazy"
                  />
                </span>
              ))}
            </div>
          </div>
          <div className="card">
            <h3>DataOps</h3>
            <div className="tags">
              <span className="tag">CI/CD</span>
              <span className="tag">Tests de données</span>
              <span className="tag">Observabilité</span>
              <span className="tag">Documentation</span>
              <span className="tag">Git</span>
            </div>
          </div>
          <div className="card">
            <h3>Analytics</h3>
            <div className="tags">
              <span className="tag">BI basics</span>
              <span className="tag">Looker Studio</span>
              <span className="tag">Tableaux de bord</span>
              <span className="tag">KPI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
