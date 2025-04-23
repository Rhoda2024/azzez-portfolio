import React from "react";
import img1 from "../../assets/feature1.png";
import img2 from "../../assets/feature2.png";
import img3 from "../../assets/feature3.png";
import img4 from "../../assets/feature4.png";
import img5 from "../../assets/feature5.png";
import img6 from "../../assets/feature6.png";
import img7 from "../../assets/feature7.png";
import img8 from "../../assets/feature8.png";
import img9 from "../../assets/feature9.png";

const HealingKeyFeatures = () => {
  const features = [
    {
      header: "1. Hero Section",
      subhead:
        "A welcoming introduction to Healingrays, paired with a strong call-to-action button inviting users to “Get Started.”",
      img: img1,
    },
    {
      header: "2. Overview of Services",
      subhead:
        "A visually structured display of services, such as personalized nutrition plans, dietary counseling, and family wellness programs.",
      img: img2,
    },
    {
      header: "3. Educational Resources",
      subhead:
        "A comprehensive library of blogs, guides, and healthy recipes, empowering users to take control of their health.",
      img: img3,
    },
    {
      header: "4. Testimonials and Success Stories",
      subhead:
        "Real client transformations showcased through stories, quotes, and before-and-after visuals.",
      img: img4,
    },
    {
      img: img5,
    },
    {
      img: img6,
    },
    {
      img: img7,
    },
    {
      img: img8,
    },
    {
      img: img9,
    },
  ];

  return (
    <div className="max-w-[1500px] m-auto px-[1rem] lg:px-[2rem]">
      <div>
        <p className="font-bold font-Plus text-[24px] lg:text-[40px] text-[rgba(34,2,45,1)] pb-[10px] ">
          Key features
        </p>
      </div>
      {/* =================== */}
      <div className="flex flex-col items-center justify-center gap-[4rem] ">
        {features.map((feature, index) => (
          <div key={index}>
            <div className="flex flex-col gap-[10px]">
              <p className="text-[rgba(0,0,0,1)] font-Plus text-[18px] lg:text-[32px] font-bold ">
                {feature.header}
              </p>
              <p className="font-lato font-normal text-[16px] lg:text-[30px] ">
                {feature.subhead}
              </p>
              <div>
                <img src={feature.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealingKeyFeatures;
