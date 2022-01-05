import React from 'react'

function AboutMe() {
    return (
        <div id="about" className="container outer-content">
            <div className="inner-content">
                <p className="heading-text text-center"><u>ＡＢＯＵＴ ＭＥ</u></p>
                <div className="aboutme py-auto container">
                    <ul type="square">
                        <li><p >I am a Final Year <span className="highlight">CSE</span> student from Mumbai, India 🇮🇳.</p></li>
                        <li style={{ padding: ".5rem 0rem 1rem 0rem" }}><span>My interests include
                            <ul>
                                <li><span className="highlight">Software Design and Development</span></li>
                                <li><span className="highlight">Artificial Intelligence and Machine Learning</span></li>
                                <li><span className="highlight">Web Application Development</span></li>
                                <li><span className="highlight">Blockchain</span></li>
                            </ul>
                            {/* <span className="highlight">software design and development, artificial intelligence, machine learning</span> and <span className="highlight">blockchain</span>. */}
                        </span>
                        </li>
                        <li><p>I am always excited about new technologies and strive to learn everything I can about them.</p></li>
                    </ul>
                    {/* <p>I like playing <span className="highlight">football</span> (soccer 😅) and enjoy listening to <span className="highlight">music</span>.</p> */}
                </div>
            </div>
        </div>
    )
}

export default AboutMe
