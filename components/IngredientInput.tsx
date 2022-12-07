import React from 'react';
import { FieldError } from 'react-hook-form';
import Button from './Button';
import { Input } from './Input';

interface IngredientInput {
  addIngredient?: () => void;
  inputKey: number;
  register: any;
  errors?: FieldError[] | undefined;
}
const IngredientInput = ({
  addIngredient,
  inputKey,
  register,
  errors
}: IngredientInput) => {
  return (
    <div className='flex gap-2 w-full'>
      <fieldset className='flex w-full justify-between gap-2'>
        <Input
          label='Ingredient'
          // error={errors[0]}
          name={`ingredients.${inputKey}.name`}
          register={register}
          style={{ width: '100%' }}
        />
        <Input
          label='Quantity'
          // error={errors[1]}
          isRequired={false}
          name={`ingredients.${inputKey}.quantity`}
          register={register}
        />
        <Input
          label='Unit'
          isRequired={false}
          // error={errors[2]}
          name={`ingredients.${inputKey}.unit`}
          register={register}
        />
      </fieldset>
      {/* <Button label='+' handleClick={() => addIngredient()} /> */}
    </div>
  );
};

export default IngredientInput;
