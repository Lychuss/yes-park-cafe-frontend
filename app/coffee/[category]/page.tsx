"use client";

import { useParams } from "next/navigation";
import Menu from "../../(component)/Menu";
import Products from "../../(component)/Products";

export default function CoffeeCategory(){
    const params = useParams<{ category: string }>();
    const category = String(params.category ?? "all-products");

    return <>
        <Menu />
        <Products key={category} coffeeId={category} />
    </>
}
