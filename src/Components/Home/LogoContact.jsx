import React from "react";
import img1 from "../../assets/fort.png";
import img2 from "../../assets/ZEC DESIGN.png";
import img3 from "../../assets/cuisine.png";
import img4 from "../../assets/molly.png";
import img5 from "../../assets/salah.png";
import img6 from "../../assets/salam.png";
import img7 from "../../assets/five-star.png";
import img8 from "../../assets/WAGMI.png";
import img9 from "../../assets/Fahdey.png";

const LogoContact = () => {
  const images = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
  ];

  const flyers = [{ img: img6 }, { img: img7 }, { img: img8 }, { img: img9 }];

  return (
    <div className="max-w-[1600px] m-auto px-[2rem] pt-[11rem] pb-[6rem]">
      <div className=" flex flex-col items-center ">
        <div>
          <p className="font-bold text-[20px] sm:text-[40px] text-[rgba(34,2,45,1)] font-Plus  ">
            Logo & Flyer Designs
          </p>
        </div>

        <div>
          <p className=" font-Plus text-[18px] sm:text-[32px] font-bold text-[rgba(0,0,0,1)] py-[2rem] ">
            Logo Designs
          </p>
        </div>

        <div className="flex items-center justify-center gap-[52px] flex-wrap">
          {images.map((image, index) => (
            <div key={index}>
              <div>
                <img src={image.img} alt="" className="w-[220px] h-[220px]" />
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="font-Plus font-bold text-[20px] sm:text-[32px] pt-[8rem] pb-[4rem] ">
            Flyer Designs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-[52px] flex-wrap">
          {flyers.map((flyer, index) => (
            <div key={index}>
              <div>
                <img
                  src={flyer.img}
                  alt=""
                  className=" lg:w-[670px] lg:h-[900px]"
                />
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col items-center justify-center gap-[1.5rem] pt-[6rem]"
          id="contactme"
        >
          <p className="font-bold text-[20px] sm:text-[40px] text-[rgba(34,2,45,1)] font-Plus">
            Contact Me
          </p>
          <p className="font-Plus font-normal text-[18px] sm:text-[24px] max-w-[800px] m-auto text-center">
            We are committed to processing the information in order to contact
            you and talk about your project.
          </p>

          <div className="flex flex-col gap-8 ">
            <input
              type="text"
              name="text"
              placeholder="Name*"
              id=""
              className="border-2 border-[#00000080] rounded-[15px] w-full  px-[1rem] pt-[1rem] pb-[2rem] xl:w-[600px]"
            />

            <input
              type="email"
              name="email"
              placeholder="Email*"
              id=""
              className="border-2 border-[#00000080] rounded-[15px] w-full  px-[1rem] pt-[1rem] pb-[2rem]"
            />

            <textarea
              name="text"
              placeholder="Message"
              id=""
              className="border-2 border-[#00000080] rounded-[15px] px-[1rem] pt-[1rem] pb-[6rem] "
            ></textarea>
          </div>
          <button className="bg-[rgba(95,6,124,1)] text-white font-poppins font-extrabold text-[25px] h-[4rem] px-[4rem] rounded-[6px] ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoContact;
