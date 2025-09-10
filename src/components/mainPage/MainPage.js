import React from 'react';
import ReactDOM from 'react-dom/client';

import About from './About';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Info from './Info';

function MainPage() {
  return (
    <div id="mainpage" >
        <Info id="info"></Info>
        <About id="about"></About>
        <Experience id="experience"></Experience>
        <Skills id="skills"></Skills>
        <Education id="education"></Education>
        <Contact id="contact"></Contact>
    </div>
  );
}

export default MainPage;