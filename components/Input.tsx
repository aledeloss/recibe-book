import React, { ChangeEventHandler } from 'react';

interface InputProps {
  error?: { status: boolean; message: string | undefined };
  disabled?: boolean;
  handleChange: ChangeEventHandler;
  name: string;
  label: string;
  type?: 'email' | 'password' | 'text';
  value: string;
}
export const Input = ({
  error = { status: false, message: undefined },
  disabled = false,
  handleChange,
  label,
  name,
  type = 'text',
  value
}: InputProps) => {
  return (
    <div className='mb-4'>
      <label className='flex flex-col items-start '>
        <span className={'block'}>{label}</span>
        <input
          className={`appearance-none border border-black rounded w-full py-2 px-3 mt-1 leading-tight focus:shadow-outline ${
            error.status && 'border-red-500'
          }`}
          id={name}
          name={name}
          disabled={disabled}
          type={type}
          onChange={handleChange}
          value={value}
        />
      </label>
      {error.status && (
        <div className='mt-1 text-red-500 text-xs'>{error.message}</div>
      )}
    </div>
  );
};
