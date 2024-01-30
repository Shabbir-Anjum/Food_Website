import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faMoon, faXmark } from '@fortawesome/free-solid-svg-icons'
 function Headar() {
  let [ClassN, setClassN]= useState(false);
  const handle=()=>{
    setClassN(!ClassN)
  }
  return (
    <div>
        <header className=" bg-primaryColor fixed top-0 left-0  w-full z-50 " >
      <nav className="container flex justify-between items-center h-14 relative ">
        <div className=" text-2xl uppercase font-Roboto">
          <a href="#">Shabbir <span className="text-secondaryColor">Anjum</span></a>
        </div>
        <div className='flex gap-4 '>
        <div className={`${ClassN? 'block': 'hidden'} text-xl  md:static md:py-0 md:w-auto  md:block absolute left-0 top-0  w-full py-5 bg-primaryColor`} >
        <ul className="flex flex-col gap-4 justify-center items-center  md:flex-row md:justify-end ">
          <li><a onClick={handle} href="#"className="hover:text-secondaryColor ease-in duration-200">Home</a></li>
          <li><a onClick={handle} href="#"className="hover:text-secondaryColor ease-in duration-200">About</a></li>
          <li><a onClick={handle} href="#"className="hover:text-secondaryColor ease-in duration-200">Menu</a></li>
          <li><a onClick={handle} href="#"className="hover:text-secondaryColor ease-in duration-200">Review</a></li>
          <li><a onClick={handle} href="#"className="hover:text-secondaryColor ease-in duration-200">Contact</a></li>
        </ul>
        <div className="cursor-pointer absolute top-4 md:hidden  right-6">
        <FontAwesomeIcon icon={faXmark} onClick={handle}/>
        </div>
        </div>
       <div className=" flex  items-center gap-5  text-xl">
       <FontAwesomeIcon icon={faMoon} />
       <div className='md:hidden'>
       <FontAwesomeIcon icon={faBars} onClick={handle} />
       </div>
       </div>
       </div>
      </nav>
    </header>
    </div>
  )
}
export default Headar;