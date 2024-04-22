import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="block rounded-lg p-4 border shadow-sm ">
      <img alt="" src={item.img} className="h-56  rounded-md " />

      <div className="mt-2">
        <dl>
          <div>
            <dd className="font-medium">{item.title}</dd>
          </div>
          <div>
            <dd className="text-sm text-gray-500">{item.prevPrice}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ProductCard;
