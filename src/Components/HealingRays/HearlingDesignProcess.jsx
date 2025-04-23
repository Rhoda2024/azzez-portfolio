import React from "react";
import img from "../../assets/Research Icon.png";
import img2 from "../../assets/Ideate icon.png";
import img3 from "../../assets/def-icon.png";
import img4 from "../../assets/design-icon.png";
import image from "../../assets/Rectangle-14.png";
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
    <div className="max-w-[1500px] m-auto py-[6rem] px-[1rem] lg:px-[2rem]">
      {/* design porcess */}
      <div>
        <div>
          <p className="font-bold text-[24px] lg:text-[40px] font-Plus pb-[10px] text-[rgba(34,2,45,1)]">
            Design Process
          </p>
          <p className="font-Plus font-normal text-[18px] lg:text-[24px] text-[rgba(95,6,124,1)]">
            The website's development followed a structured design process:
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-[7px] items-center pt-[3rem]">
          {/* 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-[6px]">
            <div>
              <div className="w-[200px] h-[200px] border-[2px] border-[rgba(95,6,124,1)] rounded-full flex flex-col items-center justify-center gap-[10px]">
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
              <div className="w-[200px] h-[200px] border-[2px] border-[rgba(95,6,124,1)] rounded-full flex flex-col items-center justify-center gap-[10px]">
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
              <div className="w-[200px] h-[200px] border-[2px] border-[rgba(95,6,124,1)] rounded-full flex flex-col items-center justify-center gap-[10px]">
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
              <div className="w-[200px] h-[200px] border-[2px] border-[rgba(95,6,124,1)] rounded-full flex flex-col items-center justify-center gap-[10px]">
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

          <div className="flex flex-col gap-[30px] items-center">
            {/* texts1 */}
            <div className="bg-[rgba(217,217,217,1)] max-w-[815px] md:w-[815px] rouded-[8px] px-[25px] py-[24px]">
              <div className="flex flex-col  ">
                {/* header text */}
                <div className=" border-b border-[rgba(255,255,255,1)] ">
                  <p className="text-[rgba(34,2,45,1)] font-Plus font-bold text-[20px] sm:text-[32px] ">
                    Mr. Ayodele Timothy
                  </p>
                </div>
                {/* header text */}

                {/* sub heads */}
                <div className="flex ">
                  <div className=" font-Plus font-normal text-[17px] sm:text-[24px] text-[rgba(34,2,45,1)] ">
                    <p>C.E.O / Founder</p>
                    <p>SHEDA HOUSE | FIRESWITCH | RENI</p>
                  </div>
                </div>
                {/* sub heads */}
              </div>
            </div>
            {/* texts1 */}

            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[25px]">
              {points.map((point, index) => (
                <div key={index}>
                  <div className="bg-[rgba(217,217,217,1)] max-w-[400px] lg:w-[400px] md:h-[320px] px-[32px] py-[24px] rounded-[8px] ">
                    <div className=" flex flex-col justify-center ">
                      <div className="pb-[14px]">
                        <p className=" w-fit text-[20px] sm:text-[32px] font-Plus font-bold border-b border-[rgba(255,255,255,1)]">
                          {point.header}
                        </p>
                      </div>
                      <p className=" text-[17px] sm:text-[24px] font-Plus font-normal text-[rgba(95,6,124,1)]">
                        {point.point1}
                      </p>
                      <p className="text-[17px] sm:text-[24px] font-Plus font-normal text-[rgba(95,6,124,1)] ">
                        {point.point2}
                      </p>
                      <p className="text-[17px] sm:text-[24px] font-Plus font-normal text-[rgba(95,6,124,1)]">
                        {point.point3}
                      </p>
                      <p className="text-[17px] sm:text-[24px] font-Plus font-normal text-[rgba(95,6,124,1)]">
                        {point.point4}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* DESIGN */}
    </div>
  );
};

export default HearlingDesignProcess;
