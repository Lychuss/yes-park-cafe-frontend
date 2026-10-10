const img_style = "h-40 w-full max-w-[400px] object-cover sm:h-52 lg:h-60";

export default function Roast(){
    return (
        <section className="mt-8 grid w-full max-w-[1440px] grid-cols-2 gap-4 px-4 sm:gap-6 sm:px-8 lg:mt-0 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-start lg:gap-8 lg:px-16">
            {/* Left photos */}
            <div className="order-2 flex flex-col items-center gap-4 sm:gap-6 lg:order-1 lg:mt-[17.5rem] lg:items-end lg:gap-40">
                <img src="/images/left-f-image.jpg" alt="Coffee roast photo 1" className={img_style} />
                <img src="/images/left-s-image.jpg" alt="Coffee roast photo 2" className={img_style} />
            </div>

            {/* Roast names */}
            <div className="order-1 col-span-2 flex flex-col items-center justify-center gap-6 text-center font-sans text-2xl font-bold text-yellow-950 sm:text-4xl lg:order-2 lg:col-span-1 lg:mt-40 lg:gap-40 lg:text-4xl xl:text-5xl">
                <h2>LIGHT ROAST</h2>
                <h2>MEDIUM ROAST</h2>
                <h2>DARK ROAST</h2>
                <h2>MEDIUM-DARK <br />ROAST</h2>
            </div>

            {/* Right photos */}
            <div className="order-3 flex flex-col items-center gap-4 sm:gap-6 lg:mt-20 lg:items-start lg:gap-40">
                <img src="/images/right-f-image.jfif" alt="Coffee roast photo 3" className={img_style} />
                <img src="/images/right-s-image.jfif" alt="Coffee roast photo 4" className={img_style} />
            </div>
        </section>
    );
}
