import Button from "./Button";

export default function FirstStory(){
    return (
        <section className="grid w-full grid-cols-1 md:grid-cols-2">
            <div className="relative min-h-[16rem] sm:min-h-[20rem]">
                <img
                    src="/images/coffee-collage-store.jpg"
                    alt="collage"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
            <div className="flex flex-col items-center justify-center p-6 text-[15px] sm:p-10 lg:p-16 xl:p-24">
                <hr className="my-4 h-[7px] w-full max-w-[80px] self-start border border-yellow-950 bg-yellow-950" />
                <h1 className="mb-5 text-center text-black">THE PHILIPPINES LARGEST HOMEGROWN COFFEE CHAIN</h1>
                <p className="w-full text-left text-base font-bold text-black sm:text-[17px] lg:text-justify">
                    Embrace your entrepreneurial spirit with us as we extend franchising
                    opportunities across strategic locations in the Philippines. North Luzon,
                    Central Luzon, and South Luzon are prime untapped areas, as well as Central
                    Visayas, notably in bustling Cebu City. Our journey in Mindanao continues,
                    in our mission to bring Philippine Coffee nationwide. We are continuously
                    evaluating and exploring new territories for expansion, and we invite both
                    seasoned and budding entrepreneurs to share our vision, establishing footprints
                    in emerging markets and opening in unserved locations. Share Bo's Coffee's
                    mission of championing Philippine Coffee one cup at a time, and be part of the
                    Philippines' largest homegrown coffee chain.
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
