import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocation, faPhone, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer  className="container ">
        <div className="grid gap-5 md:gap-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8  mt-20 border-b border-primaryColorLight ">
          <div className="">
            <h1 className="heading">
              BUR <span className=" text-secondaryColor">GUR</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              recusandae eius similique non ipsa numquam, tempore ratione rerum
              qui, sit in, aspernatur magni hic corrupti assumenda iusto!
              Dignissimos, consequatur blanditiis.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="heading">Support</h3>
            <a href="#" className="hover:text-yellow-500">FAQ's</a>
            <a href="#" className="hover:text-yellow-500">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-500">Terms & Conditions</a>
            <a href="#" className="hover:text-yellow-500">Contact</a>
          </div>
          <div className="">
            <h3 className=" heading">Phone</h3>
            <div>
                <FontAwesomeIcon icon={faPhone} className="mr-2 text-secondaryColor"/>
                +92 331 8701099
            </div>
            <div className="md:pt-8">
            <h3 className=" heading">Email</h3>
            <div className="flex gap-1 items-center ">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-secondaryColor"/>
                mahrshabbir768@gmail.com
            </div>
          </div>
          </div>
          <div>
            <h3 className=" heading">Address</h3>
            <div>
                <FontAwesomeIcon icon={faLocation} className="mr-2 text-secondaryColor"/>
                Faisalabad
            </div>
            <div className="md:pt-8">
            <h3 className=" heading">Follow US</h3>
            <div className="flex">
                <a href="#"><FontAwesomeIcon icon={faFacebook} className="mr-2 text-secondaryColor"/></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} className="mr-2 text-secondaryColor"/></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} className="mr-2 text-secondaryColor"/></a>
            </div>
          </div>
          </div>
        </div>
        <div className="flex justify-between items-center py-8">
            <div>
                Burger Template by Shabbir Anjum
            </div>
            <div>
                Copyright Reserved 2023. @ All Right Reserved.
            </div>
        </div>
      </footer>
    </>
  );
}
