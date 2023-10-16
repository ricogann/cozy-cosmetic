/* eslint-disable no-unused-vars */
import TestimoniCard from "../components/TestimoniCard";
import { Punipun, Larisa, Edelyn } from "../assets/index";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimoni() {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-prev slick-arrow black-button" +
                (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
        >
            Previous
        </button>
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-next slick-arrow black-button" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
            type="button"
        >
            Next
        </button>
    );
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const Testimoni_ = [
        {
            name: "Edelyn",
            image: Edelyn,
            desc: "Saya sangat merekomendasikan Cozy Cosmetic kepada siapa pun yang ingin mendapatkan kulit wajah yang sehat dan cantik.",
        },
        {
            name: "Larisa",
            image: Larisa,
            desc: "Cozy Cosmetic berbahan dasar burung walet membuat kulit saya terasa lebih kenyal dan bercahaya.",
        },
        {
            name: "Punipun",
            image: Punipun,
            desc: "Hasil penggunaan Cozy Cosmetic sangat memuaskan, wajah saya terlihat lebih segar dan bersinar.",
        },
    ];
    return (
        <div className="xl:h-screen">
            <h1
                className="text-center text-[#333] mb-10 text-[30px] lg:text-[48px] font-semibold"
                id="souvenirSection"
            >
                Testimoni
            </h1>
            <Slider {...settings}>
                {Testimoni_.map((Testimoni_, index) => (
                    <div className="" key={index}>
                        <TestimoniCard
                            name={Testimoni_.name}
                            image={Testimoni_.image}
                            desc={Testimoni_.desc}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
