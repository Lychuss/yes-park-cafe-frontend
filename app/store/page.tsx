"use client";
import Inquire from "../(component)/Inquire";
import Button from "../(component)/Button";
import FirstStory from "../(component)/FirstStory";
import SecondStory from "../(component)/SecondStory";

export default function Store(){
    return <>
        <img
            src="/images/coffee-shop-store.jpg"
            alt="store"
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-auto lg:max-h-[640px]"
        />
        <div className="mb-12 flex w-full flex-col items-center justify-center px-4 py-8 text-center text-black sm:mb-24 sm:p-10">
            <Inquire />
            <Button
                onClick={() => console.log("inquire")}
                className="mt-10 w-full max-w-[160px] cursor-pointer border border-black bg-yellow-950 p-4 text-[12px] tracking-widest text-white transition duration-200 hover:scale-110 hover:text-black"
                label="INQUIRE NOW"
            />
        </div>
        <FirstStory />
        <SecondStory />
    </>
}
