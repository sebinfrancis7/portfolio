import React from 'react'


function Skillbar(props) {

    var skill = props.skill;
    return (
        <div className="col-sm-6 skill">
            <div className="details">
                <span>{skill.name}</span>
                <span className="percentage">{skill.percentage}%</span>
            </div>
            <div className="bar">
                <div id="skill-bar" style={{ width: `${skill.percentage}%` }}></div>
            </div>
        </div>
    )
}

export default Skillbar
