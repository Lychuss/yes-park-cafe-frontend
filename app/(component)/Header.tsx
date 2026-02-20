"use client";

import Button from "./Button";
import { useRouter } from "next/navigation";

const h1_style: string = "text-black font-serif font-bold h-7 mt-10 ml-7 cursor-pointer hover:border-b-2";

export default function Header(){
    const router = useRouter();

    const isClick = (name: string) => {
        switch(name){
            case "home":
                router.push("/home");
                break;
            case "coffee":
                router.push("/coffee/coffees");
                break;
            case "all-products":
                router.push("/coffee/all-products");
                break;              
            default:
                router.push("/home");
        }
        
    }
    return <>
        <div className="flex mx-10 space-x-5">
            <h1 className="mr-70 text-black font-bold text-2xl font-sans my-10 cursor-pointer" onClick={() =>isClick("home")}>YES PARK CAFE</h1>
            <h1 className={h1_style}>Stories</h1>
            <h1 className={h1_style} onClick={() => isClick("coffee")}>Coffee</h1>
            <h1 className={h1_style}>Cart</h1>
            <h1 className={h1_style}>Store</h1>
            <Button onClick={() => console.log(localStorage.getItem('userId'))} className="ml-70 bg-yellow-950 font-serif
             px-6 py-2 w-33 h-12 mt-7 hover:scale-110 cursor-pointer" label="Order Now"/>
        </div>
    </>
}