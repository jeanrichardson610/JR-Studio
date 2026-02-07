import { useState } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
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
  const [loadedImages, setLoadedImages] = useState({});
  
  const projectData = [
    {
      title: "Weather Dashboard",
      img: "/projects/weather-dashboard.png",
      description: "A modern, responsive weather dashboard built with React, Tailwind CSS, and Shadcn UI, leveraging TanStack Query for efficient data fetching and state management. Explore current, hourly, and daily weather data for any location, visualize live weather maps, and switch seamlessly between light and dark modes. The dashboard also features a dynamic background that changes based on the current weather conditions, providing an immersive user experience.",
      link: "https://react-weather-dashboard-wlf9.vercel.app/",
      tech: ["React", "TailwindCSS", "Vite", "Zod", "TanStack Query", "Shadcn UI", "OpenWeather API"],
    },
    {
      title: "Reel-lax",
      img: "/projects/Reel-lax-project.png",
      description: "Reel-lax is a movie discovery platform that leverages The Movie Database (TMDb) API to provide users with trending movies, detailed information, and search functionalities.",
      link: "https://reel-lax.onrender.com/",
      tech: ["React", "TailwindCSS", "TMDB API"],
    },
    {
      title: "Sagittarius",
      img: "/projects/Sagittarius-project.png",
      description: "Sagittarius is a web-based chatbot application that emulates the functionality of Google's Gemini AI. Built with React and styled using CSS.",
      link: "https://sagittarius-8sng.onrender.com/",
      tech: ["React", "Google Gemini API", "Vite"],
    },
    {
      title: "Summarist",
      img: "/projects/Summarist-project.jpg",
      description: "Summarist is a web application built with Next.js that leverages OpenAI's GPT-3 technology to generate concise, human-like summaries of books across various genres.",
      link: "https://summarist-kohl.vercel.app/",
      tech: ["React", "Next.js", "Express", "Firebase", "TailwindCSS", "OpenAI GPT-3", "Typescript"],
    },
    {
      title: "Venture",
      img: "/projects/Venture-project.png",
      description: "Venture is a dynamic single‑page experience that blends cinematic scroll‑driven transitions, full‑screen visuals, and interactive elements to guide users through a visually rich narrative. Built with HTML, CSS and JavaScript, it delivers a polished browsing journey with crisp animations, responsive layouts, and immersive content.",
      link: "https://jeanrichardson610.github.io/Venture/",
      tech: ["HTML5", "Flexbox", "GSAP", ,"Javascript", "ScrollTrigger", "ScrollSmoother"],
    },
    {
      title: "Goddess",
      img: "/projects/Goddess-project.jpg",
      description: "Goddess++ is a dynamic, responsive website designed to showcase the offerings of a premier women's fitness center. The platform highlights various services, products, and events.",
      link: "https://jeanrichardson610.github.io/Goddess-/",
      tech: ["HTML5", "CSS3", "Javascript"],
    },
  ];

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
        {projectData.map((project, idx) => (
          <InView triggerOnce key={idx}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                className="project-card"
                variants={fadeInUp}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="project-image relative overflow-hidden rounded-lg bg-gray-200">
                  {/* Skeleton */}
                  {!loadedImages[project.title] && (
                    <div className="absolute inset-0 animate-pulse bg-gray-300" />
                  )}
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    whileHover={{ scale: 1.15 }}
                    className="w-full h-full object-cover"
                    onLoad={() => {
                      setTimeout(() => {
                        setLoadedImages((prev) => ({
                          ...prev,
                          [project.title]: true,
                        }));
                      }, 1000); // 1-second delay
                    }}
                  />
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-demo-link"
                  >
                    Live Demo <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              </motion.div>
            )}
          </InView>
        ))}
      </motion.div>
    </motion.section>
  );
};
