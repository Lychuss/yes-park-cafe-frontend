"use client";

import { useState } from "react";
import { useRouter } from "next/navigation.js";
import Products from "./Products";

const square_style: string = `w-20 h-23 rounded-sm 
                    text-black flex flex-col items-center justify-center hover:border border-[#8c8a8bcc] cursor-pointer`;
const h1_style: string = "mb-4 text-sm mt-2";
const pic_style: string = "w-10 h-10 mt-3 object-contain";

export default function Menu(){
    const [product, setProduct] = useState("all");
    
    const router = useRouter();
    const isClick = (product: string) => {
        setProduct(product);
        router.push(`coffee/${product}`);
    }
    return <>
        <div className="flex gap-10 justify-center relative">
            <div className={square_style} onClick={() => isClick("all-products")}>
                <img src="/images/coffee-icon.png" alt="all-products" className={pic_style}></img>
                <h1 className={h1_style}>All</h1>
            </div>
            <div className={square_style} onClick={() => isClick("coffees")}> 
                <img src="/images/coffee-icon.png" alt="coffee" className={pic_style}></img>
                <h1 className={h1_style}>Coffee</h1>
            </div>
            <div className={square_style} onClick={() => isClick("snacks")}>
                <img src="/images/snacks-icon.png" alt="snacks" className={pic_style}></img>
                <h1 className={h1_style}>Snacks</h1>
            </div>
            <div className={square_style} onClick={() => isClick("breakfast")}>
                <img src="/images/breakfast-icon.png" alt="breakfast" className={pic_style}></img>
                <h1 className={h1_style}>Breakfast</h1>
            </div>
            <div className={square_style} onClick={() => isClick("bread")}>
                <img src="/images/bread-icon.png" alt="bread" className={pic_style}></img>
                <h1 className={h1_style}>Bread</h1>
            </div>
            <div className={square_style} onClick={() => isClick("pastries")}>
                <img src="/images/pastries-icon.png" alt="pastries" className={pic_style}></img>
                <h1 className={h1_style}>Pastries</h1>
            </div>
        </div>
        <Products coffeeId={product}></Products>
    </>
}