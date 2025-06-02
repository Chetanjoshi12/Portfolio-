import React, { useState, useEffect } from "react";
import pic from "../assets/Chetan.jpg";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experiance" },
    { id: 5, text: "Contact" },
  ];
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [menu]);

  return (
    <>
      <div className="max-w-screen-xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="Chetan" />
            <div>
              <h1 className="font-semibold text-xl cursor-pointer">
                Cheta<span className="text-green-500">n</span>
              </h1>
              <p className="text-sm text-gray-600">Web Developer</p>
            </div>
          </div>
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>
                  <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden mr-4 cursor-pointer">
              {menu ? <IoClose size={24} /> : <MdMenu size={24} />}
            </div>
          </div>
        </div>
        {menu && (
          <div className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center z-50">
            <div className="absolute top-5 right-5 cursor-pointer" onClick={() => setMenu(false)}>
              <IoClose size={30} />
            </div>
            <ul className="md:hidden flex flex-col space-y-6 text-2xl font-semibold items-center">
              {navItems.map(({ id, text }) => (
                <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => {
                      setTimeout(() => setMenu(false), 100); 
                      scroll
                    }}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
