import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Home() {
  return (
    <>
      <section>
        <div>
          <div>
            <img src="img/about.jpg" alt="hjg" />
          </div>

          <div className=" ">
            <h1>Happy Enjoy</h1>
          </div>
          <div></div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              odio, omnis nihil at minus aspernatur corporis autem est dolores,
              ex, sint dolore enim quas inventore laborum pariatur consectetur.
              Aspernatur, exercitationem.
            </p>
          </div>
          <div>
            <div>
                <div>
                    <FontAwesomeIcon icon={faUtensils} />
                </div>
                <div>Delicuas</div>
            </div>
            <div>
                <div>
                    <FontAwesomeIcon icon={faUtensils} />
                </div>
                <div>Delicuas</div>
            </div>
            <div>
                <div>
                    <FontAwesomeIcon icon={faUtensils} />
                </div>
                <div>Delicuas</div>
            </div>
          </div>
          <div>
            <button>Order</button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
