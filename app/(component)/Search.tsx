import Button from "./Button"

type MyComponent = {
    className: string;
    placeholder: string;
}

export default function Search(props: MyComponent){
    return (
        <div className="relative w-full">
            <input
                id="search"
                aria-label={props.placeholder}
                className={`${props.className} w-full pr-28 sm:pr-44`}
                placeholder={props.placeholder}
            />
            <Button
                onClick={() => console.log("hello")}
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer bg-yellow-950 px-5 py-2 font-serif text-white transition-colors duration-200 hover:text-black sm:px-10 sm:py-3"
                label="Search"
            />
        </div>
    );
}
