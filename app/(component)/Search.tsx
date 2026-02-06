import Button from "./Button"

type MyComponent = {
    className: string;
    placeholder: string;
}

export default function Search(props: MyComponent){
    return <>
    <div className="relative">
        <input id="search" className={props.className} placeholder={props.placeholder}></input>
        <Button onClick={() => console.log("hello")} className="bg-yellow-950 font-serif
             px-10 py-3 absolute right-2 top-4/6 -translate-y-1/2 cursor-pointer" label="Search"/>
    </div>
    </>
}