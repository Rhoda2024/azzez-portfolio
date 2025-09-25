import React from "react";
import img2 from "../../assets/easefarm-image2.png";
import img1 from "../../assets/easefarm-image.png";

const EaseFarmDesignPhase = () => {
  return (
    <div className="max-w-[1600px] m-auto px-[1rem] lg:px-[2rem] py-[5rem]">
      <div>
        <p className="font-Plus font-bold text-[20px] sm:text-[40px] text-[rgba(34,2,45,1)] pb-[1rem]">
          Design Phase
        </p>
        <p className="font-Plus font-normal text-[18px] sm:text-[24px] text-[rgba(101,101,101,1)] pb-[3rem]">
          Created personas, empathy maps, and customer journey map to understand
          more about the user's problems. See the process deck for empathy maps
          and customer journeys.
        </p>
      </div>

      <div className="pb-[3rem]">
        <img src={img1} alt="" />
      </div>
      <div>
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default EaseFarmDesignPhase;
