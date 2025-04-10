interface Visor {
    value: string;
}

export default function Visor(props:Visor) {
    return (
    <div className={"container bg-white text-slate-800 text-5xl text-center"}>
        <p>{props.value}</p>
    </div>
    )
}