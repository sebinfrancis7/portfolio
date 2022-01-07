import React, { Suspense } from 'react'
// import ProjectCard from '../components/ProjectCard'
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { projects } from '../assets/data';

const ProjectCard = React.lazy(() => import('../components/ProjectCard'));
const Carousel = React.lazy(() => import('react-multi-carousel'));

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3,
        // slidesToSlide: 2
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        // slidesToSlide: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
function project(project, i) {
    return (
        <ProjectCard project={project} key={i} />
    );
}


function Projects() {

    return (
        <div id="projects" className="container outer-content">
            <div className="inner-content" >
                <p className="heading-text text-center" > <u>ＰＲＯＪＥＣＴＳ</u> </p>
                {/* <div style={{ display: "flex" }}>
                    {projects.map(project)}
                </div> */}
                <Suspense fallback={<div>Loading...</div>}>
                    <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={20000} showDots={true} dotListClass="custom-dot-list-style">
                        {projects.map(project)}
                    </Carousel>
                </Suspense>
            </div>
        </div>
    )
}

export default Projects
