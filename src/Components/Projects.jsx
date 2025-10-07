import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


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

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/Learnora-project.png')" }}
            whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
          ></motion.div>
          <h3 className="">Learnora</h3>
          <p className="">
            A modern Learning Management System (LMS) built with React, designed
            for an intuitive and engaging learning experience. Users can browse
            courses, view details, and navigate through a clean, responsive
            interface.
          </p>
          <p>
            <a
              href="https://jeanrichardson610.github.io/Learnora/"
              target="_blank"
              rel="noopener noreferrer"
              className="live-demo-link"
            >
              Live Demo <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>TailwindCSS</span>
            <span>Vite</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/Reel-lax-project.png')" }}
            whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
          ></motion.div>
          <h3 className="">Reel-lax</h3>
          <p className="">
            Reel-lax is a movie discovery platform that leverages The Movie
            Database (TMDb) API to provide users with trending movies, detailed
            information, and search functionalities.
          </p>
          <p>
            <a
              href="https://reel-lax.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="live-demo-link"
            >
              Live Demo <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>TailwindCSS</span>
            <span>TMDB API</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/Sagittarius-project.png')",
            }}
            whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
          ></motion.div>
          <h3 className="">Sagittarius</h3>
          <p className="">
            Sagittarius is a web-based chatbot application that emulates the
            functionality of Google's Gemini AI. Built with React and styled
            using CSS.
          </p>
          <p>
            <a
              href="https://sagittarius-8sng.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="live-demo-link"
            >
              Live Demo <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Google Gemini API</span>
            <span>Vite</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/Summarist-project.jpg')",
            }}
            whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
          ></motion.div>
          <h3 className="">Summarist</h3>
          <p className="">
            Summarist is a web application built with Next.js that leverages OpenAI's GPT-3 technology to generate concise, human-like summaries of books across various genres. The platform aims to provide users with quick insights into books, aiding in efficient learning and decision-making. 
          </p>
          <p>
            <a
              href="https://summarist-kohl.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="live-demo-link"
            >
              Live Demo <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Next.js</span>
            <span>Express</span>
            <span>Firebase</span>
            <span>TailwindCSS</span>
            <span>OpenAI GPT-3</span>
            <span>Typescript</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/Gilded-Spoon-project.jpg')",
            }}
            whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
          ></motion.div>
          <h3 className="">Gilded Spoon</h3>
          <p className="">
            Dining redefined with every bite — Gilded Spoon is a beautifully designed, responsive restaurant landing site built to showcase cuisine, chefs, and ambiance. It features immersive video backgrounds, smooth animations, and a reservation form to create an engaging experience for visitors.
          </p>
          <p>
            <a
              href="https://jeanrichardson610.github.io/Gilded-Spoon/"
              target="_blank"
              rel="noopener noreferrer"
              className="live-demo-link"
            >
              Live Demo <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </p>
          <div className="project-tech">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Javascript</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/Goddess-project.jpg')",
            }}
            whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
          ></motion.div>
          <h3 className="">Goddess</h3>
          <p className="">
            Goddess++ is a dynamic, responsive website designed to showcase the offerings of a premier women's fitness center. The platform highlights various services, products, and events, providing users with an engaging experience to explore and connect.
          </p>
          <p>
            <a
              href="https://jeanrichardson610.github.io/Goddess-/"
              target="_blank"
              rel="noopener noreferrer"
              className="live-demo-link"
            >
              Live Demo <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </p>
          <div className="project-tech">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Javascript</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
