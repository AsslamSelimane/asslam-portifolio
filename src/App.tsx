import "./App.css"

import vodacom1 from "./assets/projects/vodacom-mpesa/posts/vodacom-post-1.jpg"
import vodacom2 from "./assets/projects/vodacom-mpesa/posts/vodacom-post-2.jpg"

import santal1 from "./assets/projects/santal/posts/santal-1.jpg"
import santal2 from "./assets/projects/santal/posts/santal-2.jpg"
import santal3 from "./assets/projects/santal/posts/santal-3.jpg"
import santal4 from "./assets/projects/santal/posts/santal-4.jpg"

import parmalat1 from "./assets/projects/Parmalat Moçambique/carousels/parmalat-1.jpg"
import parmalat2 from "./assets/projects/Parmalat Moçambique/carousels/parmalat-2.jpg"
import parmalat3 from "./assets/projects/Parmalat Moçambique/carousels/parmalat-3.jpg"
import parmalat4 from "./assets/projects/Parmalat Moçambique/carousels/parmalat-4.jpg"
import parmalat5 from "./assets/projects/Parmalat Moçambique/carousels/parmalat-5.jpg"

import bim1 from "./assets/projects/millennium bim/carousels/bim-1.jpg"
import bim2 from "./assets/projects/millennium bim/carousels/bim-2.jpg"
import bim3 from "./assets/projects/millennium bim/carousels/bim-3.jpg"

import cim1 from "./assets/projects/companhia industrial da matola/carousels/cim-1.jpg"
import cim2 from "./assets/projects/companhia industrial da matola/carousels/cim-2.jpg"
import cim3 from "./assets/projects/companhia industrial da matola/carousels/cim-3.jpg"
import cim4 from "./assets/projects/companhia industrial da matola/carousels/cim-4.jpg"
import cim5 from "./assets/projects/companhia industrial da matola/carousels/cim-5.jpg"

function App() {
  return (
    <main className="portfolio">

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="navbar-logo">
          ASSLAM
        </div>

        <div className="navbar-links">

          <a href="#about">
            Sobre
          </a>

          <a href="#projects">
            Projectos
          </a>

          <a href="#contact">
            Contacto
          </a>

        </div>

      </nav>

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

      <section
        className="about-section"
        id="about"
      >

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

      <section
        className="projects-section"
        id="projects"
      >

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

            <div className="project-gallery">

              <img src={vodacom1} alt="Vodacom" />
              <img src={vodacom2} alt="Vodacom" />

            </div>

            <span>01</span>

            <h3>
              Vodacom M-Pesa
            </h3>

          </div>

          <div className="project-card">

            <div className="project-gallery">

              <img src={santal1} alt="Santal" />
              <img src={santal2} alt="Santal" />
              <img src={santal3} alt="Santal" />
              <img src={santal4} alt="Santal" />

            </div>

            <span>02</span>

            <h3>
              Santal
            </h3>

          </div>

          <div className="project-card">

            <div className="project-gallery">

              <img src={parmalat1} alt="Parmalat" />
              <img src={parmalat2} alt="Parmalat" />
              <img src={parmalat3} alt="Parmalat" />
              <img src={parmalat4} alt="Parmalat" />
              <img src={parmalat5} alt="Parmalat" />

            </div>

            <span>03</span>

            <h3>
              Parmalat Moçambique
            </h3>

          </div>

          <div className="project-card">

            <div className="project-gallery">

              <img src={bim1} alt="BIM" />
              <img src={bim2} alt="BIM" />
              <img src={bim3} alt="BIM" />

            </div>

            <span>04</span>

            <h3>
              Millennium BIM
            </h3>

          </div>

          <div className="project-card">

            <div className="project-gallery">

              <img src={cim1} alt="CIM" />
              <img src={cim2} alt="CIM" />
              <img src={cim3} alt="CIM" />
              <img src={cim4} alt="CIM" />
              <img src={cim5} alt="CIM" />

            </div>

            <span>05</span>

            <h3>
              Companhia Industrial da Matola
            </h3>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section
        className="contact-section"
        id="contact"
      >

        <div className="contact-card">

          <p className="contact-tag">
            CONTACTO
          </p>

          <h2>
            Vamos construir algo relevante juntos.
          </h2>

          <div className="contact-links">

            <a href="mailto:asslamselemane@gmail.com">
              Email
            </a>

            <a href="https://www.linkedin.com/in/asslam-selimane-394189211">
              LinkedIn
            </a>

            <a href="https://wa.me/258842414872">
              WhatsApp
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <p>
          © 2026 Asslam Selimane — Marketing & Branding Portfolio
        </p>

      </footer>

    </main>
  )
}

export default App