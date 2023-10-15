import Map from "../components/Map";

export default function Alamat() {
    return (
        <div className="gap-5 flex flex-col p-14" id="mapSection">
            <div className="relative">
                <h1 className="text-[30px] text-center text-[#333] font-semibold lg:text-[48px]" >
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
            <div className="justify-center items-center flex flex-col mt-8 mb-8 lg:flex-col " >
                <Map />
                <h3 className="text-[15px] text-center text-[#A0A79A] mt-4 lg:text-[25px] lg:mt-10 lg:mx-24">
                    Merupakan produk perawatan wajah dari Cozy Cosmetic yang
                    terbuat dari bahan alami, aman dan sudah bersertifikat CPKB
                    (Cara Pembuatan Kosmetik yang Baik) dari BPOM.
                </h3>
            </div>
        </div>
    );
}
