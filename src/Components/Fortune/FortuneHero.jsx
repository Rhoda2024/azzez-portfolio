import React from "react";
import img from "../../assets/fortunehero.png";
import logo from "../../assets/cuisine.png";

const FortuneHero = () => {
  return (
    <div className=" max-w-[1600px] m-auto p-[1rem] lg:p-[5rem] pt-[4rem] sm:pt-[8rem]">
      <div className="flex flex-col gap-[1.5rem] sm:gap-[0rem] sm:flex-row items-center justify-between">
        <div className=" flex items-center flex-col gap-[40px]  ">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <p className="text-[35px]  lg:text-[55px]  font-Plus font-bold">
              FORTUNE CUISINE
            </p>
            <p className=" font-lato font-normal text-[26px] lg:text-[32px] ">
              Food Delivery App
            </p>
          </div>
        </div>

        <div>
          <div className=" max-w-[290px] sm:max-w-[440px] lg:max-w-[500px]">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FortuneHero;
