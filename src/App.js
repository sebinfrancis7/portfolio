import { useEffect, useState } from "react";
import Zoom from 'react-reveal/Zoom';
import Jump from 'react-reveal/Jump';

import LoadingScreen from 'react-loading-screen';
import Navbar from "./components/Navbar/Navbar.jsx";
import HomePage from './pages/HomePage.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import Resume from "./pages/Resume.jsx";
import Projects from "./pages/Projects.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

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
            <Zoom>
              <HomePage />
            </Zoom>
            <Zoom>
              <AboutMe />
            </Zoom>
            {/* <Zoom>
              <Skills />
            </Zoom> */}
            <Zoom>
              <Resume />
            </Zoom>
            {/* <Zoom>
              <Projects />
            </Zoom> */}
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
