import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { Input } from './Input';
import IngredientInput from './IngredientInput';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { addRecipe } from '../slicers/recipesSlicer';

export type Inputs = {
  ingredient: string;
  directions: string;
  title: string;
  quantity: string;
  unit: string;
};

const NewRecipeForm = () => {
  const myRecipes = useSelector((state: RootState) => state.recipes.value);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { ingredient, directions, title, quantity, unit } = data;
    const id = uuidv4();
    const newRecipe = {
      id,
      title,
      ingredients: [{ name: ingredient, quantity, unit }],
      directions
    };
    dispatch(addRecipe(newRecipe));
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
      {/* TODO: This component should render several times if needed. */}
      <IngredientInput
        errors={[errors.ingredient, errors.quantity, errors.unit]}
        register={register}
      />
      <Input
        label='Directions'
        error={errors.title}
        InputTag='textarea'
        isRequired={false}
        name='directions'
        register={register}
      />
      <Button label='Add' type='submit' />
    </form>
  );
};

export default NewRecipeForm;
