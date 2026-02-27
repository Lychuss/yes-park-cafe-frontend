"use-client";
import { useState, useEffect } from "react";

const outer_card: string = "w-90 h-115 text-black border border-[rgba(153,153,153,0.79)] rounded-xl flex flex-col p-4";
const middle_card: string = "w-80 h-80 bg-[rgba(86,132,75,0.8)] rounded-xl relative overflow-hidden self-center";
const inner_circle: string = `w-110 h-110 bg-[rgba(125,171,114,0.8)] rounded-full flex items-center justify-center
absolute top-3/6 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-40`;
const image_style: string = "object-cover rounded-lg w-55 h-55 self-center mb-95";
const title_style: string = "text-xl text-black font-bold mr-32 absolute break-words";
const price_style: string = "text-3xl text-[rgba(125,171,114,0.8)] font-bold translate-x-50 absolute";

export default function Carts(){
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/all-user-cart`, {
                method: 'GET',
                credentials: 'include'
            });

            const data = await response.json();

            if(!data.success) return alert("ERROR IN THE CARTS USEEFFECT");

            setProducts(data.data);
            console.log(data.data)
        }

        fetchData();
    }, [])

    return <>
            <div className="p-20 flex flex-wrap gap-10 justify-center">
                {products.map((product, index) => {
                    console.log(product.category)
                    console.log(product.image);
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
                        </div>  
                    </div>
                    </>
                })}
            </div>
    </>
}