"use client";

import { useState, useEffect } from "react";
import Button from "./Button";

type MyComponents = {
    coffeeId: string;
}

const outer_card: string = "w-90 h-135 text-black border border-[rgba(153,153,153,0.79)] rounded-xl flex flex-col p-4";
const middle_card: string = "w-80 h-80 bg-[rgba(86,132,75,0.8)] rounded-xl relative overflow-hidden self-center";
const inner_circle: string = `w-110 h-110 bg-[rgba(125,171,114,0.8)] rounded-full flex items-center justify-center
absolute top-3/6 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-40`;
const image_style: string = "object-cover rounded-lg w-70 h-70 self-center mb-95";
const title_style: string = "text-xl text-black font-bold mr-28 absolute break-words";
const price_style: string = "text-3xl text-[rgba(125,171,114,0.8)] font-bold translate-x-50 absolute";
const circle_style: string = "transition-colors duration-500 ease-in-out hover:bg-[rgba(125,171,114,0.8)] rounded-full w-15 h-15 flex justify-center items-center cursor-pointer";
const oz_style: string = "text-[10px] text-[rgba(153,153,153,0.79)] font-bold"

export default function Products(props: MyComponents){
    const [products, setProducts] = useState<any[]>([]);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [quantity, setQuantity] = useState<number>(0);

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/coffee/product/${props.coffeeId}`);
        const fetchData = async () => {
            
            const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/coffee/product/${props.coffeeId}`, {
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
        console.log("coffeeId changed:", props.coffeeId);
    }, [props.coffeeId]);

    const sizeClick = () => {
        return <div className='mt-45 ml-7 flex'>
                        <div className="transition-colors duration-500 ease-in-out bg-[rgba(86,132,75,0.8)] 
                        rounded-full w-9 h-9 flex justify-center items-center text-3xl text-white mt-2 cursor-pointer"
                        onClick={() => setQuantity(prev => prev > 0 ? prev - 1 : 0)}>
                            <p>-</p>
                        </div>
                        <h1 className="text-2xl self-center mx-3">{quantity}</h1>
                        <div className="transition-colors duration-500 ease-in-out bg-[rgba(86,132,75,0.8)] 
                        rounded-full w-9 h-9 flex justify-center items-center text-2xl text-white mt-2 cursor-pointer"
                        onClick={() => setQuantity(prev => prev + 1)}>
                            <p>+</p>
                        </div>
                        <Button onClick={() => console.log("add")} className="bg-[rgba(86,132,75,0.8)] font-sans ml-5 w-38 p-3 h-13 rounded-4xl font-bold text-white" label="Add to Order"/>
                    </div>
    }

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
                        <div className="absolute top-20 left-0 w-full flex justify-center gap-4">
                            <div className="flex flex-col items-center gap-2">
                                <div className={circle_style} onClick={() => {
                                    setQuantity(0);
                                    setActiveIndex(activeIndex === index ? null : index)
                                }                  
                                }>
                                    <img src="/images/grande-icon.png" alt="tall" className="w-5 h-5"></img>
                                </div>
                                <h1 className="text-sm">Tall</h1>
                                <p className={oz_style}>12 oz</p>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <div className={circle_style} onClick={() => {
                                    setQuantity(0);
                                    setActiveIndex(activeIndex === index ? null : index)
                                }
                                }>
                                    <img src="/images/grande-icon.png" alt="grande" className="w-6 h-6"></img>
                                </div>
                                <h1 className="text-sm">Grande</h1>
                                <p className={oz_style}>16 oz</p>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <div className={circle_style} onClick={() => {
                                    setQuantity(0);
                                    setActiveIndex(activeIndex === index ? null : index)
                                    }
                                }>
                                    <img src="/images/grande-icon.png" alt="venti" className="w-7 h-7"></img>
                                </div>
                                <h1 className="text-sm">Venti</h1>
                                <p className={oz_style}>24 oz</p>
                            </div>
                            <div className="flex flex-col items-center gap-2" >
                                <div className={circle_style} onClick={() => {
                                    setQuantity(0);
                                    setActiveIndex(activeIndex === index ? null : index)
                                }
                                }>
                                    <img src="/images/grande-icon.png" alt="trenta" className="w-8 h-8"></img>
                                </div>
                                <h1 className="text-sm">Trenta</h1>
                                <p className={oz_style}>32 oz</p>
                            </div>
                        </div>
                    </div>
                    {activeIndex === index && sizeClick()}          
                </div>
                </>
            })}
        </div>
    </>
}