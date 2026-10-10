"use client";
import { useEffect, useState, useMemo } from "react";
import Button from "./Button";

type BillProduct = {
    name: string;
    image: string;
    price: number;
    quantity: number;
}

type PaymentOption = {
    id: string;
    label: string;
    payment: number;
    method: string;
}

const PAYMENT_OPTIONS: PaymentOption[] = [
    { id: "cash", label: "CASH", payment: 1, method: "CASH" },
    { id: "gcash", label: "G-CASH", payment: 2, method: "GCASH" },
    { id: "maya", label: "MAYA", payment: 3, method: "MAYA" },
];

const qty_button: string = `flex h-7 w-7 cursor-pointer items-center justify-center rounded-full font-bold text-black
    hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[rgba(86,132,75,0.8)]`;

export default function Billing(){
<<<<<<< HEAD
    const [products, setProducts] = useState<BillProduct[]>([]);
=======

    const [products, setProducts] = useState<any[]>([]);
>>>>>>> 24e3ce044366f1b52d4be3055db6ab7e5bc3f64d
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

<<<<<<< HEAD
    const subtotal = useMemo(() => {
=======
    let subtotal = useMemo(() => {
>>>>>>> 24e3ce044366f1b52d4be3055db6ab7e5bc3f64d
        return products.reduce(
            (sum, product) => sum + product.quantity * product.price, 0
        );
    }, [products]);

<<<<<<< HEAD
    const updateQuantity = async (name: string, method: "add" | "minus") => {
=======
    const updateQuantity = async (name: string, method: string) => {

>>>>>>> 24e3ce044366f1b52d4be3055db6ab7e5bc3f64d
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
<<<<<<< HEAD
        <div className="w-full max-w-[480px] shrink-0 rounded-2xl bg-[rgba(228,228,228,0.8)] p-4 sm:p-6 lg:sticky lg:top-4 lg:w-[380px] lg:max-w-none">
            <h1 className="mb-4 text-xl font-bold text-black">Bills</h1>

            {products.map((product) => (
                <div className="mb-5 flex items-center gap-3" key={product.name}>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[rgba(125,171,114,0.8)]">
                        <img src={product.image} alt={product.name} className="h-auto w-10 object-contain" />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col">
                        <h2 className="break-words text-[14px] font-bold text-black">{product.name}</h2>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="font-bold text-black">x{product.quantity}</span>
                            <button
                                type="button"
                                aria-label={`Remove one ${product.name}`}
                                className={qty_button}
                                onClick={() => updateQuantity(product.name, "minus")}
                            >-</button>
                            <button
                                type="button"
                                aria-label={`Add one ${product.name}`}
                                className={qty_button}
                                onClick={() => updateQuantity(product.name, "add")}
                            >+</button>
                        </div>
                    </div>
                    <p className="shrink-0 text-sm font-bold text-[rgba(153,153,153,0.79)]">
                        ₱{(product.price * product.quantity).toFixed(2)}
                    </p>
                </div>
            ))}

            <div className="flex justify-between gap-4">
                <h2 className="mt-3 text-[13px] font-bold text-black">Subtotal</h2>
                <p className="mt-3 text-[13px] font-bold text-black">₱{subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between gap-4">
                <h2 className="mt-3 text-[13px] font-bold text-[rgba(153,153,153,0.79)]">Tax (10%)</h2>
                <p className="mt-3 text-[13px] text-[rgba(153,153,153,0.79)]">₱{(subtotal * 0.10).toFixed(2)}</p>
            </div>
            <div className="mt-4 flex justify-between gap-4">
                <h2 className="mt-3 text-[15px] font-bold text-black">Total</h2>
                <p className="mt-3 text-[15px] font-bold text-black">₱{(subtotal - subtotal * 0.10).toFixed(2)}</p>
            </div>

            <h2 className="mt-8 text-[16px] font-bold text-black sm:mt-10">Payment Method</h2>
            <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                {PAYMENT_OPTIONS.map((option) => (
                    <button
                        key={option.id}
                        type="button"
                        aria-pressed={isActive === option.id}
                        className={`flex h-16 w-full cursor-pointer items-center justify-center rounded-2xl border text-sm
                            ${isActive === option.id
                                ? "border-transparent bg-[rgba(86,132,75,0.8)] text-white"
                                : "border-transparent text-[rgba(86,132,75,0.8)] hover:border-[rgba(86,132,75,0.8)]"}`}
                        onClick={() => {
                            setActive(option.id);
                            setPayment(option.payment);
                            setMethod(option.method);
                        }}
                    >
                        {option.label}
                    </button>
                ))}
            </div>

            <div className="flex items-center justify-center">
                <Button
                    onClick={() => printBills(payment, method)}
                    className="mt-5 w-full cursor-pointer rounded-2xl bg-[rgba(86,132,75,0.8)] p-3 text-sm font-bold text-white"
                    label="Print Bills"
                />
            </div>
        </div>
    );
}
=======

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
>>>>>>> 24e3ce044366f1b52d4be3055db6ab7e5bc3f64d
