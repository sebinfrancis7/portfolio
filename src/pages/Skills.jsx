import React, { Suspense } from 'react';

import { skills } from '../assets/data';
const Skillbar = React.lazy(() => import('../components/Skillbar'));

function skill(skill, i) {
    return (
        <Skillbar skill={skill} key={i} />
    );
}

function Skills() {

    return (
        <div id="skills" className="container outer-content">
            <div className="inner-content">
                <p className="heading-text text-center"><u>ＳＫＩＬＬＳ</u></p>
                <div className="skills-container row">
                    <Suspense fallback={<div>Loading...</div>}>
                        {skills.map(skill)}
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default Skills
