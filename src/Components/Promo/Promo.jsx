import React from "react";
import PromoCard from "./PromoCard";

export default function Promo() {
  return (
    <>
      <div className="container flex justify-center flex-wrap gap-10 flex-row mt-8">
        <div className="">
          <PromoCard />
        </div>
        <div>
          <PromoCard />
        </div>
        <div>
          <PromoCard />
        </div>
      </div>
    </>
  );
}
