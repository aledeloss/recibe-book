import React from 'react';

interface ButtonProps {
  disabled?: boolean;
  label?: string;
  handleClick: () => void;
}

const Button = ({
  disabled = false,
  label = 'Ok',
  handleClick
}: ButtonProps) => {
  return (
    <button
      className={`bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded ${
        disabled && 'opacity-50 cursor-not-allowed'
      }`}
      disabled={disabled}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
