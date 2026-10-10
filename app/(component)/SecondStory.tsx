import Button from "./Button"

export default function SecondStory(){
    return (
        <section className="grid w-full grid-cols-1 md:grid-cols-2">
            {/* Image comes first on phones, then swaps to the right on md+ */}
            <div className="relative min-h-[16rem] sm:min-h-[20rem] md:order-2">
                <img
                    src="/images/coffee-store.jpg"
                    alt="collage"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
            <div className="flex flex-col items-center justify-center p-6 text-[15px] sm:p-10 md:order-1 lg:p-16 xl:p-24">
                <hr className="my-4 h-[7px] w-full max-w-[80px] self-start border border-yellow-950 bg-yellow-950" />
                <h1 className="mb-5 text-center text-black">BRINGING PHILIPPINE COFFEE TO MORE FILIPINOS WORLDWIDE</h1>
                <p className="mb-4 w-full text-left text-base font-bold text-black sm:text-[17px] lg:text-justify">
                    As one of the pioneering chains in the Philippine coffee industry,
                    we are not just a homegrown brand; we continuously champion Philippine
                    Coffee internationally by opening more locations worldwide.
                </p>
                <p className="mb-4 w-full text-left text-base font-bold text-black sm:text-[17px] lg:text-justify">
                    In an ever-evolving industry, we remain steadfast in our commitment to
                    delighting customers and elevating the coffee experience. Our passionate
                    team of store partners, rooted in the love, warmth, and care that Filipinos
                    are known for, serve as the backbone of our brand.
                </p>
                <p className="mb-4 w-full text-left text-base font-bold text-black sm:text-[17px] lg:text-justify">
                    As we set our sights on global expansion, we look to partner with dynamic entrepreneurs
                    to join our network of franchisees. We present a unique opportunity to be part of a globally
                    recognized Filipino coffee brand that combines authenticity with innovation. Our proven track
                    record, combined with a distinct style of hospitality, positions us as a leader in the coffee
                    franchising business. Embrace the journey with Bo's Coffee and become a key player in the
                    international coffee scene, where passion meets excellence in every cup.
                </p>
                <Button
                    onClick={() => console.log("inquire")}
                    className="mt-10 w-full max-w-[160px] cursor-pointer border border-black bg-yellow-950 p-4 text-[12px] tracking-widest text-white transition duration-200 hover:scale-110 hover:text-black"
                    label="INQUIRE NOW"
                />
            </div>
        </section>
    );
}
