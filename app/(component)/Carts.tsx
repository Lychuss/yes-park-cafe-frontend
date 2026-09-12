"use client";
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
        };

        fetchData();
    }, []);

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