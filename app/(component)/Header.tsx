"use client";

import Button from "./Button";
import { useRouter } from "next/navigation";
import Error from "./Error";

const h1_style: string = `text-black font-serif font-bold h-7 mt-10 ml-7 cursor-pointer border-b-2 border-transparent
            hover:border-yellow-950 transition-color duration-500`;

export default function Header(){
    const router = useRouter();

    const isClick = (name: string) => {
        switch(name){
            case "home":
                router.push(`/${name}`);
                break;
            case "coffee":
                router.push(`/${name}/coffees`);
                break;
            case "all-products":
                router.push(`/coffee//${name}`);
                break;
            case "cart":
                router.push(`/${name}`);
                break;
            case "store":
                router.push(`/${name}`);
                break;
            default:
                router.push("/home");
        }
        
    }
    return <>
        <div className="flex mx-10 space-x-5">
            <h1 className="mr-70 text-black font-bold text-2xl font-sans my-10 mx-10 cursor-pointer" onClick={() =>isClick("home")}>YES PARK CAFE</h1>
            <h1 className={h1_style} onClick={() => isClick("coffee")}>Coffee</h1>
            <h1 className={h1_style} onClick={() => isClick("cart")}>Cart</h1>
            <h1 className={h1_style} onClick={() => isClick("store")}>Store</h1>
            <Button onClick={() => isClick("all-products")} className="ml-70 bg-yellow-950 font-serif
             px-6 py-2 w-33 h-12 mt-7 hover:scale-110 cursor-pointer transition duration-200" label="Order Now"/>
             
        </div>
    </>
}