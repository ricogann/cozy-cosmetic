import Button from "../components/Button";
import assets from "../assets/assets-1.png";
import Card from "../components/Card";

import { BsFillPlayFill, BsFillEmojiSmileFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";

export default function Alamat() {
    return (

         <div className="items-center justify-center  ">

                <div className="relative">
                    <h1 className="text-[30px] text-center text-[#333] font-semibold lg:text-[48px]">
                        Alamat
                    </h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="120"
                        height="9"
                        viewBox="0 0 154 9"
                        fill="none"
                        className="absolute right-14 md:right-[36%] lg:right-[45%]"
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
                <div className="flex flex-col gap-3 mt-8 mb-8 lg:flex-row ">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>

            

    );
}
