import './App.scss';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Project from './components/Portfolio/Project';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



function App() {

  const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [pathname]);
  
  return (
    <Routes>
      <Route exact path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />}>
          <Route path='project/:projectName' element={<Project />}/> 
        </Route>
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
