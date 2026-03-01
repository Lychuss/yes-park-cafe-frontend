"use client";

import { useEffect, useState } from "react";
import Our from "../(component)/Our";
import Galao from "../(component)/Galao";
import Roast from "../(component)/Roast";
import Ads from "../(component)/Ads";
import Carousel from "../(component)/Carousel";
import Entry from "../(component)/Entry";

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
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/guest`, {
                method: "GET",
                credentials: "include"
            });

            const data = await response.json();

            if(!data.success){
                localStorage.setItem('userId', data.userId);
                console.log("new token!");
            }

            console.log(data.success);
        }

        fetchData();
    }, []);

    return <>
        <section className="relative w-full h-[350px] bg-[#dbdac6cc] flex flex-col items-center justify-center px-12">
            <Entry />
        </section>
        <Galao />
        <Carousel />
        <section className="mt-20 flex flex-col items-center">
            <Our />
            <Roast />
        </section>
        <Galao />
        <section className="p-20">
            <Ads />
        </section>
    </>
}