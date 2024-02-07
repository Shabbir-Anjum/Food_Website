import React from "react";
import CategoryCard from "./Cards/CategoryCard";

export default function Category() {
  return (
    <>
      <div className="container flex  flex-grow gap-4 flex-wrap justify-center w-full">
        <div>
          <CategoryCard
            src1={"/src/Components/img/snack-3.png"}
            bgcolor={"bg-secondaryColor"}
          />
        </div>
        <div>
          <CategoryCard
            src1={"/src/Components/img/snack-2.png"}
            bgcolor={"bg-redColor"}
          />
        </div>
        <div>
          <CategoryCard
            src1={"/src/Components/img/snack-1.png"}
            bgcolor={"bg-greenColor"}
          />
        </div>
      </div>
    </>
  );
}
