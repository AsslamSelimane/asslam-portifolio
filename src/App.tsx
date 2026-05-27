
import './App.css'
import { motion } from 'framer-motion'

/* PARMALAT */

import parmalatCampanha from './assets/projects/parmalat-mocambique/campanhas/parmalat-campanha.jpg'

import parmalatCarousel1 from './assets/projects/parmalat-mocambique/carousels/parmalat-carousel-1.jpg'
import parmalatCarousel2 from './assets/projects/parmalat-mocambique/carousels/parmalat-carousel-2.jpg'
import parmalatCarousel3 from './assets/projects/parmalat-mocambique/carousels/parmalat-carousel-3.jpg'
import parmalatCarousel4 from './assets/projects/parmalat-mocambique/carousels/parmalat-carousel-4.jpg'
import parmalatCarousel5 from './assets/projects/parmalat-mocambique/carousels/parmalat-carousel-5.jpg'

import parmalatPost1 from './assets/projects/parmalat-mocambique/posts/parmalat-post-1.jpg'

/* SANTAL */

import santalPost1 from './assets/projects/santal/posts/santal-post-1.jpg'
import santalPost2 from './assets/projects/santal/posts/santal-post-2.jpg'
import santalPost3 from './assets/projects/santal/posts/santal-post-3.jpg'

import santalReel from './assets/projects/santal/reels/santal-reel.mp4'

/* VODACOM */

import vodacomPost1 from './assets/projects/vodacom-mpesa/posts/vodacom-post-1.jpg'
import vodacomPost2 from './assets/projects/vodacom-mpesa/posts/vodacom-post-2.jpg'
import vodacomPost3 from './assets/projects/vodacom-mpesa/posts/vodacom-post-3.jpg'

import vodacomVideo from './assets/projects/vodacom-mpesa/videos/vodacom-hero.mp4'

/* BIM */

import bimMain from './assets/projects/millennium-bim/posts/millennium-bim-main.jpg'

import bim1 from './assets/projects/millennium-bim/carousels/bim-1.jpg'
import bim2 from './assets/projects/millennium-bim/carousels/bim-2.jpg'
import bim3 from './assets/projects/millennium-bim/carousels/bim-3.jpg'

import bimPost1 from './assets/projects/millennium-bim/posts/bim-post-1.jpg'
import bimPost2 from './assets/projects/millennium-bim/posts/bim-post-2.jpg'
import bimPost3 from './assets/projects/millennium-bim/posts/bim-post-3.jpg'
import bimPost4 from './assets/projects/millennium-bim/posts/bim-post-4.jpg'

/* GWM */

import gwmMain from './assets/projects/gwm/campanhas/gwm-main.jpg'
import gwmPost1 from './assets/projects/gwm/posts/gwm-post-1.jpg'
import gwmPost2 from './assets/projects/gwm/posts/gwm-post-2.jpg'

/* EMOSE */

import emoseMain from './assets/projects/emose/campanhas/emose-main.jpg'

/* CIM */

import cim1 from './assets/projects/companhia-industrial-da-matola/carousels/cim-1.jpg'
import cim2 from './assets/projects/companhia-industrial-da-matola/carousels/cim-2.jpg'
import cim3 from './assets/projects/companhia-industrial-da-matola/carousels/cim-3.jpg'
import cim4 from './assets/projects/companhia-industrial-da-matola/carousels/cim-4.jpg'
import cim5 from './assets/projects/companhia-industrial-da-matola/carousels/cim-5.jpg'

