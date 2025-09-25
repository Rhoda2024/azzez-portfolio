import React from "react";
import img1 from "../../assets/easefarm-imgdesignprocess.png";

const EaseFarmDesignProcess = () => {
  return (
    <div className="max-w-[1600px] m-auto px-[1rem] lg:px-[2rem] py-[5rem]">
      {/*================ Design Process ============ */}
      <div className="flex flex-col gap-[20px]">
        <p className="font-Plus font-bold text-[20px] sm:text-[40px] text-[rgba(34,2,45,1)]">
          Design Process
        </p>
        <p className="font-Plus text-[18px] sm:text-[24px] font-normal text-[rgba(101, 101, 101, 1)]">
          To make the design more effective and user friendly. I completed all
          five faces of the design process. The design process was completed by
          investigating the problem and generatting thoughts for solution.{" "}
        </p>

        <div className="flex flex-col items-center">
          <img src={img1} alt="" />
        </div>
      </div>
      {/* ======================Design Process============= */}

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
              I conducted interviews and asked people about how farmers sell
              their product, how do they get farming equipment and how do they
              get market information.
            </p>

            <p className="font-bold">Research Summary</p>
            <p className="font-normal">
              Their response showed that if it’s a small scale farming, most of
              the farmers in this category sell their produces off at local
              market or having retailers that will come and pick the produce
              from their farms, for commercial scale farming, there are off
              takers from the farm and they supply mostly manufacturing /
              processing farms.
            </p>
            <p className="font-normal">
              For equipment's, mostly farmers get equipment's from local market
            </p>
            <p className="font-normal">
              For the market information, most farmers belong to an association
              and they used to share information among themselves, the lettered
              ones used to WhatsApp/social media platforms where information is
              being disseminated among the members amd also they deliberate on
              market price.
            </p>
          </div>
        </div>
      </div>
      {/* ===========discover phase============= */}
    </div>
  );
};

export default EaseFarmDesignProcess;
