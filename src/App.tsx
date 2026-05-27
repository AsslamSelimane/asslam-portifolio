import './App.css'

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}

      <header className="navbar">
        <h2 className="logo">AS</h2>

        <nav>
          <a href="#">Início</a>
          <a href="#">Sobre</a>
          <a href="#">Projectos</a>
          <a href="#">Contacto</a>
        </nav>
      </header>

      {/* HERO SECTION */}

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

      {/* ABOUT SECTION */}

      <section className="about">
        <div className="about-text">

          <span className="section-tag">
            SOBRE MIM
          </span>

          <h2>
            Estratégia, criatividade e comunicação.
          </h2>

          <p>
            Sou um profissional de marketing e comunicação com experiência
            em gestão de redes sociais, branding, copywriting e cobertura
            de eventos institucionais.
          </p>

          <p>
            Já trabalhei com plataformas como Facebook, Instagram,
            WhatsApp e Twitter, ajudando marcas e projectos
            a melhorarem a sua presença digital.
          </p>

        </div>
      </section>

    </div>
  )
}

export default App