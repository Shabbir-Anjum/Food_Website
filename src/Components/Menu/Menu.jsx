import React from "react";

export default function Menu() {
  return (
    <>
      <div className="container mt-8">
        <div className="text-center mx-auto">
          <h2 className="title">Our Best Menu</h2>
          <div className="separator"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            natus fugiat dolores provident enim vitae earum labore eligendi
            quasi, omnis iusto! Id cumque, harum molestias ducimus incidunt esse
            aut! Esse!
          </p>
         <div className="tab">
            <ul className="flex mt-8 justify-center gap-4 flex-wrap">
                <li className="btn2 flex-1">All</li>
                <li className="btn2 flex-1">Food</li>
                <li className="btn2 flex-1">Snack</li>
                <li className="btn2 flex-1">Beverage</li>
            </ul>
         </div>
        </div>
      </div>
    </>
  );
}
