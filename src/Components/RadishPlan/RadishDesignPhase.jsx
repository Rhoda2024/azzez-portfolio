import React from "react";
import img1 from "../../assets/radishdesign1.png";
import img2 from "../../assets/radishdesign2.png";
import img3 from "../../assets/radishdesign3.png";
import { GoDotFill } from "react-icons/go";

const RadishDesignPhase = () => {
  return (
    <div className="max-w-[1500px] m-auto px-[1rem] lg:px-[2rem]">
      {/* ======first deign phase======== */}
      <div>
        <div className=" flex flex-col gap-[4rem]">
          <div>
            <p className="font-Plus font-bold text-[24px] sm:text-[30px] lg:text-[40px] text-[rgba(34,2,45,1)]">
              Design Phase
            </p>
            <p className="font-lato font-normal text-[18px] sm:text-[24px] lg:text-[32px] text-[rgba(34,2,45,1)] py-[8px]">
              Wireframe
            </p>
            <p className="font-Plus font-normal text-[17px] sm:text-[20px] lg:text-[24px] text-[rgba(34,2,45,1)]">
              Low Fidelity Wireframe Of The Design
            </p>
          </div>
          <div className="max-w-[1200px] m-auto">
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* ======first deign phase======== */}

      {/* ======second deign phase======== */}
      <div className="py-[6rem]">
        <div className="flex flex-col gap-[4rem]">
          <div>
            <p className="font-Plus font-bold text-[24px] sm:text-[30px] lg:text-[40px] text-[rgba(34,2,45,1)]">
              Design Phase
            </p>
            <p className="font-lato font-normal text-[18px] sm:text-[24px] lg:text-[32px] text-[rgba(34,2,45,1)]">
              The Final Design Of The Page
            </p>
          </div>
          <div className="max-w-[1200px] m-auto">
            <div>
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* ======second deign phase======== */}

      {/* ============takeaway============== */}
      <div className="pb-[7rem]">
        <div className="pb-[2rem]">
          <p className="font-Plus font-bold text-[24px] sm:text-[30px] lg:text-[40px] text-[rgba(34,2,45,1)]">
            Takeaway
          </p>
        </div>

        <div className="text-[rgba(95,6,124,1)] font-lato font-bold text-[17px] sm:text-[20px] lg:text-[28px] flex flex-col gap-[30px]">
          <div>
            <p>Takeaway</p>
            <p>
              Radishplan successfully bridges the gap between employers' need to
              offer impactful financial benefits and employees' desire for
              simple, effective savings tools. By prioritizing user-centric
              design, seamless integration, and measurable outcomes, Radishplan
              delivers value on multiple fronts:
            </p>
          </div>

          {/* ==============1================== */}
          <div className="flex gap-[10px]">
            <div>
              {" "}
              <p>1.</p>
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <p>For Employers:</p>
              <div className="flex gap-[10px] items-center">
                <GoDotFill />
                <p>
                  Increased employee satisfaction and retention through
                  meaningful financial wellness initiatives.
                </p>
              </div>
              <div className="flex gap-[10px] items-center">
                <GoDotFill />
                <p>
                  Streamlined implementation with minimal administrative
                  overhead.
                </p>
              </div>
            </div>
          </div>
          {/* =============1=========== */}

          {/* =============2============= */}
          <div className="flex gap-[10px]">
            <div>
              {" "}
              <p>2.</p>
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <p>For Employees:</p>
              <div className="flex gap-[10px] items-center">
                <GoDotFill />
                <p>
                  Empowered savings habits with real-time progress tracking.
                </p>
              </div>
              <div className="flex gap-[10px] items-center">
                <GoDotFill />
                <p>
                  Access to high-yield savings accounts that make every dollar
                  work harder.
                </p>
              </div>
            </div>
          </div>
          {/* ===============2========= */}

          {/* ===================3============= */}
          <div className="flex gap-[10px]">
            <div>
              {" "}
              <p>3.</p>
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <p>For the Industry:</p>
              <div className="flex gap-[10px] items-center">
                <GoDotFill />
                <p>
                  A model for workplace savings programs that is intuitive,
                  secure, and results-driven.
                </p>
              </div>
            </div>
          </div>
          {/* ================ 3 ==========*/}
        </div>
      </div>
      {/* ============takeaway============== */}
    </div>
  );
};

export default RadishDesignPhase;
