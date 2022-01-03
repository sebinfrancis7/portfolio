import React, { useEffect, useState, Suspense } from "react";
import Zoom from 'react-reveal/Zoom';
import Jump from 'react-reveal/Jump';

import LoadingScreen from 'react-loading-screen';
import Navbar from "./components/Navbar/Navbar.jsx";
import HomePage from './pages/HomePage.jsx';
// import AboutMe from './pages/AboutMe.jsx';
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
// import Footer from "./components/Footer.jsx";

const AboutMe = React.lazy(() => import('./pages/AboutMe.jsx'));
// const Resume = React.lazy(() => import('./pages/Resume.jsx'));
const Footer = React.lazy(() => import('./components/Footer.jsx'));


function App() {

  const [loading, setLoading] = useState(true);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {

    let progressBarHandler = () => {

      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);
    }

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });

  return (
    <div className="App">
      {
        loading ?
          <LoadingScreen
            loading={true}
            bgColor='#333333'
            spinnerColor='#CF9FFF'
            textColor='#FFFFFF'
            text='【﻿<　ＨＥＬＬＯ　　　　ＷＯＲＬＤ　！　>】'
          />
          :
          <div>
            <Navbar />
            <div id="progressBarContainer">
              <div id="progressBar" style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }} />
            </div>
            <Zoom>
              <HomePage />
            </Zoom>
            <Suspense fallback={<div>Loading...</div>}>
              <Zoom>
                <AboutMe />
              </Zoom>
            </Suspense>
            {/* <Zoom>
              <Skills />
            </Zoom> */}
            {/* <Suspense fallback={<div>Loading...</div>}>
              <Zoom>
                <Resume />
              </Zoom>
            </Suspense> */}
            <Suspense fallback={<div>Loading...</div>}>
              <Zoom>
                <Projects />
              </Zoom>
            </Suspense>
            {/* <Zoom>
              <Contact />
            </Zoom> */}
            <Jump>
              <Footer />
            </Jump>
          </div>
      }
    </div>
  );
}

export default App;
