"use client";

import Button from "./Button";
import { useRouter } from "next/navigation";

const h1_style: string = `text-black font-serif font-bold cursor-pointer border-b-2 border-transparent
            hover:border-yellow-950 transition-colors duration-500 text-lg sm:text-xl`;

export default function Header() {
  const router = useRouter();

  const isClick = (name: string) => {
    switch (name) {
      case "home":
        router.push(`/${name}`);
        break;
      case "coffee":
        router.push(`/${name}/coffees`);
        break;
      case "all-products":
        router.push(`/coffee/${name}`);
        break;
      case "cart":
        router.push(`/${name}`);
        break;
      case "store":
        router.push(`/${name}`);
        break;
      default:
        router.push("/home");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-10 py-4 bg-white shadow-md">
      {/* Logo */}
      <h1
        className="text-2xl sm:text-3xl font-sans font-bold cursor-pointer mb-4 sm:mb-0 text-black"
        onClick={() => isClick("home")}
      >
        YES PARK CAFE
      </h1>

      {/* Menu Items */}
      <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start mb-4 sm:mb-0">
        <h1 className={h1_style} onClick={() => isClick("coffee")}>
          Coffee
        </h1>
        <h1 className={h1_style} onClick={() => isClick("cart")}>
          Cart
        </h1>
        <h1 className={h1_style} onClick={() => isClick("store")}>
          Store
        </h1>
      </div>

      {/* Order Now Button */}
      <Button
        onClick={() => isClick("all-products")}
        label="Order Now"
        className="bg-yellow-950 text-white font-serif px-4 sm:px-6 py-2 rounded w-full sm:w-auto hover:scale-105 transition duration-200"
      />
    </div>
  );
}