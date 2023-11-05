import { useState, useEffect} from 'react'
import './App.css'
import Home from './page/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './page/About';
import ScrollToTop from './components/ScrollToTop';
import LanguageSelect from './page/Project/LanguageSelect';
import ModuleSelect from './page/Project/ModuleSelect';
import Try from './page/Project/gameComp/Game';
import {Md1, Md2, Md3, Md4} from './page/Project/Modules/Md';
import QuizContainer from './page/Project/Quiz/Container';



function App() {

  return (
    <>
      <div className='body-app' >
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<LanguageSelect />} />
            <Route path="/project/js/try" element={<Try />} />
            <Route path="/project/js" element={<ModuleSelect />} />
            <Route path="/project/md-1" element={<Md1 />} />
            <Route path="/project/md-2" element={<Md2 />} />
            <Route path="/project/md-3" element={<Md3 />} />
            <Route path="/project/md-4" element={<Md4 />} />
            <Route path="/project/js/quiz" element={<QuizContainer />} />

          </Routes>
      </div>
    </>
  )
}

export default App
