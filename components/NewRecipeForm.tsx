import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { Input } from './Input';
import IngredientInput from './IngredientInput';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { addRecipe } from '../slicers/recipesSlicer';
import { ingredient, recipe } from '../types/recipe';

export type Inputs = {
  ingredients: ingredient[];
  directions: string;
  title: string;
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
    console.log(data);
    const { ingredients, directions, title } = data;
    const id = uuidv4();
    const newRecipe: recipe = {
      id,
      title,
      ingredients,
      directions
    };
    dispatch(addRecipe(newRecipe));
  };

  const IngredientsInputs: ingredient[] = [];

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
        inputKey={0}
        // errors={[errors.ingredients, errors.quantity, errors.unit]}
        register={register}
      />{' '}
      <IngredientInput
        inputKey={1}
        // errors={[errors.ingredients, errors.quantity, errors.unit]}
        register={register}
      />{' '}
      <IngredientInput
        inputKey={2}
        // errors={[errors.ingredients, errors.quantity, errors.unit]}
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
