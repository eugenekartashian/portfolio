import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Main from './Main';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';
import Crypto from '../pages/crypto';
import Netflix from '../pages/netflix';
import Property from '../pages/property';
import Twitch from '../pages/twitch';

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {

  const location = useLocation();

  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        
        {/* <Route path="/" element={<Header />} /> */}
        <Route path='/' element={<Main />} />
        <Route path='/main' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />

        {/* Pages */}
        <Route path='/crypto' element={<Crypto />} />
        <Route path='/netflix' element={<Netflix />} />
        <Route path='/property' element={<Property />} />
        <Route path='/twitch' element={<Twitch />} />

    </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes