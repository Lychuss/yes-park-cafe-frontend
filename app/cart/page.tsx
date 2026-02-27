"use client";
import Carts from "../(component)/Carts";
import Billing from "../(component)/Billing";
import Footer from "../(component)/Footer";

export default function Cart(){
   return <>
      <div className="flex gap-1 items-start">
         <Carts />
         <Billing />
      </div>
      <Footer />
   </>
}