import Button from "../components/Button";
import assets from "../assets/assets-1.png";
import Card from "../components/Card";

import { BsFillPlayFill, BsFillEmojiSmileFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";

export default function Home() {
    return (
        <div className="">
            <div className="md:flex justify-between gap-14 md:mt-10 lg:gap-0">
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-[220px] h-[220px] lg:w-[450px] lg:h-[450px] rounded-full bg-[#E4E4E4] z-10"></div>
                    <img
                        src={assets}
                        alt="home-photos"
                        className="h-[318px] relative z-50 lg:h-[631px]"
                    />
                </div>
                <div className="mt-4 md:w-1/2">
                    <h5 className="text-[15px] text-orange-500 lg:text-[20px]">
                        Normal to oily skin
                    </h5>
                    <h1 className="text-[35px] leading-[50px] text-[#333] font-semibold lg:text-[72px] lg:my-[20px] lg:leading-none">
                        Pourless Liquid Foundation
                    </h1>
                    <h3 className="text-[15px] text-[#A0A79A] mt-2 lg:text-[18px]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                    </h3>
                    <div className="flex items-center gap-5 mt-6 lg:mt-10">
                        <Button />
                        <div className="flex items-center justify-center text-[#3F6745]">
                            <BsFillPlayFill className="text-[25px] lg:text-[28px]" />
                            <h1 className="text-[15px] lg:text-[18px]">
                                How it works
                            </h1>
                        </div>
                    </div>
                    <div className="hidden mt-5 lg:flex lg:items-center lg:gap-10 lg:mt-7 ">
                        <div className="flex items-start justify-start gap-3">
                            <AiFillStar className="text-[29px] mt-3 text-[#F2994A]" />
                            <div className="text-left">
                                <h1 className="text-[32px] font-bold">4,6</h1>
                                <h5 className="text-[18px] text-[#A0A79A]">
                                    Rating
                                </h5>
                            </div>
                        </div>
                        <div className="flex items-start justify-start gap-3">
                            <FaShoppingBag className="text-[29px] mt-3 text-[#F2994A]" />
                            <div className="text-left">
                                <h1 className="text-[32px] font-bold">200+</h1>
                                <h5 className="text-[18px] text-[#A0A79A]">
                                    Product solds
                                </h5>
                            </div>
                        </div>
                        <div className="flex items-start justify-start gap-3">
                            <BsFillEmojiSmileFill className="text-[29px] mt-3 text-[#F2994A]" />
                            <div className="text-left">
                                <h1 className="text-[32px] font-bold">99+</h1>
                                <h5 className="text-[18px] text-[#A0A79A]">
                                    Review
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <div className="relative">
                    <h1 className="text-[30px] text-center text-[#333] font-semibold lg:text-[48px]">
                        Why choose us
                    </h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="120"
                        height="9"
                        viewBox="0 0 154 9"
                        fill="none"
                        className="absolute right-16 md:right-[36%] lg:right-[43%]"
                    >
                        <path
                            d="M2.5 7.00001C34 4.16668 108 -0.199989 152 5.00001"
                            stroke="#3F6745"
                            strokeWidth={4}
                        />
                    </svg>
                    <h5 className="mt-5 text-center text-[#A0A79A] text-[13px] md:text-[16px]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                    </h5>
                </div>
                <div className="flex flex-col gap-3 mt-8 lg:flex-row">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}
