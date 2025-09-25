import React from "react";
import img from "../../assets/easefarm-img1.png";
import logo from "../../assets/easefarm-logo.png";

const EaseFarmHero = () => {
  return (
    <div className="w-full m-auto bg-[rgba(210,185,218,1)]">
      <div className=" max-w-[1600px] m-auto px-[1rem] lg:px-[2rem] py-[2rem] flex flex-col gap-[2rem] lg:flex-row lg:gap-[0px] items-center justify-between">
        <div>
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <p className="font-Plus font-bold text-[30px] sm:text-[60px] xl:text-[80px] text-[rgba(34,2,45,1)]">
              EASE FARM
            </p>
            <p className="font-lato font-normal text-[rgba(34,2,45,1)] text-[20px] sm:text-[28px] xl:text-[40px] ">
              An E-Commerce App
            </p>
          </div>
        </div>
        <div className="">
          <img src={img} alt="" className="max-h-[700px]" />
        </div>
      </div>
    </div>
  );
};

export default EaseFarmHero;
