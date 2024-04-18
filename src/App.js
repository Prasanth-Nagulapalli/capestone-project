// import React from "react";

// import Header from "./components/Header";
// import AppRoutes from './routes/AppRoutes'
// import Footer from './components/Footer'
// const  App = () => {
//   return (
//     <>
//       <Header />
//       <AppRoutes />
//       <Footer />
//     </>
//   );
// }

// export default App;

import React, { Suspense, lazy } from "react";
import Loading from "./components/Loading";
const Header = lazy(() => import("./components/Header"));
const AppRoutes = lazy(() => import("./routes/AppRoutes"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <>
    <Suspense fallback={<Loading />}>

      <Header />
      <AppRoutes />
      <Footer />
    </Suspense>
    </>
  );
};

export default App;
