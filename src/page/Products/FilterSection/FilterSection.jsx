// import React from "react";

// const FilterSection = () => {
//   const category = [
//     {
//       id: 1,
//       name: "All",
//     },
//     {
//       id: 2,
//       name: "Sneakers",
//     },
//     {
//       id: 3,
//       name: "Flats",
//     },
//     {
//       id: 4,
//       name: "Sandle",
//     },
//     {
//       id: 5,
//       name: "Heels",
//     },
//   ];
//   const price = [
//     {
//       id: 1,
//       range: "All",
//     },
//     {
//       id: 2,
//       range: "0-50",
//     },
//     {
//       id: 3,
//       range: "50-100",
//     },
//     {
//       id: 2,
//       range: "100-150",
//     },
//     {
//       id: 2,
//       range: "Over 150",
//     },
//   ];
//   const color = [
//     {
//       id: 1,
//       color_name: "All",
//     },
//     {
//       id: 2,
//       color_name: "Black",
//     },
//     {
//       id: 3,
//       color_name: "Blue",
//     },
//     {
//       id: 4,
//       color_name: "Red",
//     },
//     {
//       id: 1,
//       color_name: "Green",
//     },
//     {
//       id: 1,
//       color_name: "White",
//     },
//   ];
//   return (
//     <div className="group container mx-auto">
//       <div className="z-50  ">
//         <div className=" rounded  border-gray-200 bg-white">
//           <h1>Category</h1>
//           <ul className="space-y-1 border-t border-gray-200 p-4">
//             {category.map((item, index) => (
//               <li key={index}>
//                 <label className="inline-flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     id="FilterInStock"
//                     className="size-5 rounded border-gray-300"
//                   />
//                   <span className="text-sm font-medium text-gray-700">
//                     {item.name}
//                   </span>
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className=" rounded  border-gray-200 bg-white">
//           <h1>Price</h1>
//           <ul className="space-y-1 border-t border-gray-200 p-4">
//             {price.map((item, index) => (
//               <li key={index}>
//                 <label className="inline-flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     id="FilterInStock"
//                     className="size-5 rounded border-gray-300"
//                   />
//                   <span className="text-sm font-medium text-gray-700">
//                     {item.range}
//                   </span>
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className=" rounded  border-gray-200 bg-white">
//           <h1>Colors</h1>
//           <ul className="space-y-1 border-t border-gray-200 p-4">
//             {color.map((item, index) => (
//               <li key={index}>
//                 <label className="inline-flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     id="FilterInStock"
//                     className="size-5 rounded border-gray-300"
//                   />
//                   <span className="text-sm font-medium text-gray-700">
//                     {item.color_name}
//                   </span>
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterSection;

// another solution
import React, { useState } from "react";

const FilterSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleCategoryChange = (id) => {
    setSelectedCategory(id);
  };

  const handlePriceChange = (id) => {
    setSelectedPrice(id);
  };

  const handleColorChange = (id) => {
    setSelectedColor(id);
  };

  const category = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Sneakers",
    },
    {
      id: 3,
      name: "Flats",
    },
    {
      id: 4,
      name: "Sandle",
    },
    {
      id: 5,
      name: "Heels",
    },
  ];
  const price = [
    {
      id: 1,
      range: "All",
    },
    {
      id: 2,
      range: "0-50",
    },
    {
      id: 3,
      range: "50-100",
    },
    {
      id: 4,
      range: "100-150",
    },
    {
      id: 5,
      range: "Over 150",
    },
  ];
  const color = [
    {
      id: 1,
      color_name: "All",
    },
    {
      id: 2,
      color_name: "Black",
    },
    {
      id: 3,
      color_name: "Blue",
    },
    {
      id: 4,
      color_name: "Red",
    },
    {
      id: 5,
      color_name: "Green",
    },
    {
      id: 6,
      color_name: "White",
    },
  ];

  return (
    <div className="group container mx-auto">
      <div className="z-50  ">
        <div className=" rounded  border-gray-200 bg-white">
          <h1>Category</h1>
          <ul className="space-y-1 border-t border-gray-200 p-4">
            {category.map((item, index) => (
              <li key={index}>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="category"
                    id={`category-${item.id}`}
                    className="size-5 rounded border-gray-300"
                    checked={selectedCategory === item.id}
                    onChange={() => handleCategoryChange(item.id)}
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {item.name}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className=" rounded  border-gray-200 bg-white">
          <h1>Price</h1>
          <ul className="space-y-1 border-t border-gray-200 p-4">
            {price.map((item, index) => (
              <li key={index}>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="price"
                    id={`price-${item.id}`}
                    className="size-5 rounded border-gray-300"
                    checked={selectedPrice === item.id}
                    onChange={() => handlePriceChange(item.id)}
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {item.range}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className=" rounded  border-gray-200 bg-white">
          <h1>Colors</h1>
          <ul className="space-y-1 border-t border-gray-200 p-4">
            {color.map((item, index) => (
              <li key={index}>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="color"
                    id={`color-${item.id}`}
                    className="size-5 rounded border-gray-300"
                    checked={selectedColor === item.id}
                    onChange={() => handleColorChange(item.id)}
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {item.color_name}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
