import React from "react";
import img1 from "../../assets/UserPersona-Radish.png";
import img from "../../assets/Research Icon.png";
import img2 from "../../assets/Ideate icon.png";
import img3 from "../../assets/def-icon.png";
import img4 from "../../assets/design-icon.png";
import image from "../../assets/Rectangle-14.png";
import arrow from "../../assets/Arrow 1.png";
import { HiOutlineArrowLongDown } from "react-icons/hi2";

const RadishDesignProcess = () => {
  return (
    <div className="max-w-[1600px] m-auto px-[1rem] lg:px-[2rem] pb-[4rem]">
      <div>
        {/* ==========DESIGN PROCESSS============= */}
        <div className="pb-[7rem]">
          <div>
            <p className="font-bold text-[30px] lg:text-[40px] font-Plus pb-[10px] text-[rgba(34,2,45,1)]">
              Design Process
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-[7px] items-center pt-[3rem]">
            {/* 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-[6px]">
              <div>
                <div className="w-[200px] h-[190px] shadow-xl shadow-[rgba(0,0,0,0.25)] border-[2px] border-[rgba(95,6,124,1)] rounded-[15px] flex flex-col items-center justify-center gap-[10px]">
                  <img src={img} alt="" className="w-[50px] h-[50px]" />
                  <p className="text-[rgba(95,6,124,1)] font-Plus text-[20px] lg:text-[32px] font-bold ">
                    Research
                  </p>
                </div>
              </div>
              <div>
                <div className="text-[rgba(80,5,104,1)]">
                  <img src={arrow} alt="" className="hidden lg:block" />
                  <HiOutlineArrowLongDown size={70} className="lg:hidden" />
                </div>
              </div>
            </div>
            {/* 1 */}

            {/* 2*/}
            <div className="flex flex-col lg:flex-row items-center gap-[6px]">
              <div>
                {" "}
                <div className="w-[200px] h-[190px] shadow-xl shadow-[rgba(0,0,0,0.25)] border-[2px] border-[rgba(95,6,124,1)] rounded-[15px] flex flex-col items-center justify-center gap-[10px]">
                  <img src={img2} alt="" className="w-[50px] h-[50px]" />
                  <p className="text-[rgba(95,6,124,1)] font-Plus text-[20px] lg:text-[32px] font-bold ">
                    Ideate
                  </p>
                </div>
              </div>
              <div>
                <div className="text-[rgba(80,5,104,1)]">
                  <img src={arrow} alt="" className="hidden lg:block" />
                  <HiOutlineArrowLongDown size={70} className="lg:hidden" />
                </div>
              </div>
            </div>
            {/* 2*/}

            {/* 3*/}
            <div className="flex flex-col lg:flex-row items-center gap-[6px]">
              <div>
                <div className="w-[200px] h-[190px] shadow-xl shadow-[rgba(0,0,0,0.25)] border-[2px] border-[rgba(95,6,124,1)] rounded-[15px] flex flex-col items-center justify-center gap-[10px]">
                  <img src={img3} alt="" className="w-[50px] h-[50px]" />
                  <p className="text-[rgba(95,6,124,1)] font-Plus text-[20px] lg:text-[32px] font-bold ">
                    Define
                  </p>
                </div>
              </div>
              <div>
                <div className="text-[rgba(80,5,104,1)]">
                  <img src={arrow} alt="" className="hidden lg:block" />
                  <HiOutlineArrowLongDown size={70} className="lg:hidden" />
                </div>
              </div>
            </div>
            {/* 3*/}

            {/* 4*/}
            <div className="">
              <div>
                <div className="w-[200px] h-[190px] shadow-xl shadow-[rgba(0,0,0,0.25)] border-[2px] border-[rgba(95,6,124,1)] rounded-[15px] flex flex-col items-center justify-center gap-[10px]">
                  <img src={img4} alt="" className="w-[50px] h-[50px]" />
                  <p className="text-[rgba(95,6,124,1)] font-Plus text-[20px] lg:text-[32px] font-bold ">
                    Design
                  </p>
                </div>
              </div>
            </div>
            {/* 4*/}
          </div>
        </div>
        {/* ==========DESIGN PROCESSS============= */}

        {/* =================== User Persona============== */}
        <div>
          <p className="font-Plus text-[30px] sm:text-[35px] lg:text-[40px] font-bold pb-[2rem]">
            User Persona
          </p>
        </div>
        <div>
          <img src={img1} alt="" />
        </div>
        {/* =================== User Persona============== */}
      </div>
    </div>
  );
};

export default RadishDesignProcess;
