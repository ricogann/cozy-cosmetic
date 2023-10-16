export default function FAQ() {
    const faq = [
        {
            question: "Apakah Produk Cozy Cosmetic Membuat Ketergantungan?",
            answer: "Produk Cozy Cosmetic tidak membuat ketergantungan dan aman untuk pemakaian jangka panjang.",
        },
        {
            question:
                "Apakah Produk Cozy Cosmetics Berbahaya untuk ibu Hamil & Menyusui?",
            answer: "Produk Cozy Cosmetic aman untuk ibu hamil dan menyusui, tetapi konsultasi dengan dokter dianjurkan.",
        },
        {
            question:
                "Bolehkah Memakai Make Up Ketika Menggunakan Krim Pagi atau Malam?",
            answer: "Tidak ada larangan menggunakan make-up saat menggunakan krim pagi atau malam dari Cozy Cosmetic.",
        },
        {
            question:
                "Apa manfaat produk Cozy Cosmetics yang mengandung sarang burung walet?",
            answer: "Produk Cozy Cosmetics dengan bahan dasar sarang burung walet bisa meningkatkan elastisitas kulit, mengurangi kerutan, dan memberikan kelembapan berkat kandungan nutrisinya.",
        },
    ];

    return (
        <div className="my-10 md:my-24 lg:h-[100vh] lg:m-0 lg:mt-16">
            <h1
                className="text-center text-[30px] lg:text-[48px] text-[#333] font-semibold mb-5 md:ml-36 lg:ml-26"
                id="faqSection"
            >
                FREQUENTLY ASKED QUESTIONS
            </h1>
            {faq.map((item, index) => (
                <div
                    className="collapse collapse-arrow border-2 border-[#333] text-[#333] mt-3 md:ml-24 md:w-[535px] lg:w-[1040px]"
                    key={index}
                >
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-md font-medium md:text-[20px] lg:text-[25px]">
                        {item.question}
                    </div>
                    <div className="collapse-content">
                        <p>{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
