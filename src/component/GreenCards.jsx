import React from 'react'
import { RiArrowDropRightLine } from "react-icons/ri";

const GreenCards = () => {
  const username = localStorage.getItem("username") || "Guest";
  return (
    <div className='mt-16 px-16'>
      <p className="text-3xl font-medium text-gray-700 mx-10 font-poppins mb-10">
        Hey {username},
      </p>

       {/* Green Cards */}
      <div className="flex flex-row gap-x-12 mx-18 mb-16">
        <div className="bg-gradient-to-l from-[#2DBB60] to-[#179090] font-poppins h-24 w-full rounded-lg shadow-md px-6 text-white flex items-center justify-between group cursor-pointer">
          <div className="flex flex-col justify-center">
            <h1 className="leading-tight mb-1">
              Get a perfect gig Suggestion for a Service you need
            </h1>
            <p className="text-sm text-gray-200">Tell us what Service you need</p>
          </div>
          <RiArrowDropRightLine className="w-10 h-10 text-white transition-transform duration-300 group-hover:translate-x-2" />
        </div>

        <div className="bg-gradient-to-l from-[#2DBB60] to-[#179090] font-poppins h-24 w-full rounded-lg shadow-md px-6 text-white flex items-center justify-between group cursor-pointer">
          <div className="flex flex-col justify-center">
            <h1 className="leading-tight mb-1">
              Find trusted freelancers for your next task
            </h1>
            <p className="text-sm text-gray-200">We’ll match you with the right expert</p>
          </div>
          <RiArrowDropRightLine className="w-10 h-10 text-white transition-transform duration-300 group-hover:translate-x-2" />
        </div>
      </div>
    </div>
  )
}

export default GreenCards