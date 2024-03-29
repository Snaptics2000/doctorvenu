"use client"

import Image from "next/image";
import home1 from "../../Images/home1.png";
import home2 from "../../Images/home2.png";
import { HeartPulse } from "lucide-react";
import { motion } from "framer-motion";
import React from 'react';



const HomeContent = () => {
  return (
    <div className="mt-36 w-full md:flex justify-center ">
      <motion.div 
      initial={{y:100,opacity:0}}
      animate={{y:0,opacity:2}}
      transition={{duration:1}}
      className="w-full md:w-2/4 ml-2 md:mr-10">
        <h1 className="text-black text-5xl">
          Empowering Movement, Embracing Wellness
        </h1>
        <p className="text-black pt-4 text-medium">
          Your Orthopedic Journey Begins Here
        </p>
        <div className="pt-10">
          <button className="bg-blue-500  h-12 w-52 text-white rounded-lg shadow-lg hover:bg-white hover:text-black hover:outline hover:border-cyan-500 font-semibold" type="button">
            Get Started Now 
          </button>
        </div>
      </motion.div>
      <div className="pt-10 sm:justify-center md:pt-0 md:flex justify-center">
        <motion.div 
        initial={{y:100,opacity:0}}
        animate={{y:0,opacity:2}}
        transition={{duration:1,delay:0.5}}
        className="w-full sm:w-auto flex justify-center">
        <div>
          <Image src={home1} alt="doctor-image" width="220" height="450" />
          <div className="bg-white border w-64 items-center flex rounded-lg mr-5">
            <div className=" pt-2 pl-2 flex justify-between border-gray-800">
            <HeartPulse size={45} className="text-green-700 mr-4" />
            <p className="text-sm font-semibold mr-2">Acheiving a Better Health Care A Patient At A Time</p>
            </div>
          </div>
          </div>
        </motion.div>
        <motion.div 
        initial={{y:-100,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:1,delay:0.5}}
        className="w-full sm:w-auto flex justify-center pt-4 md:ml-10 md:mt-10 md:pt-10">
          <Image src={home2} alt="doctor-image" width="220" height="450" />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeContent;
