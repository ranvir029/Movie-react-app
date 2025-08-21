import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import { Header } from './Pages/Header'
import NavBar from './components/NavBar'
import Movies from './components/Movies'

const App = () => {
  return (
     <div>
 {/* <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
         <Route path='/about' element={<About/>}/>
             <Route path='/contact' element={<Contact/>}/>
    </Routes> */}
    <NavBar/>
      <Routes>
          <Route path='/home' element={<Home/>}/>
            <Route path='/products' element={<Product/>}/>
              <Route path='/movies' element={<Movies/>}/>
      </Routes>
     </div>
  
  )
}

export default App