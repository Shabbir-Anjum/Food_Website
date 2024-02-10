import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Review() {
  return (
    <div className="container mt-10 bg-primaryColorLight p-12 rounded-md">
      <div className="flex flex-col mx-auto items-center">
        <div>
          <h4 className="title">Customer Review</h4>
        </div>
        
        <div className="seperator mx-auto"></div>
        <div>
          <p>

            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            suscipit veritatis totam cum ad iure?
          </p>

        </div>
      </div>
      <div className="p-4 gap-2 rounded-md mt-4 bg-primaryColor">
      <div className="py-6">

        <p>
          
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos illo
          repellat rerum molestiae ipsa nulla! Itaque vero ut officia esse
          commodi modi inventore!

        </p>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <div>
          <img
            src="/src/Components/img/review-1.jpg"

            alt="error"

            className="w-12 h-12 rounded-full"
          />
        </div>
        <div>
          <p className=" text-xl font-Roboto">Shabbir Anjum</p>
          <p>Web Developer</p>
        </div>
        <div className="ml-auto text-3xl text-secondaryColor">
          <FontAwesomeIcon icon={faQuoteRight} />
        </div>
      </div>
      </div>
    </div>
  );
}
