import React, { ChangeEventHandler } from 'react';

interface InputProps {
  error: any; // { status: boolean; message: string | undefined };
  disabled?: boolean;
  InputTag?: 'input' | 'textarea';
  isRequired?: boolean;
  name: string;
  label: string;
  register: any;
  type?: 'email' | 'password' | 'text';
}
export const Input = ({
  error = { status: false, message: undefined },
  disabled = false,
  InputTag = 'input',
  isRequired = true,
  label,
  name,
  register,
  type = 'text'
}: InputProps) => {
  return (
    <div className='mb-4'>
      <label className='flex flex-col items-start '>
        <span className={'block'}>{`${label}${isRequired ? ' *' : ''}`}</span>
        <InputTag
          className={`appearance-none border border-black rounded w-full py-2 px-3 mt-1 leading-tight focus:shadow-outline ${
            error.status && 'border-red-500'
          }`}
          id={name}
          name={name}
          disabled={disabled}
          type={type}
          {...(register(name), { required: isRequired })}
        />
      </label>
      {error.status && (
        <div className='mt-1 text-red-500 text-xs'>{error.message}</div>
      )}
    </div>
  );
};
