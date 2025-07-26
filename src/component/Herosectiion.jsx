import React from "react";
import assets from "../assets/assets.js";
import Header from "./Header.jsx";

const Herosectiion = () => {
  return (
    <div className="lg:h-[1128px] w-full bg-[#004949] relative">
      <div className="lg:absolute lg:top-50 lg:left-40">
        <p className="lg:text-[96px] poppins font-bold text-white">SkillLink</p>

        <p className="poppins lg:text-[46px] text-white font-medium -mt-3">
          FREELANCING MADE EASY !
        </p>

        <p className="poppins lg:text-[32px] text-[#D5D5D5] font-medium mt-2">
          Hire an Expert or Be an Expert .
        </p>

        <p className="poppins lg:text-[16px] text-[#D5D5D5] lg:w-[560px] mt-6">
          In the ever-evolving landscape of skills and knowledge, the choice
          between hiring an expert or becoming one yourself is a pivotal
          decision.
        </p>

        {/* search box */}
        <div className="relative">
          <input
            type="search"
            placeholder='Search to "Find Freelancers, Jobs, or Services"'
            className="lg:w-[590px] lg:h-[75px] rounded-3xl bg-[#D9D9D9] pl-4 mt-9 poppins text-[20px] placeholder-gray-500"
          />
          <img
            src={assets.Group3}
            alt=""
            className="absolute lg:top-7 lg:left-[130px]"
          />
        </div>

        <p className="poppins text-white text-[18px] font-medium mt-12">
          TRENDING SERVICES
        </p>

        {/* little div */}
        <p className="flex gap-3 -mt-2">
          <span className="flex lg:w-[184px] lg:h-[56px] rounded-4xl bg-[#0F5656] justify-around items-center mt-7 text-white poppins">
            DESIGNER
            <img
              src={assets.Vector}
              alt=""
              className="lg:w-[30px] lg:h-[30px]"
            />
          </span>

          <span className="flex lg:w-[184px] lg:h-[56px] rounded-4xl bg-[#0F5656] justify-around items-center mt-7 text-white poppins">
            DEVELOPER
            <img
              src={assets.Vector}
              alt=""
              className="lg:w-[30px] lg:h-[30px]"
            />
          </span>

          <span className="flex lg:w-[184px] lg:h-[56px] rounded-4xl bg-[#0F5656] justify-around items-center mt-7 text-white poppins">
            WORDPRESS
            <img
              src={assets.Vector}
              alt=""
              className="lg:w-[30px] lg:h-[30px]"
            />
          </span>
        </p>

        {/* right pictures */}
        <img
          src={assets.Group5}
          alt=""
          className="lg:absolute lg:top-76 lg:left-170 lg:w-[327px] lg:h-[335px]"
        />
        <img
          src={assets.lines}
          alt=""
          className="lg:absolute lg:top-5 lg:left-220"
        />
        <img
          src={assets.image10}
          alt=""
          className="lg:absolute lg:-top-9 lg:left-190 lg:w-72 lg:h-77"
        />
        <img
          src={assets.image9}
          alt=""
          className="lg:absolute lg:top-63 lg:left-260"
        />
        <img
          src={assets.image11}
          alt=""
          className="lg:absolute lg:top-2 lg:left-[295px]"
        />
      </div>
    </div>
  );
};

export default Herosectiion;
