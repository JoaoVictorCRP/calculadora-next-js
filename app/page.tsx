"use client"
import Visor from "@/app/components/Visor";
import {Numpad} from "@/app/components/Numpad";
import {useState} from "react";

export default function Home() {
    const [input, setInput] = useState('0');

    const handleInput = (val: string) => {
        if (val=='=') {
            setInput(eval(input));
            return;
        }

        if(val=='x'){
            setInput((prev) => prev + '*');
            return;
        }

        if (val==',') {
            setInput((prev) => prev + '.');
            return;
        }


        if (val=='C'){
            setInput('0');
            return;
        }

        console.log(val+input);
        if(input=='0'){
            setInput((prev)=>val);
        } else {
            setInput((prev) => prev+val);
        }
    }

    return (
    <div>
        <Visor value={input}/>
        <Numpad onInput={handleInput}/>
    </div>
  );
}
