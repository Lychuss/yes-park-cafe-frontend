"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import ErrorToast from "./Error";
import { emitCartCount } from "./cartEvents";

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

type Product = {
    id: string;
    image: string;
    /** Must match the product name stored in your database — the cart API looks products up by name. */
    name: string;
    /** millilitres */
    volume: number;
    price: number;
    /** 0–5 */
    rating: number;
};

// NOTE: ratings are placeholders, and the last item reuses doppio.png until it gets its own image.
const PRODUCTS: Product[] = [
    { id: "latte",      image: "/images/coffee-latte.png", name: "COFFEE LATTE", volume: 160, price: 23.49, rating: 5.0 },
    { id: "cappuccino", image: "/images/cappucino.png",    name: "CAPPUCINO",   volume: 160, price: 23.49, rating: 4.5 },
    { id: "cortado",    image: "/images/cortado.png",      name: "CORTADO",      volume: 160, price: 23.49, rating: 4.0 },
    { id: "doppio",     image: "/images/doppio.png",       name: "DOPPIO",       volume: 160, price: 23.49, rating: 3.5 },
    { id: "espresso",   image: "/images/doppio.png",       name: "GALAO",     volume: 160, price: 23.49, rating: 3.0 }, // TODO: own image
];

/* -------------------------------------------------------------------------- */
/*  Cart API                                                                  */
/* -------------------------------------------------------------------------- */

const ADD_CART_URL = `${process.env.NEXT_PUBLIC_API_URL}/product/add-cart`;

/**
 * The carousel has no size picker, so it sends this size for every coffee.
 * Set it to an oz value from your SIZES list (e.g. 16) if your API requires a size for coffees.
 */
const DEFAULT_SIZE_OZ: number | null = null;

type AddCartResponse = { success: boolean; message?: string; data?: number };

async function addToCart(product: Product): Promise<AddCartResponse> {
    const response = await fetch(ADD_CART_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product_name: product.name, size: DEFAULT_SIZE_OZ, quantity: 1 }),
        credentials: "include",
    });

    return response.json();
}

/* -------------------------------------------------------------------------- */
/*  Error toast (same behaviour as in Products: show 1s, fade 0.3s, remove)   */
/* -------------------------------------------------------------------------- */

const TOAST_VISIBLE_MS = 1000;
const TOAST_FADE_MS = 300;

function useErrorToast() {
    const [toast, setToast] = useState<{ text: string } | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!toast) return;

        setVisible(true);
        let removeTimer: ReturnType<typeof setTimeout> | undefined;
        const hideTimer = setTimeout(() => {
            setVisible(false);
            removeTimer = setTimeout(() => setToast(null), TOAST_FADE_MS);
        }, TOAST_VISIBLE_MS);

        return () => {
            clearTimeout(hideTimer);
            clearTimeout(removeTimer);
        };
    }, [toast]);

    // A fresh object each time restarts the timers even if the text is identical.
    const show = useCallback((text: string) => {
        setVisible(false);
        setToast({ text });
    }, []);

    return { message: toast?.text ?? null, visible, show };
}

/* -------------------------------------------------------------------------- */
/*  Carousel config                                                           */
/* -------------------------------------------------------------------------- */

/**
 * Slots are keyed by a card's signed distance from the active card
 * (-2 = far left … 0 = centre … 2 = far right).
 * x offsets are percentages of the card's own width, so they scale with the card on every screen size.
 */
const SLOT_VARIANTS: Variants = {
    "-2": { x: "-170%", scale: 0.7, opacity: 1, zIndex: 1 },
    "-1": { x: "-92%",  scale: 0.8, opacity: 1, zIndex: 3 },
    "0":  { x: "0%",    scale: 1,   opacity: 1, zIndex: 5 },
    "1":  { x: "92%",   scale: 0.8, opacity: 1, zIndex: 3 },
    "2":  { x: "170%",  scale: 0.7, opacity: 1, zIndex: 1 },
    hidden: { x: "0%",  scale: 0.5, opacity: 0, zIndex: 0 },
};

