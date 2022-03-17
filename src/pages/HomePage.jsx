import React from 'react'
import Typewriter from 'typewriter-effect';
import animoji from '../assets/images/animoji.png';
import resumeFile from '../assets/SEBIN FRANCIS KANNAMPUZHA - Resume.pdf'


function HomePage() {
    return (
        <div id="homepage" className="container outer-content">
            <div className="inner-content">
                <div className="justify-content-center animoji-image-div">
                    <div className="jusify-content-center text-center animoji-image">
                        <img src={animoji} className="border border-white rounded-circle" alt="sebin francis" />
                    </div>
                </div>
                <div className="text-center px-auto icon-div">
                    <a href="https://www.linkedin.com/in/sebinfrancis" target="_blank" rel="noopener noreferrer"><span>Linkedin</span><i className="fab fa-lg fa-linkedin-in icons" aria-hidden="true" title="Linkedin"></i></a>
                    <a href="https://github.com/sebinfrancis7" target="_blank" rel="noopener noreferrer"><span>Github</span><i className="fab fa-lg fa-github  icons" aria-hidden="true" title="Github" ></i></a>
                    <a href="https://dev.to/sebinfrancis7" target="_blank" rel="noopener noreferrer"><span>Dev</span><i className="fab fa-lg fa-dev icons" aria-hidden="true" title="Dev" ></i></a>
                    <a href="https://medium.com/@sebinfrancis7" target="_blank" rel="noopener noreferrer"><span>Medium</span><i className="fab fa-lg fa-medium  icons" aria-hidden="true" title="Medium" ></i></a>
                    {/* <a href="#homepage"><span>Instagram</span><i className="fab fa-lg fa-instagram  icons" aria-hidden="true"></i></a> */}
                    <a href="mailto:sebin.k.francis07@gmail.com"><span>Email</span><i className="far fa-lg fa-envelope  icons" aria-hidden="true" title="E-Mail"></i></a>
                    <a href={resumeFile} download ><span>Resume</span><i className="fas fa-lg fa-file-download icons" title="Download Resume"> </i></a>
                </div>
                <div className="text-center homepage-text p-auto flex-grow-1">
                    <p>Hii !  👋</p>
                    <p className="my-name">My name is  <strong>Sebin Francis</strong>.</p>
                    <p>I am a</p>
                    <div className="typewritter">
                        <Typewriter
                            options={{
                                strings: ["Open Source Contributer ...", "Aspiring Software Developer ...", "Technology Enthusiast ..."],
                                autoStart: true,
                                loop: true,
                                delay: 70,
                                pauseFor: 2000
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePage
