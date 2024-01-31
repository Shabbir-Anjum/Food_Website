import { faEnvira } from "@fortawesome/free-brands-svg-icons";
import { faDroplet, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Home() {
  return (
    <>
      <section className="container text-center">
        <div className="  flex justify-center items-center flex-col gap-10  md:flex-row">
          <div className=" mx-auto animate-movingY md:basis-1/2 ">
          <img src="/src/Components/img/home-image.png" alt="error" className=" text-center md:w-[800px] w-40 "/>
        </div>
<div>
          <div className="title text-center">
            <h1>Happy Enjoy</h1>
          </div>
          <div className=" seperator my-3 m-auto"></div>
          <div>
            <p className=" text-whiteColor font-light text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              odio, omnis nihil at minus aspernatur corporis autem est dolores,
              ex, sint dolore enim quas inventore laborum pariatur consectetur.
              Aspernatur, exercitationem.
            </p>
          </div>
          <div className="flex justify-center items-center my-4 gap-4">
            <div >
                <div className=" text-secondaryColor text-3xl">
                    <FontAwesomeIcon icon={faUtensils} />
                </div>
                <div>Delicious</div>
            </div>
            <div>
                <div className=" text-secondaryColor text-3xl">
                    <FontAwesomeIcon icon={faDroplet} />
                </div>
                <div>Fresh</div>
            </div>
            <div>
                <div className=" text-secondaryColor text-3xl">
                    <FontAwesomeIcon icon={faEnvira} />
                </div>
                <div>Organic</div>
            </div>
          </div>
          <div className="btn btn-2">
            <a href="#">Learn More</a>
          </div>
          </div>
        </div>
    
      </section>
    </>
  );
}
export default Home;
