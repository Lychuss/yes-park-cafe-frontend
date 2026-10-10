import Button from "./Button"

export default function Ads(){
    return (
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
