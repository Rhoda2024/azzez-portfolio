import React from "react";
import img1 from "../../assets/info-img.png";
import img2 from "../../assets/fortune-img1.png";
import img3 from "../../assets/fortune-img2.png";
import img4 from "../../assets/fortune-final-design.png";

const FortuneInfromation = () => {
  return (
    <div>
      <div className="max-w-[1600px] m-auto px-[1rem] lg:[2rem] pt-[7rem]">
        {/* -=========information============ */}
        <div>
          <p className="font-Plus font-bold text-[24px] sm:text-[30px] text-center md:text-[40px] text-[rgba(95,6,124,1)]">
            Information Architecture/ Userflow{" "}
          </p>
          <div className="pt-[2rem] ">
            <img src={img1} alt="" />
          </div>
        </div>
        {/* -=========information============ */}

        {/* =========design phase */}
        <div className="pt-[5rem]">
          <div className="text-center font-Plus font-bold text-[24px] sm:text-[40px] pb-[1rem]">
            <p className="flex gap-[10px] justify-center">
              <p className=" text-[rgba(95,6,124,1)]">Design</p>Phase
            </p>
          </div>
          <p className="font-Plus font-normal text-[18px] sm:text-[24px] text-[rgba(101,101,101,1)]">
            The research process and the sitemap led us to drawing out a
            wireframe and then designing a MVP.
          </p>

          <div className="flex items-center justify-between gap-[20px] sm:gap-[32px] pt-[2rem]">
            <div>
              <img src={img2} alt="" />
            </div>
            <div>
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
        {/* =========design phase */}

        {/* =========Final Design============= */}
        <div className="pt-[6rem]">
          <div className="text-center font-Plus font-bold text-[24px] sm:text-[40px] pb-[1rem]">
            <p className="flex gap-[10px] justify-center">
              <p className=" text-[rgba(95,6,124,1)]">Final</p>Design
            </p>
          </div>
          <p className="font-Plus font-normal text-[18px] sm:text-[24px] text-[rgba(101,101,101,1)]">
            The final design of the mobile view
          </p>

          {/* ==========images========= */}
          <div className="pt-[1.5rem]">
            <img src={img4} alt="" />
          </div>
          {/* -===========images========== */}

          <div className="flex flex-col gap-[32px] font-Plus font-normal text-[18px] sm:text-[24px] text-[rgba(101,101,101,1)] pt-[2rem]">
            <p>
              As much as trust is gained in the major screens(like homepage or
              dashboard) of a site, it actually starts at the LOG IN or SIGN UP
              page. This is best achieved by easiness, simplicity and
              effectiveness all at once.
            </p>
            <p>
              The ease of sign up and log in page is possible with the one-click
              registration through social media like Facebook or Google(as seen
              in the image above).
            </p>

            <p>
              Simplicity is attained by not bombarding users with so much
              requirements in journeying the flow. As great as having a ‘confirm
              password’ field, it frustrate users. This can be resolved by a
              ‘show password’ option.
            </p>
            <p>
              Usernames or phone numbers can be lost or forgotten when users
              come back. Therefore, effectiveness is gained by only requiring
              names in sign up page and email address in log in page. Also, good
              emotions are released when the site can remember the user when
              they comeback.
            </p>
          </div>
        </div>
        {/* =========Final Design============= */}
      </div>
    </div>
  );
};

export default FortuneInfromation;
