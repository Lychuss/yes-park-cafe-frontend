"use client";
import { useEffect, useState, useMemo } from "react";
import Button from "./Button";

export default function Billing(){

    const [products, setProducts] = useState<any[]>([]);
    const [payment, setPayment] = useState<number>(0);
    const [method, setMethod] = useState<string>("");
    const [isActive, setActive] = useState<string>("");

    const fetchData = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/all-user-bills`, {
            method: 'GET',
            credentials: 'include'
        });

        const data = await response.json();
        if(!data.success) return alert("ERROR IN THE CARTS USEEFFECT");

        setProducts(data.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    let subtotal = useMemo(() => {
        return products.reduce(
            (sum, product) => sum + product.quantity * product.price, 0
        );
    }, [products]);

    const updateQuantity = async (name: string, method: string) => {

        setProducts(prev =>
            prev.map(p =>
                p.name === name
                    ? {
                        ...p,
                        quantity: method === "add"
                            ? p.quantity + 1
                            : Math.max(0, p.quantity - 1)
                    }
                    : p
            )
        );

        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/all-user-bills/${method}/${name}`, {
            method: "PUT",
            credentials: "include"
        });
    };

    const printBills = async (payment: number, method: string) => {

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create-payment`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                payment: payment,
                total_amount: (subtotal - subtotal * 0.10).toFixed(2),
                payment_method: method
            })
        });

        const data = await response.json();
        if(!data.success) return alert("Error in getting print bills");

        window.location.href = data.invoice_url;
    }

    return (

        <div className="w-full max-w-sm md:max-w-md bg-[rgba(228,228,228,0.8)] p-4 md:p-6 rounded-2xl">

            <h1 className="text-black text-lg md:text-xl mb-4 font-bold">
                Bills
            </h1>

            {products.map((product) => {

                return (

                    <div className="flex items-center gap-3 mb-4" key={product.name}>

                        <div className="w-12 h-12 bg-[rgba(125,171,114,0.8)] rounded-xl flex items-center justify-center flex-shrink-0">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-8 h-auto"
                            />
                        </div>

                        <div className="flex flex-col flex-grow">

                            <h1 className="text-black text-sm font-bold">
                                {product.name}
                            </h1>

                            <div className="flex flex-wrap items-center gap-3 text-sm">

                                <p className="text-black font-bold">
                                    x{product.quantity}
                                </p>

                                <button
                                    className="text-black font-bold px-2"
                                    onClick={() => updateQuantity(product.name, "minus")}
                                >
                                    -
                                </button>

                                <button
                                    className="text-black font-bold px-2"
                                    onClick={() => updateQuantity(product.name, "add")}
                                >
                                    +
                                </button>

                                <p className="text-gray-500 font-bold ml-auto">
                                    ₱{(product.price * product.quantity).toFixed(2)}
                                </p>

                            </div>

                        </div>

                    </div>

                )
            })}

            {/* BILL TOTALS */}

            <div className="flex justify-between text-sm font-bold mt-3">
                <span>Subtotal</span>
                <span>₱{subtotal}</span>
            </div>

            <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>Tax (10%)</span>
                <span>₱{(subtotal * 0.10).toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-base font-bold mt-3">
                <span>Total</span>
                <span>₱{(subtotal - subtotal * 0.10).toFixed(2)}</span>
            </div>

            {/* PAYMENT METHOD */}

            <h1 className="text-base font-bold mt-6">
                Payment Method
            </h1>

            <div className="grid grid-cols-3 gap-3 mt-4">

                <div
                    className={`flex items-center justify-center h-14 rounded-xl border text-sm cursor-pointer
                    ${isActive === "cash" ? "bg-[rgba(86,132,75,0.8)] text-white" : "text-[rgba(86,132,75,0.8)] border-[rgba(86,132,75,0.8)]"}`}
                    onClick={()=>{
                        setActive("cash")
                        setPayment(1)
                        setMethod("CASH")
                    }}
                >
                    CASH
                </div>

                <div
                    className={`flex items-center justify-center h-14 rounded-xl border text-sm cursor-pointer
                    ${isActive === "gcash" ? "bg-[rgba(86,132,75,0.8)] text-white" : "text-[rgba(86,132,75,0.8)] border-[rgba(86,132,75,0.8)]"}`}
                    onClick={()=>{
                        setActive("gcash")
                        setPayment(2)
                        setMethod("GCASH")
                    }}
                >
                    GCash
                </div>

                <div
                    className={`flex items-center justify-center h-14 rounded-xl border text-sm cursor-pointer
                    ${isActive === "maya" ? "bg-[rgba(86,132,75,0.8)] text-white" : "text-[rgba(86,132,75,0.8)] border-[rgba(86,132,75,0.8)]"}`}
                    onClick={()=>{
                        setActive("maya")
                        setPayment(3)
                        setMethod("MAYA")
                    }}
                >
                    Maya
                </div>

            </div>

            <div className="mt-6">
                <Button
                    onClick={()=>printBills(payment, method)}
                    className="w-full p-3 rounded-xl text-sm font-bold bg-[rgba(86,132,75,0.8)]"
                    label="Print Bills"
                />
            </div>

        </div>
    )
}