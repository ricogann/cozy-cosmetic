import Button from "../components/Button";
import assets from "../assets/Model.png";
import assets2 from "../assets/Logo2.png"
import Card from "../components/Card";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";


export default function Intruduction() {
    return (
        <div className="">
            <div className="md:flex justify-between gap-14 md:mt-10 lg:gap-0 lg:h-[100vh]" >
                <div className="mt-4 w-full">
                    <img
                        src={assets2}
                        alt="home-photos"
                        className="h-[300px] md:h-[10px] lg:h-[300px] "
                    />
                    <h1 className="text-[35px] leading-[50px] text-[#333] font-bold xl:text-[48px] lg:text-[48px] 2xl:text-[90px] lg:my-[20px] lg:leading-none">
                        Atasi Masalah Kulit Wajah Anda
                    </h1>
                    <h3 className="text-[15px] text-[#F29949] mt-2 lg:text-[18px] xl:text-[18px 2xl:text-[32px]">
                        Nggak Lagi Ribet Ganti Produk Karena Nggak Cocok.
                    </h3>
                     <div className="flex items-center gap-3 text-[17px] mt-3 md:text-[20px] lg:text-[25px] lg:mt-5">
                    <a href=""><AiFillInstagram /></a>
                    <a href=""><IoLogoWhatsapp /></a>
                    <a href=""><BsFacebook /></a>
                    </div>
                </div>
                <div className="items-center justify-center">
                    <img
                        src={assets}
                        alt="home-photos"
                        className=" h-full lg:w-[1262px]"
                    />
                </div>
            </div>
        </div>
    );
}
