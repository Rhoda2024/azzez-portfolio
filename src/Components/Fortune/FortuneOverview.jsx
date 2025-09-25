import React from "react";
import img from "../../assets/fortune-cuisine.png";

const FortuneOverview = () => {
  return (
    <div>
      <div className="max-w-[1600px] m-auto px-[1rem] lg:[2rem] pt-[5rem]">
        {/* ===============overview=============== */}
        <div className="text-center font-Plus font-bold text-[24px] sm:text-[40px] pb-[2rem]">
          <p className="flex gap-[10px] justify-center">
            <p className=" text-[rgba(95,6,124,1)]">Project</p> Overview
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[4rem] lg:gap-0">
          <div className="font-Plus font-medium text-[20px] sm:text-[32px] lg:max-w-[760px]">
            <p className=" text-[rgba(0,0,0,1)] pb-[1rem]">Description</p>
            <p className="text-[rgba(133,133,133,1)]">
              It is a platform that allows users to order special and
              alternative kind of meal designed specially for working class
              audience.
            </p>
          </div>
          <div className="max-w-[450px]">
            <img src={img} alt="" />
          </div>
        </div>
        {/* ==============overview================ */}
        {/* ==========problems========== */}\
        <div className="pt-[5rem] flex flex-col gap-[6rem]">
          {/* ============== */}
          <div>
            <p className=" font-bold font-Plus text-[30px] sm:text-[40px] text-center pb-[1rem] text-[rgba(95,6,124,1)]">
              Problem
            </p>
            <p className=" font-lato text-[20px] sm:text-[32px] font-normal text-[rgba(0,0,0,0.65)] ">
              I observed that most of restaurant in Ibadan and its environment
              sells almost type of the same food, such as jollof rice, fried and
              chicken, pasta etc. I came about the idea of creating a platform
              that sells alternate type of food such as bread......... for
              working class and professionals that want to have their ordered
              and deliver4ed within a short time.
            </p>
          </div>
          {/* ============== */}

          {/* ======================= */}
          <div>
            <div className="font-bold font-Plus text-[30px] sm:text-[40px] text-center pb-[1rem]">
              <p className="flex flex-col sm:flex-row sm:gap-[10px] justify-center ">
                <p className="text-[rgba(95,6,124,1)]">Problem</p> Statement
              </p>
            </div>
            <p className=" font-lato text-[20px] sm:text-[32px] font-normal text-[rgba(0,0,0,0.65)] ">
              Working-class individuals in Ibadan often struggle to find a
              convenient, reliable, and efficient way to order and receive
              diverse food options such as coffee, pap and pudding (moi-moi),
              flour-based dishes, pastries, yam and eggs, fried rice, and more.
              The lack of a dedicated platform tailored to their needs hinders
              their ability to access quick, quality meals during their busy
              schedules. This highlights the need for a seamless solution that
              allows users to select, order, and have their meals delivered
              promptly, catering to their fast-paced lifestyles.
            </p>
          </div>
          {/* ======================= */}

          {/* ======================= */}
          <div>
            <p className=" font-Plus font-bold text-[30px] sm:text-[40px] text-[rgba(95,6,124,1)] text-center pb-[1rem] ">
              Challenges
            </p>
            <div className=" font-lato font-normal text-[20px] sm:text-[32px] flex gap-[1rem]">
              <div>
                <p>1.</p>
              </div>
              <p>
                There is no similar platform around that offers the solution
                digitally
              </p>
            </div>

            <div className=" font-lato font-normal text-[20px] sm:text-[32px] flex gap-[1rem]">
              <div>
                <p>2.</p>
              </div>
              <p>
                How can I create something simple, functional, easy to use for
                busy working class audience
              </p>
            </div>

            <div className=" font-lato font-normal text-[20px] sm:text-[32px] flex gap-[1rem]">
              <div>
                <p>3.</p>
              </div>
              <p>Selection of the right choice of food for users</p>
            </div>
          </div>
          {/* ======================= */}
        </div>
        {/* ==========problems========== */}
      </div>
    </div>
  );
};

export default FortuneOverview;
