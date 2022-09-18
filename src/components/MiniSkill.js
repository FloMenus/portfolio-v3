import React from 'react';

const MiniSkill = (props) => {
   const { name } = props;
    return (
        <div className="mini-skill-button">
            <h4 className="skill-name">{name}</h4>
        </div>
    );
}

export default MiniSkill;