import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import { Hero } from "./Components/Hero";
import { Projects } from "./Components/Projects";
import { Contact } from "./Components/Contact";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Scroll to the top of the page on refresh
   window.scrollTo(0, 0);

    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Nav />
      <Hero />
      <Projects />
      <Contact />

      <motion.footer
        className="footer"
        intial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p> &copy; 2025 JR Studio. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default App;
