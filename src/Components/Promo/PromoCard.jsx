import React from "react";

export default function PromoCard({promoimage}) {
  return (
    <>
      <div className=" gap-4 flex justify-center w-72 md:w-[600px] lg:w-[440px] items-center p-4 flex-col mx-auto md:flex-row-reverse lg:flex-row bg-primaryColorLight rounded-2xl ">
        <div >
          <img src={promoimage} alt="error" className=" w-36 mx-auto" />
        </div>
        <div >
          <p className=" text-blackColor text-xl uppercase font-bold">Promo</p>
          <div className="card_title ">Get a 10% Discount On Promo</div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </p>
          </div>
          <div>
            <a href="#" className=" text-red-200 uppercase">Buy Online</a>
          </div>
        </div>
      </div>
    </>
  );
}
