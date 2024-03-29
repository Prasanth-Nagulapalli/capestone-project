import React from 'react'

import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../components/NotFound';



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




// import React from "react";

// import {Routes,Route} from 'react-router-dom'


// const LazyHome = React.lazy(() => import('../pages/Home'))
// const AppRoutes = () => {
//   return (
//     <>
//     <Routes>
//       <Route path="/" element={<LazyHome />} />
//     </Routes>
    
    
//     </>
//   )
// }

// export default AppRoutes