function App() {

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <div className="app">

      {/* NAVBAR */}

      <header className="navbar">

        <h2 className="logo">
          AS
        </h2>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#contacto">Contacto</a>
        </nav>

      </header>

      {/* HERO */}

      <section
        className="hero"
        id="inicio"
      >

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >

          <span className="section-tag">
            PORTFÓLIO PROFISSIONAL
          </span>

          <h1>
            Asslam Selimane
          </h1>

          <h2>
            Marketing • Comunicação • Social Media
          </h2>

          <p>
            Profissional focado em branding,
            gestão de redes sociais,
            campanhas digitais,
            comunicação estratégica
            e criação de conteúdos.
          </p>

          <div className="hero-buttons">

            <a href="#portfolio">
              <button className="primary">
                Ver Trabalhos
              </button>
            </a>

            <a href="#contacto">
              <button className="secondary">
                Contactar
              </button>
            </a>

          </div>

        </motion.div>

      </section>

      {/* SOBRE */}

      <motion.section
        className="about"
        id="sobre"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <span className="section-tag">
          SOBRE MIM
        </span>

        <h2>
          Estratégia, criatividade e impacto digital.
        </h2>

        <p>
          Sou profissional de marketing e comunicação
          com experiência em gestão de redes sociais,
          copywriting, branding,
          campanhas institucionais
          e cobertura digital de eventos.
        </p>

        <p>
          Trabalhei com marcas como Vodacom M-Pesa,
          Santal, Parmalat Moçambique,
          Millennium BIM,
          EMOSE,
          GWM
          e Companhia Industrial da Matola.
        </p>

      </motion.section>

      {/* SKILLS */}

      <motion.section
        className="skills"
        id="skills"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <span className="section-tag">
          COMPETÊNCIAS
        </span>

        <h2>
          Áreas de Especialização
        </h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Social Media</h3>

            <p>
              Gestão estratégica de redes sociais
              e crescimento digital.
            </p>
          </div>

          <div className="skill-card">
            <h3>Copywriting</h3>

            <p>
              Desenvolvimento de textos
              persuasivos e institucionais.
            </p>
          </div>

          <div className="skill-card">
            <h3>Branding</h3>

            <p>
              Construção visual e posicionamento
              estratégico de marcas.
            </p>
          </div>

          <div className="skill-card">
            <h3>Marketing Digital</h3>

            <p>
              Criação de campanhas focadas
              em alcance e engajamento.
            </p>
          </div>

        </div>

      </motion.section>

      {/* PORTFOLIO */}

      <section
        className="portfolio"
        id="portfolio"
      >

        <span className="section-tag">
          PORTFÓLIO
        </span>

        <h2>
          Marcas & Projectos
        </h2>

        {/* VODACOM */}

        <div className="brand-section">

          <div className="brand-header">

            <h3>
              Vodacom M-Pesa
            </h3>

            <p>
              Conteúdos digitais,
              campanhas visuais
              e vídeos promocionais.
            </p>

          </div>

          <video
            className="hero-video"
            src={vodacomVideo}
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="gallery-grid">

            <img src={vodacomPost1} />
            <img src={vodacomPost2} />
            <img src={vodacomPost3} />

          </div>

        </div>

        {/* SANTAL */}

        <div className="brand-section">

          <div className="brand-header">

            <h3>
              Santal
            </h3>

            <p>
              Gestão de conteúdos visuais,
              posts e reels promocionais.
            </p>

          </div>

          <video
            className="reel-video"
            src={santalReel}
            controls
          />

          <div className="gallery-grid">

            <img src={santalPost1} />
            <img src={santalPost2} />
            <img src={santalPost3} />

          </div>

        </div>

        {/* PARMALAT */}

        <div className="brand-section">

          <div className="brand-header">

            <h3>
              Parmalat Moçambique
            </h3>

            <p>
              Campanhas digitais,
              carrosseis e conteúdos promocionais.
            </p>

          </div>

          <img
            className="campaign-image"
            src={parmalatCampanha}
          />

          <div className="carousel-grid">

            <img src={parmalatCarousel1} />
            <img src={parmalatCarousel2} />
            <img src={parmalatCarousel3} />
            <img src={parmalatCarousel4} />
            <img src={parmalatCarousel5} />

          </div>

          <div className="gallery-grid">

            <img src={parmalatPost1} />

          </div>

        </div>

        {/* BIM */}

        <div className="brand-section">

          <div className="brand-header">

            <h3>
              Millennium BIM
            </h3>

            <p>
              Campanhas institucionais,
              posts e carrosseis digitais.
            </p>

          </div>

          <img
            className="campaign-image"
            src={bimMain}
          />

          <div className="carousel-grid">

            <img src={bim1} />
            <img src={bim2} />
            <img src={bim3} />

          </div>

          <div className="gallery-grid">

            <img src={bimPost1} />
            <img src={bimPost2} />
            <img src={bimPost3} />
            <img src={bimPost4} />

          </div>

        </div>

        {/* GWM */}

        <div className="brand-section">

          <div className="brand-header">

            <h3>
              GWM
            </h3>

            <p>
              Conteúdos promocionais
              para comunicação digital.
            </p>

          </div>

          <img
            className="campaign-image"
            src={gwmMain}
          />

          <div className="gallery-grid">

            <img src={gwmPost1} />
            <img src={gwmPost2} />

          </div>

        </div>

        {/* EMOSE */}

        <div className="brand-section">

          <div className="brand-header">

            <h3>
              EMOSE
            </h3>

            <p>
              Desenvolvimento
              de conteúdos institucionais.
            </p>

          </div>

          <img
            className="campaign-image"
            src={emoseMain}
          />

        </div>

        {/* CIM */}

        <div className="brand-section">

          <div className="brand-header">

            <h3>
              Companhia Industrial da Matola
            </h3>

            <p>
              Carrosseis institucionais
              e comunicação visual.
            </p>

          </div>

          <div className="carousel-grid">

            <img src={cim1} />
            <img src={cim2} />
            <img src={cim3} />
            <img src={cim4} />
            <img src={cim5} />

          </div>

        </div>

      </section>

      {/* CONTACTO */}

      <section
        className="contact"
        id="contacto"
      >

        <span className="section-tag">
          CONTACTO
        </span>

        <h2>
          Vamos trabalhar juntos.
        </h2>

        <div className="contact-grid">

          <div className="contact-card">

            <h3>Email</h3>

            <p>
              asslamselemane@gmail.com
            </p>

          </div>

          <div className="contact-card">

            <h3>Telefone</h3>

            <p>
              +258 84 241 4872
            </p>

          </div>

          <div className="contact-card">

            <h3>Localização</h3>

            <p>
              Maputo, Moçambique
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <p>
          © 2026 Asslam Selimane.
          Todos os direitos reservados.
        </p>

      </footer>

    </div>
  )
}

export default App