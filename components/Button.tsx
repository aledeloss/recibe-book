import React from 'react';

interface ButtonProps {
  disabled?: boolean;
  label?: string;
  handleClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  disabled = false,
  label = 'Ok',
  handleClick,
  type = 'button'
}: ButtonProps) => {
  return (
    <button
      className={`bg-purple py-2 px-4 rounded float-right${
        disabled && 'opacity-50 cursor-not-allowed'
      }`}
      disabled={disabled}
      onClick={handleClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
