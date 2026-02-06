"use client";
import Button from "./Button"
export default function Header(){
    return <>
        <div className="flex mx-10 space-x-10 ">
            <h1 className="mr-60 text-black font-bold text-2xl font-sans my-10">YES PARK CAFE</h1>
            <h1 className="text-black font-serif font-bold my-10">Stories</h1>
            <h1 className="text-black font-serif font-bold my-10">Coffee</h1>
            <h1 className="text-black font-serif font-bold my-10">Equipment</h1>
            <h1 className="text-black font-serif font-bold my-10">Store</h1>
            <Button onClick={() => console.log("hello")} className="ml-67 bg-yellow-950 font-serif
             px-6 py-2 m-10" label="Order Now"/>
        </div>
    </>
}