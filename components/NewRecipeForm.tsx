import React from 'react';
import { Input } from './Input';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from './Button';

export type Inputs = {
  instructions: string;
  title: string;
  prueba: string;
};

const NewRecipeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log('ERRORS', errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label='Title'
        error={errors.title}
        isRequired={true}
        name='title'
        register={register}
      />
      <Input
        label='Instructions'
        error={errors.title}
        InputTag='textarea'
        isRequired={false}
        name='instructions'
        register={register}
      />
      <input type='submit' />
    </form>
  );
};

export default NewRecipeForm;
