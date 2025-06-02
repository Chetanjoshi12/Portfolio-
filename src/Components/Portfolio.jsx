import React from 'react';
import mongoDb from "../../src/assets/mongodb-icon-2.svg";
import expressjs from "../../src/assets/expressjs.webp";
import grafana from "../../src/assets/Grafana.png";
import javascript from "../../src/assets/js.jpeg";
import podman from "../../src/assets/Podman.png";
import reactLogo from "../../src/assets/React.png";

function Portfolio() {
    const cardItem = [
        {
            id: 1,
            logo: mongoDb,
            name: "MongoDB",
            videoUrl: "https://www.youtube.com/watch?v=ofme2o29ngU",
            codeUrl: "https://github.com/mongodb/node-mongodb-native"
        },
        {
            id: 2,
            logo: expressjs,
            name: "Express.js",
            videoUrl: "https://www.youtube.com/watch?v=L72fhGm1tfE",
            codeUrl: "https://github.com/expressjs/express"
        },
        {
            id: 3,
            logo: grafana,
            name: "Grafana",
            videoUrl: "https://www.youtube.com/watch?v=QwGm5m4AxNA",
            codeUrl: "https://github.com/grafana/grafana"
        },
        {
            id: 4,
            logo: javascript,
            name: "JavaScript",
            videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
            codeUrl: "https://github.com/trekhleb/javascript-algorithms"
        },
        {
            id: 5,
            logo: podman,
            name: "Podman",
            videoUrl: "https://www.youtube.com/watch?v=AB04TJvmTO0",
            codeUrl: "https://github.com/containers/podman"
        },
        {
            id: 6,
            logo: reactLogo,
            name: "React",
            videoUrl: "https://www.youtube.com/watch?v=bMknfKXIFA8",
            codeUrl: "https://github.com/facebook/react"
        }
    ];

    return (
        <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
            <div className="text-4xl font-extrabold text-center mb-10">
                <h1 className='text-gray-800'>Portfolio</h1>
                <span className='text-lg font-semibold text-gray-600'>Featured Technologies</span>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8'>
                {cardItem.map(({ id, logo, name, videoUrl, codeUrl }) => (
                    <div
                        className='bg-gradient-to-br from-gray-100 to-white border-[2px] border-gray-300 rounded-2xl shadow-xl 
                                   hover:shadow-2xl p-6 cursor-pointer transform hover:-translate-y-2 transition-all duration-300 
                                   flex flex-col items-center text-center overflow-hidden'
                        key={id}
                    >
                        <img src={logo} className='w-[120px] h-[120px] rounded-full border-[4px] border-gray-300 mb-4' alt={name} />
                        <div className='mt-2'>
                            <h2 className='text-xl font-bold text-gray-800'>{name}</h2>
                            <p className='text-sm text-gray-600 mt-2 px-4'>Empowering innovation with cutting-edge technology!</p>
                        </div>
                        <div className='flex gap-3 mt-4'>
                            <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                                <button className='bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium 
                                                   shadow-md hover:bg-blue-600 transition-all duration-300'>
                                    Video
                                </button>
                            </a>
                            <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                                <button className='bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium 
                                                   shadow-md hover:bg-green-600 transition-all duration-300'>
                                    Source Code
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
