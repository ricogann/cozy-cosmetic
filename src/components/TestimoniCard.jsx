import { BsPerson } from "react-icons/bs";

export default function Testimoni({ name, desc }) {
    return (
        <div className="w-[280px] h-[280px] md:h-[250px] lg:w-[350px] mb-5 text-[#333]">
            <div className="flex flex-col items-center">
                <div className="mt-12 md:mt-6 flex flex-col text-center gap-3 p-1">
                    <div className="flex gap items-center gap-5">
                        <div className="rounded-full">
                            <BsPerson className="text-[40px]" />
                        </div>
                        <div className="">
                            <h1 className="text-[22px] text-left text-[#3F6745]">
                                {name}
                            </h1>
                            🌟🌟🌟🌟🌟
                        </div>
                    </div>
                    <div className="">
                        <h5 className="w-full text-left">{desc}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
