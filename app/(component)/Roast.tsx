<<<<<<< HEAD
const img_style = "h-40 w-full max-w-[400px] object-cover sm:h-52 lg:h-60";

export default function Roast(){
    return (
        <section className="mt-8 grid w-full max-w-[1440px] grid-cols-2 gap-4 px-4 sm:gap-6 sm:px-8 lg:mt-0 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-start lg:gap-8 lg:px-16">
            {/* Left photos */}
            <div className="order-2 flex flex-col items-center gap-4 sm:gap-6 lg:order-1 lg:mt-[17.5rem] lg:items-end lg:gap-40">
                <img src="/images/left-f-image.jpg" alt="Coffee roast photo 1" className={img_style} />
                <img src="/images/left-s-image.jpg" alt="Coffee roast photo 2" className={img_style} />
            </div>

            {/* Roast names */}
            <div className="order-1 col-span-2 flex flex-col items-center justify-center gap-6 text-center font-sans text-2xl font-bold text-yellow-950 sm:text-4xl lg:order-2 lg:col-span-1 lg:mt-40 lg:gap-40 lg:text-4xl xl:text-5xl">
                <h2>LIGHT ROAST</h2>
                <h2>MEDIUM ROAST</h2>
                <h2>DARK ROAST</h2>
                <h2>MEDIUM-DARK <br />ROAST</h2>
            </div>

            {/* Right photos */}
            <div className="order-3 flex flex-col items-center gap-4 sm:gap-6 lg:mt-20 lg:items-start lg:gap-40">
                <img src="/images/right-f-image.jfif" alt="Coffee roast photo 3" className={img_style} />
                <img src="/images/right-s-image.jfif" alt="Coffee roast photo 4" className={img_style} />
            </div>
        </section>
    );
}
=======
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
>>>>>>> 24e3ce044366f1b52d4be3055db6ab7e5bc3f64d
