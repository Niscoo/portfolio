export default function Contact({ profile }) {
  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Discutons de vos enjeux data</h2>
          <p>
            Je suis disponible pour un stage ou une alternance en data engineering
            à partir de septembre 2026. Je réponds rapidement.
          </p>
          <div className="contact-actions">
            <a className="btn primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="btn ghost" href={profile.phoneLink}>
              {profile.phone}
            </a>
          </div>
        </div>
        <div className="card contact-card">
          <h3>Informations clés</h3>
          <ul className="list">
            <li>Localisation : {profile.location}</li>
            <li>Mobilité : Hybrid / Remote</li>
            <li>Langues : Français, Anglais pro</li>
            <li>
              GitHub : <a href={profile.github}>{profile.github}</a>
            </li>
            <li>
              LinkedIn : <a href={profile.linkedin}>{profile.linkedin}</a>
            </li>
          </ul>
          <p className="muted">
            Portfolio mis à jour régulièrement avec de nouveaux cas d’usage data.
          </p>
        </div>
      </div>
    </section>
  )
}
