import './App.css'
import { motion } from 'framer-motion'

/* PARMALAT */

import parmalatCampanha from './assets/projects/parmalat-mocambique/campanhas/campanha.jpg'

import parmalatCarousel1 from './assets/projects/parmalat-mocambique/carousels/corousel-1.jpg'
import parmalatCarousel2 from './assets/projects/parmalat-mocambique/carousels/corousel-2.jpg'
import parmalatCarousel3 from './assets/projects/parmalat-mocambique/carousels/corousel-3.jpg'
import parmalatCarousel4 from './assets/projects/parmalat-mocambique/carousels/corousel-4.jpg'
import parmalatCarousel5 from './assets/projects/parmalat-mocambique/carousels/corousel-5.jpg'

import parmalatPost1 from './assets/projects/parmalat-mocambique/posts/post-1.jpg'

/* SANTAL */

import santalPost1 from './assets/projects/santal/posts/santal-1.jpg'
import santalPost2 from './assets/projects/santal/posts/santal-2.jpg'
import santalPost3 from './assets/projects/santal/posts/santal-3.jpg'

import santalReel from './assets/projects/santal/reels/santal-reel.mp4'

/* VODACOM */

import vodacomPost1 from './assets/projects/vodacom-mpesa/posts/vodacom-post-1.jpg'
import vodacomPost2 from './assets/projects/vodacom-mpesa/posts/vodacom-post-2.jpg'

import vodacomVideo from './assets/projects/vodacom-mpesa/reels/vodacom-reel.mp4'

/* BIM */

import bimMain from './assets/projects/millennium-bim/posts/millenium-bim-main.jpg'

import bim1 from './assets/projects/millennium-bim/carousels/bim-1.jpg'
import bim2 from './assets/projects/millennium-bim/carousels/bim-2.jpg'
import bim3 from './assets/projects/millennium-bim/carousels/bim-3.jpg'

import bimPost1 from './assets/projects/millennium-bim/posts/post-1jpg.jpg'
import bimPost2 from './assets/projects/millennium-bim/posts/post-2jpg.jpg'

/* GWM */

import gwmMain from './assets/projects/gwm/campanhas/gwm-main.jpg'
import gwmPost1 from './assets/projects/gwm/posts/post-1jpg.jpg'

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
            campanhas digitais,
            social media,
            comunicação estratégica
            e criação de conteúdos.
          </p>

        </motion.div>

      </section>

      {/* SOBRE */}

      <section
        className="about"
        id="sobre"
      >

        <span className="section-tag">
          SOBRE MIM
        </span>

        <h2>
          Estratégia, criatividade e impacto digital.
        </h2>

        <p>
          Trabalho com marketing,
          branding,
          comunicação institucional
          e gestão de redes sociais.
        </p>

      </section>

      {/* SKILLS */}

      <section
        className="skills"
        id="skills"
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
          </div>

          <div className="skill-card">
            <h3>Copywriting</h3>
          </div>

          <div className="skill-card">
            <h3>Branding</h3>
          </div>

          <div className="skill-card">
            <h3>Marketing Digital</h3>
          </div>

        </div>

      </section>

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

          <h3>
            Vodacom M-Pesa
          </h3>

          <video
            className="hero-video"
            src={vodacomVideo}
            autoPlay
            muted
            loop
            controls
          />

          <div className="gallery-grid">

            <img src={vodacomPost1} />
            <img src={vodacomPost2} />

          </div>

        </div>

        {/* SANTAL */}

        <div className="brand-section">

          <h3>
            Santal
          </h3>

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

          <h3>
            Parmalat Moçambique
          </h3>

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

          <h3>
            Millennium BIM
          </h3>

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

          </div>

        </div>

        {/* GWM */}

        <div className="brand-section">

          <h3>
            GWM
          </h3>

          <img
            className="campaign-image"
            src={gwmMain}
          />

          <div className="gallery-grid">

            <img src={gwmPost1} />

          </div>

        </div>

        {/* EMOSE */}

        <div className="brand-section">

          <h3>
            EMOSE
          </h3>

          <img
            className="campaign-image"
            src={emoseMain}
          />

        </div>

        {/* CIM */}

        <div className="brand-section">

          <h3>
            Companhia Industrial da Matola
          </h3>

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

    </div>
  )
}

export default App