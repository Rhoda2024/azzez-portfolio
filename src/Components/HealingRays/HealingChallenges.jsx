import React from "react";
import img from "../../assets/Vector.png";
import img2 from "../../assets/Vector-2.png";

const HealingChallenges = () => {
  const challenges = [
    {
      img: img,
      text: "Developing a cohesive design without an existing brand system.",
    },

    {
      img: img,
      text: "Healingrays needed a structure that would cater to both tech-savvy individuals and those less familiar with digital tools",
    },
    {
      img: img,
      text: "With a wide-ranging audience, from busy professionals to families, it was critical to provide content that resonated across demographics.",
    },
    {
      img: img,
      text: "There was a need to deliver essential information without overwhelming users with text-heavy layouts.",
    },
  ];

  const solutions = [
    {
      img: img2,
      text: "A minimalistic yet adaptable style guide was created to ensure consistency across all sections.",
    },

    {
      img: img2,
      text: "A simplified navigation bar was designed with clear, descriptive labels (e.g., Home, Services, Resources).",
    },
    {
      img: img2,
      text: "Designed resource categories (e.g., Blogs, Recipes, Guides) to cater to varying interests.",
    },
    {
      img: img2,
      text: "Each section was balanced with whitespace, ensuring the design remained clean and digestible.",
    },
  ];

  return (
    <div className="max-w-[1600px] m-auto px-[1rem] sm:px-[2rem]">
      <div className="py-[7rem]">
        {/* =============chalenges and solutions================ */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[40px]">
          {/* challenges */}
          <div className=" bg-[rgba(210,185,218,1)] max-w-[700px] p-[24px] rounded-[8px] ">
            <div className="flex flex-col gap-[20px]">
              <div>
                <p className="font-lato font-bold text-[24px] text-[rgba(211,25,25,1)]  ">
                  Challenges
                </p>
              </div>
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-center gap-[15px] ">
                  <div>
                    <div className="w-[30px] h-[20px]">
                      <img src={challenge.img} alt="" />
                    </div>
                  </div>
                  <div>
                    <p className=" font-Plus font-normal text-[15px] sm:text-[20px] text-[rgba(95,6,124,1)] ">
                      {challenge.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* challenges */}

          {/* solutions */}
          <div className="bg-[rgba(210,185,218,1)] max-w-[700px] p-[24px] rounded-[8px] ">
            <div className="flex flex-col gap-[20px]">
              <div>
                <p className="font-lato font-bold text-[24px] text-[rgba(95,6,124,1)]  ">
                  Solutions
                </p>
              </div>
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-center gap-[15px] ">
                  <div>
                    <div className="w-[30px] h-[20px]">
                      <img src={solution.img} alt="" />
                    </div>
                  </div>
                  <div>
                    <p className=" font-Plus font-normal text-[15px] sm:text-[20px] text-[rgba(95,6,124,1)] ">
                      {solution.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* solutions */}
        </div>
        {/* =============chalenges and solutions================ */}

        {/* conclusion & takeaway */}
        <div className="py-[6rem] flex flex-col gap-[20px]">
          <p className="font-Plus font-bold text-[24px] sm:text-[40px] text-[rgba(34,2,45,1)] ">
            Conclusion
          </p>
          <p className="text-[rgba(95,6,124,1)] text-[16px] sm:text-[30px] font-lato font-normal ">
            The Healingrays website exemplifies how thoughtful design can
            transform a vision into a tangible, impactful digital experience. By
            combining intuitive navigation, engaging resources, and a seamless
            user experience, the platform now empowers individuals and families
            to embrace healthier lifestyles.
          </p>
        </div>

        <div className="flex flex-col gap-[20px]">
          <p className="font-Plus font-bold text-[24px] sm:text-[40px] text-[rgba(34,2,45,1)] ">
            Takeaway
          </p>
          <p className="text-[rgba(95,6,124,1)] text-[18px] sm:text-[30px] font-lato font-normal ">ddddd
            Healingrays’ website showcases how collaboration, user-focused
            design, and a commitment to quality can transform ideas into
            impactful solutions. By working closely with the team, prioritizing
            user needs, and emphasizing accessibility and trust, the project
            delivered a platform that serves as both a valuable resource and a
            trusted partner in wellness. This highlights the power of thoughtful
            design in creating meaningful user experiences.
          </p>
        </div>
        {/* conclusion & takeaway */}
      </div>
    </div>
  );
};

export default HealingChallenges;
