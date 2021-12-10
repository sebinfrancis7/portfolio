import React from 'react'
import Typewriter from 'typewriter-effect';
import animoji from '../assets/images/animoji.png';

function HomePage() {
    return (
        <div id="homepage" className="container outer-content">
            <div className="inner-content">
                <div className="justify-content-center animoji-image-div">
                    <div className="jusify-content-center text-center animoji-image">
                        <img src={animoji} className="img-fluid center-block d-block mx-auto" alt="sebin" />
                    </div>
                </div>
                <div className="text-center px-auto icon-div">
                    <a href="https://www.linkedin.com/in/sebinfrancis" target="_blank" rel="noopener noreferrer"><span></span><i className="fab fa-lg fa-linkedin-in icons" aria-hidden="true" ></i></a>
                    <a href="https://github.com/sebinfrancis7" target="_blank" rel="noopener noreferrer"><span></span><i className="fab fa-lg fa-github  icons" aria-hidden="true" ></i></a>
                    <a href="https://medium.com/@sebinfrancis7" target="_blank" rel="noopener noreferrer"><span></span><i className="fab fa-lg fa-medium  icons" aria-hidden="true" ></i></a>
                    <a href="#homepage"><span></span><i className="fab fa-lg fa-instagram  icons" aria-hidden="true"></i></a>
                    <a href="mailto:sebin.k.francis07@gmail.com"><span></span><i className="far fa-lg fa-envelope  icons" aria-hidden="true"></i></a>
                </div>
                <div className="text-center homepage-text p-auto flex-grow-1">
                    <p>Hii !  👋</p>
                    <p className="my-name">My name is  <strong>Sebin Francis</strong>.</p>
                    <p>I am a</p>
                    <div className="typewritter">
                        <Typewriter
                            options={{
                                strings: ["Final Year CSE Student ...", "Aspiring Software Developer ...", "Technology Enthusiast ..."],
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
