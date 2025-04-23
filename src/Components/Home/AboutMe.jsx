import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-[rgba(210,185,218,0.25)] py-[132px] px-[1rem] ">
      <div className="max-w-[1250px] bg-white m-auto rounded-[15px] p-[30px] flex flex-col items-center justify-center gap-[64px]">
        <div>
          <p className="text-[rgba(34,2,45,1)] font-semibold sm:font-bold text-center text-[24px] sm:text-[40px] font-Plus  ">
            A Little Bit About Me
          </p>
        </div>
        <div className=" font-Plus font-normal text-[18px] sm:text-[24px] ">
          <p>
            Hi! I’m Abdulazeez Olatunji Abdulrafiu, a dedicated UI/UX designer
            passionate about crafting user-focused digital experiences. With a
            Higher National Diploma in Public Administration, I combine a strong
            foundation in design principles with a fresh perspective on user
            experience, driven by a passion for seamless, intuitive interfaces.
          </p>
          <p className="pt-[2rem]">
            My journey in UI/UX has seen me complete diverse projects that have
            sharpened my skills in user research, wireframing, and interactive
            prototyping. I approach every project with a strong focus on
            understanding user needs and translating them into visually
            engaging, functional designs.{" "}
          </p>
        </div>

        <div>
          <button className="bg-[rgb(95,6,124)] w-[150px] sm:w-[300px] font-poppins font-bold text-[16px] sm:text-[20px] text-white rounded-[4px] py-[10px] ">
            HIRE ME
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
