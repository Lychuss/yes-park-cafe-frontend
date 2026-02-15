"use client";
import { useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

const h1_style: string = "text-black font-serif font-bold my-10 cursor-pointer";

export default function Header(){
    const router = useRouter();

    const isClick = (type: string) => {
        switch(type){
            case "home":
                router.push("/home");
                break;
            case "coffee":
                router.push("/coffee");
                break;
            default:
                router.push("/home");
        }
        
    }
    return <>
        <div className="flex mx-10 space-x-10">
            <h1 className="mr-60 text-black font-bold text-2xl font-sans my-10 cursor-pointer" onClick={() =>isClick("home")}>YES PARK CAFE</h1>
            <h1 className={h1_style}>Stories</h1>
            <h1 className={h1_style} onClick={() => isClick("coffee")}>Coffee</h1>
            <h1 className={h1_style}>Equipment</h1>
            <h1 className={h1_style}>Store</h1>
            <Button onClick={() => console.log("hello")} className="ml-70 bg-yellow-950 font-serif
             px-6 py-2 m-10" label="Order Now"/>
        </div>
    </>
}