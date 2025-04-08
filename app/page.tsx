"use client"
import Visor from "@/app/components/Visor";
import {Numpad} from "@/app/components/Numpad";
import {useState} from "react";

export default function Home() {
    const [input, setInput] = useState('0');

    const handleInput = (val: string) => {
        setInput((prev) => prev + val);
    }

    return (
    <div>
        <Visor value={parseInt(input)}/>
        <Numpad onInput={handleInput}/>
    </div>
  );
}
