import { Close, Menu } from "@mui/icons-material";
import { logo } from "../../assets";
import { navigationLinks } from "../../utils/constants";
import { styles } from "../../utils/styles";
import { useState } from "react";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <div className={`w-full py-6 ${styles.flexBetween}`}>
      {/* Logo */}
      <div className={`${styles.heading}`}>
        <img
          src={logo}
          alt="log"
          className="w-[130px] h-[65px] cursor-pointer"
        />
      </div>

      {/* navigation links */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navigationLinks.map((navigationLink, idx) => (
          <li
            key={navigationLink.id}
            className={`font-montserrat font-normal 
            cursor-pointer text-[16px] 
            text-white hover:text-lightWhite transition-all duration-500 ${
              idx === navigationLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            {navigationLink.title}
          </li>
        ))}
      </ul>
      {/* Navigation btns */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button onClick={() => setToggleNav((prev) => !prev)}>
          {" "}
          {toggleNav ? (
            <Close sx={{ color: "white", fontSize: "42px" }} />
          ) : (
            <Menu sx={{ color: "white", fontSize: "42px" }} />
          )}
        </button>
        <div
          className={`${
            !toggleNav ? "hidden" : "flex"
          } p-6 absolute top-20 right-0 w-full sidebar bg-black`}
        ></div>
      </div>
    </div>
  );
};

export default Navbar;