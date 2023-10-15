export default function Product({ name, image, desc }) {
    return (
        <div className="flex flex-col items-center justify-between w-[300px] h-[470px] md:h-[430px] lg:w-[340px] mb-5 text-[#333]">
            <div className="relative">
                <img
                    src={image}
                    alt="foto-product"
                    className="relative z-50 h-[240px] rounded-xl"
                />
            </div>
            <div className="flex flex-col items-center">
                <div className="mt-12 md:mt-6 flex flex-col items-center justify-center text-center gap-3">
                    <h1 className="text-[22px] text-[#3F6745]">{name}</h1>
                    <h5 className="w-3/4 lg:w-full">{desc}</h5>
                </div>
                <button className="bg-[#3F6745] text-white py-3 px-10 mt-5 rounded-lg">
                    Buy Now
                </button>
            </div>
        </div>
    );
}
