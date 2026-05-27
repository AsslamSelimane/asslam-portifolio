import './App.css'

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform
} from 'framer-motion'

import {
  useState,
  useEffect
} from 'react'

/* =========================
   VODACOM
========================= */

import vodacomMain from './assets/projects/vodacom-mpesa/campanhas/vodacom-main.jpg'

import vodacomPost1 from './assets/projects/vodacom-mpesa/posts/vodacom-post-1.jpg'

import vodacomPost2 from './assets/projects/vodacom-mpesa/posts/vodacom-post-2.jpg'

import vodacomReel from './assets/projects/vodacom-mpesa/reels/vodacom-reel.mp4'

/* =========================
   OTHER WORKS
========================= */

import parmalatMain from './assets/projects/Parmalat Moçambique/campanhas/parmalat-main.jpg'

import santalMain from './assets/projects/santal/campanhas/santal-main.jpg'

import gwmMain from './assets/projects/gwm/campanhas/gwm-main.jpg'

import emoseMain from './assets/projects/emose/campanhas/emose-main.jpg'

import cimMain from './assets/projects/companhia industrial da matola/campanhas/cim-main.jpg'

/* =========================
   BIM
========================= */

import bim1 from './assets/projects/millennium bim/carousels/bim-1.jpg'
import bim2 from './assets/projects/millennium bim/carousels/bim-2.jpg'
import bim3 from './assets/projects/millennium bim/carousels/bim-3.jpg'

/* =========================
   PARMALAT
========================= */

import parmalat1 from './assets/projects/Parmalat Moçambique/carousels/parmalat-1.jpg'
import parmalat2 from './assets/projects/Parmalat Moçambique/carousels/parmalat-2.jpg'
import parmalat3 from './assets/projects/Parmalat Moçambique/carousels/parmalat-3.jpg'
import parmalat4 from './assets/projects/Parmalat Moçambique/carousels/parmalat-4.jpg'
import parmalat5 from './assets/projects/Parmalat Moçambique/carousels/parmalat-5.jpg'

/* EXTRA */

import parmalat6 from './assets/projects/Parmalat Moçambique/posts/parmalat-6.jpg'

/* =========================
   CIM
========================= */

import cim1 from './assets/projects/companhia industrial da matola/carousels/cim-1.jpg'
import cim2 from './assets/projects/companhia industrial da matola/carousels/cim-2.jpg'
import cim3 from './assets/projects/companhia industrial da matola/carousels/cim-3.jpg'
import cim4 from './assets/projects/companhia industrial da matola/carousels/cim-4.jpg'
import cim5 from './assets/projects/companhia industrial da matola/carousels/cim-5.jpg'

/* =========================
   SANTAL
========================= */

import santal1 from './assets/projects/santal/posts/santal-1.jpg'
import santal2 from './assets/projects/santal/posts/santal-2.jpg'

import santalReel from './assets/projects/santal/reels/santal-reel.mp4'

