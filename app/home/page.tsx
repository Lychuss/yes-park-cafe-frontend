"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Search from "../(component)/Search";
import Galao from "../(component)/Galao";
import Roast from "../(component)/Roast";
import Ads from "../(component)/Ads";
import Footer from "../(component)/Footer";
import Copyright from "../(component)/Copyright";
import Carousel from "../(component)/Carousel";

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
        <Carousel />
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