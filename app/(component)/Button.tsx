type MyComponent = {
    onClick: () => void;
    className: string;
    label: string;
}

export default function Button(props: MyComponent){
    return  <>
            <button onClick={props.onClick} type="submit" className={props.className} >{props.label}
            </button>
            </>
}