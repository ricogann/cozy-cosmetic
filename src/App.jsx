import {
    Home,
    Alamat,
    FAQ,
    Products,
    Intruduction,
    Problem,
    Souvenir
} from "./sections/index";
import { Footer, Navbar } from "./components/index";



export default function App() {
    return (
        <div className="h-full w-full bg-[#F6F4F0] overflow-hidden">
            <div className="flex flex-col items-center justify-center">
                <div className="w-full">
                    <Navbar />
                </div>
                <div className="flex items-center justify-center md:justify-end md:mr-10 lg:items-center lg:justify-center lg:mr-0">
                    <div className="w-3/4" id="homeSection">
                        <Intruduction />
                    </div>
                </div>
                <div className="flex items-center justify-center md:justify-end md:mr-10 lg:items-center lg:justify-center lg:mr-0 bg-[#ECEBE6]">
                    <div className="w-3/4">
                        <Problem />
                    </div>
                </div>
                <div className="flex items-center justify-center md:justify-end md:mr-10 lg:items-center lg:justify-center lg:mr-0">
                    <div className="w-3/4" >
                        <Home />
                    </div>
                </div>
                <div className="bg-[#ECEBE6] w-full items-center justify-center flex">
                <div className="w-3/4" >
                    <FAQ />
                </div>
                </div>
                <div className="w-3/4 md:ml-32" >
                    <Products />
                </div>
                <div className="flex items-center justify-center md:ml-28 bg-[#ECEBE6] w-screen">
                    <div className="" >
                        <Alamat />
                    </div>
                </div>
                <div className="w-3/4 md:ml-32" >
                    <Souvenir />
                </div>
            </div>
            <Footer />
        </div>
    );
}
