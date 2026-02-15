"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type MyProducts = {
    image: string;
    name: string;
    volume: number;
    price: number;
    rating: number;
}

const product1: MyProducts = {
    image: "/images/coffee-latte.png",
    name: "Coffee Latte",
    volume: 160,
    price: 23.49,
    rating: 6.0
}

const product2: MyProducts = {
    image: "/images/cappucino.png",
    name: "Coffee Latte",
    volume: 160,
    price: 23.49,
    rating: 5.0
}

const product3: MyProducts = {
    image: "/images/cortado.png",
    name: "Coffee Latte",
    volume: 160,
    price: 23.49,
    rating: 4.0
}

const product4: MyProducts = {
    image: "/images/doppio.png",
    name: "Coffee Latte",
    volume: 160,
    price: 23.49,
    rating: 3.0
}

const product5: MyProducts = {
    image: "/images/doppio.png",
    name: "Coffee Latte",
    volume: 160,
    price: 23.49,
    rating: 2.0
}


let products: Array<MyProducts> = [product1, product2, product3, product4, product5];

export default function Carousel(){

    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4, 5]);


    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
        const updatedIndexes = prevIndexes.map(
            (prevIndex) => (prevIndex + 1) % 5
        );
        return updatedIndexes;
        });
    };

    const handleBack = () => {
        setPositionIndexes((prevIndexes) => {
        const updatedIndexes = prevIndexes.map(
            (prevIndex) => (prevIndex + 4) % 5
        );

        return updatedIndexes;
        });
    };

    const positions = ["center", "left1", "left", "right", "right1"];

    const imageVariants = {
        center: { x: "0%", scale: 1, zIndex: 5 },
        left1: { x: "-92%", scale: 0.8, zIndex: 3 },
        left: { x: "-170%", scale: 0.7, zIndex: 2 },
        right: { x: "170%", scale: 0.7, zIndex: 1 },
        right1: { x: "92%", scale: 0.8, zIndex: 3 },
    };

    return <>
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        >
            <section className="mt-20 ml-16"> 
                <h1 className="text-[#3a2f2a] font-bold text-7xl">OUR COFFEE</h1> 
                <div className="ml-3 mt-5 flex"> 
                    <p className="text-[#8c8a8bcc] text-[20px] font-serif">There's always room for coffee, its not 
                        just coffee, <br></br>it's an experience, life is better with coffee </p> 
                    <div className="bg-yellow-950 ml-150 border rounded-full w-15 
                        h-15r justify-items-center content-center" onClick={handleNext}> 
                    <img src="images/right-arrow.png" alt="right-arrow" 
                        className="w-6 h-8 rotate-180"></img> 
                    </div> 
                <div className="bg-yellow-950 ml-5 border rounded-full w-15 h-15 justify-items-center 
                    content-center" onClick={handleBack}> 
                <img src="images/right-arrow.png" alt="right-arrow" className="w-6 h-8"></img> 
                </div> 
                </div> 
            </section>
            <section className="relative w-full h-[500px] flex items-center justify-center">
            {products.map((product, i) => (
                <motion.div
                key={i}
                className="absolute"
                animate={positions[positionIndexes[i]]}
                variants={imageVariants}
                transition={{ duration: 0.5 }}
                >
                <div className="bg-[#1c1808cc] w-80 h-96 relative mt-50">
                    <img src={product.image} className="w-55 h-55 absolute -top-25 left-1/2 -translate-x-1/2" />
                    <h1 className="mt-40 ml-5 text-[31px] font-bold absolute">{product.name}</h1>
                    <h1 className="text-[15px] font-bold ml-6 bg-[#5f5c5ecc] absolute mt-55 w-17 p-1 text-center">★ {product.rating}</h1>
                    <p className="ml-6 mt-65 text-[18px] absolute"><span className="text-[#5f5c5ecc]">Volume</span> {product.volume} ml</p> 
                    <div className="border-2 border-[#5f5c5ecc] ml-5 mr-5 mt-75 text-3xl p-2 absolute w-70"> 
                        <h1 className="ml-3">{product.price}</h1> 
                        <div className="absolute top-0 right-0 w-1/6 h-full bg-[#d5e2cdcc] text-center items-center font-thin">
                            <p className="mt-2 text-black text-4xl">+</p>
                        </div> 
                    </div>
                </div>
                </motion.div>
            ))}
            </section>
        </motion.div>
    </>
}