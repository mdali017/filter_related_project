import React from "react";
import FilterSection from "./FilterSection/FilterSection";
import AllProducts from "./AllProducts/AllProducts";

const Products = () => {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="w-[200px]">
          <FilterSection />
        </div>
        <div className="flex flex-grow mt-6 border">
          <AllProducts />
        </div>
      </div>
    </div>
  );
};

export default Products;
