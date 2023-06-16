import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { Social } from "./";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${"bg-primary"}`}
    >
      <div className="w-full flex justify-between items-center max-w-16xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Mousam &nbsp;
            <span className="sm:block hidden"> |&nbsp; Sarkar</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a> {/*anchor tag*/}
            </li>
          ))}
          <div>
            <Social />
          </div>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] onject-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <div>
                <Social />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/**
 * ${styles.paddingX} - > Dynamic rendering. This is like enum. const styles = {paddingX: "sm:px-16 px-6"}
 * q-full -> Full width
 * flex->
 * items-center - > To make it appear in the center
 * py-5 -> Padding on y axis of 5
 * top-0 -> Makes it stay on the top
 * z-20 - > To make it appear above elements
 * max-w-7xl -> Maximum width of the nav bar
 * mx-auto -> Margin along x axis is auto
 * window.scrollTo(0,0) -> Going to scroll to the top of the page
 * hover:text-white -> The color of the text changes to the specified color
 * cursor pointer -> Mouse arrow changes to hand type pointer
 * <a></a> - > Anchor element
 *
 */
