import React from "react";
import img from "../../assets/easefarm-infoimg.png";
import img1 from "../../assets/easefarm-designphaseimg.png";
import img2 from "../../assets/easefarm-finaldesignimg.png";

const EaseFarmInformation = () => {
  return (
    <div className="max-w-[1600px] m-auto px-[1rem] lg:px-[2rem] py-[5rem]">
      {/* =========information========== */}
      <div>
        <p className="text-center font-Plus font-bold text-[20px] sm:text-[40px] text-[rgba(34,2,45,1)] pb-[15px]">
          Information Architecture/Userflow{" "}
        </p>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      {/* =========information========== */}

      {/* ===============Design Phase============== */}
      <div className="pt-[6rem] flex flex-col gap-[20px]">
        <p className="font-Plus font-bold text-[20px] sm:text-[40px] text-[rgba(34,2,45,1)]">
          Design Phase
        </p>
        <p className="font-Plus text-[18px] sm:text-[24px] font-normal text-[rgba(101,101,101,1)]">
          The research process and the sitemap led us to drawing out a wireframe
          and then designing a MVP.
        </p>
        <div className="">
          <img src={img1} alt="" />
        </div>
      </div>
      {/* ===============Design Phase============== */}

      {/* ===============final design================ */}
      <div className="pt-[5rem]">
        <p className="font-Plus font-bold text-[20px] sm:text-[40px]">
          Final Design
        </p>
        <p className="font-Plus text-[18px] sm:text-[24px] font-normal text-[rgba(101,101,101,1)] py-[20px]">
          The final design of the mobile view
        </p>
        <div>
          <img src={img2} alt="" />
        </div>

        <div className="flex flex-col gap-[32px] font-Plus font-normal text-[18px] sm:text-[24px] text-[rgba(95,6,124,1)] pt-[2rem]">
          <p>
            As much as trust is gained in the major screens(like homepage or
            dashboard) of a site, it actually starts at the LOG IN or SIGN UP
            page. This is best achieved by easiness, simplicity and
            effectiveness all at once.
          </p>
          <p>
            The ease of sign up and log in page is possible with the one-click
            registration through social media like Facebook or Google(as seen in
            the image above).
          </p>

          <p>
            Simplicity is attained by not bombarding users with so much
            requirements in journeying the flow. As great as having a ‘confirm
            password’ field, it frustrate users. This can be resolved by a ‘show
            password’ option.
          </p>
          <p>
            Usernames or phone numbers can be lost or forgotten when users come
            back. Therefore, effectiveness is gained by only requiring names in
            sign up page and email address in log in page. Also, good emotions
            are released when the site can remember the user when they comeback.
          </p>
        </div>
      </div>
      {/* ===============final design================ */}
    </div>
  );
};

export default EaseFarmInformation;
