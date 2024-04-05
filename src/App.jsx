
import { Route, Routes, useLocation } from 'react-router-dom'

import Contact from './Pages/Contact';
import About from './Pages/About';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import Header from './Components/Header';
import Feature from './Pages/Feature';
import Gallery from './Pages/Gallery';


function App() {

  const location = useLocation();
  return (
    <>

      <Header />

      <Routes location={location} key={location.pathname}>
        <Route path='/*' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>

      <Feature />
      <Footer />
    </>
  )
}

export default App
