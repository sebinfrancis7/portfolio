import React from 'react'

function AboutMe() {
    return (
        <div id="about" className="container outer-content">
            <div className="inner-content">
                <h3 className="heading-text text-center"><u>ＡＢＯＵＴ ＭＥ</u></h3>
                <div className="aboutme py-auto text-center">
                    <p >I am a Final Year <span className="highlight">CSE</span> student from Mumbai, India 🇮🇳</p>
                    <p>My interests include <span className="highlight">software design and development, artificial intelligence, machine learning</span> and <span className="highlight">blockchain</span>.</p>
                    <p>I am always excited about new technologies and strive to learn everything I can about them.</p>
                    <p>I like playing <span className="highlight">football</span> (soccer 😅) and enjoy listening to <span className="highlight">music</span>.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
