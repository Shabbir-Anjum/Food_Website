import React, { useState } from "react";
import card_data from '../Data/Card_data'
export default function Menu() {
  const [food_type, setfood_type]= useState('all');
  const [isactive, setisactive]= useState('home')
  return (
    <>
    
      <div className="container mt-20">
        <div className="text-center mx-auto w-1/2">
          <h2 className="title">Our Best Menu</h2>
          <div className="seperator mx-auto"></div>
          <p >
            Tempore, natus fugiat dolores provident enim vitae earum labore
            eligendi quasi, omnis iusto! Id cumque, harum molestias ducimus
            incidunt esse aut! Esse!
          </p>
          <div className="tab">
            <ul className="flex mt-8 justify-center gap-4 flex-wrap">
              <li className={`flex-1 ${isactive==='home'? 'btn3': 'btn2'}`} onClick={()=> {setfood_type('all'); setisactive('home') }}>All</li>
              <li className={`flex-1 ${isactive==='burger'? 'btn3': 'btn2'}`} onClick={()=>{ setfood_type('burger'); setisactive('burger')}}>Food</li>
              <li className={`flex-1 ${isactive==='beverage'? 'btn3': 'btn2'}`} onClick={()=> {setfood_type('beverage'); setisactive('beverage')}}>Snack</li>
              <li className={`flex-1 ${isactive==='snack'? 'btn3': 'btn2'}`} onClick={()=> {setfood_type('snack'); setisactive('snack')}}>Beverage</li>
            
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12  ">
        {card_data.map((card,index)=>{
          if(card.id===food_type || food_type==='all'){
            return <div key={index}>
                <div className="hover:bg-secondaryColor hover:opacity-70 p-16 rounded-3xl mb-4 md:h-60 grid place-items-center lg:p-4 lg:h-40 bg-primaryColorLight">
                  <img
                  
                    src={card.img}
                    alt="Error"

                    className="w-20 mx-auto"
                  />
                </div>
                <div>
                  <h4 className="3xl uppercase font-bold font-Roboto">{card.title}</h4>
                  <p className=" text-sm ">
                    {card.about}

                  </p>
                  <div className="mt-2 font-Roboto text-fuchsia-300">{card.price}</div>
                </div>
              </div>
            
          }
        })}
        </div>
       
      </div>
      
    </>
    
  );
}
