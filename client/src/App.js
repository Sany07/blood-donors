import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Nav from './components/NavBar/Nav';
import Donors from './pages/Donors';
import Contact from './pages/Contact';
import ApplyDonor from './pages/ApplyDonor';
import Toaster from './components/Toaster/Toaster';
import SingleDonor from './pages/SingleDonor';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
        <Nav/>
        <Toaster />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donors" element={<Donors />} />
          <Route path="/donor/:id" element={<SingleDonor />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply/donor" element={<ApplyDonor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
    </>


  );
}

export default App;
