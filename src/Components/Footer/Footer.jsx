import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLocation, faPhone, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="container ">
        <div className="grid gap-5 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8  mt-20 border-b border-red-500 ">
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
            <a href="#">FAQ's</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact</a>
          </div>
          <div className="">
            <h3 className=" heading">Phone</h3>
            <div>
                <FontAwesomeIcon icon={faPhone} className="mr-2 text-secondaryColor"/>
                +92 331 8701099
            </div>
            <div>
            <h3 className=" heading">Email</h3>
            <div className="flex gap-1">
                <FontAwesomeIcon icon={faVoicemail} className="mr-2 text-secondaryColor"/>
                mahrshabbir768@gmail.com
            </div>
          </div>
          </div>
          <div className="">
            <h3 className=" heading">Address</h3>
            <div>
                <FontAwesomeIcon icon={faLocation} className="mr-2 text-secondaryColor"/>
                Faisalabad
            </div>
            <div>
            <h3 className=" heading">Follow US</h3>
            <div className="flex">
                <a href="#"><FontAwesomeIcon icon={faFacebook} className="mr-2 text-secondaryColor"/></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} className="mr-2 text-secondaryColor"/></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} className="mr-2 text-secondaryColor"/></a>
            </div>
          </div>
          </div>
        </div>
        <div>
            <div>
                fdfdfd
            </div>
            <div>
                fdfdsf
            </div>
        </div>
      </footer>
    </>
  );
}
