export default function Map() {
    return (
        <div className="">
            <iframe
                className="w-[300px] h-[350px] md:w-[500px] lg:w-[1100px] lg:h-[500px]"
                width="100"
                height="150"
                loading="lazy"
                title="map"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=upn&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
        </div>
    );
}
