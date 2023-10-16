/* eslint-disable react/jsx-no-target-blank */
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";

export default function Footer() {
    return (
        <div className="h-[130px] lg:h-[200px] w-full bg-[#3F6745]">
            <div className="text-white p-6 flex flex-col justify-center items-center gap-2 md:ml-24">
                <h1 className="font-bold mt-4 text-[20px] lg:text-[30px]">
                    Cozy Cosmetics
                </h1>

                <div className="flex justify-center items-center gap-3 lg:mt-5 lg:gap-5">
                    <a
                        href="https://www.instagram.com/cozycosmeticblitar/"
                        target="_blank"
                        className="lg:text-[30px]"
                    >
                        <AiFillInstagram />
                    </a>
                    <a
                        href="https://www.youtube.com/@cozycosmetic"
                        target="_blank"
                        className="lg:text-[30px]"
                    >
                        <AiFillYoutube />
                    </a>
                    <a
                        href="https://wa.me/+6285772321734"
                        target="_blank"
                        className="lg:text-[30px]"
                    >
                        <IoLogoWhatsapp />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=61551339453920"
                        target="_blank"
                        className="lg:text-[30px]"
                    >
                        <BsFacebook />
                    </a>
                </div>
            </div>
        </div>
    );
}
