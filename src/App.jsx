import Home from "./sections/Home";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <div className="h-full w-full bg-[#f5f4f0] flex items-center justify-center">
            <div className="w-3/4 h-full">
                <Navbar />
                <Home />
            </div>
        </div>
    );
}
