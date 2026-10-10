type MyComponent = {
    onClick: () => void;
    className: string;
    label: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    ariaLabel?: string;
}

export default function Button(props: MyComponent){
    return (
        <button
            onClick={props.onClick}
            type={props.type ?? "button"}
            disabled={props.disabled}
            aria-label={props.ariaLabel}
            className={props.className}
        >
            {props.label}
        </button>
    );
}
