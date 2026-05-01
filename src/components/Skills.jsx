import { useState } from 'react'
import { TOOLS, CATEGORIES } from '../data/tools'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filteredTools =
    activeCategory === 'Tous'
      ? TOOLS
      : TOOLS.filter((tool) => tool.category === activeCategory)

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Compétences</p>
          <h2>Outils &amp; Technologies</h2>
          <p>
            Une stack moderne pour construire des pipelines data fiables et scalables.
          </p>
        </div>

        <div className="skills-content">
          <div className="skills-domains">
            <div className="domain-card">
              <h3>Data Engineering</h3>
              <div className="tags">
                <span className="tag">ETL/ELT</span>
                <span className="tag">Data Quality</span>
                <span className="tag">Modélisation</span>
                <span className="tag">CDC (bases)</span>
                <span className="tag">Optimisation SQL</span>
              </div>
            </div>
            <div className="domain-card">
              <h3>DataOps</h3>
              <div className="tags">
                <span className="tag">CI/CD</span>
                <span className="tag">Tests de données</span>
                <span className="tag">Observabilité</span>
                <span className="tag">Documentation</span>
                <span className="tag">Git</span>
              </div>
            </div>
            <div className="domain-card">
              <h3>Analytics</h3>
              <div className="tags">
                <span className="tag">BI basics</span>
                <span className="tag">Looker Studio</span>
                <span className="tag">Tableaux de bord</span>
                <span className="tag">KPI</span>
              </div>
            </div>
          </div>

          <div className="tools-section">
            <h3 className="tools-title">Outils que j'utilise</h3>
            
            <div className="filter-buttons">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="tools-grid">
              {filteredTools.map((tool) => (
                <div className="tool-card" key={tool.name}>
                  <div className="tool-icon">
                    <img src={tool.icon} alt={tool.name} loading="lazy" />
                  </div>
                  <span className="tool-card-name">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
