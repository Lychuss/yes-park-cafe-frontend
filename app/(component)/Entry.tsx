export default function Entry(){
    return (
        <>
            {/* Decorative side photos only appear when there is room (lg and up). */}
            <img
                src="/images/left-image.jpg"
                alt="coffee"
                className="absolute left-[4%] top-[62.5%] hidden h-72 w-52 -translate-y-1/2 object-cover lg:block xl:left-[6%] xl:h-80 xl:w-60"
            />

            <img
                src="/images/right-image-coffee-latte.jpg"
                alt="coffee"
                className="absolute right-[4%] top-[41.67%] hidden h-64 w-56 -translate-y-1/2 object-cover lg:block xl:right-[6%] xl:h-[280px] xl:w-[260px]"
            />

            <div className="relative z-10 flex flex-col items-center justify-center leading-none">
                <h1 className="flex flex-col items-center font-mono font-semibold tracking-tight text-[#3a2f2a]">
                    <span className="block whitespace-nowrap text-[length:clamp(2rem,14vw,10rem)] lg:text-[length:clamp(4rem,9.5vw,10rem)] xl:text-[length:clamp(4rem,10vw,10rem)]">
                        EXPRESSO
                    </span>
                    <span className="mb-5 block whitespace-nowrap text-[length:clamp(1.5rem,10.5vw,7.5rem)] lg:text-[length:clamp(3rem,7.125vw,7.5rem)] xl:text-[length:clamp(3rem,7.5vw,7.5rem)]">
                        YOURSELF
                    </span>
                </h1>
                <p className="max-w-[34rem] text-center font-serif text-base leading-normal text-[#8c8a8bcc] sm:text-lg lg:text-[20px]">
                    Pure Coffee, pure community, pure experience, because you can never have too much coffee in your life
                </p>
            </div>
        </>
    );
}
