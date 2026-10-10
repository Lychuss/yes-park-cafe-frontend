"use client";

import { useRouter, useParams } from "next/navigation";

<<<<<<< HEAD
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
=======
export default function Menu() {
  const params = useParams();
  const coffeeIds: string = String(params.category || "all-products");
  const router = useRouter();

  const categories = [
    { name: "All", icon: "/images/coffee-icon.png", route: "all-products" },
    { name: "Coffee", icon: "/images/coffee-icon.png", route: "coffees" },
    { name: "Snacks", icon: "/images/snacks-icon.png", route: "snacks" },
    { name: "Breakfast", icon: "/images/breakfast-icon.png", route: "breakfast" },
    { name: "Bread", icon: "/images/bread-icon.png", route: "bread" },
    { name: "Pastries", icon: "/images/pastries-icon.png", route: "pastries" },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 px-4 sm:px-10 py-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="w-20 sm:w-24 md:w-28 h-24 sm:h-28 md:h-32 rounded-sm text-black flex flex-col items-center justify-center hover:border border-[#8c8a8bcc] cursor-pointer"
            onClick={() => router.push(`/coffee/${cat.route}`)}
          >
            <img
              src={cat.icon}
              alt={cat.name}
              className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 mt-2 object-contain"
            />
            <h1 className="mb-2 mt-2 text-xs sm:text-sm md:text-base">{cat.name}</h1>
          </div>
        ))}
      </div>

      <Products coffeeId={coffeeIds} />
    </>
  );
}
>>>>>>> 24e3ce044366f1b52d4be3055db6ab7e5bc3f64d
