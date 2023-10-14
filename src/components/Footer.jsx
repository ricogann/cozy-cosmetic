import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";

export default function Footer() {
    return (
        <div className="h-[130px] lg:h-[200px] w-full bg-[#3F6745]">
            <div className="text-white p-6 flex flex-col justify-center items-center gap-2 xl:ml-24">
                <h1 className="font-bold lg:text-[30px]">Cosmetics</h1>
                <div className="flex items-center text-[12px] gap-5 md:text-[15px] lg:text-[20px] lg:gap-8 mt-3">
                    <h1>Home</h1>
                    <h1>About</h1>
                    <h1>Product</h1>
                    <h1>Contact</h1>
                </div>
                <div className="flex justify-center items-center gap-3 lg:mt-5">
                    <a href="https://www.instagram.com/cozycosmeticblitar/">
                        <AiFillInstagram />
                    </a>
                    <a href="https://www.youtube.com/@cozycosmetic">
                        <AiFillYoutube />
                    </a>
                    <a href="">
                        <IoLogoWhatsapp />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61551339453920">
                        <BsFacebook />
                    </a>
                </div>
            </div>
        </div>
    );
}
