import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Home from './pages/home'
import Logement from './pages/logement'
import About from './pages/about'
import NotFound from './pages/notfound'

function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default AppRouter