const MAX_VISIBLE_DISTANCE = 2;
const ADDED_FEEDBACK_MS = 1200;

/** Signed, wrapped distance of `index` from `active` in a loop of `total` items. */
function getOffset(index: number, active: number, total: number) {
    const half = Math.floor(total / 2);
    return ((index - active + half + total) % total) - half;
}

const priceFormatter = new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" });

const ARROW_BUTTON_CLASS =
    "flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full border border-yellow-950 bg-yellow-950 " +
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-950";

/* -------------------------------------------------------------------------- */
/*  Sub-components                                                            */
/* -------------------------------------------------------------------------- */

function ArrowButton({ direction, onClick }: { direction: "previous" | "next"; onClick: () => void }) {
    return (
        <button
            type="button"
            aria-label={direction === "previous" ? "Previous coffee" : "Next coffee"}
            className={ARROW_BUTTON_CLASS}
            onClick={onClick}
        >
            <img
                src="/images/right-arrow.png"
                alt=""
                draggable={false}
                className={`h-8 w-6 ${direction === "previous" ? "rotate-180" : ""}`}
            />
        </button>
    );
}

type AddState = "loading" | "added";

const ADD_BUTTON_LABEL: Record<AddState | "idle", string> = {
    idle: "+",
    loading: "…",
    added: "✓",
};

type ProductCardProps = {
    product: Product;
    isActive: boolean;
    addState?: AddState;
    onAdd: (product: Product) => void;
};

