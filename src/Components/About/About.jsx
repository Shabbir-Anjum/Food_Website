import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function About() {
  return (
    <>
      <div id="about" className="container mt-8 flex flex-col md:flex-row items-center gap-4  overflow-hidden">
        <div className="flex-1">
          <img src="../img/about.jpg" alt="erorr" className="  rounded-lg" />
        </div>
        <div className="flex-1">
          <div className="about_title uppercase text-center">Find food and drinks</div>
          <div className="seperator mx-auto"></div>
          <div>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum animi
            ea est fugit fuga dolorem qui. Fuga magnam voluptatem vitae in,
            neque temporibus maiores esse saepe rem eveniet impedit corporis? 
            </p>
          </div>
          <div >
           <ul className="grid grid-cols-2 py-4">
            <li>
                <FontAwesomeIcon icon={faCheck} className=" text-secondaryColor pr-2"/>
                Best Price
            </li>
            <li>
            <FontAwesomeIcon icon={faCheck} className=" text-secondaryColor pr-2"/>
                Best Service
            </li>

            <li>
            <FontAwesomeIcon icon={faCheck} className=" text-secondaryColor pr-2"/>
                Health Protocol
            </li>
            <li>
            <FontAwesomeIcon icon={faCheck} className=" text-secondaryColor pr-2"/>
                Freshment
            </li>
           </ul>
          </div>
          <div className="btn">
            <a href="#">About US</a>
          </div>
        </div>
      </div>
    </>
  );
}
