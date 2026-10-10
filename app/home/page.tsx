"use client";

import { useEffect } from "react";
import Our from "../(component)/Our";
import Galao from "../(component)/Galao";
import Roast from "../(component)/Roast";
import Ads from "../(component)/Ads";
import Carousel from "../(component)/Carousel";
import Entry from "../(component)/Entry";

export default function Home(){

    useEffect(() => {
        const fetchData = async () => {
            try {
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
            } catch (err) {
                console.error(err);
            }
        }

        fetchData();
    }, []);

    return <>
        <section className="relative flex min-h-[350px] w-full flex-col items-center justify-center bg-[#dbdac6cc] px-4 py-10 sm:px-8 lg:px-12">
            <Entry />
        </section>
        <Galao />
        <Carousel />
        <section className="mt-12 flex flex-col items-center sm:mt-20">
            <Our />
            <Roast />
        </section>
        <Galao />
        <section className="p-4 sm:p-8 lg:p-20">
            <Ads />
        </section>
    </>
}
