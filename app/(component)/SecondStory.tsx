import Button from "./Button"

export default function SecondStory(){
    return <>
            <div className="flex flex-col text-[15px] items-center justify-center p-30">
                <hr className="my-4 border border-yellow-950 bg-yellow-950 w-full max-w-[80px] h-[7px] self-start" />
                <h1 className="text-black mb-5 text-center">BRINGING PHILIPPINE COFFEE TO MORE FILIPINOS WORLDWIDE</h1>
                <p className="text-justify text-[17px] text-black font-bold mb-4">
                    As one of the pioneering chains in the Philippine coffee industry, 
                    we are not just a homegrown brand; we continuously champion Philippine 
                    Coffee internationally by opening more locations worldwide.
                </p>
                <p className="text-justify text-[17px] text-black font-bold mb-4">
                    In an ever-evolving industry, we remain steadfast in our commitment to 
                    delighting customers and elevating the coffee experience. Our passionate 
                    team of store partners, rooted in the love, warmth, and care that Filipinos 
                    are known for, serve as the backbone of our brand.​
                </p>
                <p className="text-justify text-[17px] text-black font-bold mb-4">
                    As we set our sights on global expansion, we look to partner with dynamic entrepreneurs 
                    to join our network of franchisees. We present a unique opportunity to be part of a globally 
                    recognized Filipino coffee brand that combines authenticity with innovation. Our proven track 
                    record, combined with a distinct style of hospitality, positions us as a leader in the coffee 
                    franchising business. Embrace the journey with Bo's Coffee and become a key player in the 
                    international coffee scene, where passion meets excellence in every cup.​
                </p>
                <Button onClick={() => console.log("inquire")} className="border border-black p-4 mt-10 text-[12px] w-full
                            max-w-[160px] tracking-widest bg-yellow-950 text-white hover:scale-110 hover:text-black transition duration-200" label="INQUIRE NOW" />
            </div>
            <img src="/images/coffee-store.jpg" alt="collage" className="flex flex-col object-cover
                w-full max-w-[50%] h-auto"></img>
        </>
}