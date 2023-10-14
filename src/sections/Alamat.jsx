import Button from "../components/Button";
import assets from "../assets/assets-1.png";
import Card from "../components/Card";
import Map from "../components/Map";

import { BsFillPlayFill, BsFillEmojiSmileFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";

export default function Alamat() {
    return (

         <div className="h-[100vh] mt-15 gap-5 flex flex-col">

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
                </div>
                <div className="justify-center items-center flex flex-col w-[800px] mt-8 mb-8 lg:flex-col ">
                    <Map />
                     <h3 className="text-[15px] text-[#A0A79A] mt-2 lg:text-[18px]">
                        Merupakan produk perawatan wajah dari Cozy Cosmetic yang terbuat dari bahan alami, aman dan sudah bersertifikat CPKB (Cara Pembuatan Kosmetik yang Baik) dari BPOM.
                    </h3>
                </div>
            </div>

            

    );
}
