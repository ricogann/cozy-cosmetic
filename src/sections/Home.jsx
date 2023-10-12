import Button from "../components/Button";
import assets from "../assets/assets-1.png";
import Card from "../components/Card";

import { BsFillPlayFill } from "react-icons/bs";

export default function Home() {
    return (
        <div className="mb-20 ">
            <div className="md:flex justify-center gap-14 md:mt-10">
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-[220px] h-[220px] rounded-full bg-[#E4E4E4] z-10"></div>
                    <img
                        src={assets}
                        alt="home-photos"
                        className="h-[318px] relative z-50"
                    />
                </div>
                <div className="mt-4 md:w-1/2">
                    <h5 className="text-[15px] text-orange-500">
                        Normal to oily skin
                    </h5>
                    <h1 className="text-[35px] leading-[50px] font-semibold">
                        Pourless Liquid Foundation
                    </h1>
                    <h3 className="text-[15px] text-[#A0A79A] mt-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                    </h3>
                    <div className="flex items-center gap-5 mt-5">
                        <Button />
                        <div className="flex items-center justify-center text-[#3F6745]">
                            <BsFillPlayFill className="text-[25px]" />
                            <h1 className="text-[15px]">How it works</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <div className="relative">
                    <h1 className="text-[30px] text-center font-semibold">
                        Why choose us
                    </h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="120"
                        height="9"
                        viewBox="0 0 154 9"
                        fill="none"
                        className="absolute right-16 md:right-[36%]"
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
                <div className="flex flex-col gap-3 mt-8">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}
