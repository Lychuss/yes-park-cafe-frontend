const WORDS = ["MOCHA", "GALAO", "CAPPUCINO", "DOPPIO"];

<<<<<<< HEAD
export default function Galao(){
    return (
        <div className="mt-12 flex min-h-[72px] flex-wrap items-center justify-evenly gap-x-6 gap-y-3 bg-yellow-950 px-4 py-4 font-bold text-white sm:mt-16 sm:min-h-[100px] lg:mt-24">
            {WORDS.map((word) => (
                <div key={word} className="flex items-center gap-3 sm:gap-4">
                    <img
                        src="/images/galao-icon.png"
                        alt=""
                        className="h-8 w-12 object-contain sm:h-12 sm:w-16 lg:h-[60px] lg:w-20"
                    />
                    <h2 className="text-xl sm:text-3xl lg:text-5xl">{word}</h2>
                </div>
            ))}
        </div>
    );
}
=======
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
>>>>>>> 24e3ce044366f1b52d4be3055db6ab7e5bc3f64d
