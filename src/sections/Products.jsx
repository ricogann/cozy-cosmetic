import Product from "../components/Product";
import product1 from "../assets/product-1.png";
import product2 from "../assets/product-2.png";
import product3 from "../assets/product-3.png";
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
            name: "All stay foundation",
            image: product1,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
            name: "Product 2",
            image: product2,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
            name: "Product 3",
            image: product3,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
            name: "Product 3",
            image: product3,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
    ];
    return (
        <div className="">
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
