import "./App.css";
import Header from "./components/Header/Header";
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer'
const  App = () => {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
