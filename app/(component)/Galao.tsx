const WORDS = ["MOCHA", "GALAO", "CAPPUCINO", "DOPPIO"];

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
