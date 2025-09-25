import React from "react";
import img1 from "../../assets/easefarm-imgoverview.png";
import img2 from "../../assets/easefarm-imgproblem.png";

const EaseFarmOverview = () => {
  return (
    <div className="max-w-[1600px] m-auto px-[1rem] lg:px-[2rem] py-[5rem]">
      {/* ===========Project overview =========== */}
      <div className="flex flex-col gap-[4rem] lg:flex-row items-center justify-between">
        <div className=" lg:max-w-[650px] flex flex-col gap-[15px]">
          <p className="text-[rgba(34,2,45,1)] font-Plus font-bold text-[30px] sm:text-[40px]">
            Project Overview
          </p>
          <p className=" text-[rgba(0,0,0,1)] text-[20px] sm:text-[32px] font-Plus font-medium ">
            Description
          </p>
          <p className="font-Plus font-medium text-[20px] sm:text-[32px] text-[rgba(133,133,133,1)]">
            It is a platform that allows farmers/farm suppliers to sell their
            farm products, hire equipment and get market information.
          </p>
        </div>
        <div>
          <img src={img1} alt="" className="max-h-[550px]" />
        </div>
      </div>
      {/* ===========Project overview =========== */}

      {/* ============ problem & problem Statement */}
      <div className="flex flex-col items-center py-[5rem]">
        <div className="flex flex-col xl:flex-row justify-between gap-[4rem]">
          <div className="xl:max-w-[750px]">
            <p className="font-Plus font-bold text-[20px] sm:text-[40px] text-[rgba(34,2,45,1)]">
              Problem
            </p>
            <p className="font-lato font-normal text-[18px] sm:text-[32px] text-[rgba(0,0,0,0.65)]">
              I observed that most of restaurant in Ibadan and its environment
              sells almost type of the same food, such as jollof rice, fried and
              chicken, pasta etc. I came about the idea of creating a platform
              that sells alternate type of food such as bread......... for
              working class and professionals that want to have their ordered
              and delivered within a short time.
            </p>
          </div>
          <div className="xl:max-w-[750px]">
            <p className="font-Plus font-bold text-[20px] sm:text-[40px] text-[rgba(34,2,45,1)]">
              Problem Stement
            </p>
            <p className="font-lato font-normal text-[18px] sm:text-[32px] text-[rgba(0,0,0,0.65)]">
              I intended to create a platform that allows working class people
              to select, order and have their food such as coffee...............
              within environment of Ibadan
            </p>
          </div>
        </div>
        <div className="pt-[2rem]">
          <img src={img2} alt="" />
        </div>
      </div>
      {/* ============ problem & problem Statement */}

      {/* ===========Challenges=============== */}
      <div>
        <div className=" flex flex-col gap-[20px] ">
          <p className="font-Plus font-bold text-[rgba(34,2,45,1)] text-[20px] sm:text-[40px]">
            Challenges
          </p>
          <p className="text-[rgba(0,0,0,0.65)] font-Plus font-medium text-[18px] sm:text-[24px]">
            The Challenges before designing
          </p>

          <div className=" font-lato font-normal text-[20px] sm:text-[32px] flex gap-[1rem] text-[rgba(0,0,0,0.65)]">
            <div>
              <p>1.</p>
            </div>
            <p>
              Find a way to create an online platform that helps commercial
              farmers sell their products and hire equipment.
            </p>
          </div>

          <div className=" font-lato font-normal text-[20px] sm:text-[32px] flex gap-[1rem] text-[rgba(0,0,0,0.65)]">
            <div>
              <p>2.</p>
            </div>
            <p>
              A platform that encourages agriculture enthusiast and lover to
              dive into agriculture and to also assist in giving more knowledge
              about agricultural businesses.
            </p>
          </div>

          <div className=" font-lato font-normal text-[20px] sm:text-[32px] flex gap-[1rem] text-[rgba(0,0,0,0.65)]">
            <div>
              <p>3.</p>
            </div>
            <p>
              An online platform that helps commercial farmers sell their crops
              or livestock.
            </p>
          </div>

          <div className=" font-lato font-normal text-[20px] sm:text-[32px] flex gap-[1rem] text-[rgba(0,0,0,0.65)]">
            <div>
              <p>4.</p>
            </div>
            <p>
              A platform for individuals that are interested to buy agricultural
              product and services can buy and farmers can as well get market
              information.
            </p>
          </div>
        </div>
      </div>
      {/* ===========Challenges=============== */}
    </div>
  );
};

export default EaseFarmOverview;
