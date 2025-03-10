import React from "react";
import pic from "../assets/Chetan.jpg";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
  FaTelegram,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiPodman, SiGrafana } from "react-icons/si";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-10 lg:px-20 my-10 md:my-16 lg:my-20">
        <div className="flex flex-col md:flex-col lg:flex-row items-center">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 mt-8 md:mt-14 lg:mt-24 space-y-4 text-center lg:text-left">
            <span className="text-lg md:text-xl">Welcome In My Feed</span>
            <div className="flex justify-center lg:justify-start space-x-1 text-xl md:text-3xl lg:text-4xl">
              <h1>Hello, I'm a </h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <p className="text-sm md:text-md lg:text-lg text-justify">
              "Welcome to my feed! I am a passionate and dedicated developer who
              doesn't just write code but transforms ideas into reality. With a
              deep enthusiasm for learning new technologies and creating
              exceptional digital experiences, I strive to build innovative and
              user-friendly solutions..."
            </p>

            {/* Social Media & Technologies */}
            <div className="flex flex-col md:flex-row justify-between items-center w-full space-y-5 md:space-y-0">
              {/* Social Media Icons */}
              <div className="space-y-2">
                <h1 className="font-bold text-center lg:text-left">Available on</h1>
                <ul className="flex space-x-4 justify-center lg:justify-start">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100004568028447" target="_blank" rel="noopener noreferrer">
                      <FaFacebook className="text-2xl cursor-pointer hover:scale-110 transition-transform duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/chetanjoshi359/" target="_blank" rel="noopener noreferrer">
                      <FaInstagramSquare className="text-2xl cursor-pointer hover:scale-110 transition-transform duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/chetan-joshi-6ba9151b1/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-2xl cursor-pointer hover:scale-110 transition-transform duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@Technoguru01" target="_blank" rel="noopener noreferrer">
                      <FaYoutube className="text-2xl cursor-pointer hover:scale-110 transition-transform duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://web.telegram.org/k/" target="_blank" rel="noopener noreferrer">
                      <FaTelegram className="text-2xl cursor-pointer hover:scale-110 transition-transform duration-200" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Technologies Section */}
              <div className="space-y-2">
                <h1 className="font-bold text-center lg:text-left">Currently Working on</h1>
                <ul className="flex space-x-4 justify-center lg:justify-start">
                  <li>
                    <SiMongodb className="text-xl md:text-2xl hover:scale-110 transition-transform duration-200" />
                  </li>
                  <li>
                    <SiExpress className="text-xl md:text-2xl hover:scale-110 transition-transform duration-200" />
                  </li>
                  <li>
                    <FaReact className="text-xl md:text-2xl hover:scale-110 transition-transform duration-200" />
                  </li>
                  <li>
                    <FaNodeJs className="text-xl md:text-2xl hover:scale-110 transition-transform duration-200" />
                  </li>
                  <li>
                    <SiPodman className="text-xl md:text-2xl hover:scale-110 transition-transform duration-200" />
                  </li>
                  <li>
                    <SiGrafana className="text-xl md:text-2xl hover:scale-110 transition-transform duration-200" />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 md:mb-0 mt-6">
            <img 
              src={pic} 
              alt="Chetan" 
              className="rounded-full w-[200px] md:w-[300px] lg:w-[450px] h-[200px] md:h-[300px] lg:h-[450px]" 
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
