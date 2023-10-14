import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Button() {
    return (
        <button className="flex items-center gap-2 p-3 px-7 bg-[#3F6745] text-white rounded-md">
            <AiOutlineShoppingCart className="text-[15px] lg:text-[18px]" />
            <h1 className="text-[15px] lg:text-[18px]">Konsultasi Sekarang</h1>
        </button>
    );
}