function App() {

  const [loading, setLoading] =
    useState(true)

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null)

  const [mousePosition, setMousePosition] =
    useState({
      x: 0,
      y: 0
    })

  const { scrollY } = useScroll()

  const heroY =
    useTransform(scrollY, [0, 1000], [0, 200])

  useEffect(() => {

    const handleMouseMove = (
      e: MouseEvent
    ) => {

      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })

    }

    window.addEventListener(
      'mousemove',
      handleMouseMove
    )

    const timer = setTimeout(() => {

      setLoading(false)

    }, 2000)

    return () => {

      window.removeEventListener(
        'mousemove',
        handleMouseMove
      )

      clearTimeout(timer)

    }

  }, [])

  return (

    <main className="portfolio">

      {/* LOADER */}

      <AnimatePresence>

        {loading && (

          <motion.div
            className="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.h1
              className="loader-logo"
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
            >
              ASSLAM
            </motion.h1>

            <div className="loader-bar">

              <motion.div
                className="loader-progress"
                initial={{
                  width: 0
                }}
                animate={{
                  width: '100%'
                }}
                transition={{
                  duration: 2
                }}
              />

            </div>

          </motion.div>

        )}

      </AnimatePresence>

      {/* CURSOR */}

      <motion.div

        className="custom-cursor"

        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12
        }}

        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28
        }}
      />

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

        <a
          href="https://wa.me/258842414872"
          target="_blank"
          rel="noreferrer"
          className="navbar-button"
        >
          Vamos Conversar
        </a>

      </nav>

      {/* HERO */}

      <motion.section
        className="hero"
        style={{ y: heroY }}
      >

        <div className="hero-content">

          <p className="hero-tag">
            MARKETING • BRANDING • SOCIAL MEDIA
          </p>

          <h1>
            Transformo ideias em experiências visuais e comunicação estratégica.
          </h1>

          <p className="hero-description">
             
          </p>

        </div>

      </motion.section>

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
            Actuo nas áreas de Marketing, Branding e Social Media, com experiência no desenvolvimento de estratégias de comunicação, produção de conteúdo e gestão de presença digital para marcas, campanhas e eventos.
          </p>

        </div>

      </section>

      {/* SHOWCASE */}

      <section
        className="vodacom-showcase"
        id="projects"
      >

        <div className="showcase-header">

          <p className="showcase-tag">
            FEATURED PROJECT
          </p>

          <h2>
            Vodacom M-Pesa
          </h2>

        </div>

        <div className="showcase-grid">

          <img
            src={vodacomMain}
            alt="Vodacom"
            className="showcase-main"
            onClick={() =>
              setSelectedImage(vodacomMain)
            }
          />

          <img
            src={vodacomPost1}
            alt="Vodacom"
            className="showcase-small"
            onClick={() =>
              setSelectedImage(vodacomPost1)
            }
          />

          <img
            src={vodacomPost2}
            alt="Vodacom"
            className="showcase-small"
            onClick={() =>
              setSelectedImage(vodacomPost2)
            }
          />

        </div>

        <video
          src={vodacomReel}
          autoPlay
          muted
          loop
          playsInline
          controls
          className="showcase-video"
        />

      </section>

      {/* WORKS */}

      <section className="works-section">

        <div className="works-header">

          <p className="works-tag">
            SELECTED WORKS
          </p>

          <h2>
            Marcas e projectos com os quais colaborei.
          </h2>

        </div>

        <div className="works-grid">

          {[
            {
              image: parmalatMain,
              title: 'Parmalat'
            },

            {
              image: santalMain,
              title: 'Santal'
            },

            {
              image: gwmMain,
              title: 'GWM'
            },

            {
              image: emoseMain,
              title: 'EMOSE'
            },

            {
              image: cimMain,
              title: 'CIM'
            }

          ].map((work, index) => (

            <div
              className="work-card"
              key={index}
            >

              <img
                src={work.image}
                alt={work.title}
                onClick={() =>
                  setSelectedImage(work.image)
                }
              />

              <div className="work-content">

                <h3>
                  {work.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* SOCIAL MEDIA */}

      <section className="social-section">

        <div className="social-header">

          <p className="social-tag">
            SOCIAL MEDIA
          </p>

          <h2>
            Conteúdo digital, campanhas e comunicação visual.
          </h2>

        </div>

        {/* BIM */}

        <div className="brand-carousel">

          <div className="brand-info">

            <h3>
              Millennium BIM
            </h3>

          </div>

          <div className="carousel-grid">

            {[bim1, bim2, bim3].map((image, index) => (

              <img
                key={index}
                src={image}
                alt="Millennium BIM"
                onClick={() =>
                  setSelectedImage(image)
                }
              />

            ))}

          </div>

        </div>

        {/* PARMALAT */}

        <div className="brand-carousel">

          <div className="brand-info">

            <h3>
              Parmalat
            </h3>

          </div>

          <div className="carousel-grid">

            {[
              parmalat1,
              parmalat2,
              parmalat3,
              parmalat4,
              parmalat5,
              parmalat6
            ].map((image, index) => (

              <img
                key={index}
                src={image}
                alt="Parmalat"
                onClick={() =>
                  setSelectedImage(image)
                }
              />

            ))}

          </div>

        </div>

        {/* SANTAL */}

        <div className="brand-carousel">

          <div className="brand-info">

            <h3>
              Santal
            </h3>

          </div>

          <div className="carousel-grid">

            {[santal1, santal2].map((image, index) => (

              <img
                key={index}
                src={image}
                alt="Santal"
                onClick={() =>
                  setSelectedImage(image)
                }
              />

            ))}

          </div>

          <video
            src={santalReel}
            autoPlay
            muted
            loop
            playsInline
            controls
            className="showcase-video"
          />

        </div>

        {/* CIM */}

        <div className="brand-carousel">

          <div className="brand-info">

            <h3>
              Companhia Industrial da Matola
            </h3>

          </div>

          <div className="carousel-grid">

            {[
              cim1,
              cim2,
              cim3,
              cim4,
              cim5
            ].map((image, index) => (

              <img
                key={index}
                src={image}
                alt="CIM"
                onClick={() =>
                  setSelectedImage(image)
                }
              />

            ))}

          </div>

        </div>

      </section>

      {/* LIGHTBOX */}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <button
              className="lightbox-close"
              onClick={() =>
                setSelectedImage(null)
              }
            >
              ✕
            </button>

            <motion.img
              src={selectedImage}
              className="lightbox-image"
              initial={{
                scale: 0.8,
                opacity: 0
              }}
              animate={{
                scale: 1,
                opacity: 1
              }}
            />

          </motion.div>

        )}

      </AnimatePresence>

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

            <a
              href="mailto:asslamselemane@gmail.com"
              className="contact-link"
            >
              Email
            </a>

            <a
              href="https://wa.me/258842414872"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              WhatsApp
            </a>

            <a
              href="https://www.linkedin.com/in/asslam-selimane-394189211"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-line"></div>

        <div className="footer-content">

          <div className="footer-left">

            <h3>
              ASSLAM
            </h3>

            <p>
              Marketing • Branding • Social Media
            </p>

          </div>

        </div>

        <p className="footer-copy">
          © 2026 Asslam Selimane. Todos os direitos reservados.
        </p>

      </footer>

    </main>

  )
}

export default App