"use client";
import { useEffect, useState, useMemo } from "react";
import Button from "./Button";

export default function Billing(){
    const [products, setProducts] = useState<any[]>([]);

        useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/all-user-bills`, {
                method: 'GET',
                credentials: 'include'
            });

            const data = await response.json();

            if(!data.success) return alert("ERROR IN THE CARTS USEEFFECT");

            setProducts(data.data);
            console.log(data.data);
        }

        fetchData();
    }, []);

    let subtotal = useMemo(() => {
        return products.reduce(
            (sum, product) => sum + product.quantity * product.price, 0
        );
    }, [products]);

    return <div className="w-full max-w-[350px] bg-[rgba(228,228,228,0.8)] p-6 rounded-2xl">
        <h1 className="text-black text-xl mb-4 font-bold">Bills</h1>
            {products.map((product, index) => {
                return  <div className="flex gap-2" key={index}>
                            <div className="w-15 h-12 bg-[rgba(125,171,114,0.8)] mb-5 rounded-xl flex items-center justify-center">
                                <img src={product.image} alt={product.name} className="flex flex-col w-10 h-10"></img>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-black text-[14px] font-bold">{product.name}</h1>
                                <div className="flex gap-10 text-sm">
                                    <p className="flex flex-col text-black font-bold">x{product.quantity}</p>
                                    <p className="flex flex-col text-[rgba(86,132,75,0.8)] font-bold">Notes</p>
                                    <p className="flex flex-col text-[rgba(153,153,153,0.79)] ml-14 font-bold">₱{product.price * product.quantity}</p>
                                </div>
                            </div>
                        </div>
            })}
            <div className="flex justify-between">
                <h1 className="flex flex-col text-[13px] text-black font-bold mt-3">Subtotal</h1>
                <p className="flex flex-col text-[13px] text-black font-bold mt-3">₱{subtotal}</p>
            </div>
            <div className="flex justify-between">
                <h1 className="flex flex-col text-[13px] text-[rgba(153,153,153,0.79)] font-bold mt-3">Tax (10%)</h1>
                <p className="flex flex-col text-[13px] text-[rgba(153,153,153,0.79)] mt-3">₱{(subtotal * 0.10).toFixed(2)}</p>
            </div>
            <div className="flex justify-between mt-4">
                <h1 className="flex flex-col text-[15px] text-black font-bold mt-3">Total</h1>
                <p className="flex flex-col text-[15px] text-black font-bold mt-3">₱{(subtotal -= subtotal * 0.10).toFixed(2)}</p>
            </div>
            <div className="flex justify-between mt-10">
                <h1 className="text-[16px] text-black font-bold mt-3">Payment Method</h1>
            </div>
            <div className="flex justify-between mt-4">
                <div className="flex flex-col hover:border border-[rgba(86,132,75,0.8)] w-19 h-16 items-center justify-center 
                rounded-2xl text-[rgba(86,132,75,0.8)] cursor-pointer">CASH</div>
                <div className="flex flex-col hover:border border-[rgba(86,132,75,0.8)] w-19 h-16 items-center justify-center 
                rounded-2xl text-[rgba(86,132,75,0.8)] cursor-pointer">G-CASH</div>
                <div className="flex flex-col hover:border border-[rgba(86,132,75,0.8)] w-19 h-16 items-center justify-center 
                rounded-2xl text-[rgba(86,132,75,0.8)] cursor-pointer">MAYA</div>
            </div>
            <div className="flex items-center justify-center">
                <Button onClick={() => console.log("hello")} className="w-full p-3 mt-5
                rounded-2xl text-sm font-bold bg-[rgba(86,132,75,0.8)] cursor-pointer" label="Print Bills"/>
            </div>
    </div>
}