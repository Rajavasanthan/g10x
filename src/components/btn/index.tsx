interface BtnProps {
    text: string;
    bgColor: string;
    borderColor: string;
    textColor: string;
    hoverBgColor: string;
    hoverTextColor: string;
}

export function Btn({ text, bgColor, borderColor, textColor, hoverBgColor, hoverTextColor }: BtnProps) {
    return (
        <button
            className={`group ${bgColor} ${textColor} p-1.5 pl-4 rounded-full text-lg flex items-center gap-4 cursor-pointer ${hoverBgColor} ${hoverTextColor} ${borderColor} duration-500 transform transition-transform hover:translate-x-2.5`}
        >
            {text}

            <span
                className={`relative w-10 h-10 bg-[#e83a77] rounded-full flex items-center justify-center overflow-hidden`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="absolute w-7 h-8 transform transition-all duration-1000 group-hover:translate-x-6 group-hover:-translate-y-6 opacity-100 group-hover:opacity-0"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                </svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="absolute w-7 h-8 transform -translate-x-6 translate-y-6 opacity-0 transition-all duration-1000 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                </svg>
            </span>
        </button>
    );
}
