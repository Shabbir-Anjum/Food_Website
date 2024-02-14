import { faPaperPlane, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Contact() {
  return (
    <>
      <section className=" bg-secondaryColor">
        <div className="flex flex-col md:flex-row gap-5 md:items-center p-5">
          <div className=" md:flex-1 ">
            <h2 className="  font-Roboto font-bold text-4xl text-black py-4 ">
              Get Exclusive Update
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores id sint quasi cumque sunt nesciunt omnis quia, quod
              maxime ullam corrupti aut exercitationem, dignissimos mollitia
              fugit atque numquam temporibus facilis!
            </p>
          </div>
          <div className=" flex flex-col md:flex-row gap-4 md:flex-1">
            <input
              type="email"
              placeholder="Enter Email"
              className=" md:w-full outline-none p-2  text-black rounded-lg"
            />

            <a
              href="#"
              className=" bg-black text-white rounded-lg p-2 md:w-full flex gap-4 justify-center items-center"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              Subcribe
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
