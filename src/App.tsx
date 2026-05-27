import './App.css'
import { motion } from 'framer-motion'

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
        <h2 className="logo">AS</h2>

        <nav>
          <a href="#">Início</a>
          <a href="#">Sobre</a>
          <a href="#">Skills</a>
          <a href="#">Projectos</a>
          <a href="#">Contacto</a>
        </nav>
      </header>

      {/* HERO */}

      <motion.section
        className="hero"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <span className="tag">
          PORTFÓLIO PROFISSIONAL
        </span>

        <h1>Asslam Selimane</h1>

        <h2>
          Marketing • Comunicação • Social Media • Copywriting • Account Manager  
        </h2>

        <p>
          Profissional focado em marketing digital,
          branding, comunicação estratégica e gestão
          de redes sociais.
        </p>

        <div className="buttons">

          <button className="primary">
            Ver Projectos
          </button>

          <button className="secondary">
            Contactar
          </button>

        </div>

      </motion.section>

      {/* ABOUT */}

      <motion.section
        className="about"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <div className="about-text">

          <span className="section-tag">
            SOBRE MIM
          </span>

          <h2>
            Estratégia, criatividade e comunicação.
          </h2>

          <p>
            Sou um profissional de marketing e comunicação
            com experiência em gestão de redes sociais,
            branding, copywriting e cobertura de eventos
            institucionais.
          </p>

          <p>
            Já trabalhei com plataformas como Facebook,
            Instagram, WhatsApp e Twitter, ajudando marcas
            e projectos a melhorarem a sua presença digital.
          </p>

        </div>

      </motion.section>

      {/* SKILLS */}

      <motion.section
        className="skills"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <span className="section-tag">
          COMPETÊNCIAS
        </span>

        <h2>
          Áreas de especialização
        </h2>

        <div className="skills-grid">

          <motion.div
            className="skill-card"
            whileHover={{ scale: 1.04 }}
          >
            <h3>Social Media</h3>

            <p>
              Gestão estratégica de redes sociais,
              criação de conteúdo e crescimento digital.
            </p>
          </motion.div>

          <motion.div
            className="skill-card"
            whileHover={{ scale: 1.04 }}
          >
            <h3>Copywriting</h3>

            <p>
              Desenvolvimento de textos persuasivos
              para campanhas e comunicação digital.
            </p>
          </motion.div>

          <motion.div
            className="skill-card"
            whileHover={{ scale: 1.04 }}
          >
            <h3>Branding</h3>

            <p>
              Construção de identidade visual
              e posicionamento de marcas.
            </p>
          </motion.div>

          <motion.div
            className="skill-card"
            whileHover={{ scale: 1.04 }}
          >
            <h3>Marketing Digital</h3>

            <p>
              Estratégias digitais focadas
              em alcance, engajamento e conversão.
            </p>
          </motion.div>

        </div>

      </motion.section>

      {/* PROJECTS */}

      <motion.section
        className="projects"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <span className="section-tag">
          EXPERIÊNCIA
        </span>

        <h2>
          Projectos & Experiências
        </h2>

        <div className="projects-grid">

          <motion.div
            className="project-card"
            whileHover={{ scale: 1.04 }}
          >
            <h3>FACIM 2024</h3>

            <p>
              Cobertura digital da FACIM 2024,
              incluindo gestão de conteúdos,
              actualização de redes sociais e
              apoio ao Gabinete de Imprensa.
            </p>
          </motion.div>

          <motion.div
            className="project-card"
            whileHover={{ scale: 1.04 }}
          >
            <h3>Publicus</h3>

            <p>
              Gestão de redes sociais,
              recuperação de contas,
              actualização de perfis digitais
              e estratégias de engajamento.
            </p>
          </motion.div>

          <motion.div
            className="project-card"
            whileHover={{ scale: 1.04 }}
          >
            <h3>Copywriting Institucional</h3>

            <p>
              Desenvolvimento de conteúdos
              estratégicos para campanhas,
              jornais institucionais e comunicação.
            </p>
          </motion.div>

        </div>

      </motion.section>

      {/* CONTACT */}

      <motion.section
        className="contact"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <span className="section-tag">
          CONTACTO
        </span>

        <h2>
          Vamos trabalhar juntos.
        </h2>

        <p>
          Disponível para oportunidades,
          projectos e colaborações na área de
          marketing, comunicação e social media.
        </p>

        <div className="contact-info">

          <motion.div
            className="contact-card"
            whileHover={{ scale: 1.04 }}
          >
            <h3>Email</h3>
            <span>asslam@email.com</span>
          </motion.div>

          <motion.div
            className="contact-card"
            whileHover={{ scale: 1.04 }}
          >
            <h3>Telefone</h3>
            <span>+258 84 000 0000</span>
          </motion.div>

          <motion.div
            className="contact-card"
            whileHover={{ scale: 1.04 }}
          >
            <h3>Localização</h3>
            <span>Maputo, Moçambique</span>
          </motion.div>

        </div>

      </motion.section>

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