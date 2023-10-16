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
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { Link } from "react-scroll";

export default function App() {
    return (
        <div className="h-full w-full bg-[#F6F4F0] overflow-hidden font-poppins relative">
            <HelmetProvider>
                <Helmet>
                    <title>Cozy Cosmetics</title>
                    <meta
                        name="description"
                        content="Cozy Cosmetics adalah merek perawatan kulit yang unik, menghadirkan produk berkualitas tinggi dengan sentuhan alami dari bahan-bahan premium. Keunggulan kami terletak pada penggunaan sarang walet murni dan lemak coklat yang memberikan manfaat luar biasa untuk kulit Anda. Produk kami didesain untuk memberikan perasaan kenyamanan dan kelembutan, membantu merawat kulit dengan nutrisi alami yang eksklusif."
                    />
                    <meta
                        name="keywords"
                        content="Skincare routine, Produk skincare, Perawatan wajah, Produk kecantikan, Perawatan kulit alami, Perawatan khusus, Kulit berminyak, Kulit kering, Perawatan anti-penuaan, Kulit sensitif, Solusi jerawat, Serum wajah, Masker wajah, Produk perawatan mata, Perawatan kulit pria, Perawatan matahari, Perawatan malam, Produk perawatan organik, Tips perawatan kulit, Perawatan kulit alami untuk kulit cerah. Produk perawatan kulit, perawatan kulit wajah, perawatan kulit alami, produk perawatan organik, serum wajah, perawatan kulit kering, perawatan kulit berminyak, perawatan kulit sensitif, produk kecantikan, perawatan anti-penuaan, solusi jerawat, masker wajah, perawatan matahari, perawatan kulit pria, tips perawatan kulit, perawatan malam, produk perawatan mata, produk perawatan tubuh, perawatan kulit alami untuk kulit cerah, perawatan kulit tubuh."
                    />
                    <meta property="og:title" content="Cozy Cosmetics" />
                    <meta
                        property="og:description"
                        content="Cozy Cosmetics adalah merek perawatan kulit yang unik, menghadirkan produk berkualitas tinggi dengan sentuhan alami dari bahan-bahan premium. Keunggulan kami terletak pada penggunaan sarang walet murni dan lemak coklat yang memberikan manfaat luar biasa untuk kulit Anda. Produk kami didesain untuk memberikan perasaan kenyamanan dan kelembutan, membantu merawat kulit dengan nutrisi alami yang eksklusif."
                    />
                    <meta property="og:type" content="website" />
                </Helmet>
            </HelmetProvider>
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
            <div className="fixed bottom-5 right-5 z-50">
                <Link
                    to="homeSection"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <IoArrowUpCircleOutline className="text-5xl md:text-6xl text-black rotate-180 cursor-pointer animate-bounce" />
                </Link>
            </div>
        </div>
    );
}
