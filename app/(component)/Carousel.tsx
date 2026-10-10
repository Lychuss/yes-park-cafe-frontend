"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type MyProducts = {
    image: string;
    name: string;
    volume: number;
    price: number;
    rating: number;
};

<<<<<<< HEAD
const products: Array<MyProducts> = [
    { image: "/images/coffee-latte.png", name: "Coffee Latte", volume: 160, price: 23.49, rating: 6.0 },
    { image: "/images/cappucino.png",    name: "Coffee Latte", volume: 160, price: 23.49, rating: 5.0 },
    { image: "/images/cortado.png",      name: "Coffee Latte", volume: 160, price: 23.49, rating: 4.0 },
    { image: "/images/doppio.png",       name: "Coffee Latte", volume: 160, price: 23.49, rating: 3.0 },
    { image: "/images/doppio.png",       name: "Coffee Latte", volume: 160, price: 23.49, rating: 2.0 },
];

const positions = ["center", "left1", "left", "right", "right1"];

// x offsets are percentages of the card's own width, so they scale with the card on every screen size.
const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-92%", scale: 0.8, zIndex: 3 },
    left: { x: "-170%", scale: 0.7, zIndex: 2 },
    right: { x: "170%", scale: 0.7, zIndex: 1 },
    right1: { x: "92%", scale: 0.8, zIndex: 3 },
};

const arrow_button = `flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full border border-yellow-950
    bg-yellow-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-950`;

export default function Carousel(){
    const total = products.length;
    const reduceMotion = useReducedMotion();
    const [positionIndexes, setPositionIndexes] = useState<number[]>(() => products.map((_, i) => i));

    const handleNext = () => {
        setPositionIndexes((prevIndexes) => prevIndexes.map((prevIndex) => (prevIndex + 1) % total));
    };

    const handleBack = () => {
        setPositionIndexes((prevIndexes) => prevIndexes.map((prevIndex) => (prevIndex + total - 1) % total));
    };

    return (
        <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <section className="mt-12 px-4 sm:mt-20 sm:px-8 lg:px-16">
                <h1 className="text-4xl font-bold text-[#3a2f2a] sm:text-5xl lg:text-7xl">OUR COFFEE</h1>
                <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
                    <p className="font-serif text-base text-[#8c8a8bcc] sm:text-lg lg:text-[20px]">
                        There's always room for coffee, it's not just coffee, <br className="hidden md:block" />
                        it's an experience, life is better with coffee
                    </p>
                    <div className="flex gap-3 sm:gap-5">
                        <button type="button" aria-label="Move carousel left" className={arrow_button} onClick={handleNext}>
                            <img src="/images/right-arrow.png" alt="" className="h-8 w-6 rotate-180" />
                        </button>
                        <button type="button" aria-label="Move carousel right" className={arrow_button} onClick={handleBack}>
                            <img src="/images/right-arrow.png" alt="" className="h-8 w-6" />
                        </button>
                    </div>
                </div>
            </section>

            <section className="relative h-[460px] w-full overflow-hidden sm:h-[540px]">
                {products.map((product, i) => (
                    <motion.div
                        key={i}
                        className="absolute left-1/2 top-[110px] -ml-[130px] sm:top-[130px] sm:-ml-40"
                        animate={positions[positionIndexes[i]]}
                        variants={imageVariants}
                        transition={{ duration: reduceMotion ? 0 : 0.5 }}
                    >
                        <div className="relative h-[330px] w-[260px] bg-[#1c1808cc] text-white sm:h-96 sm:w-80">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="absolute -top-[90px] left-1/2 h-[180px] w-[180px] -translate-x-1/2 sm:-top-[100px] sm:h-[220px] sm:w-[220px]"
                            />
                            <div className="flex h-full flex-col items-start gap-2 px-5 pb-5 pt-[110px] sm:px-6 sm:pt-40">
                                <h2 className="text-2xl font-bold sm:text-[31px]">{product.name}</h2>
                                <p className="w-[68px] bg-[#5f5c5ecc] p-1 text-center text-[15px] font-bold">★ {product.rating}</p>
                                <p className="text-base sm:text-[18px]">
                                    <span className="text-[#5f5c5ecc]">Volume</span> {product.volume} ml
                                </p>
                                <div className="relative mt-auto w-full border-2 border-[#5f5c5ecc] p-2 text-3xl">
                                    <p className="ml-3">{product.price}</p>
                                    <div className="absolute right-0 top-0 flex h-full w-1/6 items-center justify-center bg-[#d5e2cdcc] font-thin">
                                        <span className="text-4xl text-black">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
=======
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

>>>>>>> 24e3ce044366f1b52d4be3055db6ab7e5bc3f64d
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 24e3ce044366f1b52d4be3055db6ab7e5bc3f64d
