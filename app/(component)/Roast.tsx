export default function Roast(){
    return <>
        <section className="flex flex-row gap-5">
            <div>
                <img src="/images/left-f-image.jpg" alt="left-f-image" className="w-100 h-60 mb-40 mt-70"></img>
                <img src="/images/left-s-image.jpg" alt="left-f-image" className="w-100 h-60"></img>
            </div>
            <div className="text-yellow-950 text-5xl mt-40 font-sans font-bold items-center justify-center
            content-center text-center">
                <h1 className="mb-40">LIGHT ROAST</h1>
                <h1 className="mb-40">MEDIUM ROAST</h1>
                <h1 className="mb-40">DARK ROAST</h1>
                <h1 className="mb-40">MEDIUM-DARK 
                    <br></br>ROAST</h1>
            </div>
            <div>
                <img src="/images/right-f-image.jfif" alt="left-f-image" className="w-100 h-60 mb-40 mt-20"></img>
                <img src="/images/right-s-image.jfif" alt="left-f-image" className="w-100 h-60 "></img>
            </div>
        </section>
    </>
}