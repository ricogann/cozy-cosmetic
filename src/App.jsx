import Home from "./sections/Home";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <div className="h-full w-full bg-[#F6F4F0] flex items-center justify-center">
            <div className="w-3/4">
                <Navbar />
                <Home />
            </div>
        </div>
    );
}
