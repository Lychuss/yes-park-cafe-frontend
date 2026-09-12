"use client";

import { useRouter } from "next/navigation";
import Products from "./Products";
import { useParams } from "next/navigation";

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