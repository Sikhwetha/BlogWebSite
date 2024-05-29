import React from "react";
import mulanga from "../assets/about.jpg";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";


const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-center ">
        <div className=" bg-black h-[400px]">
          <img src={mulanga} alt="about image" className="h-[400px] w-full" />
        </div>
        <div className=" md:w-6/12  p-5">
          <h1 className="text-2xl md:text-3xl font-bold text-start  mb-5 text-black">
            About <span className="text-orange-500">Us</span>
          </h1>
          <h3 className="font-bold text-start mb-4">
            Devleloper Frontend <span className="text-orange-500">&</span>{" "}
            backend
          </h3>
          <p className="text-start">
            Welcome to our digital innovation hub! As a proficient full-stack
            developer, I specialize in crafting seamless, dynamic, and
            user-friendly web experiences using React for the frontend and
            Django for the backend. With a deep passion for technology and a
            commitment to excellence, I bring your visions to life by merging
            cutting-edge design with robust functionality. Whether you're
            looking to build a sleek single-page application or a complex web
            platform, I am dedicated to delivering high-quality solutions that
            drive engagement and growth. Let's collaborate to transform your
            ideas into reality!
          </p>
          <div >
            <h1 className="text-2xl md:text-3xl font-bold text-start  mb-5 text-black capitalize mt-4">my experiences</h1>
            <div className="md:flex  mt-4 ">
            <p className=" flex font-bold items-center"><FaReact className="text-2xl text-orange-600 mr-2 shadow-lg" />React</p>
            <p className=" flex font-bold items-center"><IoLogoJavascript   className="text-2xl text-orange-600 mr-2 shadow-lg" />Javascript</p>
            <p className=" flex font-bold items-center"><FaPython   className="text-2xl text-orange-600 mr-2 shadow-lg"/>Python</p>
            <p className=" flex font-bold items-center"><SiDjango  className="text-2xl text-orange-600 mr-2 shadow-lg" />Django</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
