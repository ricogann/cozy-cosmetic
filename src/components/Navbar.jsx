import { useState } from "react";

import { CiMenuFries } from "react-icons/ci";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaQuestion, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { Link } from "react-scroll";

import Logo from "../assets/Logo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="">
            <nav className="md:hidden flex items-center justify-between p-8 mx-5 ">
                <CiMenuFries
                    className="font-bold text-black rotate-180"
                    onClick={() => setIsOpen(!isOpen)}
                />
                <h1 className="text-[#3F6745] font-bold">Cosmetics</h1>
            </nav>
            <div
                className={`${
                    isOpen ? "block transition duration-1000" : "hidden"
                } px-8 py-3 -mt-3 mx-12 bg-[#3f6745] flex flex-col gap-1 rounded-xl`}
            >
                <h1 className="font-semibold text-white">Home</h1>
                <h1 className="font-semibold text-white">Problem</h1>
                <h1 className="font-semibold text-white">Consul</h1>
                <h1 className="font-semibold text-white">FAQ</h1>
                <h1 className="font-semibold text-white">Products</h1>
                <h1 className="font-semibold text-white">Map</h1>
            </div>
            <nav>
                <div
                    className={`hidden fixed bg-[#3F6745] h-screen w-[90px] p-5 pt-8 md:flex md:flex-col md:justify-start lg:justify-between md:items-center`}
                >
                    <div className="flex flex-col items-center gap-2">
                        <img src={Logo} alt="logo" className="h-12" />
                        <h1 className="text-[#F6F4F0] font-semibold">Cozy</h1>
                    </div>

                    <div className="">
                        <div className="pt-2">
                            <div className="group text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md mt-2">
                                <Link
                                    to="homeSection"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <span className="group-hover:hidden text-2xl block float-left">
                                        <GoHomeFill />
                                    </span>
                                    <span className="group-hover:block hidden font-semibold w-full">
                                        Home
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <div className="pt-2">
                            <div className="group text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md mt-2">
                                <Link
                                    to="problemSection"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <span className="group-hover:hidden text-2xl block float-left">
                                        <MdReportProblem />
                                    </span>
                                    <span className="group-hover:block hidden font-semibold">
                                        Problem
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <div className="pt-2">
                            <div className="group text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md mt-2">
                                <Link
                                    to="konsulSection"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <span className="group-hover:hidden text-2xl block float-left">
                                        <BiSolidPhoneCall />
                                    </span>
                                    <span className="group-hover:block hidden font-semibold group-hover:duration-300">
                                        Konsul
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <div className="pt-2">
                            <div className="group text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md mt-2">
                                <Link
                                    to="faqSection"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <span className="group-hover:hidden text-2xl block float-left">
                                        <FaQuestion />
                                    </span>
                                    <span className="group-hover:block hidden font-semibold group-hover:duration-300">
                                        FAQ
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <div className="pt-2">
                            <div className="group text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md mt-2">
                                <Link
                                    to="productSection"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <span className="group-hover:hidden text-2xl block float-left">
                                        <FaShoppingCart />
                                    </span>
                                    <span className="group-hover:block hidden font-semibold group-hover:duration-300">
                                        Product
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <div className="pt-2">
                            <div className="group text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md mt-2">
                                <Link
                                    to="mapSection"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <span className="group-hover:hidden text-2xl block float-left">
                                        <FaMapMarkerAlt />
                                    </span>
                                    <span className="group-hover:block hidden font-semibold group-hover:duration-300">
                                        Map
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