function ProductCard({ product, isActive, addState, onAdd }: ProductCardProps) {
    return (
        <div className="relative h-[330px] w-[260px] bg-[#1c1808cc] text-white sm:h-96 sm:w-80">
            <img
                src={product.image}
                alt={product.name}
                draggable={false}
                className="pointer-events-none absolute -top-[90px] left-1/2 h-[180px] w-[180px] -translate-x-1/2 select-none sm:-top-[100px] sm:h-[220px] sm:w-[220px]"
            />

            <div className="flex h-full flex-col items-start gap-2 px-5 pb-5 pt-[110px] sm:px-6 sm:pt-40">
                <h3 className="text-2xl font-bold sm:text-[31px]">{product.name}</h3>

                <p className="w-[68px] bg-[#5f5c5ecc] p-1 text-center text-[15px] font-bold">
                    <span aria-hidden="true">★</span> {product.rating.toFixed(1)}
                    <span className="sr-only"> out of 5</span>
                </p>

                <p className="text-base sm:text-[18px]">
                    <span className="text-[#5f5c5ecc]">Volume</span> {product.volume} ml
                </p>

                <div className="relative mt-auto w-full border-2 border-[#5f5c5ecc] p-2 text-3xl">
                    <p className="ml-3">{priceFormatter.format(product.price)}</p>

                    <button
                        type="button"
                        aria-label={`Add ${product.name} to cart`}
                        tabIndex={isActive ? 0 : -1}
                        disabled={addState === "loading"}
                        onClick={() => onAdd(product)}
                        className="absolute right-0 top-0 flex h-full w-1/6 cursor-pointer items-center justify-center bg-[#d5e2cdcc] text-4xl font-thin text-black
                                   disabled:cursor-wait focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-black"
                    >
                        {ADD_BUTTON_LABEL[addState ?? "idle"]}
                    </button>
                </div>
            </div>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/*  Carousel                                                                  */
/* -------------------------------------------------------------------------- */

export default function Carousel({ products = PRODUCTS }: { products?: Product[] }) {
    const total = products.length;
    const reduceMotion = useReducedMotion();
    const errorToast = useErrorToast();

    const [active, setActive] = useState(0);
    const [feedback, setFeedback] = useState<{ id: string; state: AddState } | null>(null);
    const feedbackTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

    useEffect(() => () => clearTimeout(feedbackTimer.current), []);

    const goNext = () => setActive((i) => (i + 1) % total);
    const goPrevious = () => setActive((i) => (i - 1 + total) % total);

    const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
        if (e.key === "ArrowRight") goNext();
        if (e.key === "ArrowLeft") goPrevious();
    };

    const handleAdd = async (product: Product) => {
        clearTimeout(feedbackTimer.current);
        setFeedback({ id: product.id, state: "loading" });

        try {
            const result = await addToCart(product);

            if (!result.success) {
                setFeedback(null);
                errorToast.show(result.message ?? "Could not add to cart.");
                return;
            }

            // Header listens for this and shows the number on the Cart link.
            emitCartCount(result.data!);

            setFeedback({ id: product.id, state: "added" });
            feedbackTimer.current = setTimeout(() => setFeedback(null), ADDED_FEEDBACK_MS);
        } catch (error) {
            console.error(error);
            setFeedback(null);
            errorToast.show("Something went wrong. Please try again.");
        }
    };

    const addedProduct = feedback?.state === "added" ? products.find((p) => p.id === feedback.id) : undefined;

    return (
        <>
            {errorToast.message && (
                <div
                    role="alert"
                    className={`fixed left-1/2 top-4 z-50 w-max max-w-[92vw] -translate-x-1/2 transition-opacity duration-500 ease-in-out
                                ${errorToast.visible ? "opacity-100" : "opacity-0"}`}
                >
                    <ErrorToast label={errorToast.message} />
                </div>
            )}

            <motion.div
                initial={{ opacity: 0, y: reduceMotion ? 0 : 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <header className="mt-12 px-4 sm:mt-20 sm:px-8 lg:px-16">
                    <h2 className="text-4xl font-bold text-[#3a2f2a] sm:text-5xl lg:text-7xl">OUR COFFEE</h2>

                    <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
                        <p className="font-serif text-base text-[#8c8a8bcc] sm:text-lg lg:text-[20px]">
                            There&apos;s always room for coffee, it&apos;s not just coffee, <br className="hidden md:block" />
                            it&apos;s an experience, life is better with coffee
                        </p>

                        <div className="flex gap-3 sm:gap-5">
                            <ArrowButton direction="previous" onClick={goPrevious} />
                            <ArrowButton direction="next" onClick={goNext} />
                        </div>
                    </div>
                </header>

                <section
                    aria-roledescription="carousel"
                    aria-label="Our coffee"
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                    className="relative h-[460px] w-full overflow-hidden sm:h-[540px]
                               focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-yellow-950"
                >
                    {products.map((product, i) => {
                        const offset = getOffset(i, active, total);
                        const isActive = offset === 0;
                        const isVisible = Math.abs(offset) <= MAX_VISIBLE_DISTANCE;

                        return (
                            <motion.div
                                key={product.id}
                                role="group"
                                aria-roledescription="slide"
                                aria-label={`${i + 1} of ${total}`}
                                aria-hidden={!isActive}
                                className={`absolute left-1/2 top-[110px] -ml-[130px] sm:top-[130px] sm:-ml-40
                                            ${isVisible ? "" : "pointer-events-none"} ${isActive ? "" : "cursor-pointer"}`}
                                variants={SLOT_VARIANTS}
                                animate={isVisible ? String(offset) : "hidden"}
                                transition={{ duration: reduceMotion ? 0 : 0.5 }}
                                onClick={isActive ? undefined : () => setActive(i)}
                            >
                                <ProductCard
                                    product={product}
                                    isActive={isActive}
                                    addState={feedback?.id === product.id ? feedback.state : undefined}
                                    onAdd={handleAdd}
                                />
                            </motion.div>
                        );
                    })}
                </section>

                {/* Announces a successful add to screen readers (errors use the role="alert" toast) */}
                <p role="status" className="sr-only">
                    {addedProduct ? `${addedProduct.name} added to cart` : ""}
                </p>
            </motion.div>
        </>
    );
}