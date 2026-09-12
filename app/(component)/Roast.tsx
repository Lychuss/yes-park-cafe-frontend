export default function Roast() {
  return (
    <section className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-5 px-4 sm:px-10 py-8">
      
      {/* Left Images */}
      <div className="flex flex-col gap-4 md:gap-10">
        <img
          src="/images/left-f-image.jpg"
          alt="left-f-image"
          className="w-full sm:w-[180px] md:w-[220px] h-40 sm:h-48 md:h-60 object-cover rounded-lg"
        />
        <img
          src="/images/left-s-image.jpg"
          alt="left-s-image"
          className="w-full sm:w-[180px] md:w-[220px] h-40 sm:h-48 md:h-60 object-cover rounded-lg"
        />
      </div>

      {/* Center Roast Text */}
      <div className="text-yellow-950 flex flex-col items-center justify-center text-center mt-4 md:mt-10 gap-6 md:gap-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">LIGHT ROAST</h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">MEDIUM ROAST</h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">DARK ROAST</h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          MEDIUM-DARK <br /> ROAST
        </h1>
      </div>

      {/* Right Images */}
      <div className="flex flex-col gap-4 md:gap-10">
        <img
          src="/images/right-f-image.jfif"
          alt="right-f-image"
          className="w-full sm:w-[180px] md:w-[220px] h-40 sm:h-48 md:h-60 object-cover rounded-lg"
        />
        <img
          src="/images/right-s-image.jfif"
          alt="right-s-image"
          className="w-full sm:w-[180px] md:w-[220px] h-40 sm:h-48 md:h-60 object-cover rounded-lg"
        />
      </div>

    </section>
  );
}