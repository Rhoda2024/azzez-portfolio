import React from "react";
import img1 from "../../assets/first-frame.png";
import img2 from "../../assets/first-project.png";
import img3 from "../../assets/second-frame.png";
import img4 from "../../assets/second-project.png";
import img5 from "../../assets/radish-frame.png";
import img6 from "../../assets/healingrays.png";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  return (
    <div className="max-w-[1500px] m-auto px-[2rem] ">
      <div className="flex flex-col items-center">
        <div>
          <p className=" font-Plus text-[20px] sm:text-[40px] font-bold ">
            My Case Studies
          </p>
        </div>

        {/* FIRST PROJECT */}
        <div className="flex flex-col items-center px-[2rem] ">
          <div>
            <p className=" text-[rgba(95,6,124,1)] font-lato font-normal text-[24px] sm:text-[32px] pt-[1rem] ">
              First Project
            </p>
          </div>

          <div className=" flex flex-col-reverse gap-[2rem] lg:flex-row  items-center justify-between pt-[4rem] ">
            <div className=" gap-[24px] flex flex-col w-full lg:max-w-[700px] justify-start">
              <div>
                <p className=" font-Plus font-bold text-[20px] sm:text-[32px] ">
                  FORTUNE CUISINE- A Food Platform
                </p>
                <p className=" font-poppins text-[18px] sm:text-[24px] font-semibold text-[rgba(34,2,45,0.45)] ">
                  Academy project
                </p>
              </div>
              <p className="font-normal text-[16px] sm:text-[24px] font-Plus text-[rgba(0,0,0,1)] ">
                A platform that allows working class/office people to order
                special culinary (food) such as coffee, flowers and have it
                delivered within 30 minutes.
              </p>
              <button className=" py-[5px] w-[200px] sm:w-[300px] rounded-[5px] border-[4px] border-[rgba(120,14,255,1)] font-semibold text-[18px] sm:text-[20px] font-poppins ">
                <Link to="/fortune">View Case Study</Link>
              </button>
            </div>

            <div className="flex flex-col items-center">
              <img src={img1} alt="" />
              <p className="text-[rgba(34,2,45,1)] font-bold text-[20px] xl:text-[32px] font-Plus ">
                FORTUNE CUISINE
              </p>
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
        {/* FIRST PROJECT */}

        {/* SECOND PROJECT */}
        <div className="flex flex-col items-center py-[4rem] px-[2rem] ">
          <div>
            <p className=" text-[rgba(95,6,124,1)] font-lato font-normal text-[24px] sm:text-[32px] pt-[1rem] ">
              Second Project
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-[2rem] ">
            <div className="flex flex-col items-center ">
              <img src={img3} alt="" />
              <p className="text-[rgba(34,2,45,1)] font-bold text-[20px] sm:text-[32px] font-Plus ">
                EASE-FARMS
              </p>
              <img src={img4} alt="" />
            </div>

            <div className=" gap-[24px] flex flex-col lg:w-[700px]">
              <div>
                <p className=" font-Plus font-bold text-[20px] sm:text-[32px] ">
                  EASEFARMS- A Market Platform
                </p>
                <p className=" font-poppins text-[18px] sm:text-[24px] font-semibold text-[rgba(34,2,45,0.45)] ">
                  Academy project
                </p>
              </div>
              <p className="font-normal text-[16px] sm:text-[24px] font-Plus text-[rgba(0,0,0,1)] ">
                A platform that allows farmers/farm suppliers to sell farm
                products, hire equipment and share market information within the
                environment of Oyo State in a simple and direct way.
              </p>
              <button className=" py-[5px] w-[200px] sm:w-[300px] rounded-[5px] border-[4px] border-[rgba(120,14,255,1)] font-semibold text-[18px] sm:text-[20px] font-poppins ">
                <Link to="/easefarm">View Case Study</Link>
              </button>
            </div>
          </div>
        </div>
        {/* SECOND PROJECT */}

        {/* THIRD PROJECT */}
        <div className="flex flex-col items-center py-[4rem] px-[2rem]  ">
          <div>
            <p className=" text-[rgba(95,6,124,1)] font-lato font-normal text-[24px] sm:text-[32px]pt-[1rem] ">
              Third Project
            </p>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center justify-between pt-[5rem] gap-[2rem] ">
            <div className=" gap-[24px] flex flex-col  sm:max-w-[550px]">
              <div>
                <p className=" font-Plus font-bold text-[20px] lg:text-[32px] ">
                  RADISHPLAN- A fintech landing page
                </p>
                <p className=" font-poppins text-[20px] lg:text-[24px] font-semibold text-[rgba(34,2,45,0.45)] ">
                  Collaborated Project with (Product Manager & WebDeveloper)
                </p>
              </div>
              <p className="font-normal text-[16px] sm:text-[24px] font-Plus text-[rgba(0,0,0,1)] ">
                A platform that allows users to save, invest their money, also
                it allows them to track their expenses automatically with a
                single click .
              </p>
              <button className="py-[5px] w-[200px] smw-[300px] rounded-[5px] border-[4px] border-[rgba(120,14,255,1)] font-semibold text-[18px] sm:text-[20px] font-poppins ">
                <Link to="/radishplan">View Case Study</Link>
              </button>
            </div>

            <div className="border-[2px] border-[rgba(190,231,195,1)] rounded-[19.51px] h-[500px] max-w-[519px] flex items-center justify-center ">
              <img src={img5} alt="" className="py-[13px] px-[26px] " />
            </div>
          </div>
        </div>
        {/* THIRD PROJECT */}

        {/* FOURTH PROJECT */}
        <div className="flex flex-col items-center py-[4rem] px-[2rem] ">
          <div>
            <p className=" text-[rgba(95,6,124,1)] font-lato font-normal text-[24px] lg:text-[32px] pt-[1rem] ">
              Live Project
            </p>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center justify-between pt-[5rem] gap-[2rem]  ">
            <div className=" gap-[24px] flex flex-col lg:max-w-[550px]">
              <div>
                <p className=" font-Plus font-bold text-[20px] lg:text-[32px] ">
                  HEALINGRAYS- An NGO Website
                </p>

                <p className=" font-poppins text-[20px] lg:text-[24px] font-semibold text-[rgba(34,2,45,0.45)] ">
                  Collaborated Project with (Product Manager & WebDeveloper)
                </p>
              </div>
              <p className="font-normal text-[16px] lg:text-[24px] font-Plus text-[rgba(0,0,0,1)] ">
                Healingrays sought to revolutionize how individuals access
                personalized nutrition services and resources.
              </p>
              <button className="py-[5px] w-[200px] sm:w-[300px] rounded-[5px] border-[4px] border-[rgba(120,14,255,1)] font-semibold text-[18px] sm:text-[20px] font-poppins ">
                <Link to="/healingrays">View Case Study</Link>
              </button>
            </div>

            <div className="border-[2px] border-[rgba(190,231,195,1)] rounded-[19.51px] h-[500px] max-w-[519px] flex items-center justify-center">
              <img src={img6} alt="" className="py-[13px] px-[26px]" />
            </div>
          </div>
        </div>
        {/* FOURTH PROJECT */}
      </div>
    </div>
  );
};

export default CaseStudies;
