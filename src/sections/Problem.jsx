import CardIcons from "../components/CardIcons";

export default function Problem() {
    return (
        <div className="md:flex justify-between gap-14 my-12 md:my-18 lg:gap-0 lg:h-screen xl:ml-24">
            <div className="md:justify-center w-full text-center flex flex-col gap-5">
                <h1 className="text-[22px] leading-[50px] text-[#F29949] font-bold xl:text-[24px] lg:text-[24px] 2xl:text-[90px] lg:my-[20px] lg:leading-none">
                    AMBIL TINDAKAN SEGERA!
                </h1>
                <h3 className="text-[18px] font-semibold text-[#3F6745] mt-2 lg:text-[36px] xl:text-[36px] 2xl:text-[32px]">
                    Sebelum masalah kulit wajah semakin bertambah dan susah
                    diatasi.
                </h3>
                <h4 className=" text-[15px] text-[#333] mt-2 lg:text-[18px] xl:text-[18px] 2xl:text-[32px]">
                    Untuk membuat kulit wajah bebas masalah bisa dengan beberapa
                    cara. Misalnya
                </h4>
                <div className="flex flex-col gap-2 lg:flex-row lg:gap-10">
                    <div className="flex flex-col gap-2">
                        <CardIcons />
                        <CardIcons />
                    </div>
                    <div className="flex flex-col gap-2">
                        <CardIcons />
                        <CardIcons />
                    </div>
                </div>
                <h3 className="text-[18px] font-semibold text-[#3F6745] mt-2 lg:text-[36px] xl:text-[18px 2xl:text-[32px]">
                    Beruntungnya saat ini sudah ada produk perawatan wajah yang
                    bisa jadi solusi
                </h3>
            </div>
        </div>
    );
}
