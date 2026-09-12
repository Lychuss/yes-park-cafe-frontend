import React from "react";

export default function Galao() {
  const drinks = ["MOCHA", "GALAO", "CAPPUCINO", "DOPPIO"];

  return (
    <div className="bg-yellow-950 flex flex-wrap justify-center items-center gap-6 py-6 px-4 sm:py-8 sm:px-10 mt-6">
      {drinks.map((word, i) => (
        <div key={i} className="flex flex-col sm:flex-row items-center gap-2">
          <img
            src="/images/galao-icon.png"
            alt="icon"
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
          />
          <h1 className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold">
            {word}
          </h1>
        </div>
      ))}
    </div>
  );
}