import React from "react";
import img from "../../assets/Rectangle 8.png";
import icon1 from "../../assets/Vector.png";
import icon2 from "../../assets/Vector-2.png";

const HealingHero = () => {
  return (
    <div className="max-w-[1600px] m-auto px-[1rem] sm:px-[2rem]">
      {/* hroimg */}
      <div>
        <img src={img} alt="" />
      </div>
      {/* hroimg */}

      {/* project overview */}
      <div className="flex flex-col gap-[10px] py-[6rem]">
        <h2 className="font-Plus font-bold text-[24px] sm:text-[40px] text-[rgba(34,2,45,1)] ">
          Project Overview
        </h2>
        <p className="font-Plus font-bold text-[18px] sm:text-[32px] text-[rgba(34,2,45,1)] ">
          Description
        </p>
        <p className="text-[rgba(95,6,124,1)] text-[16px] sm:text-[24px] font-normal font-lato ">
          In an era where nutrition plays a pivotal role in health and wellness,
          Healingrays sought to revolutionize how individuals access
          personalized nutrition services and resources. The goal was to design
          a user-friendly website that seamlessly integrates education,
          consultations, and community-building. By focusing on intuitive design
          and meaningful content, the website now serves as a hub for promoting
          healthier lifestyles.
        </p>
      </div>
      {/* project overview */}

      {/* challenges */}
      <div className="flex flex-col gap-[10px] ">
        <h2 className="font-Plus font-bold text-[24px] sm:text-[40px] text-[rgba(34,2,45,1)] ">
          Challenges
        </h2>
        <p className="font-lato font-bold text-[16px] sm:text-[24px] text-[rgba(95,6,124,1)] ">
          The primary challenge for Healingrays was bridging the gap between
          nutritional knowledge and accessibility. The existing landscape lacked
          an online platform that combined education, personalized services, and
          community support under one cohesive digital experience.
        </p>
        <div className=" flex flex-col gap-[10px] ">
          <p className="font-lato font-bold text-[18px] sm:text-[30px] text-[rgba(95,6,124,1)] ">
            Key Issues:
          </p>
          <div className="flex items-center gap-[18px] ">
            <div>
              <div className="w-[20px] h-[20px]">
                <img src={icon1} alt="" />
              </div>
            </div>
            <p className="text-[rgba(95,6,124,1)] font-Plus font-normal text-[16px] sm:text-[24px] ">
              Difficulty in booking nutrition consultations.
            </p>
          </div>

          <div className="flex items-center gap-[18px] ">
            <div>
              <div className="w-[20px] h-[20px]">
                <img src={icon1} alt="" />
              </div>
            </div>
            <p className="text-[rgba(95,6,124,1)] font-Plus font-normal text-[16px] sm:text-[24px] ">
              Lack of engaging and accessible resources for users.
            </p>
          </div>

          <div className="flex items-center gap-[18px] ">
            <div>
              <div className="w-[20px] h-[20px]">
                <img src={icon1} alt="" />
              </div>
            </div>
            <p className="text-[rgba(95,6,124,1)] font-Plus font-normal text-[16px] sm:text-[24px] ">
              Low trust due to insufficient client success stories and
              testimonials.
            </p>
          </div>
        </div>
      </div>
      {/* challenges */}

      {/* project objective */}
      <div className="flex flex-col gap-[10px] py-[3rem]">
        <h2 className="font-Plus font-bold text-[24px] sm:text-[40px] text-[rgba(34,2,45,1)] ">
          Project Objectives
        </h2>
        <p className="font-lato font-bold text-[16px] sm:text-[24px] text-[rgba(95,6,124,1)] ">
          To address these issues, the project aimed to:
        </p>
        <div className=" flex flex-col gap-[10px] ">
          <div className="flex items-center gap-[18px] ">
            <div>
              <div className="w-[20px] h-[20px]">
                <img src={icon2} alt="" />
              </div>
            </div>
            <p className="text-[rgba(95,6,124,1)] font-Plus font-normal text-[16px] sm:text-[24px] ">
              Create a visually appealing and easy-to-navigate website.
            </p>
          </div>

          <div className="flex items-center gap-[18px] ">
            <div>
              <div className="w-[20px] h-[20px]">
                <img src={icon2} alt="" />
              </div>
            </div>
            <p className="text-[rgba(95,6,124,1)] font-Plus font-normal text-[16px] sm:text-[24px] ">
              Offer seamless online consultation booking and pricing
              transparency.
            </p>
          </div>

          <div className="flex items-center gap-[18px] ">
            <div>
              <div className="w-[20px] h-[20px]">
                <img src={icon2} alt="" />
              </div>
            </div>
            <p className="text-[rgba(95,6,124,1)] font-Plus font-normal text-[16px] sm:text-[24px] ">
              Develop a rich library of educational resources, including blogs,
              guides, and healthy recipes.
            </p>
          </div>

          <div className="flex items-center gap-[18px] ">
            <div>
              <div className="w-[20px] h-[20px]">
                <img src={icon2} alt="" />
              </div>
            </div>
            <p className="text-[rgba(95,6,124,1)] font-Plus font-normal text-[16px] sm:text-[24px] ">
              Highlight client success stories to build trust and credibility.
            </p>
          </div>
        </div>
      </div>
      {/* project objective */}

      {/* reserach insights */}
      <div className="flex flex-col gap-[10px] py-[3rem]">
        <h2 className="font-Plus font-bold text-[24px] sm:text-[40px] text-[rgba(34,2,45,1)] ">
          Research and Insights
        </h2>
        <p className="font-lato font-bold text-[16px] sm:text-[24px] text-[rgba(95,6,124,1)] max-w-[863px] ">
          To understand user needs and industry standards, an extensive research
          phase was conducted:
        </p>
        <div className=" flex flex-col gap-[10px] ">
          <div className="flex  gap-[5px]">
            <p className="text-[rgba(34,2,45,1)] font-bold font-lato text-[18px] sm:text-[24px]">
              User Personas:
            </p>
            <p className="font-Plus text-[18px] sm:text-[24px] text-[rgba(34,2,45,1)] font-normal max-w-[863px] ">
              Profiles of busy professionals, families, and health enthusiasts
              were created to guide design decisions.
            </p>
          </div>

          <div className="flex gap-[5px]">
            <p className="text-[rgba(34,2,45,1)] font-bold font-lato text-[18px] sm:text-[24px]">
              Competitor Analysis:
            </p>
            <p className="font-Plus text-[18px] sm:text-[24px] text-[rgba(34,2,45,1)] font-normal max-w-[863px] ">
              Similar platforms were analyzed to identify gaps and
              opportunities.
            </p>
          </div>

          <div className="flex gap-[5px] ">
            <p className="text-[rgba(34,2,45,1)] font-bold font-lato text-[18px] sm:text-[24px]">
              User Feedback:
            </p>
            <p className="font-Plus text-[18px] sm:text-[24px] text-[rgba(34,2,45,1)] font-normal max-w-[863px] ">
              Insights were gathered to ensure the website addressed real-world
              pain points, such as accessibility and content clarity.
            </p>
          </div>

          <div>
            <p className="font-normal text-[18px] sm:text-[24px] font-Plus text-[rgba(34,2,45,1)]">
              These findings shaped the design strategy, emphasizing simplicity,
              functionality, and engaging visuals.
            </p>
          </div>
        </div>
      </div>
      {/* reserach insights */}
    </div>
  );
};

export default HealingHero;
