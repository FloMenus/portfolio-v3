import React from 'react';

const Project = (props) => {

   const { name, onClick } = props;
    return (
        <button className="project" onClick={onClick}>
            <h5>{name}</h5>
        </button>
    );
}

export default Project;