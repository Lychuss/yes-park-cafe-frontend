"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type MyProducts = {
    image: string;
    name: string;
    volume: number;
    price: number;
    rating: number;
};

const products: MyProducts[] = [
    { image: "/images/coffee-latte.png", name: "Coffee Latte", volume: 160, price: 23.49, rating: 6 },
    { image: "/images/cappucino.png", name: "Cappucino", volume: 160, price: 23.49, rating: 5 },
    { image: "/images/cortado.png", name: "Cortado", volume: 160, price: 23.49, rating: 4 },
    { image: "/images/doppio.png", name: "Doppio", volume: 160, price: 23.49, rating: 3 },
    { image: "/images/doppio.png", name: "Espresso", volume: 160, price: 23.49, rating: 2 }
];

export default function Carousel() {

    const [positionIndexes, setPositionIndexes] = useState([0,1,2,3,4]);

    const handleNext = () => {
        setPositionIndexes(prev =>
            prev.map(i => (i + 1) % 5)
        );
    };

    const handleBack = () => {
        setPositionIndexes(prev =>
            prev.map(i => (i + 4) % 5)
        );
    };

    const positions = ["center","left1","left","right","right1"];

    const imageVariants = {
        center: { x: "0%", scale: 1, zIndex: 5 },
        left1: { x: "-70%", scale: 0.85, zIndex: 3 },
        left: { x: "-120%", scale: 0.75, zIndex: 2 },
        right: { x: "120%", scale: 0.75, zIndex: 2 },
        right1: { x: "70%", scale: 0.85, zIndex: 3 }
    };

    return (
        <motion.div
            initial={{ opacity:0, y:100 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:true }}
            className="px-6 md:px-16 mt-20"
        >

            {/* HEADER */}
            <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div>
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-[#3a2f2a]">
                        OUR COFFEE
                    </h1>

                    <p className="text-[#8c8a8bcc] text-sm md:text-lg font-serif mt-3 max-w-md">
                        There's always room for coffee, it's not just coffee,
                        it's an experience. Life is better with coffee.
                    </p>
                </div>

                {/* ARROWS */}
                <div className="flex gap-4">

                    <button
                        className="bg-yellow-950 w-12 h-12 rounded-full flex items-center justify-center"
                        onClick={handleNext}
                    >
                        <img src="/images/right-arrow.png" className="w-5 rotate-180"/>
                    </button>

                    <button
                        className="bg-yellow-950 w-12 h-12 rounded-full flex items-center justify-center"
                        onClick={handleBack}
                    >
                        <img src="/images/right-arrow.png" className="w-5"/>
                    </button>

                </div>

            </section>

            {/* CAROUSEL */}
            <section className="relative w-full h-[420px] md:h-[520px] flex items-center justify-center mt-16">

                {products.map((product,i)=>(
                    <motion.div
                        key={i}
                        className="absolute"
                        animate={positions[positionIndexes[i]]}
                        variants={imageVariants}
                        transition={{ duration:0.5 }}
                    >

                        <div className="bg-[#1c1808cc] w-64 md:w-72 lg:w-80 h-80 md:h-96 rounded-xl relative flex flex-col items-center pt-20">

                            <img
                                src={product.image}
                                className="w-32 md:w-40 absolute -top-16"
                            />

                            <h1 className="text-xl md:text-2xl font-bold">
                                {product.name}
                            </h1>

                            <div className="bg-[#5f5c5ecc] text-sm px-3 py-1 rounded mt-2">
                                ★ {product.rating}
                            </div>

                            <p className="mt-3 text-sm">
                                <span className="text-[#5f5c5ecc]">Volume</span> {product.volume} ml
                            </p>

                            <div className="mt-6 flex items-center justify-between w-full px-4 border-t border-[#5f5c5ecc] pt-4">

                                <h1 className="text-lg font-bold">
                                    ${product.price}
                                </h1>

                                <button className="bg-[#d5e2cdcc] w-10 h-10 rounded flex items-center justify-center text-black text-xl">
                                    +
                                </button>

                            </div>

                        </div>

                    </motion.div>
                ))}

            </section>

        </motion.div>
    );
}