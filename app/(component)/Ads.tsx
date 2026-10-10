import Button from "./Button"

export default function Ads(){
    return (
<<<<<<< HEAD
        <div className="flex w-full flex-col items-center gap-8 bg-[#d2caabcc] p-6 sm:p-10 md:flex-row md:justify-between md:gap-10 lg:p-16">
            <div className="flex flex-col items-start md:py-6 lg:py-10">
                <h1 className="font-sans text-3xl font-bold text-black sm:text-4xl lg:text-5xl xl:text-[56px] xl:leading-tight">
                    YOUR PERFECT CUP <br className="hidden sm:block" />AWAITS
                </h1>
                <p className="mt-4 font-serif text-base text-black sm:text-lg lg:text-[20px]">
                    There's always room for coffee, it's not just coffee, it's an <br className="hidden lg:block" />
                    experience, life is better with coffee
                </p>
                <Button
                    onClick={() => console.log("hello")}
                    className="mt-8 cursor-pointer bg-yellow-950 px-8 py-2 font-serif text-white sm:mt-10"
                    label="Order Now"
                />
            </div>
            <img
                src="/images/collage.png"
                alt="collage"
                className="aspect-[100/130] w-full max-w-[280px] shrink-0 object-cover sm:max-w-[340px] lg:max-w-[400px]"
            />
        </div>
    );
}
=======
        <div className="flex flex-col lg:flex-row items-center justify-between bg-[#d2caabcc] px-6 md:px-12 lg:px-20 py-10 gap-10">

            {/* TEXT SECTION */}
            <div className="text-center lg:text-left max-w-xl">
                <h1 className="text-3xl md:text-5xl lg:text-[56px] font-bold font-sans text-black">
                    YOUR PERFECT CUP <br /> AWAITS
                </h1>

                <p className="text-black text-base md:text-lg lg:text-[20px] font-serif mt-4">
                    There's always room for coffee, it's not just coffee,
                    <br className="hidden md:block"/>
                    it's an experience. Life is better with coffee.
                </p>

                <Button
                    onClick={() => console.log("hello")}
                    className="bg-yellow-950 font-serif px-8 py-3 mt-6"
                    label="Order Now"
                />
            </div>

            {/* IMAGE SECTION */}
            <div className="flex justify-center">
                <img 
                    src="/images/collage.png" 
                    alt="collage"
                    className="w-64 md:w-80 lg:w-[400px] h-auto"
                />
            </div>

        </div>
    )
}
>>>>>>> 24e3ce044366f1b52d4be3055db6ab7e5bc3f64d
