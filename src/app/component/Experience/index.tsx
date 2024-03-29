"use client"

import Image from "next/image";
import experience from "../../Images/experience.png";
import Orthoscopies from "../../Images/Orthoscopies.png";
import doctorImage from "../../Images/doctorimage.png";
import {
  ActivityIcon,
  Check,
  CheckIcon,
  EyeIcon,
  File,
  FileHeartIcon,
  HeartPulse,
  LucideHospital,
} from "lucide-react";
import { motion,} from "framer-motion";

const Doctordetails = [
  {
    id: 1,
    imageUrl: Orthoscopies,
    title: "1000+ Orthoscopies",
   
  },
  {
    id: 2,
    imageUrl: Orthoscopies,
    title: "1000+ Surgeries",
   
  },
  {
    id: 1,
    imageUrl: Orthoscopies,
    title: "3000+ Trauma Cases",
   
  },
];

const WorkingItems = [
  {
    id: 1,
    icon: File,
    title: "Appointment",
    description:
      "If you are going to use a passage of Ipsum, you need to anything for hidden.",
  },
  {
    id: 2,
    icon: LucideHospital,
    title: "Get Consultant",
    description:
      "If you are going to use a passage of Ipsum, you need to anything for hidden.",
  },
  {
    id: 3,
    icon: HeartPulse,
    title: "Get Care & Relief",
    description:
      "If you are going to use a passage of Ipsum, you need to anything for hidden.",
  },
];

