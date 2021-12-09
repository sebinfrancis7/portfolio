import React from 'react'
import resumeFile from '../assets/SEBIN FRANCIS KANNAMPUZHA - Resume.pdf'

function Resume() {

    return (
        <div id="resume" className="container outer-content">
            <div className=" inner-content">
                <p className="heading-text text-center" ><u>ＲＥＳＵＭＥ </u><a href={resumeFile} download > <i className="fas fa-lg fa-file-download icon"> </i></a></p>
                <div className="d-flex justify-content-center resume-box" style={{ height: '90%' }}>
                    <iframe title="resume" loading="lazy" src="https://drive.google.com/file/d/1EBnSpX1-CvzR0pXohMOnQ5PRhwUuX8WD/preview" allow="autoplay"
                        style={{ width: '80%', height: '90%', padding: ".5rem 2rem 2rem 2rem", }} frameborder="0"></iframe>
                </div>
            </div>
        </div >
    )
}

export default Resume
