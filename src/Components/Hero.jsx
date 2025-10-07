import { motion, stagger } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FloatingCircle } from "./FloatingCircle";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delaty: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> 🌵 Hello, I'm</span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            Jean Richardson
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            Frontend Developer & UI/UX Designer
          </motion.h2>

          <motion.p className="hero-description" variants={fadeInUp}>
            I design and develop functional and beautiful interfaces & user
            experiences. Whether you need a designer to mockup your next project
            and/or a developer to build it, <b>I can do both.</b> Clicking the
            Behance icon below will take you to my UI/UX portfolio website
            showcasing some of my design work, case studies and design resume.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="/Jean Richardson - Frontend Dev Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a
              href="https://github.com/jeanrichardson610"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/jean-marsalais-richardson/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </motion.a>
            <motion.a
              href="https://jeanmrichardson.myportfolio.com/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faBehance} />
            </motion.a>
          </motion.div>
        </motion.div>
       


        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="javascript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }}
              style={vscDarkPlus}
            >
              {`const aboutMe: Developer && Designer Profile = {
   codename: "JR Studio",
   origin: "Western hemisphere".
   role: "Frontend Architect",
   stack: {
        languages: ["Javascript"],
        frameworks: ["React", "TailwindCSS",],
   },
   traits: [
        "Pixel-philanthropist",
        "API installer",
        "Dark mode advocate",
        "UX principle enthusiast",
   ],
   missionStatement:
        "Transforming mockups into interfaces and bugs into solutions",
        availability: "Available for hire",
   };`}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon"></span>
              <span className="card-text">
                🖥 Learning fast, building smarter.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
    </motion.section>
  );
};
