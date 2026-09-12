import Button from "./Button"

export default function Ads(){
    return (
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