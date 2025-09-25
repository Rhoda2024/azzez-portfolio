import React from "react";
import img1 from "../../assets/process1.png";
import img2 from "../../assets/process2.png";
import img3 from "../../assets/process3.png";
import img4 from "../../assets/process4.png";
import { RiArrowDownFill, RiArrowRightFill } from "react-icons/ri";

const FortuneDesignProcess = () => {
  return (
    <div className="max-w-[1600px] m-auto px-[1rem] lg:[2rem] pt-[7rem]">
      {/* -=========design process=========== */}
      <div className="">
        <div className="text-center font-Plus font-bold text-[24px] sm:text-[40px] pb-[1rem]">
          <p className="flex gap-[10px] justify-center">
            <p className=" text-[rgba(95,6,124,1)]">Design</p>Process
          </p>
        </div>

        <div>
          <p className="font-Plus font-normal text-[18px] sm:text-[24px]">
            To make the design more effective and user friendly. I completed all
            five faces of the design process. The design process was completed
            by investigating the problem and generatting thoughts for solution.{" "}
          </p>
        </div>

        {/* ==-=======process======== */}
        <div className="flex flex-col md:flex-row items-center pt-[4rem]">
          <div className="flex flex-col md:flex-row items-center">
            <div>
              <img src={img1} alt="" />
            </div>
            <div className="text-[rgba(95,6,124,1)]">
              <RiArrowRightFill size={40} className="hidden md:block" />
              <RiArrowDownFill size={40} className="block md:hidden" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div>
              <img src={img2} alt="" />
            </div>
            <div className="text-[rgba(95,6,124,1)]">
              <RiArrowRightFill size={40} className="hidden md:block" />
              <RiArrowDownFill size={40} className="block md:hidden" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div>
              <img src={img3} alt="" />
            </div>
            <div className="text-[rgba(95,6,124,1)]">
              <RiArrowRightFill size={40} className="hidden md:block" />
              <RiArrowDownFill size={40} className="block md:hidden" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div>
              <img src={img4} alt="" />
            </div>
          </div>
        </div>
        {/* ===========process=========== */}
      </div>
      {/* -=========design process=========== */}

      {/* ===========discover phase============= */}
      <div>
        <div className="text-center font-Plus font-bold text-[24px] sm:text-[40px] pb-[1rem] pt-[5rem]">
          <p className="flex gap-[10px] justify-center">
            <p className=" text-[rgba(95,6,124,1)]">Discover</p>Phase
          </p>
        </div>
        <div>
          <div className="text-[rgba(101,101,101,1)] text-[18px] sm:text-[24px] font-Plus flex flex-col gap-[30px]">
            <p className="font-normal ">
              To practice design thinking I followed the process below.
            </p>
            <p className="font-bold">Quantitative Research</p>
            <p className="font-normal">
              I conducted interviews and sent out digital surveys to gain
              insights on form creation and responses.
            </p>
            <div className="text-[rgba(0,0,0,1)] font-normal">
              <p>https://docs. google.com/forms/d/</p>
              <p className="">
                e/1FAIpQLScHNlelS L4qHFB8vo51aT_ QUqb4TlhNNhHd4 YG4kgQbRFLOhA
                /viewform?usp=sf_link
              </p>
            </div>
            <p className="font-bold">Research Summary</p>
            <p className="font-normal">
              The survey showed that 92.3% get their food in homemade, while
              7.7% get theirs from the restaurants, 84.6% says they prefer rice,
              bread and tea, yam & egg, pap and pudding (moi-moi), while 15.4%
              prefers coffee, flour, fried egg and plantain.
            </p>
            <p className="font-normal">
              61.5% says they would like their food to be delivered within 20-30
              minutes, while 23.1% prefers it to be delivered within 25-30
              minutes, and 15.5% wants their food to be delivered in 35-40
              minutes.
            </p>
            <p className="font-normal">
              84.6% agrees that they will like a platform that allows users to
              create a communal group for specialized food lovers, while 7.7%
              says maybe.{" "}
            </p>
            <p className="font-normal">
              50% says they do not have any allergies or dietary restrictions,
              while 25% says they have, and 12.5% says they have allergies to
              wheat and fufu.y
            </p>
          </div>
        </div>
      </div>
      {/* ===========discover phase============= */}

      {/* ===========Design phase============= */}
      <div>
        <div className="text-center font-Plus font-bold text-[24px] sm:text-[40px] pb-[1rem] pt-[5rem]">
          <p className="flex gap-[10px] justify-center">
            <p className=" text-[rgba(95,6,124,1)]">Design</p>Phase
          </p>
        </div>
        <p className="font-Plus font-normal text-[18px] sm:text-[24px] text-[rgba(101,101,101,1)]">
          Created personas, empathy maps, and customer journey map to understand
          more about the user's problems. See the process deck for empathy maps
          and customer journeys.
        </p>
      </div>
      {/* ===========Design phase============= */}
    </div>
  );
};

export default FortuneDesignProcess;
