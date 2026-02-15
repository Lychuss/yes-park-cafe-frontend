"use client";

import { useState, useEffect } from "react";

type MyComponents = {
    coffeeId: string;
}

const outer_card: string = "w-90 h-140 text-black border border-[rgba(153,153,153,0.79)] rounded-xl justify-center p-3";
const middle_card: string = "w-80 h-80 bg-[rgba(86,132,75,0.8)] rounded-xl relative overflow-hidden";
const inner_circle: string = `w-110 h-110 bg-[rgba(125,171,114,0.8)] rounded-full flex items-center justify-center
absolute top-3/6 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-40`;
const image_style: string = "mb-90"


export default function Products(props: MyComponents){
    let producto = ["hello", "hi", "hey"];
    let products: Array<Object>;

    useEffect(() => {
        const token = localStorage.getItem("token");

        const fetchData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/coffee/${props.coffeeId}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })

            products = await response.json();
        }
    })


     
    return <>
        <div className="p-20 flex gap-20 justify-center">
            ({producto.map((product, index) => {
                return <>
                <div className={outer_card} key={index}>
                    <div className={middle_card}>
                        <div className={inner_circle}>
                            <img src="/images/galao-icon.png" alt={product} className={image_style} ></img>
                        </div>
                    </div>
                    <h1>{product}</h1>
                </div>
                </>
            })})
        </div>
    </>
}