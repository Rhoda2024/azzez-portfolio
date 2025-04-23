import React from "react";
import img1 from "../../assets/img.png";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const RadishDesignProcess = () => {
  return (
    <div className="max-w-[1500px] m-auto px-[2rem] py-[8rem]">
      <div>
        {/* ==========DESIGN PROCESSS============= */}
        {/* ==========DESIGN PROCESSS============= */}

        {/* =================== User Persona============== */}
        <div>
          <p className="font-Plus text-[40px] font-bold pb-[5rem]">
            User Persona
          </p>
        </div>
        <div className="flex">
          <div>
            <img src={img1} alt="" />
          </div>
          {/* ================= */}
          <div className="bg-[rgba(210,185,218,0.5)] w-[850px] px-[3rem] flex flex-col justify-center gap-[3rem]">
            <div>
              <FaQuoteLeft size={35} />
              <p className="font-Plus font-bold text-[32px] text-[rgba(27,27,27,1)]">
                Focus on designing intuitive, user-centered experiences that
                engage and inspire
              </p>
              <FaQuoteRight size={35} className=" " />
            </div>

            <div>
              <p className="font-Plus font-bold text-[32px] text-[rgba(27,27,27,1)]">
                About
              </p>
              <p className="font-Plus font-bold text-[24px] text-[rgba(27,27,27,1)]">
                A passionate and dedicated product designer who values
                continuous learning.
              </p>
            </div>

            <div className="flex">
              <div className="text-[rgba(27,27,27,1)] flex flex-col gap-[20px]">
                <p className="font-lato text-[24px] font-bold">Goals </p>
                <p className="font-Plus font-normal text-[24px]">
                  • Monitor financial progress without complicated tools.
                </p>
                <p className="font-poppins font-medium text-[20px]">
                  • Save consistently for future needs.
                </p>
                <p className="font-Plus font-normal text-[24px]">
                  • Offer meaningful benefits to attract and retain top talent.
                </p>
              </div>

              <div className="text-[rgba(27,27,27,1)] flex flex-col gap-[20px]">
                <p className="font-lato text-[24px] font-bold">Frustrations</p>
                <p className="font-Plus font-normal text-[24px]">
                  • Overwhelmed by financial planning.{" "}
                </p>
                <p className="font-Plus font-normal text-[24px]">
                  • Needs a simple, motivating interface to save money.
                </p>
                <p className="font-Plus font-normal text-[24px]">
                  • Existing savings options are too complex and time-consuming.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* =================== User Persona============== */}
      </div>
    </div>
  );
};

export default RadishDesignProcess;
