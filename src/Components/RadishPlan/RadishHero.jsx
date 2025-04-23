import React from "react";
import img from "../../assets/radish.png";
import logo from "../../assets/radish-logo.png";

const RadishHero = () => {
  return (
    <div className=" w-full m-auto text-white h-[70vh] bg-gradient-to-br from-[#870AAF] to-[#390449] p-[5rem]">
      <div className="flex  items-center justify-between">
        <div className=" flex flex-col gap-[80px] ">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <p className="text-[75px]  font-Plus font-bold">RADISHPLAN</p>
            <p className=" font-lato font-normal text-[32px] ">
              A Fintech Landing Page
            </p>
          </div>
        </div>

        <div>
          <div>
            <img src={img} alt="" className="w-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadishHero;
