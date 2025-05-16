import React from "react";
import img from "../../assets/radish.png";
import logo from "../../assets/radish-logo.png";

const RadishHero = () => {
  return (
    <div className=" w-full m-auto text-white h-[70vh] bg-gradient-to-br from-[#870AAF] to-[#390449] p-[1rem] lg:p-[5rem] pt-[6rem] sm:pt-[8rem]">
      <div className="flex flex-col gap-[1.5rem] sm:gap-[0rem] sm:flex-row items-center justify-between">
        <div className=" flex flex-col gap-[40px] lg:gap-[80px] ">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <p className="text-[35px] sm:text-[50px] lg:text-[75px]  font-Plus font-bold">
              RADISHPLAN
            </p>
            <p className=" font-lato font-normal text-[26px] lg:text-[32px] ">
              A Fintech Landing Page
            </p>
          </div>
        </div>

        <div>
          <div className=" max-w-[200px] sm:max-w-[300px] lg:max-w-[400px]">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadishHero;
