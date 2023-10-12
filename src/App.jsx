import Home from "./sections/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FAQ from "./sections/FAQ";

export default function App() {
    return (
        <div className="h-full w-full bg-[#F6F4F0] ">
            <div className="flex items-center justify-center">
                <div className="w-3/4">
                    <Navbar />
                    <Home />
                    <FAQ />
                </div>
            </div>
            <Footer />
        </div>
    );
}
