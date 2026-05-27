import "./App.css"

function App() {
  return (
    <main className="portfolio">

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-tag">
            MARKETING • BRANDING • SOCIAL MEDIA
          </p>

          <h1>
            Marketing, Branding e Comunicação com foco em impacto visual e presença digital.
          </h1>

          <p className="hero-description">
            Profissional de Marketing e Comunicação com experiência em Social Media,
            Branding, Copywriting e gestão de presença digital para marcas,
            campanhas e eventos.
          </p>

        </div>

      </section>

      {/* ABOUT */}

      <section className="about-section">

        <div className="about-content">

          <p className="about-tag">
            SOBRE MIM
          </p>

          <h2>
            Comunicação criativa com foco em estratégia e impacto visual.
          </h2>

          <p className="about-description">
            Actuo nas áreas de Marketing, Branding e Social Media,
            com experiência no desenvolvimento de estratégias de comunicação,
            produção de conteúdo e gestão de presença digital para marcas,
            campanhas e eventos.
          </p>

          <p className="about-description">
            Passei pela Ikigai 360 Agency como estagiário na posição de
            Account Manager e pela Create como Copywriter,
            experiências que reforçaram a minha visão estratégica,
            criatividade e capacidade de comunicação.
          </p>

          <p className="about-description">
            Também fui responsável pela gestão e actualização das redes sociais
            da FACIM 2024, contribuindo para a cobertura e divulgação digital do evento.
          </p>

        </div>

      </section>

      {/* PROJECTS */}

      <section className="projects-section">

        <div className="projects-header">

          <p className="projects-tag">
            PROJECTOS
          </p>

          <h2>
            Algumas marcas e projectos com os quais colaborei.
          </h2>

        </div>

        <div className="projects-grid">

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

        </div>

      </section>

      {/* CONTACT */}

      <section className="contact-section">

        <div className="contact-card">

          <p className="contact-tag">
            CONTACTO
          </p>

          <h2>
            Vamos construir algo relevante juntos.
          </h2>

          <p className="contact-description">
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
              href="https://www.linkedin.com/in/asslam-selimane-394189211"
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

        </div>

      </section>

    </main>
  )
}

export default App