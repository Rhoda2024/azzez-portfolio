import React from "react";
import logo from "../../assets/footer-logo.png";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[rgba(34,2,45,1)]">
      <div className=" lg:px-[2rem] py-[2rem]">
        <div className=" text-white py-[29px] px-[1rem] lg:px-[64px] rounded-t-[15px]  ">
          <div>
            {/* ============= */}
            <div className="flex justify-between items-center pb-[2rem] border-b-2 border-b-[rgba(71,84,103,1)]">
              <p className="font-Plus text-[16px] sm:text-[40px] font-bold">
                Let’s Connect Today
              </p>
              <div className="">
                <button className="bg-[rgba(95,6,124,1)] text-white p-[6px] sm:py-[10px] sm:px-[20px] rounded-[4px] font-medium text-[12px] sm:text-[20px] ">
                  HIRE ME
                </button>
              </div>
            </div>
            {/* ============= */}

            {/* ============= */}
            <div className="border-b-2 border-b-[rgba(71,84,103,1)]">
              <div className="flex flex-col sm:flex-row gap-[4rem] justify-between sm:items-center py-[2rem]  max-w-[1500px] m-auto">
                {/* ========== */}
                <div className=" flex flex-col gap-[2.5rem] max-w-[330px]">
                  <div>
                    <img src={logo} alt="" />
                  </div>
                  <p className="font-poppins font-normal text-[16px]">
                    Crafting purposeful designs that resonate, inspire, and
                    build connections.
                  </p>
                  <div className="flex flex-wrap items-center gap-8 rounded-[10px] md:gap-10 text-[rgba(172,126,187,1)]">
                    <AiFillFacebook size={40} />
                    <FaInstagram size={40} />
                    <FaSquareXTwitter size={40} />
                    <FaLinkedin size={40} />
                  </div>
                </div>
                {/* --------------- */}
                {/* =================== */}
                <div className="flex flex-col lg:flex-row gap-[24px]">
                  <div>
                    <p className="pb-[1rem] underline font-poppins font-bold text-[20px]">
                      Navigation
                    </p>
                    <div>
                      <ul className="flex flex-col gap-[1rem] font-poppins font-normal text-[14px] ">
                        <a href="">Home</a>
                        <a href="">About Us</a>
                        <a href="">Service</a>
                        <a href="">Resume</a>
                        <a href="">Project</a>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <p className="pb-[1rem] underline font-poppins font-bold text-[20px]">
                      Contact
                    </p>
                    <div>
                      <ul className="flex flex-col gap-[1rem] font-poppins font-normal text-[14px]">
                        <a href="">+234 708 463 0776</a>
                        <a href="">abdulrafiuabdulazeezo@gmail.com</a>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* =================== */}
              </div>
              {/* ============= */}
            </div>
            {/* ============= */}

            <div className="flex flex-col lg:flex-row justify-between pt-[2rem] font-poppins text-[12px] sm:text-[20px] font-normal">
              <div>
                <p>Copyright© 2024 Abdulrafiu Abdulazeez Olatunji</p>
              </div>
              <div>
                <p>User Terms & Conditions | Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
