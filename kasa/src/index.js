import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './styles/index.css';

import Home from './pages/home'
import Logement from './pages/logement';
import About from './pages/about';
import NotFound from './pages/notfound';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path = '/' element = {<Home />} />
        <Route path = '/logement' element = {<Logement />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '*' element = {< NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)