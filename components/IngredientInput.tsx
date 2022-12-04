import React from 'react';
import Button from './Button';
import { Input } from './Input';

interface IngredientInput {
  register: any;
  errors: any[];
}
const IngredientInput = ({ register, errors }: IngredientInput) => {
  return (
    <div className='flex gap-2 w-full'>
      <fieldset className='flex w-full justify-between gap-2'>
        <Input
          label='Ingredient'
          error={errors[0]}
          name='ingredient'
          register={register}
          style={{ width: '100%' }}
        />
        <Input
          label='Quantity'
          error={errors[1]}
          isRequired={false}
          name='quantity'
          register={register}
        />
        <Input
          label='Unit'
          isRequired={false}
          error={errors[2]}
          name='unit'
          register={register}
        />
      </fieldset>
    </div>
  );
};

export default IngredientInput;
