import { AiFillStar } from "react-icons/ai";
import {SiAdguard} from "react-icons/si";
import { GiHummingbird } from "react-icons/gi"
import { MdOutlineHealthAndSafety } from "react-icons/md"

export default function Card() {
    return (
        <div className="p-5 flex flex-col items-center gap-12 mt-5 lg:flex-row">
            {/* <div className="relative">
                <div className="absolute w-[30px] h-[30px] rounded-full bg-[#CDD5CA] z-10"></div>
                <AiFillStar className="relative z-50" />
            </div> */}
            <div className="flex flex-col items-center text-center gap-5 w-full lg:w-1/3">
                <SiAdguard className="w-full h-[50px]" style={{ fill: '#ffa500' }}/>
                <h1 className="font-bold text-[#333] text-[24px]">Terdaftar di BPOM</h1>
                <h1 className="font-bold md:text-[12px]">Sudah terdaftar di BPOM (Badan Pengawas Obat dan Makanan), jadi aman untuk dipakai.</h1>
            </div>
            <div className="flex flex-col items-center text-center gap-5 w-full lg:w-1/3">
                <GiHummingbird className="w-full h-[50px]"style={{ fill: '#ffa500' }}/>
                <h1 className="font-bold text-[#333] text-[24px]">Terbuat dari Walet</h1>
                <h1 className="font-bold md:text-[12px]">Kandungan-kandungan yang ada di dalam produk memiliki bahan dasar burung walet</h1>
            </div>
            <div className="flex flex-col items-center text-center gap-5 w-full lg:w-1/3">
                <MdOutlineHealthAndSafety className="w-full h-[50px]" style={{ fill: '#ffa500' }}/>
                <h1 className="font-bold text-[#333] text-[24px]">Sudah Halal</h1>
                <h1 className="font-bold md:text-[12px]">Semua produk perawatan wajah Cozy Cosmetics sudah Halal, sehingga tidak perlu merasa ragu untuk memakai.</h1>
            </div>


        </div>
    );
}
