"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Search from "../(component)/Search";
import Galao from "../(component)/Galao";
import Roast from "../(component)/Roast";
import Ads from "../(component)/Ads";
import Footer from "../(component)/Footer";
import Copyright from "../(component)/Copyright";

type Products = {
    name: string;
	image: string;
	rating: number
	volume: number;
	price: number
};

const images = [
  "/images/left-f-image.jpg",
  "/images/galao-icon.png",
  "/images/left-f-image.jpg",
  "/images/galao-icon.png",
];

const products: Products[] = [
    { name: "Galao", image: "/images/galao-icon.png", rating: 4.5, volume: 160, price: 25.3 },
    { name: "Mocha", image: "/images/galao-icon.png", rating: 4.5, volume: 160, price: 25.3 },
    { name: "Doppio", image: "/images/galao-icon.png", rating: 4.5, volume: 160, price: 25.3 },
    { name: "Latte", image: "/images/galao-icon.png", rating: 4.5, volume: 160, price: 25.3 },
    { name: "Americano", image: "/images/galao-icon.png", rating: 4.5, volume: 160, price: 25.3 }
];


export default function Home(){
    const [index, setIndex] = useState(0);
    const [leftIndex, setLeftIndex] = useState(0);
    const [rightIndex, setRightIndex] = useState(1);

    const handleNextSlide = () => {
        setLeftIndex((prevLeft) => {
        const newLeft =
            rightIndex === images.length - 1 ? 0 : rightIndex;

        const nextRight =
            newLeft === images.length - 1 ? 0 : newLeft + 1;

        setRightIndex(nextRight);

        return newLeft;
        });
    };

    const handlePrevSlide = () => {
        setRightIndex((prevRight) => {
        const newRight =
            leftIndex === 0 ? images.length - 1 : leftIndex - 1;

        const nextLeft =
            newRight === 0 ? images.length - 1 : newRight - 1;

        setLeftIndex(nextLeft);

        return newRight;
        });
    };



    const getItem = (offset: number) => {
        const i = (index + offset + products.length) % products.length;
        return products[i];
    };


    const visible = [
        getItem(-1), // small left
        getItem(0),  // big center left
        getItem(1),  // big center right
        getItem(2),  // small right
    ];

    const next = () => setIndex((prev) => (prev + 1) % products.length);

    
    const prev = () =>
        setIndex((prev) => (prev - 1 + products.length) % products.length);

    return <>
        <section className="relative w-full h-[350px] bg-[#dbdac6cc] flex flex-col items-center justify-center px-12">
        
        <img 
            src="/images/left-image.jpg"
            alt="coffee"
            className="absolute left-25 top-5/8 -translate-y-1/2 h-80 object-cover w-60"
        />

        <img 
            src="/images/right-image-coffee-latte.jpg"
            alt="coffee"
            className="absolute left-265 top-5/12 -translate-y-1/2 h-70 object-cover w-65"
        />

            <div className="relative z-10 flex flex-col leading-none justify-center items-center">
                <h1 className="text-[160px] font-semibold font-mono tracking-tight m-0 text-[#3a2f2a]">
                    EXPRESSO
                </h1>
                <h1 className="text-[120px] font-semibold font-mono tracking-tight mt-0 mb-5 text-[#3a2f2a]">
                    YOURSELF
                </h1>
                <p className="text-[#8c8a8bcc] text-[20px]  font-serif">Pure Coffee, pure community, pure experience, because you</p> 
                <p className="text-[#8c8a8bcc] text-[20px] font-serif">can never have to much coffee in your life</p>

                <Search className="border border-black w-100 pr-24 mt-6 h-12 placeholder-font-bold placeholder-black text-black pl-11" placeholder="Search Here" />
                <img src="/images/magnifying-glass.png" 
                     alt="magnifying-glass"
                     className="absolute bottom-2 h-8 w-8 left-59">
                </img>
            </div>
        </section>
        <Galao />
        <section className="mt-20 ml-16">
            <h1 className="text-[#3a2f2a] font-bold text-7xl">OUR COFFEE</h1>
            <div className="ml-3 mt-5 flex"> 
                <p className="text-[#8c8a8bcc] text-[20px] font-serif">There's always room for coffee, its not just coffee,
                    <br></br>it's an experience, life is better with coffee
                </p>
                <div className="bg-yellow-950 ml-150 border rounded-full w-15 h-15r justify-items-center
                    content-center" onClick={next}>
                    <img src="images/right-arrow.png" onClick={next} alt="right-arrow" className="w-6 h-8 rotate-180"></img>
                </div>
                <div className="bg-yellow-950 ml-5 border rounded-full w-15 h-15 justify-items-center
                    content-center" onClick={prev}>
                    <img src="images/right-arrow.png" onClick={prev} alt="right-arrow" className="w-6 h-8"></img>
                </div>
            </div>
        </section>
        <section className="w-full flex flex-col items-center gap-6 mt-30">
            <div className="w-full flex flex-col items-center gap-6">
                <div className="flex items-center justify-center gap-4 h-[320px]">
                    {visible.map((item, i) => {
                    const isCenter = i === 1 || i === 2; 
                    const sizeClass = isCenter ? "w-78 h-90" : "w-68 h-80";

                    return (
                        <div
                        key={item.name}
                        className={`transition-all duration-1000 ease-in-out transform bg-yellow-950 ${sizeClass} flex flex-col items-center justify-center cursor-pointer`}
                        >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-50 h-50 object-cover rounded-2xl shadow-xl absolute z-100 top-6/4"
                        />
                        <h1 className="text-white mt-2 mr-40 mb-10 text-3xl font-semibold text-black">{item.name}</h1>
                        </div>
                    );
                    })}
                    </div>
                </div>
        </section>
        <section className="mt-20 flex flex-col items-center">
            <h1 className="text-[#3a2f2a] font-bold text-7xl text-center">
                OUR ROASTING
            </h1>

            <p className="text-[#8c8a8bcc] text-xl font-serif text-center mt-4">
                A cup of coffee on a warm summer day reminds you there's
            </p>
            <p className="text-[#8c8a8bcc] text-xl font-serif text-center mt-2">
                a bright side to every day. There's a great big coffee world
            </p>
            <p className="text-[#8c8a8bcc] text-xl font-serif text-center mt-2">
                waiting for you. And it tastes great!
            </p>
            <Roast />
        </section>
        <Galao />
        <section className="p-20">
            <Ads />
        </section>
        <section>
            <Footer />
            <Copyright />
        </section>
    </>
}