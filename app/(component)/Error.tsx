type MyComponents = {
    label: string
}

export default function Error(props: MyComponents){
    return (
<<<<<<< HEAD
        <div className="flex w-fit max-w-full items-center border-2 border-[rgba(233,72,72,0.8)] bg-white p-2">
            <img src="/images/error.svg" alt="" aria-hidden="true" className="mx-2 w-8 shrink-0 sm:w-10" />
            <p className="mx-2 text-base text-[rgba(233,72,72,0.8)] sm:mx-3 sm:text-xl">{props.label}</p>
        </div>
    );
}
=======
        <div className="flex items-center gap-3 border-2 border-[rgba(233,72,72,0.8)] bg-white p-2 md:p-3 max-w-full rounded-md">
            
            <img
                src="/images/error.svg"
                alt="error"
                className="w-6 sm:w-8 md:w-10 flex-shrink-0"
            />

            <p className="text-sm sm:text-base md:text-lg text-[rgba(233,72,72,0.8)] break-words">
                {props.label}
            </p>

        </div>
    );
}
>>>>>>> 24e3ce044366f1b52d4be3055db6ab7e5bc3f64d
