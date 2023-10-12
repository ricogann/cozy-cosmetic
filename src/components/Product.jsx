export default function Product({ name, image, desc }) {
    return (
        <div className="flex flex-col items-center justify-center w-[300px] lg:w-[340px] mb-5">
            <div className="relative">
                <div className="hidden md:block absolute w-[250px] h-[200px] bg-[#D2D8CD] -skew-x-12 z-10 top-16 -left-8"></div>
                <img
                    src={image}
                    alt="foto-product"
                    className="relative z-50 h-[240px]"
                />
            </div>
            <div className="mt-12 flex flex-col items-center justify-center text-center gap-3">
                <h1 className="text-[22px] text-[#3F6745]">{name}</h1>
                <h5 className="w-3/4 lg:w-full">{desc}</h5>
            </div>
            <button className="bg-[#3F6745] text-white py-3 px-10 mt-5 rounded-lg">
                Buy Now
            </button>
        </div>
    );
}
