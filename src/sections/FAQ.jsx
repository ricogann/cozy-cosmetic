export default function FAQ() {
    return (
        <div className="my-10 xl:h-screen">
            <h1 className=" text-center text-[30px] lg:text-[48px] text-[#333] font-semibold mb-5">
                FAQ?
            </h1>
            <div className="collapse collapse-arrow border-2 border-[#333] text-[#333]">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-md font-medium md:text-[20px] lg:text-[25px]">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p className="md:text-[18px]">hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow border-2 border-[#333] text-[#333] mt-3">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-md font-medium md:text-[20px] lg:text-[25px]">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow border-2 border-[#333] text-[#333] mt-3">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-md font-medium md:text-[20px] lg:text-[25px]">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
}
