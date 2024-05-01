import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../components/NotFound';
import Reservations from '../reservations/Reservations';
import Login from '../components/Login';
import Order from '../orderOnline/Order';



const AppRoutes = () => {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />}/>
      <Route path='/reservations' element={<Reservations />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/orderonline' element={<Order />} />
      <Route path='*' element={<NotFound />} />
      </Routes>   
    </>
  )
}

export default AppRoutes






// import React from 'react'
// import { Routes, Route } from 'react-router-dom';

// const Home = React.lazy(() => import('../pages/Home'))
// const About = React.lazy(() => import ('../pages/About')) 
// const NotFound = React.lazy(() => import  ('../components/NotFound'));
// const Reservations = React.lazy(() => import('../reservations/Reservations'))
// const AppRoutes = () => {
//   return (
//     <>
//      <Routes>
//       <Route path='/' element={<Home />} />
//       <Route path='/about' element={<About />}/>
//       <Route path='/reservations' element={<Reservations />}/>
//       <Route path='*' element={<NotFound />} />
//       </Routes>   
//     </>
//   )
// }

// export default AppRoutes


