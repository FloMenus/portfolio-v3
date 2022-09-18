import React from 'react';

const Skill = (props) => {
   const { name, logo, link } = props;
    return (
        <a href={link} className="skill-button" target="_blank" rel="noreferrer">
            <img className="skill-logo" src={require(`../images/skills/${logo}`)} alt={name} />
            <h4 className="skill-name">{name}</h4>
        </a>
    );
}

export default Skill;