import Search from "./Search";

export default function Entry(){
    return <>
        <img 
                    src="/images/left-image.jpg"
                    alt="coffee"
                    className="absolute left-25 top-5/8 -translate-y-1/2 h-80 object-cover w-60"
                />
        
                <img 
                    src="/images/right-image-coffee-latte.jpg"
                    alt="coffee"
                    className="absolute left-265 top-5/12 -translate-y-1/2 h-70 object-cover w-65"
                />
        
                    <div className="relative z-10 flex flex-col leading-none justify-center items-center">
                        <h1 className="text-[160px] font-semibold font-mono tracking-tight m-0 text-[#3a2f2a]">
                            EXPRESSO
                        </h1>
                        <h1 className="text-[120px] font-semibold font-mono tracking-tight mt-0 mb-5 text-[#3a2f2a]">
                            YOURSELF
                        </h1>
                        <p className="text-[#8c8a8bcc] text-[20px]  font-serif">Pure Coffee, pure community, pure experience, because you</p> 
                        <p className="text-[#8c8a8bcc] text-[20px] font-serif">can never have to much coffee in your life</p>
        
                        <Search className="border border-black w-100 pr-24 mt-6 h-12 placeholder-font-bold placeholder-black text-black pl-11" placeholder="Search Here" />
                        <img src="/images/magnifying-glass.png" 
                             alt="magnifying-glass"
                             className="absolute bottom-2 h-8 w-8 left-59">
                        </img>
                    </div>
    </>
}