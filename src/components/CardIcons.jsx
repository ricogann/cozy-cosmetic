import { BiCheckDouble } from "react-icons/bi";

export default function CardIcons() {
    return (
        <div className="p-5 bg-[#FFFFFF] flex flex-row gap-5">
            {/* <div className="relative">
                <div className="absolute w-[30px] h-[30px] rounded-full bg-[#CDD5CA] z-10"></div>
                <AiFillStar className="relative z-50" />
            </div> */}
            <BiCheckDouble className="h-[50px] w-[50px] " style={{ color: "#F29949" }}/>
            <h5 className="text-[#A0A79A] md:text-[18px] mt-[11px]">
                Rajin membersihkan wajah usai beraktivitas
            </h5>
        </div>
    );
}
