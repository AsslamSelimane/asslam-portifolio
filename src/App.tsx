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
          <a href="#">Skills</a>
          <a href="#">Projectos</a>
        </nav>
      </header>

      {/* HERO */}

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

      {/* ABOUT */}

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

      {/* SKILLS */}

      <section className="skills">

        <span className="section-tag">
          COMPETÊNCIAS
        </span>

        <h2>
          Áreas de especialização
        </h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Social Media</h3>

            <p>
              Gestão estratégica de redes sociais,
              criação de conteúdo e crescimento digital.
            </p>
          </div>

          <div className="skill-card">
            <h3>Copywriting</h3>

            <p>
              Desenvolvimento de textos persuasivos
              para campanhas e comunicação digital.
            </p>
          </div>

          <div className="skill-card">
            <h3>Branding</h3>

            <p>
              Construção de identidade visual
              e posicionamento de marcas.
            </p>
          </div>

          <div className="skill-card">
            <h3>Marketing Digital</h3>

            <p>
              Estratégias digitais focadas
              em alcance, engajamento e conversão.
            </p>
          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section className="projects">

        <span className="section-tag">
          EXPERIÊNCIA
        </span>

        <h2>
          Projectos & Experiências
        </h2>

        <div className="projects-grid">

          <div className="project-card">
            <h3>FACIM 2024</h3>

            <p>
              Cobertura digital da FACIM 2024,
              incluindo gestão de conteúdos,
              actualização de redes sociais
              e apoio ao Gabinete de Imprensa.
            </p>
          </div>

          <div className="project-card">
            <h3>Publicus</h3>

            <p>
              Gestão de redes sociais,
              recuperação de contas,
              actualização de perfis digitais
              e estratégias de engajamento.
            </p>
          </div>

          <div className="project-card">
            <h3>Copywriting Institucional</h3>

            <p>
              Desenvolvimento de conteúdos
              estratégicos para campanhas,
              jornais institucionais e comunicação.
            </p>
          </div>

        </div>

      </section>

    </div>
  )
}

export default App