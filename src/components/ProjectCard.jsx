import React from 'react'

function carouselIndicator(image, i) {
    return (
        i === 0 ?
            <button data-bs-target="#carouselExampleIndicators" data-bs-slide-to={i} className="active" style={{ backgroundColor: "#CF9FFF" }} aria-label={"Slide" + i}></button>
            :
            <button data-bs-target="#carouselExampleIndicators" data-bs-slide-to={i} style={{ backgroundColor: "#CF9FFF" }} aria-label={"Slide" + i} ></button>
    );
}

function imageCarousel(image, i) {
    return (
        i === 0 ?
            <div className="carousel-item active" key={i}>
                <img className="d-block w-100" style={{ height: "200px" }} src={image} alt={i + " slide"} />
            </div>
            :
            <div className="carousel-item" key={i}>
                <img className="d-block w-100" style={{ height: "200px" }} src={image} alt={i + " slide"} />
            </div>
    );
}

function ProjectCard(props) {
    var project = props.project;
    var imgs = project.images;
    return (
        <div className="card project-card mx-auto">
            <div id={"carouselExampleIndicators" + project.id} className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-indicators">
                    {imgs.map(carouselIndicator)}
                </div>
                <div className="carousel-inner">
                    {imgs.map(imageCarousel)}
                </div>
                <a className="carousel-control-prev" href={"#carouselExampleIndicators" + project.id} role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: "#CF9FFF", borderRadius: "10px" }}></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href={"#carouselExampleIndicators" + project.id} role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" style={{ backgroundColor: "#CF9FFF", borderRadius: "10px" }}></span>
                    <span className="sr-only" style={{ color: "#CF9FFF" }}>Next</span>
                </a>
            </div>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            {/* <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
            </ul> */}
            <div className="card-body mx-auto">
                <a href="#" className="btn btn-primary mx-2">Repo Link</a>
                <a href="#" className="btn btn-primary mx-2">Demo</a>
            </div>
        </div>

    )
}

export default ProjectCard
