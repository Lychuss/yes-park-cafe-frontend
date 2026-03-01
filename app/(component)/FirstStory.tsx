import Button from "./Button";
export default function FirstStory(){
    return <>
        <img src="/images/coffee-collage-store.jpg" alt="collage" className="flex flex-col object-cover
        w-full max-w-[50%] h-auto"></img>
        <div className="flex flex-col text-[15px] items-center justify-center p-30">
            <hr className="my-4 border border-yellow-950 bg-yellow-950 w-full max-w-[80px] h-[7px] self-start" />
            <h1 className="text-black mb-5 text-center">THE PHILIPPINES LARGEST HOMEGROWN COFFEE CHAIN</h1>
            <p className="text-justify text-[17px] text-black font-bold">
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
            <Button onClick={() => console.log("inquire")} className="border border-black p-4 mt-10 text-[12px] w-full
                        max-w-[160px] tracking-widest bg-yellow-950 text-white hover:scale-110 hover:text-black transition duration-200" label="INQUIRE NOW" />
        </div>
    </>
}