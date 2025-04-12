interface VisorProps {
    value: string;
}

export default function Visor({ value }: VisorProps) {
    return (
        <div className="w-full max-w-2xl mx-auto p-4">
            <div
                className="
          bg-gray-100 dark:bg-gray-800 
          text-gray-800 dark:text-gray-100 
          text-5xl font-mono text-right 
          rounded-2xl shadow-inner 
          px-6 py-4
          overflow-x-auto
          scrollbar-hide
          transition-all
          h-28
          flex items-end
        "
            >
                {value}
            </div>
        </div>
    );
}
