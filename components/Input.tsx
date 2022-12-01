import React from 'react';
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';
import { Inputs } from './NewRecipeForm';

type InputName = 'title' | 'instructions' | 'ingredient' | 'quantity' | 'unity';
interface InputProps {
  error?: FieldError | undefined;
  isDisabled?: boolean;
  InputTag?: 'input' | 'textarea';
  isRequired?: boolean;
  name: InputName;
  label: string;
  register: UseFormRegister<Inputs>;
  style?: {};
  type?: 'email' | 'password' | 'text';
}

export function Input({
  error = undefined,
  isDisabled = false,
  InputTag = 'input',
  isRequired = true,
  label,
  name,
  register,
  style,
  type = 'text'
}: InputProps) {
  return (
    <div className='mb-4' style={style && style}>
      <label className='flex flex-col items-start '>
        <span className={'block'}>{`${label}${isRequired ? ' *' : ''}`}</span>
        <InputTag
          className={`appearance-none border border-black rounded w-full py-2 px-3 mt-1 leading-tight focus:shadow-outline ${
            error && 'border-red-500'
          }`}
          disabled={isDisabled}
          type={type}
          {...register(name, { required: isRequired })}
        />
      </label>
      {error && (
        <div className='mt-1 text-red-500 text-xs'>{error.message}</div>
      )}
    </div>
  );
}
