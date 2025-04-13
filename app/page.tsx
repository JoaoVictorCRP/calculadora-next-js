"use client"
import Visor from "@/app/components/Visor";
import {Numpad} from "@/app/components/Numpad";
import {useState} from "react";
import Swal from "sweetalert2";
import Title from "@/app/components/Title";
import Footer from "@/app/components/Footer";


export default function Home() {
    const [input, setInput] = useState('0');


    const handleInput = (val: string) => {
        if (val=='=') {
            // Substitui todas as ocorrências de "√" seguido de número ou expressão (ex: √9, √(9+1), etc.)
            const processedInput = input.replace(/√(\d+(\.\d+)?|\([^)]+\))/g, (_, expr) => {
                return `Math.sqrt(${expr})`;
            });

            const result= eval(processedInput);

            if (result===Infinity) { // previnir divisão por zero com o sweetalert
                Swal.fire({
                    title: "Ops!",
                    text: "Não é possível dividir por zero.",
                    icon: "question"
                }).then(res => {
                    if (res.isConfirmed) {
                        setInput('0');
                    }
                });
                return;
            }

            setInput(result);
            return;
        }

        if(val=='x'){
            setInput((prev) => prev + '*');
            return;
        }

        if (val=='÷'){
            setInput((prev) => prev + '/');
            return;
        }

        if (val=='÷'){
            setInput((prev) => prev + '/');
            return;
        }

        if (val==',') {
            setInput((prev) => prev + '.');
            return;
        }

        if (val==='( )'){
            if (input.includes('(')) {
                setInput((prev) => prev + ')');
                return;
            }

            if (input==='0') {
                setInput('(');
                return;
            }
            setInput((prev) => prev + '(');
            return;
        }

        if (val=='C'){
            setInput('0');
            return;
        }

        console.log(val+input);
        if(input=='0'){
            setInput(val);
        } else {
            setInput((prev) => prev+val);
        }
    }

    return (
    <div>
        <Title/>
        <Visor value={input}/>
        <Numpad onInput={handleInput}/>
        <Footer/>
    </div>
  );
}
