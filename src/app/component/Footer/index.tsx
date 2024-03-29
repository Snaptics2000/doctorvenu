import { Mail, Phone } from "lucide-react";

const Footer = () =>{
    return (
        <div className="bg-blue-500 flex flex-wrap justify-center gap-24 items-center h-[500px] w-full">
            <div className=" flex justify-center gap-24 mt-12">
                <div className="text-white gap-4 mt-12 ">
                    <h1 className="text-2xl font-bold">Title</h1>
                    <div className="flex gap-2 mt-4">
                    <Phone/>
                    <p>1234567890</p>
                    </div>
                    <div className="flex gap-2 mt-4">
                    <Mail/>
                    <p>abcd@gmail.com</p>
                    </div>
                </div>

                <div className="text-white mt-12 ">
                    <h1 className="text-2xl font-bold">Quick Links</h1>
                    <div className="flex">
                    <p className="mt-2">Home</p>
                    </div>
                    <div className="flex">
                    <p className="mt-2">Contact Us</p>
                    </div>
                    <p className="mt-2">Book Appointment</p>
                    <p className="mt-2">Services</p>
                </div>

                <div className="text-white mt-12 gap-4 ">
                    <h1 className="text-2xl font-bold">Working Hours</h1>
                    <div className="gap-4">
                    <p className="mt-2">Monday 09:00AM to 08:00PM</p>
                    <p className="mt-2">Tuesday 09:00AM to 08:00PM</p>

                    <p className="mt-2">Wednesday 09:00AM to 08:00PM</p>

                    <p className="mt-2">Thursday 09:00AM to 08:00PM</p>

                    <p className="mt-2">Friday 09:00AM to 08:00PM</p>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;