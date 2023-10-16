export default function Testimoni({ name, image, desc }) {
    const handleRoute = () => {
        window.open("https://mtsnuhati.com/tokowa/", "_blank");
    };
    return (
        <div className="flex flex-col items-center justify-between w-[300px] h-[500px] md:h-[430px] lg:w-[340px] mb-5 text-[#333]">



            <div className="flex flex-col items-center">
                <div className="mt-12 md:mt-6 flex flex-col items-center justify-center text-center gap-3">
                <img
                    src={image}
                    alt="foto-product"
                    className="relative z-50 h-[240px] rounded-xl"
                />
                    <h1 className="text-[22px] text-[#3F6745]">{name}</h1>
                    🌟🌟🌟🌟🌟
                    <h5 className="w-3/4 md:w-[80%] lg:w-full">{desc}</h5>
                </div>
            </div>
        </div>
    );
}
