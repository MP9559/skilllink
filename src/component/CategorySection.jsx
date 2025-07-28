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
    <div className="w-full flex h-16 justify-center">
      <div className="flex flex-row w-full max-w-[1300px] rounded-2xl p-8 bg-[#0D7070] gap-6 justify-between items-center">
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
    </div>
  );
};

export default CategorySection;
