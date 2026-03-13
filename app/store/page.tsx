"use client";
import { useRouter } from "next/navigation";
import Inquire from "../(component)/Inquire";
import Button from "../(component)/Button";
import FirstStory from "../(component)/FirstStory";
import SecondStory from "../(component)/SecondStory";

export default function Store(){
    const router = useRouter();
    return <>
        <img src="/images/coffee-shop-store.jpg" alt="store" className="w-full "></img>
        <div className="text-black flex flex-col items-center justify-center p-10 mb-25 w-full">
            <Inquire />
            <Button onClick={() => console.log("inquire")} className="border border-black p-4 mt-10 text-[12px] w-full
            max-w-[160px] tracking-widest bg-yellow-950 text-white hover:scale-110 hover:text-black transition duration-200" label="INQUIRE NOW" />
        </div>
        <div className="flex w-full">
            <FirstStory />
        </div>
        <div className="flex w-full">
            <SecondStory />
        </div>
    </>
}