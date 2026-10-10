import Button from "./Button";

<<<<<<< HEAD
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
=======
export default function FirstStory() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 px-4 lg:px-20 py-8">
        {/* Image */}
        <img
          src="/images/coffee-collage-store.jpg"
          alt="collage"
          className="w-full lg:w-1/2 h-auto object-cover rounded-lg shadow-lg"
        />

        {/* Text Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8">
          <hr className="border-yellow-950 bg-yellow-950 w-20 h-2 lg:h-2" />

          <h1 className="text-black text-xl sm:text-2xl md:text-3xl font-semibold">
            THE PHILIPPINES LARGEST HOMEGROWN COFFEE CHAIN
          </h1>

          <p className="text-black font-semibold text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
            Embrace your entrepreneurial spirit with us as we extend franchising
            opportunities across strategic locations in the Philippines. North Luzon,
            Central Luzon, and South Luzon are prime untapped areas, as well as Central
            Visayas, notably in bustling Cebu City. Our journey in Mindanao continues,
            in our mission to bring Philippine Coffee nationwide. We are continuously
            evaluating and exploring new territories for expansion, and we invite both
            seasoned and budding entrepreneurs to share our vision, establishing footprints
            in emerging markets and opening in unserved locations. Share Bo's Coffee’s
            mission of championing Philippine Coffee one cup at a time, and be part of the
            Philippines’ largest homegrown coffee chain.
          </p>

          <Button
            onClick={() => console.log("inquire")}
            label="INQUIRE NOW"
            className="border border-black p-3 sm:p-4 mt-4 sm:mt-6 text-[12px] sm:text-sm md:text-base w-full sm:w-auto max-w-[160px] tracking-widest bg-yellow-950 text-white hover:scale-105 hover:text-black transition duration-200 rounded-md"
          />
        </div>
      </div>
    </>
  );
}
>>>>>>> 24e3ce044366f1b52d4be3055db6ab7e5bc3f64d
