"use client";

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