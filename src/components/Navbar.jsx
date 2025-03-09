import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, logo2 } from "../assets";

const customStyles = `
  @keyframes shine {
    0% { background-position: 200% 0; }
    100% { background-position: 0 0; }
  }

  .animate-shine {
    animation: shine 2s infinite;
  }
`;

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleDownloadCV = () => {
    const fileId = "1hk9qgUGGdNxrjLA7V2JjB93VkrL-z5FQ";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    window.open(downloadUrl, "_blank");
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl m-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo2} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white font-bold cursor-pointer text-[18px]">
              Saubhagya Srivastava
            </p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
            {navLinks.map((link) => {
              if (link.title === "Blog") {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer`}
                  >
                    <Link to="/blogs" onClick={() => setActive(link.title)}>
                      {link.title}
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer`}
                    onClick={() => setActive(link.title)}
                  >
                    <a href={`/#${link.id}`}>{link.title}</a>
                  </li>
                );
              }
            })}
            <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
              <button
                onClick={handleDownloadCV}
                className="flex items-center gap-1 border border-[#915eff] px-4 py-2 rounded-xl transition-all duration-300 hover:shadow-[0_0_10px_3px_rgba(145,94,255,0.6)] hover:border-opacity-80 relative overflow-hidden"
              >
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#915eff] to-white bg-[length:200%_100%] animate-shine">
                  Download CV
                </span>
              </button>
            </li>
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              }  p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end flex-col items-start gap-4">
                {navLinks.map((link) => {
                  if (link.title === "Blog") {
                    return (
                      <li
                        key={link.id}
                        className={`${
                          active === link.title
                            ? "text-white"
                            : "text-secondary"
                        } font-poppins font-medium cursor-pointer text-[16px]`}
                        onClick={() => {
                          setToggle(!toggle);
                          setActive(link.title);
                        }}
                      >
                        <Link to="/blogs" onClick={() => setActive(link.title)}>
                          {link.title}
                        </Link>
                      </li>
                    );
                  } else {
                    return (
                      <li
                        key={link.id}
                        className={`${
                          active === link.title
                            ? "text-white"
                            : "text-secondary"
                        } font-poppins font-medium cursor-pointer text-[16px]`}
                        onClick={() => {
                          setToggle(!toggle);
                          setActive(link.title);
                        }}
                      >
                        <a href={`#${link.id}`}>{link.title}</a>
                      </li>
                    );
                  }
                })}
                <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
                  <button
                    onClick={handleDownloadCV}
                    className="flex items-center gap-1 border border-[#915eff] px-4 py-2 rounded-xl transition-all duration-300 hover:shadow-[0_0_10px_3px_rgba(145,94,255,0.6)] hover:border-opacity-80"
                  >
                    Download CV
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
