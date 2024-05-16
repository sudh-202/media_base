import React from 'react';

interface ButtonProps {

    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

const ButtonRound: React.FC<ButtonProps> = ({ onClick, type = 'button', className = '' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-6 py-3 text-sm  text-black rounded-full border  border-black hover:bg-[#52B2AD] hover:text-white hover:border-white focus:outline-none  ${className}`}
        >
            Know more
        </button>
    );
};

export default ButtonRound;
