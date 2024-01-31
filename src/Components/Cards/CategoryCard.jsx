import React from "react";

export default function CategoryCard({ src1, bgcolor }) {
  return (
    <>
      <div
        className={`flex ${bgcolor} relative overflow-hidden w-72 py-2 rounded-md`}
      >
        <div className="relative -bottom-8 -left-4">
          <img src={src1} alt="error" className="w-16" />
        </div>
        <div>
          <div>
            
            <h1 className="text-xl font-bold">Food</h1>
          </div>
          <div>
            <p>Lorem ipsum dolor sit</p>
          </div>
          <div>
            <a href="#" className=" text-amber-950">Buy Online</a>
          </div>
        </div>
      </div>
    </>
  );
}
