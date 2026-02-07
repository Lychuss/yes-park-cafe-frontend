import React from "react";

export default function Galao(){
    return <>
        <div className="text-white flex mt-25 text-5xl font-bold gap-6 h-25 bg-yellow-950 items-center">
        {["MOCHA", "GALAO", "CAPPUCINO", "DOPPIO"].map((word, i)=> {
            return (
            <React.Fragment key={i}>
                <img src="/images/galao-icon.png" alt="icon" className="w-20 h-15"></img>
                <h1>{word}</h1>
            </React.Fragment>
        )
        })}
        </div>
    </>
}