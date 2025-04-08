type NumpadButtonProps = {
    label: string;
    onClick: (value: string) => void;
    className?: string;
};

export const NumpadButton: React.FC<NumpadButtonProps> = ({ label, onClick, className }) => {
    return (
        <button
            onClick={() => onClick(label)}
            className={`text-4xl font-medium rounded-2xl shadow-[inset_0_-4px_0_rgba(0,0,0,0.2)] 
                 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 
                 active:shadow-[inset_0_2px_0_rgba(0,0,0,0.2)] transition-all 
                 px-4 py-3`}
        >
            {label}
        </button>
    );
};
