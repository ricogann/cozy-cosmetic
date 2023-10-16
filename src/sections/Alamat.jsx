/* eslint-disable react/jsx-no-target-blank */
import Map from "../components/Map";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Alamat() {
    return (
        <div className="gap-5 flex flex-col p-14" id="mapSection">
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
            <div className="justify-center items-center flex flex-col mt-8 mb-8 lg:flex-col ">
                <Map />
                <h3 className="text-[15px] text-center text-[#A0A79A] mt-4 lg:text-[25px] lg:mt-10 md:mx-28 ">
                    Merupakan produk perawatan wajah dari Cozy Cosmetic yang
                    terbuat dari bahan alami, aman dan sudah bersertifikat CPKB
                    (Cara Pembuatan Kosmetik yang Baik) dari BPOM.
                </h3>
                <button className="flex items-center justify-center gap-2 p-3 px-7 w-full bg-[#3F6745] mt-6 text-white rounded-md md:w-[70%] lg:w-[77%]">
                    <AiOutlineShoppingCart className="text-[15px] lg:text-[18px]" />
                    <a
                        href="https://wa.me/+6285772321734"
                        target="_blank"
                        className="text-[15px] lg:text-[18px]"
                    >
                        Konsultasi Sekarang
                    </a>
                </button>
            </div>
        </div>
    );
}
