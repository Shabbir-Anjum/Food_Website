import React from "react";
import PromoCard from "./PromoCard";

export default function Promo() {
  return (
    <>
      <div className="container flex mt-8  gap-4 flex-wrap justify-center w-full">
        <div >
          <PromoCard promoimage={"../img/promo-1.png"}/>
        </div>
        <div>
          <PromoCard promoimage={"../img/promo-2.png"} />
        </div>
      </div>
    </>
  );
}
