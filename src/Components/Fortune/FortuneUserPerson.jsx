import React from "react";
import img from "../../assets/fortune-image3.png";
import img1 from "../../assets/fortune-image2.png";

const FortuneUserPerson = () => {
  return (
    <div className="max-w-[1600px] m-auto px-[1rem] sm:px-[2rem] py-[7rem]">
      <div>
        <p className="font-Plus text-[20px] sm:text-[40px] font-bold text-[rgba(95,6,124,1)] text-center pb-[2rem]">
          User <span className="text-[rgba(0,0,0,1)]"> Persona</span>
        </p>
      </div>

      <div className="pb-[3rem]">
        <img src={img} alt="" />
      </div>
      <div>
        <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default FortuneUserPerson;
