import "./App.css"

function App() {
  return (
    <div className="app">

      <section className="hero">
        <h1>Asslam Selimane</h1>

        <p>
          Marketing • Branding • Social Media • Comunicação Digital
        </p>
      </section>

      <section className="about">
        <h2>Sobre Mim</h2>

        <p>
          Sou um profissional de Marketing e Comunicação Digital com experiência
          em branding, gestão de redes sociais, copywriting e criação de conteúdo.
          Já trabalhei com marcas como GWM, EMOSE, Millennium BIM, Parmalat Moçambique,
          Santal, Vodacom M-Pesa e Companhia Industrial da Matola.
        </p>

        <p>
          Também tive experiência profissional na Ikigai 360° Agency como
          Account Manager e na Create como Copywriter. Durante a FACIM 2024,
          fui responsável pela gestão e actualização das redes sociais do evento.
        </p>
      </section>

      <section className="projects">
        <h2>Projectos</h2>

        <div className="project-card">
          <h3>Vodacom M-Pesa</h3>
          <p>
            Campanhas digitais e conteúdos de social media.
          </p>
        </div>

        <div className="project-card">
          <h3>Santal</h3>
          <p>
            Conteúdos criativos e campanhas visuais.
          </p>
        </div>

        <div className="project-card">
          <h3>Parmalat Moçambique</h3>
          <p>
            Conteúdo digital e comunicação visual.
          </p>
        </div>

        <div className="project-card">
          <h3>Millennium BIM</h3>
          <p>
            Conteúdo promocional e campanhas digitais.
          </p>
        </div>

        <div className="project-card">
          <h3>Companhia Industrial da Matola</h3>
          <p>
            Criação de conteúdo institucional e campanhas digitais.
          </p>
        </div>

      </section>

      <section className="contact">
        <h2>Contacto</h2>

        <p>
          Disponível para oportunidades profissionais,
          colaborações e projectos criativos.
        </p>

        <div className="contact-links">

          <a
            href="mailto:asslamselemane@gmail.com"
            target="_blank"
          >
            Email
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
          >
            LinkedIn
          </a>

          <a
            href="https://wa.me/258842414872"
            target="_blank"
          >
            WhatsApp
          </a>

        </div>
      </section>

    </div>
  )
}

export default App