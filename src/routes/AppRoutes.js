import React from 'react'

import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../components/404 Not found/NotFound';



const AppRoutes = () => {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />}/>
      <Route path='*' element={<NotFound />} />
      </Routes>   
    </>
  )
}

export default AppRoutes