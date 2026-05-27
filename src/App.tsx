import './App.css'

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <h2 className="logo">AS</h2>

        <nav>
          <a href="#">Início</a>
          <a href="#">Sobre</a>
          <a href="#">Projectos</a>
          <a href="#">Contacto</a>
        </nav>
      </header>

      <section className="hero">
        <span className="tag">PORTFÓLIO PROFISSIONAL</span>

        <h1>Asslam Selimane</h1>

        <h2>Marketing • Comunicação • Social Media</h2>

        <p>
          Profissional focado em marketing digital, branding,
          comunicação estratégica e gestão de redes sociais.
        </p>

        <div className="buttons">
          <button className="primary">
            Ver Projectos
          </button>

          <button className="secondary">
            Contactar
          </button>
        </div>
      </section>
    </div>
  )
}

export default App