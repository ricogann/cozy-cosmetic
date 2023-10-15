/* eslint-disable no-unused-vars */
import Product from "../components/Product";
import {
    Topi,
    ToteBag
} from "../assets/index";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Souvenir() {
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
    const Souvenir = [
        {
            name: "Topi",
            image: Topi,
            desc: "Souvenir Topi Cozy Cosmetics Limited Edition",
        },
        {
            name: "ToteBag",
            image: ToteBag,
            desc: "Souvenir ToteBag Cozy Cosmetics Limited Edition",
        },
                {
            name: "ToteBag",
            image: ToteBag,
            desc: "Souvenir ToteBag Cozy Cosmetics Limited Edition",
        },

    ];
    return (
        <div className="xl:h-screen">
            <h1 className="text-center text-[#333] mb-10 text-[30px] lg:text-[48px] font-semibold" id="souvenirSection">
                Souvenir
            </h1>
            <Slider {...settings}>
                {Souvenir.map((product, index) => (
                    <div className="" key={index}>
                        <Product
                            name={product.name}
                            image={product.image}
                            desc={product.desc}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
