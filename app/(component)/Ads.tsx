import Button from "./Button"

export default function Ads(){
    return <div className="flex bg-[#d2caabcc] gap-5">
        <div className="mt-25 ml-20">
            <h1 className="text-black text-[56px] font-bold font-sans">YOUR PERFECT CUP <br></br>AWAITS</h1>
            <p className="text-black text-[20px] font-serif">There's always room for coffee, its not just coffee, it's an 
                <br></br>experience, life is better with coffee
            </p>
            <Button onClick={() => console.log("hello")} className="bg-yellow-950 font-serif px-8 py-2 mt-10" label="Order Now"/>
        </div>
        <div>
            <img src="/images/collage.png" alt="collage" className="w-100 h-130 ml-25"></img>
        </div>
    </div>
}