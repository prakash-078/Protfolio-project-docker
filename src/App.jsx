import React from 'react'
import { FaGithub, FaLinkedin, FaCloud, FaShoppingCart, FaUserGraduate } from "react-icons/fa";
import './App.css'
const App = () => {
  return (
    <>
    <header className='navbar'>
      <h2>Prakash Kumar Mallik  </h2>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    <section className='hero'>
  <div className='hero-content'>
    <h1>Hi, I'm Prakash</h1>

    <p>
      Cloud Computing & Devops Intern | MERN Full-stack Developer
    </p>

    <a href="#projects" className='btn'>
      View Projects
    </a>
  </div>
</section>

    <section id='about' className='about'>
      <h2>About Me</h2>
      <p>I am a B.Tech CSE (Data Science) student passionate about
      Cloud Computing, DevOps, Java Backend Development,MERN Full-stack Developer
      and scalable web applications.
      I enjoy solving DSA problems and building real-world projects.</p>
    </section>

    <section id='projects' className='projects'>
      <h2>Projects</h2>
      <div className='project-container'>
          <div className='project-card'>
            <FaShoppingCart className='icon'/>
            <h2>E-Commerce Website</h2>
            <p> Built a responsive e-commerce application using
          React, Node.js, Express, and MongoDB.</p>
          </div>
          <div className='project-card'>
            <FaUserGraduate className='icon'/>
            <h2>Student Management System</h2>
            <p>Developed a Java-based CRUD application using
          Spring Boot, Hibernate, and MySQL.</p>
          </div>
          <div className='project-card'>
            <FaCloud className='icon' />
            <h2>Weather App</h2>
            <p>Created a weather forecast application using
          JavaScript and weather APIs with responsive UI.</p>
          </div>
      </div>
    </section>
    <section id="contact" className="contact">

    <h2>Contact Me</h2>

    <a href="mailto:ysprakash56@gmail.com">
        ysprakash56@gmail.com
</a>

    <div className="social-links">

      <a href="https://github.com/prakash-078" target='_blank'>
        <FaGithub/>
      </a>

      <a href="https://www.linkedin.com/in/p078/" target='_blank'>
        <FaLinkedin/>
      </a>

    </div>

  </section>

   <footer>

    <p>
      © 2026 Prakash Kumar Mallik | All Rights Reserved
    </p>

  </footer>
    </>
  )
}

export default App