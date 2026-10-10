"use client";

<<<<<<< HEAD
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
=======
import Button from "./Button";

export default function SecondStory() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-10 py-8 gap-6 md:gap-10">
      
      {/* Text Content */}
      <div className="flex flex-col text-base sm:text-lg md:text-xl items-center md:items-start justify-center max-w-2xl">
        <hr className="my-4 border border-yellow-950 bg-yellow-950 w-20 sm:w-24 md:w-32 h-2 self-start" />
        <h1 className="text-black mb-5 text-center md:text-left text-xl sm:text-2xl md:text-3xl font-bold">
          BRINGING PHILIPPINE COFFEE TO MORE FILIPINOS WORLDWIDE
        </h1>

        <p className="text-justify font-bold mb-4">
          As one of the pioneering chains in the Philippine coffee industry, 
          we are not just a homegrown brand; we continuously champion Philippine 
          Coffee internationally by opening more locations worldwide.
        </p>
        <p className="text-justify font-bold mb-4">
          In an ever-evolving industry, we remain steadfast in our commitment to 
          delighting customers and elevating the coffee experience. Our passionate 
          team of store partners, rooted in the love, warmth, and care that Filipinos 
          are known for, serve as the backbone of our brand.
        </p>
        <p className="text-justify font-bold mb-4">
          As we set our sights on global expansion, we look to partner with dynamic entrepreneurs 
          to join our network of franchisees. We present a unique opportunity to be part of a globally 
          recognized Filipino coffee brand that combines authenticity with innovation. Our proven track 
          record, combined with a distinct style of hospitality, positions us as a leader in the coffee 
          franchising business. Embrace the journey with Bo's Coffee and become a key player in the 
          international coffee scene, where passion meets excellence in every cup.
        </p>

        <Button
          onClick={() => console.log("inquire")}
          className="border border-black p-3 sm:p-4 mt-6 w-full sm:w-auto max-w-[160px] tracking-widest bg-yellow-950 text-white hover:scale-110 hover:text-black transition duration-200"
          label="INQUIRE NOW"
        />
      </div>

      {/* Image */}
      <img
        src="/images/coffee-store.jpg"
        alt="coffee-store"
        className="object-cover w-full md:w-1/2 rounded-lg"
      />
    </section>
  );
}
>>>>>>> 24e3ce044366f1b52d4be3055db6ab7e5bc3f64d
