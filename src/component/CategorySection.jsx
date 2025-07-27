import React from "react";

const categories = [
  "Graphics & Design",
  "Digital Marketing",
  "Writing & Translation",
  "Video & Animation",
  "Music & Audio",
  "Programming & Tech",
  "Photography",
  "Business",
];

const CategorySection = () => {
  return (
    <div className="flex flex-row w-345 rounded-2xl m-8 ml-14 p-8 px-18 bg-[#0D7070] gap-6 justify-between items-center">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="rounded-lg text-center cursor-pointer relative group"
        >
          <p className="text-white font-poppins text-sm font-sm">{cat}</p>

          <span
            className="absolute left-0 bottom-0 h-0.5 bg-white
                       w-0 group-hover:w-full
                       transition-all duration-300 ease-in-out"
          />
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
