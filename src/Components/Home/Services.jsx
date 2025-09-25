import React from "react";
import img1 from "../../assets/uiux.png";
import img2 from "../../assets/research.png";
import img3 from "../../assets/product.png";
import img4 from "../../assets/graphics.png";

const Services = () => {
  const services = [
    {
      img: img1,
      header: "UI/UX",
      subhead: "Design",
      text: "Designing intuitive, user-centered experiences that engage and inspire.",
    },
    {
      img: img2,
      header: "USER",
      subhead: "REASEARCH",
      text: "Designing seamless, engaging experiences tailored for real users.",
    },
    {
      img: img3,
      header: "Product",
      subhead: "Development",
      text: "Turning ideas into impactful, user-centered products.",
    },
    {
      img: img4,
      header: "GRAPHIC",
      subhead: "DESIGNING",
      text: "Crafting impactful visuals that communicate and inspire.",
    },
  ];

  return (
    <div className=" max-w-[1600px] m-auto  py-[7rem] px-[2rem]" id="services">
      <div className="flex flex-col items-center justify-center">
        <div>
          <p className="font-Plus text-[30px] sm:text-[40px] font-bold pb-[2rem] ">
            My Services
          </p>
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 items-center gap-[20px]">
          {services.map((service, index) => (
            <div key={index}>
              <div className="flex flex-col gap-[18px] justify-center  bg-[rgba(210,185,218,0.15)] items-center text-center max-w-[385px] h-[450px] rounded-[15px] px-[24px] py-[12px] shadow-2xs ">
                <img src={service.img} alt="" className="w-[100px] h-[100px]" />
                <div>
                  <p className="font-Plus font-bold text-[20px] sm:text-[24px] ">
                    {service.header}
                  </p>
                  <p className="font-Plus font-bold text-[20px] sm:text-[24px] ">
                    {service.subhead}
                  </p>
                </div>
                <p className="font-normal text-[20px] sm:text-[24px] font-Plus">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
