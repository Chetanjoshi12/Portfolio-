// import React from 'react';
// import html from "../../src/assets/html.webp";
// import css from "../../src/assets/css.png";
// import opennms from "../../src/assets/opennms.jpeg";
// import docker from "../../src/assets/docker.png";
// import robot from "../../src/assets/Robot.png";
// import javascript from "../../src/assets/js.jpeg";

// function Experience() {
//     const cardItem = [
//         { id: 1, logo: html, name: "HTML" },
//         { id: 2, logo: css, name: "CSS" },
//         { id: 3, logo: opennms, name: "OpenNMS Horizon" },
//         { id: 4, logo: javascript, name: "JavaScript" },
//         { id: 5, logo: docker, name: "Docker" },
//         { id: 6, logo: robot, name: "Robot Framework" }
//     ];

//     return (
//         <div name="Experiance"
//         className='max-w-screen-xl mx-auto px-4 md:px-10 lg:px-20 mt-12'>
//             {/* Title Section */}
//             <div className="text-center mb-12">
//                 <h1 className='text-3xl font-extrabold text-gray-900'>Experiance</h1>
//                 <p className='text-md text-gray-600 mt-2 font-medium'>
//                     1 Year of Hands-on Experience in These Technologies
//                 </p>
//             </div>

//             {/* Experience Cards - Fully Responsive Grid */}
//             <div className='flex justify-center'>
//                 <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 sm:gap-20 md:gap-24 lg:gap-28'>
//                     {cardItem.map(({ id, logo, name }) => (
//                         <div
//                             key={id}
//                             className='relative w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[230px] md:h-[230px] lg:w-[240px] lg:h-[240px]
//                                        rounded-full border-[4px] border-gray-300 bg-white shadow-lg hover:shadow-2xl 
//                                        transform hover:scale-105 transition-all duration-300 flex flex-col 
//                                        items-center justify-center text-center p-3'
//                         >
//                             {/* Background Gradient */}
//                             <div className='absolute inset-0 bg-gradient-to-br from-gray-100 to-white rounded-full'></div>

//                             {/* Logo */}
//                             <div className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] lg:w-[110px] lg:h-[110px]
//                                             rounded-full flex items-center justify-center bg-white 
//                                             shadow-md border-[3px] border-gray-200 z-10 overflow-hidden'>
//                                 <img src={logo} className='w-[75%] h-[75%] object-contain' alt={name} />
//                             </div>

//                             {/* Technology Name */}
//                             <h2 className='mt-3 text-sm sm:text-base md:text-lg font-semibold text-gray-800 z-10'>
//                                 {name}
//                             </h2>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Experience;

import React from 'react';
import html from "../../src/assets/html.webp";
import css from "../../src/assets/css.png";
import opennms from "../../src/assets/opennms.jpeg";
import docker from "../../src/assets/docker.png";
import robot from "../../src/assets/Robot.png";
import javascript from "../../src/assets/js.jpeg";

function Experience() {
    const cardItem = [
        { id: 1, logo: html, name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { id: 2, logo: css, name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { id: 3, logo: opennms, name: "OpenNMS Horizon", link: "https://www.opennms.com/" },
        { id: 4, logo: javascript, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { id: 5, logo: docker, name: "Docker", link: "https://docs.docker.com/get-started/" },
        { id: 6, logo: robot, name: "Robot Framework", link: "https://robotframework.org/" }
    ];

    return (
        <div name="Experiance" className='max-w-screen-xl mx-auto px-4 md:px-10 lg:px-20 mt-12'>
            {/* Title Section */}
            <div className="text-center mb-12">
                <h1 className='text-3xl font-extrabold text-gray-900'>Experiance</h1>
                <p className='text-md text-gray-600 mt-2 font-medium'>
                    1 Year of Hands-on Experience in These Technologies
                </p>
            </div>

            {/* Experience Cards */}
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 sm:gap-20 md:gap-24 lg:gap-28'>
                    {cardItem.map(({ id, logo, name, link }) => (
                        <a
                            key={id}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='no-underline'
                        >
                            <div className='relative w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[230px] md:h-[230px] lg:w-[240px] lg:h-[240px]
                                            rounded-full border-[4px] border-gray-300 bg-white shadow-lg hover:shadow-2xl 
                                            transform hover:scale-105 transition-all duration-300 flex flex-col 
                                            items-center justify-center text-center p-3'>
                                <div className='absolute inset-0 bg-gradient-to-br from-gray-100 to-white rounded-full'></div>
                                <div className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] lg:w-[110px] lg:h-[110px]
                                                rounded-full flex items-center justify-center bg-white 
                                                shadow-md border-[3px] border-gray-200 z-10 overflow-hidden'>
                                    <img src={logo} className='w-[75%] h-[75%] object-contain' alt={name} />
                                </div>
                                <h2 className='mt-3 text-sm sm:text-base md:text-lg font-semibold text-gray-800 z-10'>
                                    {name}
                                </h2>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
