import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Product from '../components/Product'
import Contact from '../components/Contact'

export const Header = () => {
  return (
    <div>
         <Link to='/'>Home</Link>
          <Link to='/home'>Home</Link>
           <Link to='/about'>about</Link>
            <Link to='/contact'>contact</Link>
              <Link to='/product'>product</Link>
    </div>
  )
}