const Experience = () => {
  return (
    <>
      <div className="mt-14 md:flex justify-center">
        <div className="ml-4">
          <Image alt="experience" src={experience} width={700} height={200} />
        </div>
        <div className="md:mt-28 sm:ml-2 sm:mr-2 top-0 pb-4 md:relative md:z-0 right-20 border shadow-lg bg-gray-100 rounded-lg">
          <div className="pl-6 pt-2">
            <h1 className="text-blue-500 font-bold text-2xl">
              15+ Years Of Experience
            </h1>
            <h1 className="font-bold pt-2 text-2xl">
              We're Always Ensure Medical Treatment
            </h1>
            <p className="pt-4 text-sm text-gray-500">If you are going to use a passage of Ipsum, you need to sure there isn't anything embarrassing hidden.</p>
            <div className="ml-2 mt-2 ">
              {Doctordetails.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center  mt-8 rounded-full"
                >
                  <div className="w-20 pt-2 h-20 rounded-full">
                    <Image
                      className="rounded-full bg-white pt-2 pb-2"
                      src={item.imageUrl}
                      alt="Orthoscopies"
                      width={700}
                      height={200}
                    />
                  </div>
                  <div className="pl-4">
                    <p className="pt-2 pl-2 text-2xl font-bold">{item.title}</p>
                    <div className="pl-2">
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-36 flex justify-center items-center">
        <div className="">
          <div className="flex flex-col justify-center items-center">
            <p className="text-[#2AA7FF]  text-sm">Working Process</p>
            <h1 className="text-5xl text-[#1B3C74] font-semibold pt-2">How We Work ?</h1>
          </div>
          <div className="flex flex-wrap justify-center  mb-2">
            {WorkingItems.map((dataItems) => (
              <>
                <div
                  key={dataItems.id}
                  className=" pt-12 flex flex-col justify-center items-center pl-4 pr-4"
                >
                  <div className="bg-[#CCEAFF] rounded-full w-9 h-9">
                    <dataItems.icon className="relative top-3 left-4" />
                  </div>
                  <div className="flex flex-col items-center pt-4">
                    <h1 className="text-2xl font-semibold text-[#1B3C74]">
                      {dataItems.title}
                    </h1>
                    <p className="text-sm w-96 text-center pt-4 text-gray-400">
                      If you are going to use a passage of Ipsum, you need to
                      anything for hidden.
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="md:flex justify-evenly md:h-96 mt-6 mx-2 md:mx-12 border rounded-lg bg-[#2AA7FF]">
        <div className="md:mt-12 md:ml-16 md:w-1/2">
          <div className="gap-1">
            <h1 className="text-center md:text-left text-2xl font-bold text-white">
              Need Emergency?
            </h1>
            <h1 className="text-center md:text-left pt-6 text-white text-5xl md:w-full">
              Looking For The Best Medical Solutions?
            </h1>
            <button
              className="mt-8 mx-auto md:mx-0 h-10 w-36 rounded-lg hover:bg-[#2AA7FF] hover:outline hover:text-white shadow-lg text-sm bg-white block"
              type="button"
            >
              Contact With Us
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div
            style={{ backgroundSize: "cover" }}
            className="bg-[url('https://medinik.themepreview.xyz/medinik-three/wp-content/uploads/sites/4/2022/04/shape-2-1.png')]"
          >
            <Image
              className="ml-20  mt-4 md:mb-6 md:ml-32 md:mt-10 border-b-2 rounded-full border-[#2AA7FF]"
              src={doctorImage}
              alt="doctor-log"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>

      <h1 className="text-center text-5xl text-[#1B3C74] pt-12">
        About Doctor
      </h1>

      <div className="md:flex justify-evenly border shadow-lg  rounded-lg md:mr-12 mt-6 md:ml-12">
        <div className="md:w-1/2">
          <Image
            className="pt-4 mx-auto md:mx-0 ml-4"
            src={doctorImage}
            alt="doctor-logo"
            height={400}
            width={400}
          />
        </div>
        <div className="md:w-1/2 md:pl-4 md:pt-24">
          <div className="text-center mb-12">
            <h1 className="font-bold text-3xl text-[#1B3C74] mt-4 md:mt0">
              Dr.Venu Madhav
            </h1>
          </div>
          <h1 className="text-center md:text-left font-bold text-2xl">
            Mission:
          </h1>
          <p className="text-sm font-semibold text-gray-500 pl-4 pt-2">
            To provide personalized, compassionate orthopedic care, restoring
            mobility and enhancing quality of life.
          </p>
          <h1 className="text-center md:text-left font-bold text-2xl mt-4">
            Vision:
          </h1>
          <p className="text-sm font-semibold text-gray-500 pl-4 pt-2">
            To be a beacon of excellence in orthopedic healthcare, setting
            standards for innovation and patient-centered treatment.
          </p>
          <div className="md:flex justify-center md:gap-2 mt-6">
            <div className="flex justify-center">
              <CheckIcon size={30} />
              <p className="pl-2 font-semibold">Orthopedic Excellence</p>
            </div>
            <div className="flex justify-center">
              <CheckIcon />
              <p className="pl-2 font-semibold">Sport Surgeon</p>
            </div>
            <div className="flex justify-center">
              <CheckIcon />
              <p className="pl-2 font-semibold">Arthroscopy Expertise</p>
            </div>
            <div className="flex justify-center">
              <CheckIcon />
              <p className="pl-2 font-semibold">15+ years of experience</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center text-5xl text-[#1B3C74] pt-12">
        Introduce Clinic
      </h1>
      <div className="mt-12 flex flex-wrap justify-center">
        <motion.div
        whileHover={{ scale: 1.2, rotate: 0 }}
        whileTap={{
        scale: 0.8,
        rotate: 0,
        borderRadius: "100%"
      }}
        
        
        className="ml-4 mb-6 w-72 flex justify-center items-center h-32 hover:bg-blue-400  shadow-md border rounded-lg">
          <div className="flex-col justify-center mb-6 mt-6 ml-6">
          <FileHeartIcon className="ml-20"/>
          <p className="mt-2 font-semibold text-2xl">State of Art Facility</p>
          </div>
        </motion.div>
        <motion.div 
        whileHover={{ scale: 1.2, rotate: 0 }}
        whileTap={{
        scale: 0.8,
        rotate: 0,
        borderRadius: "100%"
      }}
        
        className="ml-4 mb-6 w-72 flex justify-center items-center h-32 shadow-md hover:bg-blue-400  border rounded-lg">
          <div className="mt-6 ml-6 mb-6">
          <ActivityIcon className="ml-20"/>
          <p className="mt-2 font-semibold text-2xl">Personalized Care</p>
          </div>
        </motion.div>
        <motion.div 
        whileHover={{ scale: 1.2, rotate: 0 }}
        whileTap={{
        scale: 0.8,
        rotate: 0,
        borderRadius: "100%"
      }}
        
        className="ml-4  mb-6 w-72 flex justify-center items-center h-32 shadow-md hover:bg-blue-400 rounded border-lg">
          <div className="mt-6 mb-6">
          <FileHeartIcon className="ml-24"/>
          <p className="mt-2 font-semibold text-2xl">Innovative Treatments</p>
          </div>
        </motion.div>
        <motion.div 
        whileHover={{ scale: 1.2, rotate: 0 }}
        whileTap={{
        scale: 0.8,
        rotate: 0,
        borderRadius: "100%"
      }}
        
        className="ml-4 mb-6 w-72 flex justify-center items-center h-32 shadow-md hover:bg-blue-400 border rounded-lg">
          <div className="mt-6 mb-6">
          <FileHeartIcon className="ml-24"/>
          <p className="mt-2 font-semibold text-2xl">Patient Empowerment</p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Experience;
