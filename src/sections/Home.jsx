import Button from "../components/Button";
import assets from "../assets/Bundle.png";
import Card from "../components/Card";

import { BsFillEmojiSmileFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";

import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";

export default function Home() {
    return (
        <ScrollAnimation
            animateIn="animate__animated animate__fadeIn"
            animateOnce={true}
        >
            <div className="xl:ml-24 my-8">
                <div className="md:flex justify-between gap-14 md:gap-6 lg:gap-14 md:mt-10 md:mb-16">
                    <div className="relative flex items-center justify-center">
                        <div className="absolute w-[220px] h-[220px] lg:w-[450px] lg:h-[450px] rounded-full bg-[#E4E4E4] z-10"></div>
                        <img
                            src={assets}
                            alt="home-photos"
                            className="h-[318px] md:h-[355px]  relative z-50 lg:h-[500px] rounded-xl"
                        />
                    </div>
                    <div className="mt-4 md:w-[50%] md:mr-10">
                        <h5
                            id="konsulSection"
                            className="text-[15px] text-orange-500 lg:text-[20px] "
                        >
                            MEMPERKENALKAN
                        </h5>
                        <h1 className="text-[52px] md:text-[45px] leading-[50px] text-[#3F6745] font-semibold lg:text-[100px] lg:my-[20px] lg:leading-none ">
                            Cozy Cosmetics
                        </h1>
                        <h3 className="text-[15px] text-[#A0A79A] mt-2 lg:text-[18px]">
                            Merupakan produk perawatan wajah dari Cozy Cosmetic
                            yang terbuat dari bahan alami, aman dan sudah
                            bersertifikat CPKB (Cara Pembuatan Kosmetik yang
                            Baik) dari BPOM.
                        </h3>
                        <div className="flex items-center gap-5 mt-6 lg:mt-10">
                            <Button />
                        </div>
                        <div className="hidden mt-5 lg:flex lg:items-center lg:gap-10 lg:mt-7 ">
                            <div className="flex items-start justify-start gap-3">
                                <AiFillStar className="text-[29px] mt-3 text-[#F2994A]" />
                                <div className="text-left">
                                    <h1 className="text-[32px] font-bold">
                                        4,6
                                    </h1>
                                    <h5 className="text-[18px] text-[#A0A79A]">
                                        Rating
                                    </h5>
                                </div>
                            </div>
                            <div className="flex items-start justify-start gap-3">
                                <FaShoppingBag className="text-[29px] mt-3 text-[#F2994A]" />
                                <div className="text-left">
                                    <h1 className="text-[32px] font-bold">
                                        200+
                                    </h1>
                                    <h5 className="text-[18px] text-[#A0A79A]">
                                        Product solds
                                    </h5>
                                </div>
                            </div>
                            <div className="flex items-start justify-start gap-3">
                                <BsFillEmojiSmileFill className="text-[29px] mt-3 text-[#F2994A]" />
                                <div className="text-left">
                                    <h1 className="text-[32px] font-bold">
                                        99+
                                    </h1>
                                    <h5 className="text-[18px] text-[#A0A79A]">
                                        Review
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 md:mr-10 lg:mr-0 xl:flex xl:flex-col xl:items-center xl:justify-center xl:mb-28">
                    <div className="relative">
                        <h1 className="text-[15px] text-center font-semibold lg:text-[20px] text-orange-500">
                            MENGAPA HARUS MEMILIH
                        </h1>
                        <h1 className="text-[36px] mt-4 text-center text-[#333] font-semibold lg:text-[48px]">
                            Cozy Cosmetics
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
                    </div>
                    <div className="flex flex-col gap-3 mt-8 lg:flex-row">
                        <Card />
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    );
}
