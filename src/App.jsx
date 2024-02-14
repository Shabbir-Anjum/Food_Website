
import Category from './Components/Category'
import Headar from './Components/Headar'
import Home from './Components/Home'
import React, { useState } from 'react'
import Promo from './Components/Promo/Promo'
import About from './Components/About/About'
import Menu from './Components/Menu/Menu'
import Review from './Components/Review/Review'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  let [mod, setmod]= useState(false)
  const changemode=()=>{
    setmod(()=>!mod)
  }
  return (
    <>
    <Headar mod={mod} mode={changemode}/>
    
    <Home/>
    <Category/>
    <Promo/>
    <About/>
    <Menu/>
    <Review/>
    <Contact/>
    <Footer/>
    </>
  )
}
export default App
