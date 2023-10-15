export default function FAQ() {
    const faq = [
        {
            question: "What is Lorem Ipsum?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            question: "Why do we use it?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
            question: "Where does it come from?",
            answer: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
            question: "Where can I get some?",
            answer: "There are many variations of passages of Lorem Ipsum available.",
        },
        {
            question: "Why do we use it?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
            question: "Where does it come from?",
            answer: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
    ];

    return (
        <div className="my-10 md:my-24 lg:h-[100vh] lg:m-0">
            <h1 className=" text-center text-[30px] lg:text-[48px] text-[#333] font-semibold mb-5 md:ml-36 lg:ml-0" id="faqSection">
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
