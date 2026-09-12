export default function Entry(){
    return (
        <section className="relative flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">

            {/* LEFT IMAGE */}
            <img
                src="/images/left-image.jpg"
                alt="coffee"
                className="hidden md:block absolute left-4 lg:left-20 top-1/2 -translate-y-1/2 w-40 md:w-52 lg:w-60 h-auto object-cover"
            />

            {/* RIGHT IMAGE */}
            <img
                src="/images/right-image-coffee-latte.jpg"
                alt="coffee"
                className="hidden md:block absolute right-4 lg:right-20 top-1/2 -translate-y-1/2 w-44 md:w-56 lg:w-64 h-auto object-cover"
            />

            {/* TEXT CONTENT */}
            <div className="relative z-10 flex flex-col items-center leading-none">

                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[140px] font-semibold font-mono tracking-tight text-[#3a2f2a]">
                    EXPRESSO
                </h1>

                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[110px] font-semibold font-mono tracking-tight mb-5 text-[#3a2f2a]">
                    YOURSELF
                </h1>

                <p className="text-[#8c8a8bcc] text-sm sm:text-base md:text-lg font-serif">
                    Pure Coffee, pure community, pure experience, because you
                </p>

                <p className="text-[#8c8a8bcc] text-sm sm:text-base md:text-lg font-serif">
                    can never have too much coffee in your life
                </p>

            </div>

        </section>
    );
}