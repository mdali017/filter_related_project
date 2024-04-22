import React from "react";
import { data } from "../../../productData";
import ProductCard from "../../../components/ProductCard";

const AllProducts = () => {
  const recommodationFilter = [
    {
      id: 1,
      name: "All Products",
    },
    {
      id: 2,
      name: "Nike",
    },
    {
      id: 3,
      name: "Adidas",
    },
    {
      id: 4,
      name: "Puna",
    },
    {
      id: 5,
      name: "Vans",
    },
  ];
  return (
    <div className="mx-6 my-6 w-full">
      <div>
        <h2>Recommendation</h2>
        <div className="flex justify-between">
          <div className="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">
            {recommodationFilter.map((item, index) => (
              <button
                key={index}
                className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="">
            <div className="relative">
              <input
                type="text"
                id="Search"
                placeholder="Search for..."
                className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm px-2"
              />

              <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
        {data.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
