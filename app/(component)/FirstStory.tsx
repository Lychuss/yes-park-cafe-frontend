import Button from "./Button";

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