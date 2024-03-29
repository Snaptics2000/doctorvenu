"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FormHTMLAttributes } from 'react';

import Image from "next/image";
import testominal from "../../Images/testominal.svg";
import { CalendarDaysIcon, MailIcon, StarIcon, TimerIcon, UserIcon } from "lucide-react";
import sideicon from "../../Images/sideimage.png";
import appointmentimage from "../../Images/appointment.png";
import { Input } from "@/components/ui/input";

const Testominals:React.FC = () => {
  return (
    <>
      <div className="text-center mt-12">
        <h1 className="text-blue-600 font-bold text-lg">Testominals</h1>
        <h1 className="text-3xl text-[#1B3C74] font-bold">
          What Our Patients Says
        </h1>
        <div className="flex justify-center items-center  mt-4">
          <div className="max-w-screen-lg">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <div className="border shadow-md rounded-lg">
                    <div className="text-center mb-12">
                      <div className="flex justify-center">
                        <Image
                          className="rounded-full mt-2"
                          src={testominal}
                          alt="tetominal-logo"
                          width={100}
                          height={200}
                        />
                      </div>
                      <div className="flex gap-2 justify-center  mt-4">
                        <StarIcon fill="yellow" className="text-yellow-500" />
                        <StarIcon fill="yellow" className="text-yellow-500" />
                        <StarIcon fill="yellow" className="text-yellow-500" />
                        <StarIcon fill="yellow" className="text-yellow-500" />
                        <StarIcon fill="white" className="text-yellow-500" />
                      </div>
                      <p className="">
                        “ Lorem ipsum dolor sitesd amet, consectetur adipisi
                        cing elit, sed does a eiusmod tempor incididunt ut
                        labore et dolore magna the aliqua for this. A enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip commodo consequ.”
                      </p>
                      <h1 className="mt-2 font-semibold">Dev Smith</h1>
                      <h1 className="mt-2 font-bold text-2xl text-[#1B3C74]">
                        UI/UX Designer
                      </h1>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="border shadow-md rounded-lg">
                    <div className="text-center mb-12">
                      <div className="flex justify-center">
                        <Image
                          className="rounded-full mt-2"
                          src={testominal}
                          alt="tetominal-logo"
                          width={100}
                          height={200}
                        />
                      </div>
                      <div className="flex gap-2 justify-center  mt-4">
                        <StarIcon fill="yellow" className="text-yellow-500" />
                        <StarIcon fill="yellow" className="text-yellow-500" />
                        <StarIcon fill="yellow" className="text-yellow-500" />
                        <StarIcon fill="yellow" className="text-yellow-500" />
                        <StarIcon fill="white" className="text-yellow-500" />
                      </div>
                      <p className="">
                        “ Lorem ipsum dolor sitesd amet, consectetur adipisi
                        cing elit, sed does a eiusmod tempor incididunt ut
                        labore et dolore magna the aliqua for this. A enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip commodo consequ.”
                      </p>
                      <h1 className="mt-2 font-semibold">Dev Smith</h1>
                      <h1 className="mt-2 font-bold text-2xl text-[#1B3C74]">
                        UI/UX Designer
                      </h1>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="border shadow-md rounded-lg">
                    <div className="text-center mb-12">
                      <div className="flex justify-center">
                        <Image
                          className="rounded-full mt-2"
                          src={testominal}
                          alt="tetominal-logo"
                          width={100}
                          height={200}
                        />
                      </div>
                      <div className="flex gap-2 justify-center  mt-4">
                        <StarIcon fill="yellow" className="text-yellow-500" />
                        <StarIcon fill="yellow" className="text-yellow-500" />
                        <StarIcon fill="yellow" className="text-yellow-500" />
                        <StarIcon fill="yellow" className="text-yellow-500" />
                        <StarIcon fill="Yellow" className="text-yellow-500" />
                      </div>
                      <p className="">
                        “ Lorem ipsum dolor sitesd amet, consectetur adipisi
                        cing elit, sed does a eiusmod tempor incididunt ut
                        labore et dolore magna the aliqua for this. A enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip commodo consequ.”
                      </p>
                      <h1 className="mt-2 font-semibold">Dev Smith</h1>
                      <h1 className="mt-2 font-bold text-2xl text-[#1B3C74]">
                        UI/UX Designer
                      </h1>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
      <div className="mt-32 flex justify-between">
        <div className="bg-blue-500 hidden  rounded-lg w-1/2 h-80 md:flex">
          <div>
            <Image
              className="pb-10 bg-transparent relative bottom-5"
              src={sideicon}
              alt="side"
              width={200}
              height={200}
            />
          </div>
          <div className="">
            <Image
              className="relative bottom-16 ml-24 p-2"
              src={appointmentimage}
              alt="logo"
              height={300}
              width={300}
            />
          </div>
        </div>
        <div className="ml-16 w-2/3 items-center mr-12 mb-6 border rounded-lg shadow-lg">
          <div className="text-center flex justify-center mb-2 mt-2 bg-[#1b3c74] text-white rounded-lg h-24">
            <h1 className="text-2xl font-bold  mt-8 ">Book An Appointment</h1>
          </div>
          <form className="mt-2">
          <div className="w-full">
            <Select>
              <SelectTrigger className="w-11/12 ml-4 mr-6 ">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Medicine</SelectItem>
                <SelectItem value="dark">Neurologist</SelectItem>
                <SelectItem value="system">Orthopadics</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full mt-6">
            <Select>
              <SelectTrigger className="w-11/12 p-4 mr-6 ml-4 cursor-pointer">
                <SelectValue placeholder="Choose a Doctor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Dr.Venu Madhav</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-11/12 mt-6 ml-4  border rounded-lg hover:outline flex">
          <input type="text" placeholder="Name" className="border-none outline-none p-2 w-full"/>
          <UserIcon className="pt-2 mt-1"/>
          </div>

          <div className="w-11/12 mt-6 ml-4 hover:border-1  hover:outline  border rounded-lg flex">
          <input type="Emil" placeholder="Email" className="border-none outline-none p-2 w-full"/>
          <MailIcon className="pt-2 mt-1"/>
          </div>

          <div className="w-11/12 mt-6 ml-4 hover:outline  border rounded-lg flex">
          <input type="date" placeholder="Date" className="border-none outline-none p-2 w-full"/>
          </div>

          <div className="w-11/12 mb-6 mt-6 ml-4 hover:outline  border rounded-lg flex">
          <input type="text" placeholder="Time" className="border-none outline-none p-2 w-full"/>
          <TimerIcon className="pt-2 mt-1"/>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Testominals;
