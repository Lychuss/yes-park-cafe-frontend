"use client";
import Carts from "../(component)/Carts";
import Billing from "../(component)/Billing";

export default function Cart(){
   return <>
      <div className="flex gap-1 items-start">
         <Carts />
         <Billing />
      </div>
   </>
}