import { useState } from "react";

import Skill from "./components/Skill";
import Project from "./components/Project";
import ProjectPreview from "./components/ProjectPreview";

import skill_languages from "./data/skills/language-fw.json";
import tools from "./data/skills/tools.json";
import library from "./data/skills/library.json";
import design from "./data/skills/design.json";
import learning from "./data/skills/learning.json";
import projects from "./data/projects/projects.json";

import "./App.css";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const setupSelectedProject = (name) => {
    projects.find((project) => {
      project.name === name
        ? setSelectedProject(project)
        : console.log("Error: Project not found");
    });
  };
  return (
    <div>
      <h1>Florent Menus</h1>
      <h2 className="subtitle">Développeur web full stack</h2>
      {/* <div className="contact-container">
        <a href="https://github.com/FloMenus" target="_blank">
          <img className="contact-image" src={require("./images/contact/github.png")} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/florent-menus/" target="_blank">
          <img className="contact-image" src={require("./images/contact/linkedin.png")} alt="LinkedIn" />
        </a>
        <a href="mailto:florent.mns@gmail.com" target="_blank">
          <img className="contact-image" src={require("./images/contact/email.png")} alt="Email" />
        </a>
        </div> */}
      <div className="about-container">
        <p className="about-text">
          Bonjour, je m’appelle Florent et je suis étudiant développeur web full
          stack. Actuellement en formation à Konexio, j’y prépare le titre
          professionel de Développeur web & web mobile (RNCP 5).
        </p>
        <br />
        <p className="about-text">
          J’apprend tous les outils nécessaires au développement de sites et
          applications web, du maquettage jusqu’au déploiement ainsi qu’à la
          maintenance.
        </p>
        <br />
        <p className="about-text">
          Bienvenue sur mon portfolio ! Vous y trouverez mes projets ainsi que
          mes compétences. N’hésitez pas à me contacter sur {" "}
          <a
            className="social-link"
            href="https://www.linkedin.com/in/florent-menus/"
            target="_blank"
          >
            LinkedIn
          </a>
          {" "} ou envoyez moi un {" "}
          <a className="social-link" href="mailto:florent.mns@gmail.com">
          mail
          </a>
           .
        </p>
      </div>
      <h3 className="section-title">Compétences</h3>
      <div className="skills-container">
        <div className="skills-wrapper">
          <h4 className="skills-wrapper-title">Languages & Frameworks</h4>
          {skill_languages.map((skill) => (
            <Skill
              name={skill.name}
              logo={skill.image}
              link={skill.link}
              key={skill.name}
            />
          ))}
        </div>
        <div className="skills-wrapper">
          <h4 className="skills-wrapper-title">Outils</h4>
          {tools.map((tool) => (
            <Skill
              name={tool.name}
              logo={tool.image}
              link={tool.link}
              key={tool.name}
            />
          ))}
        </div>
        <div className="skills-wrapper">
          <h4 className="skills-wrapper-title">Librairies CSS</h4>
          {library.map((lib) => (
            <Skill
              name={lib.name}
              logo={lib.image}
              link={lib.link}
              key={lib.name}
            />
          ))}
        </div>
        <div className="skills-wrapper">
          <h4 className="skills-wrapper-title">Design</h4>
          {design.map((design) => (
            <Skill
              name={design.name}
              logo={design.image}
              link={design.link}
              key={design.name}
            />
          ))}
        </div>
        <div className="skills-wrapper wip">
          <h4 className="skills-wrapper-title">En cours d'apprentissage</h4>
          {learning.map((learn) => (
            <Skill
              name={learn.name}
              logo={learn.image}
              link={learn.link}
              key={learn.name}
            />
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectPreview
          name={selectedProject.name}
          description={selectedProject.description}
          image={selectedProject.image}
          technos={selectedProject.technos}
          links={selectedProject.links}
          close={() => setSelectedProject(null)}
          key={selectedProject.name}
        />
      )}
      <h3 className="section-title">Projets</h3>
      <div className="projects-container">
        <div className="projects-wrapper">
          {projects.map((project) => (
            <Project
              onClick={() => setupSelectedProject(project.name)}
              name={project.name}
              key={project.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
