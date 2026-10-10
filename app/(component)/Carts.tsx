"use client";
<<<<<<< HEAD

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
=======
import { useState, useEffect } from "react";

const outer_card =
  "w-full sm:w-72 md:w-80 border border-gray-400/70 rounded-xl flex flex-col p-4";

const middle_card =
  "w-full aspect-square bg-[rgba(86,132,75,0.8)] rounded-xl relative overflow-hidden flex items-center justify-center";

const inner_circle =
  "w-[140%] h-[140%] bg-[rgba(125,171,114,0.8)] rounded-full flex items-center justify-center";

const image_style =
  "object-contain w-32 sm:w-40 md:w-48";

export default function Carts() {

    const [products, setProducts] = useState<any[]>([]);
>>>>>>> 24e3ce044366f1b52d4be3055db6ab7e5bc3f64d

    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/product/all-user-cart`,
                {
                    method: "GET",
                    credentials: "include",
                }
            );

            const data = await response.json();

            if (!data.success) return alert("ERROR IN THE CARTS USEEFFECT");

            setProducts(data.data);
<<<<<<< HEAD
        }
=======
        };
>>>>>>> 24e3ce044366f1b52d4be3055db6ab7e5bc3f64d

        fetchData();
    }, []);

<<<<<<< HEAD
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
=======
    if (products.length === 0)
        return (
            <h1 className="w-full max-w-xl text-gray-500 text-sm text-center">
                No available carts, please click order now and <br />
                click add to cart
            </h1>
        );

    return (

        <div className="w-full max-w-6xl mx-auto px-4">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {products.map((product, index) => (

                    <div className={outer_card} key={index}>

                        <div className={middle_card}>
                            <div className={inner_circle}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className={image_style}
                                />
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-4">

                            <h1 className="text-lg font-bold break-words">
                                {product.name}
                            </h1>

                            <h1 className="text-xl font-bold text-[rgba(125,171,114,0.8)]">
                                ₱{product.price}
                            </h1>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}
>>>>>>> 24e3ce044366f1b52d4be3055db6ab7e5bc3f64d
