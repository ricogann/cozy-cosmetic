import Home from "./sections/Home";
import Alamat from "./sections/Alamat";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FAQ from "./sections/FAQ";
import Products from "./sections/Products";
import Intruduction from "./sections/Intruduction";
import Problem from "./sections/Problem";

export default function App() {
    return (
        <div className="h-full w-full bg-[#F6F4F0] ">
            <div className="flex flex-col items-center justify-center">
                <div className="w-3/4">
                    <Navbar />
                </div>
                <div className="flex items-center justify-center">
                    <div className="w-3/4">
                        <Intruduction />
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="w-3/4">
                        <Problem />
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="w-3/4">
                        <Home />
                    </div>
                </div>
                <div className="w-3/4">
                    <FAQ />
                    <Products />
                </div>
                <div className="flex items-center justify-center">
                    <div className="w-3/4">
                        <Alamat />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
