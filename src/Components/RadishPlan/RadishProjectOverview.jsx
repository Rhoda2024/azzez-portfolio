import React from "react";
import img1 from "../../assets/radish-overview.png";

const RadishProjectOverview = () => {
  return (
    <div className="">
      <div className="m-auto max-w-[1500px] px-[1rem] lg:px-[2rem]">
        {" "}
        {/* ====project overview=== */}
        <div className="flex flex-col sm:flex-row gap-[3rem] items-center justify-between pt-[6rem] pb-[5rem]">
          <div className="max-w-[300px] lg:max-w-[550px]">
            <img src={img1} alt="" />
          </div>

          <div className=" max-w-[650px] flex flex-col gap-[20px]">
            <p className=" font-Plus text-[24px] sm:text-[30px] lg:text-[40px] font-bold text-[rgba(0,0,0,1)] ">
              Project Overview
            </p>
            <p className=" font-Plus text-[20px] lg:text-[32px] font-medium text-[rgba(0,0,0,1)]">
              Description
            </p>
            <p className="text-[rgba(133,133,133,1)] font-Plus text-[20px] lg:text-[32px] font-medium ">
              A platform that allows users to save, invest their money and track
              their expenses automatically with a single click.
            </p>
          </div>
        </div>
        {/* ====project overview===== */}
      </div>

      {/* ==========problem========= */}
      <div className="bg-[rgba(210,185,218,1)] w-full px-[1rem] py-[7rem] ">
        <div className=" max-w-[1400px] m-auto flex flex-col gap-[37px]">
          <div className="flex flex-col gap-[15px] lg:gap-[30px]">
            <p className=" font-Plus font-bold text-[20px] sm:text-[25px] lg:text-[36px] text-[rgba(34,2,45,1)] ">
              Problem
            </p>
            <p className=" font-lato font-normal text-[rgba(0,0,0,1)] text-[18px] sm:text-[20px] lg:text-[30px] ">
              Employees often struggle to save consistently due to financial
              stress, a lack of accessible tools, and limited incentives
              provided by their employers. At the same time, employers face
              challenges in offering meaningful financial wellness benefits
              without adding administrative burden or excessive costs.
            </p>
          </div>
          <div className="flex flex-col gap-[15px] lg:gap-[30px]">
            <p className=" font-Plus font-bold text-[20px] sm:text-[25px] lg:text-[36px] text-[rgba(34,2,45,1)] ">
              Problem Statement
            </p>
            <p className=" font-lato font-normal text-[rgba(0,0,0,1)] text-[18px] sm:text-[20px] lg:text-[30px] ">
              Financial stress among employees is a growing issue, directly
              impacting productivity, job satisfaction, and retention.
              Traditional workplace benefits often fail to address the core need
              for financial wellness, leaving employees disengaged and employers
              frustrated with subpar solutions.
            </p>
          </div>
        </div>
      </div>
      {/* ==========problem========= */}

      {/* ===============challenges================== */}
      <div className="max-w-[1500px] m-auto px-[1rem] lg:px-[2rem]">
        <div className=" flex flex-col gap-[20px] lg:gap-[32px] py-[8rem]">
          <p className=" text-[24px] sm:text-[30px] lg:text-[40px] font-Plus font-bold text-[rgba(0,0,0,1)]">
            Challenges
          </p>
          <p className="text-[rgba(0,0,0,1)] font-Plus font-medium text-[18px] sm:text-[20px] lg:text-[24px]">
            The Challenges before designing
          </p>
          <div className="text-[18px] flex flex-col gap-[20px] sm:text-[24px] lg:text-[32px] font-lato font-normal">
            {/*  */}
            <div className="flex gap-[10px]">
              <p>1.</p>
              <p>
                To create a platform that encourages employees to participate in
                savings plans and remain consistent over time.
              </p>
            </div>
            {/*  */}
            <div className="flex gap-[10px]">
              <p> 2.</p>
              <p>
                A platform that minimizes the setup complexity for HR and
                payroll teams.
              </p>
            </div>
            {/*  */}
            <div className="flex gap-[10px]">
              <p>3.</p>
              <p>
                An online platform that helps and accommodates both financial
                novices and experts
              </p>
            </div>
            <div className="flex gap-[10px]">
              <p>4. </p>
              <p>
                A platform for individuals that are interested to buy
                agricultural product and services can buy and farmers can as
                well get market information.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ===============challenges================== */}
    </div>
  );
};

export default RadishProjectOverview;
