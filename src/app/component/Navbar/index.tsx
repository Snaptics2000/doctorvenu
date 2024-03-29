"use client";
import { useState } from "react";
import Link from "next/link";
import HomeContent from "../Home";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full top-0 shadow-md rounded bg-blue-500 pb-4 pt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <p className="font-semibold text-white font-jost cursor-pointer text-xl animate-bounce">
              Title
            </p>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 gap-6">
          <Link href="/">
            <p className=" cursor-pointer text-white font-semibold font-sm hover:text-black">
              About Dr
            </p>
          </Link>
          <Link href="/about">
            <p className="cursor-pointer text-white font-semibold font-sm hover:text-black">
              Services
            </p>
          </Link>
          <Link href="/contact">
            <p className="cursor-pointer text-white font-semibold font-sm hover:text-black">
              Patient Education+
            </p>
          </Link>
          <Link href="/contact">
            <p className="cursor-pointer text-white font-semibold font-sm hover:text-black">
              Testominals
            </p>
          </Link>
          <Link href="/contact">
            <p className="cursor-pointer text-white font-semibold font-sm hover:text-black">
              Contact Us
            </p>
          </Link>
        </div>
        <div>
          <button
            type="button"
            className="hidden animate-pulse md:inline border-b border-none shadow-lg h-10 w-52 bg-white text-black hover:bg-blue-950 rounded-full mr-4 font-semibold hover:text-white"
          >
            Book Appointment
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className=" focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-500">
          <div className="flex flex-col justify-center items-center space-y-4">
            <Link href="/">
              <p className="cursor-pointer text-white font-semibold font-sm hover:text-black">
                About Dr
              </p>
            </Link>
            <Link href="/about">
              <p className="cursor-pointer text-white font-semibold font-sm hover:text-black">
                Services
              </p>
            </Link>
            <Link href="/contact">
              <p className="cursor-pointer text-white font-semibold font-sm hover:text-black">
                Patient Education+
              </p>
            </Link>
            <Link href="/contact">
              <p className="cursor-pointer text-white font-semibold font-sm hover:text-black">
                Testominals
              </p>
            </Link>
            <Link href="/contact">
              <p className="cursor-pointer text-white font-semibold font-sm hover:text-black">
                Contact Us
              </p>
            </Link>
          </div>
        </div>
      )}
    </nav>
    
    
  );
};

export default Navbar;
