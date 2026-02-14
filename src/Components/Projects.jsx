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
      description: "Reel-lax is a movie discovery platform that leverages The Movie Database (TMDb) API to provide users with trending movies, detailed information, and search functionalities. Built with React and styled with Tailwind CSS, the app offers a sleek and responsive design, allowing users to explore movie details, watch trailers, and discover new films effortlessly.",
      link: "https://reel-lax.onrender.com/",
      tech: ["React", "TailwindCSS", "TMDB API", "Vite", "React Router DOM"],
    },
    {
      title: "Skinstric AI",
      img: "/projects/Skinstric-project.png",
      description: "Skinstric is an interactive AI-powered facial analysis web app that allows users to upload or scan their faces to receive automated demographic predictions such as age and race. Built with React, it offers a smooth, intuitive experience with real-time image preview, permission prompts, and animated loading states.",
      link: "https://skinstric-beta-steel.vercel.app/",
      tech: ["React", "React Router DOM", "Framer Motion", "Flexbox"],
    },
    {
      title: "Summarist",
      img: "/projects/Summarist-project.jpg",
      description: "Summarist is a web application built with Next.js that leverages OpenAI's GPT-3 technology to generate concise, human-like summaries of books across various genres.",
      link: "https://summarist-kohl.vercel.app/",
      tech: ["React", "Next.js", "Express", "Firebase", "TailwindCSS", "OpenAI GPT-3", "Typescript"],
    },
    {
      title: "Fitlytics",
      img: "/projects/Fitlytics-project.png",
      description: "A full stack fitness tracking app with AI-powered food image analysis, built with React and Strapi, styled with Tailwind CSS, and fully deployable online for free. Track your fitness journey, set goals, log your meals and workouts, and get AI insights on the foods you eat by simply uploading images!.",
      link: "https://fitness-tracker-lac-kappa.vercel.app/",
      tech: ["React", "TailwindCSS", "Typescript", "Strapi", "Strapi Cloud", "Google Gemini AI", "Vercel"],
    },
    {
      title: "Learnora",
      img: "/projects/Learnora-project.png",
      description: "A modern Learning Management System (LMS) built with React, designed for an intuitive and engaging learning experience. Users can browse courses, view details, and navigate through a clean, responsive interface. The application features a sleek design with smooth animations, making it easy for learners to find and access educational content.",
      link: "https://jeanrichardson610.github.io/Learnora/",
      tech: ["React", "React Router", "TailwindCSS", "Bootstrap", "Vite"],
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
