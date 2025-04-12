import { NumpadButton } from './NumpadButton';

type NumpadProps = {
    onInput: (value: string) => void;
};

const buttons = [
    ['CE', 'C', '%', '/'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['√', '0', ',', '='],
];

export const Numpad: React.FC<NumpadProps> = ({ onInput }) => {
    return (
        <div className="grid grid-cols-4 gap-4 p-4 bg-white dark:bg-gray-900 rounded-3xl shadow-lg max-w-2xl h-full mx-auto">
            {buttons.flat().map((btn, i) => (
                <NumpadButton key={i} label={btn} onClick={onInput}/>
            ))}
        </div>
    );
};
