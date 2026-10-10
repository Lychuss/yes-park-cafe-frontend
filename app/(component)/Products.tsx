"use client";

import { useState, useEffect } from "react";
import Button from "./Button";
import Error from "./Error";
import { emitCartCount } from "./cartEvents";

type MyComponents = {
    coffeeId: string;
}

type Product = {
    id?: string | number;
    name: string;
    image: string;
    price: number;
    category: string;
}

const SIZES = [
    { label: "Tall", oz: 12, icon: "h-5 w-5" },
    { label: "Grande", oz: 16, icon: "h-6 w-6" },
    { label: "Venti", oz: 24, icon: "h-7 w-7" },
    { label: "Trenta", oz: 32, icon: "h-8 w-8" },
];

const outer_card: string = "flex w-full max-w-[360px] flex-col rounded-xl border border-[rgba(153,153,153,0.79)] p-4 text-black";
const middle_card: string = "relative aspect-square w-full self-center overflow-hidden rounded-xl bg-[rgba(86,132,75,0.8)]";
const inner_circle: string = "absolute left-1/2 top-[31.25%] aspect-square w-[137.5%] -translate-x-1/2 rounded-full bg-[rgba(125,171,114,0.8)]";
const image_style: string = "absolute left-1/2 top-[6.25%] h-[68.75%] w-[68.75%] -translate-x-1/2 rounded-lg object-cover";
const title_style: string = "min-w-0 break-words text-lg font-bold text-black sm:text-xl";
const price_style: string = "shrink-0 text-2xl font-bold text-[rgba(125,171,114,0.8)] sm:text-3xl";
const circle_style: string = "flex h-14 w-14 cursor-pointer items-center justify-center rounded-full transition-colors duration-500 ease-in-out hover:bg-[rgba(125,171,114,0.8)]";
const oz_style: string = "text-[10px] font-bold text-[rgba(153,153,153,0.79)]";
const qty_button: string = `flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[rgba(86,132,75,0.8)]
    text-2xl leading-none text-white transition-colors duration-500 ease-in-out`;

export default function Products(props: MyComponents){

    const [products, setProducts] = useState<Product[]>([]);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
    const [size, setSize] = useState<number | null>(null);
    const [error, setError] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        let cancelled = false;

        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/coffee/product/${props.coffeeId}`,
                    { method: "GET", credentials: "include"}
                );
                const data = await response.json();
                if (cancelled) return;

                if (!data.success) {
                    setMessage(data.message);
                    setError(true);
                    return;
                }
                setProducts(data.data);
            } catch (err) {
                console.error(err);
            }
        };

        setActiveIndex(null);
        setQuantities({});
        fetchData();

        return () => { cancelled = true; };
    }, [props.coffeeId]);

    // Show the error toast for 1s, fade it out, then remove it.
    useEffect(() => {
        if (!error) return;

        setVisible(true);
        let removeTimer: ReturnType<typeof setTimeout> | undefined;
        const hideTimer = setTimeout(() => {
            setVisible(false);
            removeTimer = setTimeout(() => setError(false), 300);
        }, 1000);

        return () => {
            clearTimeout(hideTimer);
            if (removeTimer) clearTimeout(removeTimer);
        };
    }, [error]);

    const add_cart = async (orderProduct: string, orderSize: number | null, orderQuantity: number) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/add-cart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    product_name: orderProduct,
                    size: orderSize,
                    quantity: orderQuantity
                }),
                credentials: 'include'
            });

            const data = await response.json();

            if(!data.success){
                setMessage(data.message);
                setError(true);
                return;
            }

            // Header listens for this and shows the number on the Cart link.
            emitCartCount(data.data);
        } catch (err) {
            console.error(err);
            setMessage("Something went wrong. Please try again.");
            setError(true);
        }
    }

    const selectSize = (index: number, oz: number) => {
        const sameSizeAlreadyOpen = activeIndex === index && size === oz;
        setActiveIndex(sameSizeAlreadyOpen ? null : index);
        setQuantities(prev => ({ ...prev, [index]: 0 }));
        setSize(oz);
    };

    const changeQuantity = (index: number, delta: 1 | -1) => {
        setQuantities(prev => ({
            ...prev,
            [index]: Math.max(0, (prev[index] || 0) + delta)
        }));
    };

    const renderControls = (index: number, product: Product) => (
        <div className="flex flex-wrap items-center gap-3 pt-4">
            <div className="flex items-center gap-3">
                <button type="button" aria-label="Decrease quantity" className={qty_button} onClick={() => changeQuantity(index, -1)}>
                    <span>-</span>
                </button>
                <span className="min-w-[1.5rem] text-center text-2xl">{quantities[index] || 0}</span>
                <button type="button" aria-label="Increase quantity" className={qty_button} onClick={() => changeQuantity(index, 1)}>
                    <span>+</span>
                </button>
            </div>
            <Button
                onClick={() => {
                    const quantity = quantities[index] ?? 0;
                    const product_size = product.category === "coffees" ? size : null;
                    add_cart(product.name, product_size, quantity);
                }}
                className="h-12 min-w-[120px] flex-1 cursor-pointer rounded-full bg-[rgba(86,132,75,0.8)] px-4 font-sans font-bold text-white"
                label="Add to Order"
            />
        </div>
    );

    return <>
        {error && (
            <div
                role="alert"
                className={`fixed left-1/2 top-4 z-50 w-max max-w-[92vw] -translate-x-1/2 transition-opacity duration-500 ease-in-out
                ${visible ? "opacity-100" : "opacity-0" }`}
            >
                <Error label={message}/>
            </div>
        )}
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-[repeat(auto-fill,minmax(min(100%,17.5rem),1fr))] items-start justify-items-center gap-6 px-4 py-6 sm:gap-8 sm:px-6 lg:gap-10 lg:px-10">
            {products.map((product, index) => {
                const isCoffee = product.category === "coffees";
                return (
                    <article className={outer_card} key={product.id ?? index}>
                        <div className={middle_card}>
                            <div className={inner_circle} />
                            <img src={product.image} alt={product.name} className={image_style} />
                        </div>

                        <div className="flex items-start justify-between gap-3 px-1 pt-4">
                            <h2 className={title_style}>{product.name}</h2>
                            <p className={price_style}>₱{product.price}</p>
                        </div>

                        {isCoffee && (
                            <div className="grid grid-cols-4 gap-1 pt-4">
                                {SIZES.map((item) => {
                                    const selected = activeIndex === index && size === item.oz;
                                    return (
                                        <div key={item.label} className="flex flex-col items-center gap-1">
                                            <button
                                                type="button"
                                                aria-pressed={selected}
                                                aria-label={`${item.label} ${item.oz} oz`}
                                                className={`${circle_style} ${selected ? "bg-[rgba(125,171,114,0.8)]" : ""}`}
                                                onClick={() => selectSize(index, item.oz)}
                                            >
                                                <img src="/images/grande-icon.png" alt="" className={item.icon} />
                                            </button>
                                            <span className="text-sm">{item.label}</span>
                                            <span className={oz_style}>{item.oz} oz</span>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {isCoffee ? (activeIndex === index && renderControls(index, product)) : renderControls(index, product)}
                    </article>
                );
            })}
        </div>
    </>
}
