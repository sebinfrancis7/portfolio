import React from 'react'


function carouselIndicator(image, i) {
    return (
        i === 0 ?
            <button data-bs-target="#carouselIndicators" data-bs-slide-to={i} key={i} className="active" style={{ backgroundColor: "#CF9FFF" }} aria-label={"Slide" + i}></button>
            :
            <button data-bs-target="#carouselIndicators" data-bs-slide-to={i} key={i} style={{ backgroundColor: "#CF9FFF" }} aria-label={"Slide" + i} ></button>
    );
}

function imageCarousel(image, i) {
    return (
        i === 0 ?
            <div className="carousel-item active" key={i}>
                <img className="d-block w-100" key={i} style={{ height: "200px", borderRadius: "7px" }} src={image} alt={i + " slide"} />
            </div>
            :
            <div className="carousel-item" key={i}>
                <img className="d-block w-100" key={i} style={{ height: "200px", borderRadius: "7px" }} src={image} alt={i + " slide"} />
            </div>
    );
}

function ProjectCard(props) {
    var project = props.project;
    var imgs = project.images;
    return (
        <div className="card project-card mx-3" style={{ borderRadius: "10px", borderColor: "#989898", borderWidth: "3px", backgroundColor: "#333333" }}>
            <div id={"carouselIndicators" + project.id} className="carousel slide" data-bs-ride="carousel" >
                {
                    imgs.length === 1 ?
                        <span></span>
                        :
                        <div className="carousel-indicators">
                            {imgs.map(carouselIndicator)}
                        </div>
                }

                <div className="carousel-inner">
                    {imgs.map(imageCarousel)}
                </div>
                {
                    imgs.length === 1 ?
                        <span></span>
                        :
                        <div>
                            <a className="carousel-control-prev" href={"#carouselIndicators" + project.id} role="button" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: "#CF9FFF", borderRadius: "10px" }}></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href={"#carouselIndicators" + project.id} role="button" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" style={{ backgroundColor: "#CF9FFF", borderRadius: "10px" }}></span>
                                <span className="sr-only" style={{ color: "#CF9FFF" }}>Next</span>
                            </a>
                        </div>
                }

            </div>
            <div className="card-body" style={{ borderTop: "4px solid #989898", borderRadius: "10px" }}>
                <p className="card-title project-title">{project.title}</p>
                <p className="card-text project-description">{project.description}</p>
            </div>
            {/* <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
            </ul> */}
            <div className="card-body mx-auto card-link">
                {
                    project.repoLink === "" ?
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary mx-2 button disabled " > Repo Link</a>
                        :
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary mx-2 button " >Repo Link</a>
                }
                {
                    project.demoLink === "" ?
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary mx-2 button disabled " >Demo</a>
                        :
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary mx-2 button " >Demo</a>
                }
            </div>
        </div >

    )
}

export default ProjectCard
