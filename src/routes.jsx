import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import BlogListing from './Pages/BlogListing';
import Contact from './Pages/Contact';
import SingleBlog from './Pages/SingleBlog';
import TravelDescription from './Pages/TravelDescription';

const AppRoutes = () => {
  return (
    <div id='pagewrapper'>
      <Router>
          <Navbar/>
          <Routes>
          <Route path='/' element={<Home/>}/>
              <Route path='/aboutus' element={<AboutUs/>}/>
              <Route path='/bloglisting' element={<BlogListing/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/singleblog' element={<SingleBlog/>}/>
              <Route path='/navbar' element={<Navbar/>}/>
              <Route path='/footer' element={<Footer/>}/>
              <Route path='/traveldescription/:name' element={<TravelDescription/>}/>
          </Routes>
          <Footer/>
      </Router>
    </div>
  )
}

export default AppRoutes;