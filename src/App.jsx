import {
    Home,
    Alamat,
    FAQ,
    Products,
    Intruduction,
    Problem,
    Souvenir,
} from "./sections/index";
import { Footer, Navbar } from "./components/index";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";

export default function App() {
    return (
        <div className="h-full w-full bg-[#F6F4F0] overflow-hidden">
            <div className="flex flex-col items-center justify-center">
                <div className="w-full">
                    <Navbar />
                </div>
                <div className="animate__animated animate__bounceInDown flex items-center justify-center md:justify-end md:mr-10 lg:items-center lg:justify-center lg:mr-0">
                    <div className="w-3/4 lg:ml-44" id="homeSection">
                        <Intruduction />
                    </div>
                </div>
                <div className="flex items-center justify-center md:justify-end md:pr-20 lg:items-center lg:justify-center lg:mr-0 w-full bg-[#ECEBE6]">
                    <div className="w-3/4 lg:ml-28">
                        <ScrollAnimation
                            animateIn="animate__animated animate__bounceInLeft"
                            animateOnce={true}
                        >
                            <Problem />
                        </ScrollAnimation>
                    </div>
                </div>

                <div className="flex items-center justify-center md:justify-end md:mr-10 lg:items-center lg:justify-center lg:mr-0">
                    <div className="w-3/4">
                        <Home />
                    </div>
                </div>

                <div className="bg-[#ECEBE6] w-full items-center justify-center flex">
                    <div className="w-3/4">
                        <ScrollAnimation
                            animateIn="animate__animated animate__fadeInUp"
                            animateOnce={true}
                        >
                            <FAQ />
                        </ScrollAnimation>
                    </div>
                </div>
                <div className="w-3/4 md:ml-32">
                    <ScrollAnimation
                        animateIn="animate__animated animate__bounceInRight"
                        animateOnce={true}
                    >
                        <Products />
                    </ScrollAnimation>
                </div>
                <div className="w-3/4 my-24 md:ml-32 lg:my-0 ">
                    <ScrollAnimation
                        animateIn="animate__animated animate__bounceInLeft"
                        animateOnce={true}
                    >
                        <Souvenir />
                    </ScrollAnimation>
                </div>
                <div className="flex items-center justify-center md:ml-28 bg-[#ECEBE6] w-screen">
                    <div className="">
                        <ScrollAnimation
                            animateIn="animate__animated animate__animate__backInUp"
                            animateOnce={true}
                        >
                            <Alamat />
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
