import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import navimg from "../../assets/nav-bar.png";
import { LiaTimesSolid } from "react-icons/lia";

const NavBar = () => {
  const [view, setView] = useState(false);

  const toggleView = () => {
    setView(!view);
  };

  const navs = [
    { link: "HOME", path: "/", type: "route" }, // route navigation
    { link: "ABOUT ME", path: "aboutMe", type: "scroll" },
    { link: "SERVICES", path: "services", type: "scroll" },
    { link: "PROJECT", path: "projects", type: "scroll" },
    { link: "CONTACT ME", path: "contactme", type: "scroll" },
  ];
  return (
    <div className=" max-w-[1600px] m-auto pt-[1rem] pb-[3rem] px-[2rem] ">
      <div className=" flex items-center justify-between ">
        <div>
          <img src={navimg} alt="" />
        </div>

        <div className="items-center gap-[32px] font-poppins hidden lg:flex ">
          {navs.map((nav, index) => (
            <ul key={index}>
              {nav.type === "route" ? (
                <RouterLink
                  to={nav.path}
                  className="cursor-pointer hover:underline"
                >
                  <li className="font-medium text-[20px]">{nav.link}</li>
                </RouterLink>
              ) : (
                <Link
                  to={nav.path}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer hover:underline"
                >
                  <li className="font-medium text-[20px]">{nav.link}</li>
                </Link>
              )}
            </ul>
          ))}
        </div>

        <div className="hidden lg:block">
          <button className="bg-[rgba(95,6,124,1)] text-white py-[10px] px-[20px] rounded-[4px] font-medium text-[20px] ">
            HIRE ME
          </button>
        </div>

        <div className="" onClick={toggleView}>
          {view ? (
            <LiaTimesSolid size={30} />
          ) : (
            <div className="flex flex-col gap-[5px] gm:gap-[10px] lg:hidden">
              <div className="border w-[2rem] h-[2px]  border-black"></div>
              <div className="border w-[2rem] h-[2px]  border-black"></div>
              <div className="border w-[2rem] h-[2px]  border-black"></div>
            </div>
          )}
        </div>

        {view && (
          <div className="bg-[rgba(210,185,218,1)] h-[100%] w-full absolute z-[3] left-0 top-[7rem]">
            <div className=" text-[rgba(95,6,124,1)] items-center justify-center flex flex-col gap-[32px] font-poppins pt-[5rem]">
              {navs.map((nav, index) => (
                <ul key={index}>
                  {nav.type === "route" ? (
                    <RouterLink
                      to={nav.path}
                      onClick={() => setView(false)}
                      className="cursor-pointer hover:underline"
                    >
                      <li className="font-medium text-[20px]">{nav.link}</li>
                    </RouterLink>
                  ) : (
                    <Link
                      to={nav.path}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      onClick={() => setView(false)}
                      className="cursor-pointer hover:underline"
                    >
                      <li className="font-medium text-[20px]">{nav.link}</li>
                    </Link>
                  )}
                </ul>
              ))}
              <div className="">
                <button className="bg-[rgba(95,6,124,1)] text-white py-[10px] px-[20px] rounded-[4px] font-medium text-[20px] ">
                  HIRE ME
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
