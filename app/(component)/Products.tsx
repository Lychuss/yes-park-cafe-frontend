"use client";

import { useState, useEffect } from "react";

type MyComponents = {
    coffeeId: string;
}

const outer_card: string = "w-90 h-140 text-black border border-[rgba(153,153,153,0.79)] rounded-xl flex flex-col p-4";
const middle_card: string = "w-80 h-80 bg-[rgba(86,132,75,0.8)] rounded-xl relative overflow-hidden self-center";
const inner_circle: string = `w-110 h-110 bg-[rgba(125,171,114,0.8)] rounded-full flex items-center justify-center
absolute top-3/6 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-40`;
const image_style: string = "mb-90";
const title_style: string = "text-xl text-black font-bold";
const price_style: string = "text-3xl text-[rgba(125,171,114,0.8)] font-bold";
const circle_style: string = "transition-colors duration-500 ease-in-out hover:bg-[rgba(125,171,114,0.8)] rounded-full w-15 h-15";


export default function Products(props: MyComponents){
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const token = localStorage.getItem("token");

        const fetchData = async () => {
            
            const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/coffee/${props.coffeeId}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })

            const data = await response.json();

            setProducts(data.data);

            console.log(data.data);
        }

        fetchData();
    }, [props.coffeeId]);


     
    return <>
        <div className="p-20 flex flex-wrap gap-10 justify-center">
            {products.map((product, index) => {
                return <>
                <div className={outer_card} key={index}>
                    <div className={middle_card}>
                        <div className={inner_circle}>
                            <img src={product.image}alt={product} className={image_style} ></img>
                        </div>
                    </div>
                    <div className="flex justify-between gap-32 p-3 relative">
                        <h1 className={title_style}>{product.name}</h1>
                        <h1 className={price_style}>₱{product.price}</h1>
                        <div className="absolute bottom-0 left-0 w-full p-3 flex top-20 justify-center gap-5">
                            <div className={circle_style}></div>
                            <div className={circle_style}></div>
                            <div className={circle_style}></div>
                            <div className={circle_style}></div>
                            <div className="absolute bottom-0 left-0 w-full p-3 flex top-17 justify-center gap-10">
                                <h1>Tall</h1>
                                <h1>Grande</h1>
                                <h1>Venti</h1>
                                <h1>Trenta</h1>
                            </div>
                        </div> 
                    </div>
                </div>
                </>
            })}
        </div>
    </>
}