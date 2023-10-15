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
            desc: "Produk perawatan kulit yang membantu mengangkat sel-sel kulit mati",
        },
        {
            name: "Bundle",
            image: bundle,
            desc: "Satu Paket Produk Cozy Cosmetics dengan harga khusus atau diskon.",
        },
        {
            name: "Day Cream",
            image: dayCream,
            desc: "Produk perawatan kulit pada pagi hari, perlindungan ekstra sepanjang hari.",
        },
        {
            name: "Facial Wash",
            image: facialWash,
            desc: "Produk pembersih yang dirancang khusus untuk membersihkan kulit wajah dari kotoran",
        },
        {
            name: "Lip Balm Bubble Gum",
            image: lipBalmBubbleGum,
            desc: "Lip balm beraroma Bubble Gum, menjaga bibir tetap lembut dan harum",
        },
        {
            name: "Lip Balm Chocolate",
            image: lipBalmChocolate,
            desc: "Lip balm dengan aroma cokelat, perlindungan ekstra untuk bibir dengan sentuhan cokelat.",
        },
        {
            name: "Lip Balm Strawberry",
            image: lipBalmStrawberry,
            desc: "Lip balm dengan aroma stroberi, menjaga bibir Anda lembut dan memberikan aroma manis stroberi yang segar",
        },
        {
            name: "Lip Balm Vanilla",
            image: lipBalmVanilla,
            desc: "Lip balm dengan aroma vanila, memberikan kelembapan dan aroma manis vanila untuk bibir yang lembut dan harum",
        },
        {
            name: "Night Cream",
            image: nightCream,
            desc: "Produk perawatan kulit pada pagi hari, perlindungan ekstra malam hari.",
        },
        {
            name: "Serum",
            image: serum,
            desc: "Produk perawatan kulit intensif untuk hasil kulit yang lebih baik",
        },
        {
            name: "Shampoo",
            image: shampoo,
            desc: "Produk pembersih rambut untuk membersihkan dan merawat rambut Anda",
        },
        {
            name: "Toner Exfoliasi",
            image: tonerExfoliasi,
            desc: "Produk perawatan kulit untuk mengangkat sel-sel kulit mati dan meningkatkan tekstur kulit",
        },
        {
            name: "Toner Hydrating",
            image: tonerHydrating,
            desc: "Produk perawatan kulit yang memberikan kelembapan ekstra untuk kulit yang terhidrasi.",
        },
    ];
    return (
        <div className="xl:h-screen">
            <h1 className="text-center text-[#333] mb-10 text-[30px] lg:text-[48px] font-semibold" id="productSection">
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
