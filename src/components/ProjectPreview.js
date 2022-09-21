import React from "react";
import MiniSkill from "./MiniSkill";
import imagePlaceholder from "../images/image-placeholder.svg";

const ProjectPreview = (props) => {
  const { name, description, image, technos, links, close } = props;
  const preview = require(`../images/projects/${image}`);

  return (
    <div className="project-presentation">
      <button className="project-presentation-close" onClick={close}>
        <img
          className="close-logo"
          src={require("../images/close.png")}
          alt="close"
        />
      </button>
      {console.log(name)}
      <h5 className="project-presentation-name">{name}</h5>
      <a href={links.deploy} target="_blank" rel="noreferrer">
        {!preview ? (
          <img
            className="project-presentation-image"
            src={imagePlaceholder}
            alt={name}
          />
        ) : (
          <img
            className="project-presentation-image"
            src={preview}
            alt={name}
          />
        )}
      </a>
      <p className="project-presentation-description">{description}</p>
      <h6 className="project-presentation-technos-title">Technos utilisées</h6>
      <div className="mini-skills-wrapper">
        {technos.map((techno) => {
          return <MiniSkill name={techno} key={techno} />;
        })}
      </div>
      <div className="project-presentation-links">
        <a
          href={links.deploy}
          className="project-presentation-link link-deploy"
          target="_blank"
          rel="noreferrer"
        >
          <p className="link-text">Accéder au site</p>
        </a>
        <a
          href={links.github}
          className="project-presentation-link link-github"
          target="_blank"
          rel="noreferrer"
        >
          <p className="link-text">Voir repo.</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectPreview;
