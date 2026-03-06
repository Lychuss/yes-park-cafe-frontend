type MyComponents = {
    label: string
}
export default function Error(props: MyComponents){
    return <div className="w-fit flex border-2 border-[rgba(233,72,72,0.8)] p-2 items-center bg-white">
        <img src="/images/error.svg" alt="error" className="mx-2 w-full max-w-[40px]"></img>
        <p className="mx-3 text-xl text-[rgba(233,72,72,0.8)]">{props.label}</p>
    </div>
}