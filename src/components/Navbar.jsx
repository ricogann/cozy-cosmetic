import { CiMenuFries } from "react-icons/ci";

export default function Navbar() {
    return (
        <div className="">
            <nav className="md:hidden flex items-center justify-between p-3">
                <CiMenuFries className="font-bold text-black rotate-180" />
                <h1 className="text-[#3F6745] font-bold">Cosmetics</h1>
            </nav>
        </div>
    );
}
