import React from "react";

export default function PromoCard() {
  return (
    <>
      <div className="  border-8 border-green-900 flex justify-center p-4 flex-col gap-2 mx-auto md:flex-row md:flex-1  bg-orange-300 rounded-md ">
        <div >
          <img src="/src/Components/img/promo-1.png" alt="error" className=" w-36 mx-auto" />
        </div>
        <div className=" ">
          <p>Promo</p>
          <div>Get a 10% Discount On Promo</div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              quos mollitia odio quas enim quis doloremque
            </p>
          </div>
          <div>
            <a href="#" className=" text-amber-950">Buy Online</a>
          </div>
        </div>
      </div>
    </>
  );
}
