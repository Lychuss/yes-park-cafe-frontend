"use client";
import Carts from "../(component)/Carts";
import Billing from "../(component)/Billing";

export default function Cart(){
   return (
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-8 px-4 py-6 sm:px-6 lg:flex-row lg:items-start lg:justify-center lg:px-10">
         <div className="flex w-full min-w-0 justify-center lg:flex-1">
            <Carts />
         </div>
         <Billing />
      </div>
   );
}
