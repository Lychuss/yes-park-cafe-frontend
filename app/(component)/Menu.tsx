"use client";

import { useRouter, useParams } from "next/navigation";

const CATEGORIES = [
    { label: "All", slug: "all-products", icon: "/images/coffee-icon.png", alt: "all-products" },
    { label: "Coffee", slug: "coffees", icon: "/images/coffee-icon.png", alt: "coffee" },
    { label: "Snacks", slug: "snacks", icon: "/images/snacks-icon.png", alt: "snacks" },
    { label: "Breakfast", slug: "breakfast", icon: "/images/breakfast-icon.png", alt: "breakfast" },
    { label: "Bread", slug: "bread", icon: "/images/bread-icon.png", alt: "bread" },
    { label: "Pastries", slug: "pastries", icon: "/images/pastries-icon.png", alt: "pastries" },
];

const square_style: string = `flex h-[92px] w-20 shrink-0 cursor-pointer flex-col items-center justify-center gap-2 rounded-sm border
                    text-black hover:border-[#8c8a8bcc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow-950`;
const h1_style: string = "text-sm";
const pic_style: string = "h-10 w-10 object-contain";

export default function Menu(){
    const params = useParams();
    const router = useRouter();
    const currentCategory = typeof params.category === "string" ? params.category : null;

    return (
        <nav aria-label="Menu categories" className="flex flex-wrap justify-center gap-3 px-4 py-4 sm:gap-6 lg:gap-10">
            {CATEGORIES.map((category) => (
                <button
                    key={category.slug}
                    type="button"
                    aria-current={currentCategory === category.slug ? "page" : undefined}
                    className={`${square_style} ${currentCategory === category.slug ? "border-[#8c8a8bcc]" : "border-transparent"}`}
                    onClick={() => router.push(`/coffee/${category.slug}`)}
                >
                    <img src={category.icon} alt={category.alt} className={pic_style} />
                    <span className={h1_style}>{category.label}</span>
                </button>
            ))}
        </nav>
    );
}
