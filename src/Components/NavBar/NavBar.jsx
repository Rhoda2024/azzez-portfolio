import React from "react";
import { Link } from "react-router-dom";
import navimg from "../../assets/nav-bar.png";

const NavBar = () => {
  const navs = [
    { link: "HOME", path: "/" },
    { link: "ABOUT ME", path: "" },
    { link: "SERVICES", path: "" },
    { link: "PROJECT", path: "" },
    { link: "CONTACT ME", path: "" },
  ];
  return (
    <div className=" max-w-[1500px] m-auto pt-[1rem] pb-[3rem] px-[2rem] ">
      <div className=" flex items-center justify-between ">
        <div>
          <img src={navimg} alt="" />
        </div>

        <div className="items-center gap-[32px] font-poppins hidden lg:flex ">
          {navs.map((nav, index) => (
            <ul key={index}>
              <Link to={nav.path}>
                <li className=" font-medium text-[20px] ">{nav.link}</li>
              </Link>
            </ul>
          ))}
        </div>

        <div className="hidden lg:block">
          <button className="bg-[rgba(95,6,124,1)] text-white py-[10px] px-[20px] rounded-[4px] font-medium text-[20px] ">
            HIRE ME
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
