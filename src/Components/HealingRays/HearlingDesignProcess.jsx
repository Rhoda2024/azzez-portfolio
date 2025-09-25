import React from "react";
import img from "../../assets/Research Icon.png";
import img2 from "../../assets/Ideate icon.png";
import img3 from "../../assets/def-icon.png";
import img4 from "../../assets/design-icon.png";
import image from "../../assets/Rectangle-14.png";
import img10 from "../../assets/healingrays-image.png";
import arrow from "../../assets/Arrow 1.png";
import { HiOutlineArrowLongDown } from "react-icons/hi2";

const HearlingDesignProcess = () => {
  const points = [
    {
      header: "Paln Points",
      point1: "Limited knowledge about child-specific nutritional needs.",
      point2: "Finds it hard to trust online sources due to misinformation.",
    },

    {
      header: "Motivations",
      point1: "Problem solving",
      point2: "Sustainability",
      point3: "Self-sufficiency",
      point4: "Legacy",
    },

    {
      header: "Needs",
      point1: "Family-friendly nutrition programs.",
      point2: "Simple, practical meal ideas for kids.",
      point3: "Guidance from a trusted source on child health.",
    },

    {
      header: "Goals",
      point1: "Find nutrition plans that cater to his entire family.",
      point2: "Simple, practical meal ideas for kids.",
      point3: "Learn tips for preparing healthy meals for children.",
    },
  ];

  return (
    <div className="max-w-[1600px] m-auto py-[6rem] px-[1rem] lg:px-[2rem]">
      {/* design porcess */}
      <div>
        <div>
          <p className="font-bold text-[24px] sm:text-[40px] font-Plus pb-[10px] text-[rgba(34,2,45,1)]">
            Design Process
          </p>
          <p className="font-Plus font-normal text-[18px] sm:text-[24px] text-[rgba(95,6,124,1)]">
            The website's development followed a structured design process:
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-[7px] items-center pt-[3rem]">
          {/* 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-[6px]">
            <div>
              <div className="w-[200px] h-[200px] border-[2px] border-[rgba(95,6,124,1)] rounded-full flex flex-col items-center justify-center gap-[10px]">
                <img src={img} alt="" className="w-[50px] h-[50px]" />
                <p className="text-[rgba(95,6,124,1)] font-Plus text-[20px] sm:text-[32px] font-bold ">
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
              <div className="w-[200px] h-[200px] border-[2px] border-[rgba(95,6,124,1)] rounded-full flex flex-col items-center justify-center gap-[10px]">
                <img src={img2} alt="" className="w-[50px] h-[50px]" />
                <p className="text-[rgba(95,6,124,1)] font-Plus text-[20px] sm:text-[32px] font-bold ">
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
              <div className="w-[200px] h-[200px] border-[2px] border-[rgba(95,6,124,1)] rounded-full flex flex-col items-center justify-center gap-[10px]">
                <img src={img3} alt="" className="w-[50px] h-[50px]" />
                <p className="text-[rgba(95,6,124,1)] font-Plus text-[20px] sm:text-[32px] font-bold ">
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
              <div className="w-[200px] h-[200px] border-[2px] border-[rgba(95,6,124,1)] rounded-full flex flex-col items-center justify-center gap-[10px]">
                <img src={img4} alt="" className="w-[50px] h-[50px]" />
                <p className="text-[rgba(95,6,124,1)] font-Plus text-[20px] sm:text-[32px] font-bold ">
                  Design
                </p>
              </div>
            </div>
          </div>
          {/* 4*/}
        </div>
      </div>
      {/* design porcess */}

      {/* DESIGN   */}
      <div className="py-[6rem]">
        <div className="flex flex-col lg:flex-row items-center gap-[50px]">
          {/* img */}
          <div>
            <div className="max-w-[630px]">
              <img src={image} alt="" className="" />
            </div>
          </div>
          {/* img */}

          <div>
            <img src={img10} alt="" />
          </div>
        </div>
      </div>
      {/* DESIGN */}
    </div>
  );
};

export default HearlingDesignProcess;
