"use client";

import { useState, useEffect } from "react";

type CartProduct = {
    name: string;
    image: string;
    price: number;
}

const outer_card: string = "flex w-full max-w-[360px] flex-col rounded-xl border border-[rgba(153,153,153,0.79)] p-4 text-black";
const middle_card: string = "relative aspect-square w-full self-center overflow-hidden rounded-xl bg-[rgba(86,132,75,0.8)]";
const inner_circle: string = "absolute left-1/2 top-[31.25%] aspect-square w-[137.5%] -translate-x-1/2 rounded-full bg-[rgba(125,171,114,0.8)]";
const image_style: string = "absolute left-1/2 top-[6.25%] h-[62.5%] w-[68.75%] -translate-x-1/2 rounded-lg object-cover";
const title_style: string = "min-w-0 break-words text-lg font-bold text-black sm:text-xl";
const price_style: string = "shrink-0 text-2xl font-bold text-[rgba(125,171,114,0.8)] sm:text-3xl";

export default function Carts(){
    const [products, setProducts] = useState<CartProduct[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/all-user-cart`, {
                method: 'GET',
                credentials: 'include'
            });

            const data = await response.json();

            if(!data.success) return alert("ERROR IN THE CARTS USEEFFECT");

            setProducts(data.data);
        }

        fetchData();
    }, [])

    if(products.length === 0) return (
        <p className="w-full max-w-[920px] px-4 py-10 text-center text-sm text-[rgba(153,153,153,0.79)]">
            No available carts, please click order now and <br className="hidden sm:block" />
            click add to cart
        </p>
    );

    return (
        <div className="w-full max-w-[920px]">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,17.5rem),1fr))] justify-items-center gap-6 lg:gap-8">
                {products.map((product, index) => (
                    <article className={outer_card} key={index}>
                        <div className={middle_card}>
                            <div className={inner_circle} />
                            <img src={product.image} alt={product.name} className={image_style} />
                        </div>
                        <div className="flex items-start justify-between gap-3 px-1 pt-4">
                            <h2 className={title_style}>{product.name}</h2>
                            <p className={price_style}>₱{product.price}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
