/* eslint-disable react/jsx-no-target-blank */
import { useState, useEffect } from "react";
import model1 from "../assets/Model1.png";
import model2 from "../assets/Model2.png";
import assets2 from "../assets/Logo2.png";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";

export default function Intruduction() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Update the window width when the window is resized
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const isMobile = windowWidth <= 768; // Adjust the breakpoint as needed

    return (
        <div className="xl:ml-10">
            <div className="md:flex gap-14 md:mt-10 lg:gap-0 lg:h-[100vh]">
                <div className="md:justify-center mt-4 w-full text-center ">
                    <img
                        src={assets2}
                        alt="home-photos"
                        className="h-[300px] md:h-[10px] lg:h-[300px] 2xl:h-[500px] lg:ml-20"
                    />
                    <h1 className="text-[35px] leading-[50px] text-[#333] font-bold xl:text-[48px] lg:text-[48px] 2xl:text-[80px] lg:my-[20px] lg:leading-none">
                        Atasi Masalah Kulit Wajah Anda
                    </h1>
                    <h3 className=" text-[15px] text-[#F29949] mt-2 lg:text-[18px] xl:text-[18px 2xl:text-[32px]">
                        Nggak Lagi Ribet Ganti Produk Karena Nggak Cocok.
                    </h3>
                    <div className="flex items-center justify-center gap-3 text-[17px] mt-3 md:text-[20px] lg:text-[25px] lg:mt-5 mb-5">
                        <a
                            href="https://www.instagram.com/cozycosmeticblitar/"
                            target="_blank"
                        >
                            <AiFillInstagram />
                        </a>
                        <a
                            href="https://www.youtube.com/@cozycosmetic"
                            target="_blank"
                        >
                            <AiFillYoutube />
                        </a>
                        <a href="https://wa.me/+6285772321734" target="_blank">
                            <IoLogoWhatsapp />
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61551339453920"
                            target="_blank"
                        >
                            <BsFacebook />
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <img
                        src={isMobile ? model1 : model2}
                        alt="home-photos"
                        className="h-full lg:w-[1200px]"
                    />
                </div>
            </div>
        </div>
    );
}
