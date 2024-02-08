import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import NavBar from './Components/NavBar';
import Contact from './Components/Contact';
import Hotels from './Components/Hotels';
import Flights from './Components/Flights';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<> <NavBar/> <Header title="Home"/> <Home/> </> }/>
        <Route path='/about' element={<> <NavBar/> <Header title="About Us"/> <About/> </> }/>
        <Route path='/contact' element={<> <NavBar/> <Header title="Contact Us"/> <Contact/> </> }/>
        <Route path='/hotels' element={<> <NavBar/> <Header title="Search Hotels"/> <Hotels/> </> }/>
        <Route path='/flights' element={<> <NavBar/> <Header title="Search Flights"/> <Flights/> </> }/>
        



      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
