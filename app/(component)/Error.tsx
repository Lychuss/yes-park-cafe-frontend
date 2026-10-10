type MyComponents = {
    label: string
}

export default function Error(props: MyComponents){
    return (
        <div className="flex w-fit max-w-full items-center border-2 border-[rgba(233,72,72,0.8)] bg-white p-2">
            <img src="/images/error.svg" alt="" aria-hidden="true" className="mx-2 w-8 shrink-0 sm:w-10" />
            <p className="mx-2 text-base text-[rgba(233,72,72,0.8)] sm:mx-3 sm:text-xl">{props.label}</p>
        </div>
    );
}
