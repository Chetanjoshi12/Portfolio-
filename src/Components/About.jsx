import React from "react";

function About() {
  return (
    <div name="About"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p className="text-justify">
          Hello! I'm Chetan, a passionate Frontend Developer with a keen eye for
          design and user experience. I specialize in creating visually
          stunning, responsive, and high-performance websites that seamlessly
          blend creativity with functionality. Always eager to learn, I
          continuously explore new technologies to stay ahead in the
          fast-evolving world of web development.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <p className="text-justify">
          I hold a Master’s degree in Economics and a Diploma in Professional
          Accounting. My interest in IT led me to complete a 6-month internship
          at Keen and Able, Noida, where I gained hands-on experience. I later
          worked as a contractor with the same company, further refining my
          technical skills.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-2xl mb-4">
          Skills & Expertise
        </h1>
        <ul className="list-disc list-inside space-y-2 text-black">
          <li>
            <span className="font-semibold">Frontend Development:</span> HTML,
            CSS, JavaScript, React.js
          </li>
          <li>
            <span className="font-semibold">Backend & Databases:</span> Node.js,
            MongoDB
          </li>
          <li>
            <span className="font-semibold">DevOps & Monitoring:</span> Linux,
            Podman, Grafana, OpenNMS Horizon
          </li>
          <li>
            <span className="font-semibold">Software Testing:</span> Robot
            Framework, Selenium, Manual Testing
          </li>
        </ul>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <p className="text-justify">
          With expertise in web development and DevOps, I have worked on
          building interactive web applications, system performance monitoring,
          and automated testing. I enjoy problem-solving, working in
          collaborative environments, and continuously learning to adapt to new
          challenges.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <p className="text-justify">
          Developed a To-Do List web application, designed as an issue-tracking
          system, improving task management and workflow efficiency.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p className="text-justify">
          My mission is to create intuitive, scalable, and impactful digital
          solutions that enhance user experiences. I am committed to continuous
          learning, innovation, and excellence, aiming to contribute
          meaningfully to the IT sector while staying ahead in emerging
          technologies.
        </p>
      </div>
    </div>
  );
}

export default About;
