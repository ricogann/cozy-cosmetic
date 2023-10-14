/* eslint-disable no-unused-vars */
import Product from "../components/Product";
import {
    bodyScrub,
    bundle,
    dayCream,
    facialWash,
    lipBalmBubbleGum,
    lipBalmChocolate,
    lipBalmStrawberry,
    lipBalmVanilla,
    nightCream,
    serum,
    shampoo,
    tonerExfoliasi,
    tonerHydrating,
} from "../assets/index";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Products() {
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
    const products = [
        {
            name: "Body Scrub",
            image: bodyScrub,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
            name: "Bundle",
            image: bundle,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
            name: "Day Cream",
            image: dayCream,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
            name: "Facial Wash",
            image: facialWash,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
            name: "Lip Balm Bubble Gum",
            image: lipBalmBubbleGum,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
            name: "Lip Balm Chocolate",
            image: lipBalmChocolate,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
            name: "Lip Balm Strawberry",
            image: lipBalmStrawberry,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
            name: "Lip Balm Vanilla",
            image: lipBalmVanilla,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
            name: "Night Cream",
            image: nightCream,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
            name: "Serum",
            image: serum,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
            name: "Shampoo",
            image: shampoo,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
            name: "Toner Exfoliasi",
            image: tonerExfoliasi,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
            name: "Toner Hydrating",
            image: tonerHydrating,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
    ];
    return (
        <div className="xl:h-screen">
            <h1 className="text-center text-[#333] mb-10 text-[30px] lg:text-[48px] font-semibold">
                Products
            </h1>
            <Slider {...settings}>
                {products.map((product, index) => (
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
