"use client"

import Link from "next/link";
import { useState } from "react"

import { styles } from "@/styles";
import { navLinks } from "@/constants";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[30px] font-bold cursor-pointer flex">
            SATY <span className="text-pink-600">AM .</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? "/close.svg" : "menu.svg"}
            alt="menu"
            width={28}
            height={28}
            onClick={() => setToggle(!toggle)}
            className="object-contain cursor-pointer"
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute top-20 ring-0 p-6 bg-tertiary mx-4 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-center flex-col gap-5">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium text-[16px] cursor-pointer`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
