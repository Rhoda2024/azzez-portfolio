import React from "react";
import image from "../../assets/az.png";
import { IoIosArrowForward } from "react-icons/io";
const HeroSection = () => {
  return (
    <div className="max-w-[1550px] m-auto sm:px-[2rem]">
      <div className="bg-[rgba(0,0,0,0.1)] px-[1rem] md:px-[2rem] lg:px-[5rem] py-[3rem]">
        <div className="flex flex-col gap-[2rem] lg:gap-[0] md:flex-row items-center justify-between">
          {/* text */}
          <div>
            <div className="flex flex-col gap-[10px]">
              <p className="font-poppins font-semibold text-[24px] md:text-[36px] ">
                👋 Hello, I am
              </p>
              <p className=" font-Plus font-bold text-[20px] lg:text-[32px] xl:text-[64px] ">
                Abdulazeez Olatunji Abdulrafiu
              </p>
              <p className=" font-normal text-[20px] md:text-[24px] ">
                A UI/UX / Product Designer and Graphic designer
              </p>
            </div>
            <div className="bg-[rgba(95,6,124,1)] text-white w-[220px] md:w-[250px] rounded-[5px] mt-[2rem] p-[1rem]">
              <div className="flex items-center justify-between gap-[11px]">
                <p className="font-poppins font-semibold text-[16px] md:text-[20px] ">
                  View My Resume
                </p>

                <div className="bg-white p-[4px] rounded-[6px]">
                  <IoIosArrowForward className="text-black" />
                </div>
              </div>
            </div>
          </div>
          {/* img */}
          <div>
            <div className="bg-white rounded-[5px]">
              <img
                src={image}
                alt=""
                className=" w-[400px] h-[300px] lg:w-[450px] lg:h-[400px] xl:w-[590px] xl:h-[550px]  object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
