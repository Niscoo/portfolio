export default function Header({ profile }) {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="brand">
          <span className="brand-name">{profile.fullName}</span>
          <span className="brand-role">{profile.role}</span>
        </div>
        <nav className="nav">
          <a href="#about">Profil</a>
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#experience">Expérience</a>
          <a href="#education">Formation</a>
        </nav>
        <div className="header-actions">
          <a className="btn primary" href="#contact">
            Me contacter
          </a>
        </div>
      </div>
    </header>
  )
}
