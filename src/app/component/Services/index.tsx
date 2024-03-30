"use client"

import React from "react";
import arthiries from '../../../../public/Servicesimages/arthritis.png'
import Image from "next/image";
import { motion,} from "framer-motion";


const ServicesItems = [
  {
    id: 1,
    imageUrl: arthiries,
    name: "Arthiries",
  },
  {
    id: 2,
    imageUrl: arthiries,
    name: "Ligament tears",
  },
  {
    id: 3,
    imageUrl: arthiries,
    name: "Rotator Cuff Tears",
  },
  {
    id: 4,
    imageUrl: arthiries,
    name: "Lower Back Ache",
  },
  {
    id: 5,
    imageUrl: arthiries,
    name: "Recurrent shoulder",
  },
  {
    id: 6,
    imageUrl: arthiries,
    name: "Spinal Injuries",
  },
  {
    id: 7,
    imageUrl: arthiries,
    name: "Knee Replacements",
  },
  {
    id: 8,
    imageUrl: arthiries,
    name: "Cartilage injuries",
  },
  {
    id: 9,
    imageUrl: arthiries,
    name: "Mensul injuries",
  },
  {
    id: 10,
    imageUrl: arthiries,
    name: "All traumas",
  },
];

const Services = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold ml-10 mt-14">Services</h1>
      <div
      
      className="flex xl:gap-x-40 flex-wrap justify-center  mt-10">
        {ServicesItems.map((item) => (
        <motion.div 
        
        whileHover={{ scale: 1.2, rotate: 0 }}
        whileTap={{
        scale: 0.8,
        rotate: 0,
        borderRadius: "100%"
      }}
          
          key={item.id} className="h-40 mb-10 border gap-4 rounded-lg shadow-md hover:pb-4 hover:bg-blue-400 hover:text-white w-40 text-sm hover:border-cyan-900 cursor-pointer flex justify-center items-center mx-4">
            <div
            className="gap-2">
            <div className="flex justify-center mb-4">
              <Image className="hover:text-white" alt={item.name} src={item.imageUrl} width={30} height={30} />
              </div>
              <div className="flex justify-center items-center">
              <h1 className="text-sm font-bold font-jost">{item.name}</h1>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    
  );
};

export default Services;


