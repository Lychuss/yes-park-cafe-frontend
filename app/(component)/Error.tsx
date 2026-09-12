type MyComponents = {
    label: string
}

export default function Error(props: MyComponents){
    return (
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