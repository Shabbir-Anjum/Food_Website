import { faEnvira } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faArrowUpAZ, faDroplet, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

function Home() {
  const [bottom, setbottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 250) {
        setbottom(true);
      } else {
        setbottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  return (
    <>
      <section id="/" className="container text-center">
        
        <div className="  flex justify-center items-center flex-col gap-10  md:flex-row">
          <div className=" mx-auto animate-movingY md:basis-1/2 ">

          <img src="../img/home-image.png" alt="error" className=" text-center md:w-[800px] w-40 "/>
        </div>
<div>
          <div className="title text-center">
            <h1>Happy Enjoy {scrollY}</h1>

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
      <div className={`${bottom? 'bottom-5': '-bottom-1/2'} fixed z-20 right-8 flex  text-black`}> 
      <a href="#"><FontAwesomeIcon icon={faArrowUp} className="w-6 h-6 p-4 bg-secondaryColor rounded-full"/></a>
      </div>
    </>
  );
}
export default Home;
