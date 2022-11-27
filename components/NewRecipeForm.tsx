import React, { ChangeEventHandler, useState } from 'react';
import { Input } from './Input';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  instructions: string;
  title: string;
};

const NewRecipeForm = () => {
  const [value, setValue] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const handleChange: ChangeEventHandler = (event) => {
    const eventTarget = event.target as HTMLInputElement;
    setValue(eventTarget.value);
  };
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
