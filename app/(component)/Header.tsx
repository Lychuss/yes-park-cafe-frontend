"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";
import { CART_COUNT_EVENT } from "./cartEvents";

type NavName = "home" | "coffee" | "all-products" | "cart" | "store";

const links: { name: NavName; label: string }[] = [
    { name: "coffee", label: "Coffee" },
    { name: "cart", label: "Cart" },
    { name: "store", label: "Store" },
];

const h1_style: string = `relative cursor-pointer border-b-2 border-transparent py-1 font-serif font-bold text-black
            transition-colors duration-500 hover:border-yellow-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow-950`;

const order_style: string = `items-center justify-center bg-yellow-950 px-6 font-serif text-white
            h-11 cursor-pointer transition duration-200 hover:scale-105`;

function CartBadge({ count }: { count: number | null }){
    if (count === null) return null;
    return (
        <span className="absolute -right-4 -top-2 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-[rgba(86,132,75,0.8)] px-1 text-[9px] font-bold text-white">
            {count}
        </span>
    );
}

export default function Header(){
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [cartCount, setCartCount] = useState<number | null>(null);

    useEffect(() => {
        const onCount = (event: Event) => {
            const count = (event as CustomEvent<number>).detail;
            setCartCount(typeof count === "number" ? count : null);
        };
        window.addEventListener(CART_COUNT_EVENT, onCount);
        return () => window.removeEventListener(CART_COUNT_EVENT, onCount);
    }, []);

    const isClick = (name: NavName) => {
        setMenuOpen(false);
        switch(name){
            case "home":
                router.push("/home");
                break;
            case "coffee":
                router.push("/coffee/coffees");
                break;
            case "all-products":
                router.push("/coffee/all-products");
                break;
            case "cart":
                router.push("/cart");
                break;
            case "store":
                router.push("/store");
                break;
        }
    }

    return (
        <header className="relative z-40 w-full">
            <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10 lg:py-6">
                <button
                    type="button"
                    onClick={() => isClick("home")}
                    className="cursor-pointer whitespace-nowrap font-sans text-lg font-bold text-black sm:text-xl lg:text-2xl"
                >
                    YES PARK CAFE
                </button>

                <nav aria-label="Main" className="hidden items-center gap-6 md:flex lg:gap-10">
                    {links.map((link) => (
                        <button key={link.name} type="button" className={h1_style} onClick={() => isClick(link.name)}>
                            {link.label}
                            {link.name === "cart" && <CartBadge count={cartCount} />}
                        </button>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Button
                        onClick={() => isClick("all-products")}
                        className={`hidden md:inline-flex ${order_style}`}
                        label="Order Now"
                    />
                    <button
                        type="button"
                        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-md text-black md:hidden"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                            {menuOpen ? (
                                <path d="M6 6l12 12M18 6L6 18" />
                            ) : (
                                <path d="M4 7h16M4 12h16M4 17h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div id="mobile-menu" className="absolute inset-x-0 top-full border-t border-black/10 bg-white px-4 pb-4 shadow-md md:hidden">
                    <nav aria-label="Mobile" className="flex flex-col">
                        {links.map((link) => (
                            <button
                                key={link.name}
                                type="button"
                                onClick={() => isClick(link.name)}
                                className="flex w-full cursor-pointer items-center gap-2 border-b border-black/10 py-3 text-left font-serif font-bold text-black"
                            >
                                <span className="relative">
                                    {link.label}
                                    {link.name === "cart" && <CartBadge count={cartCount} />}
                                </span>
                            </button>
                        ))}
                    </nav>
                    <Button
                        onClick={() => isClick("all-products")}
                        className={`mt-4 flex w-full ${order_style}`}
                        label="Order Now"
                    />
                </div>
            )}
        </header>
    );
}
