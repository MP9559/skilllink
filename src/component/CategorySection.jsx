import React, { useState } from "react";

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
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-row w-full max-w-[1300px] rounded-2xl p-8 bg-[#0D7070] gap-6 justify-between items-center">
        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => setSelectedCategory(cat)}
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

      {selectedCategory && (
        <div className="w-full max-w-[1300px] mt-6 p-4 bg-gray-100 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2 text-[#0D7070]">
            {selectedCategory}
          </h2>
          <p className="text-gray-700">
            <strong>{selectedCategory}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default CategorySection;
