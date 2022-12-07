import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { recipe } from '../../../types/recipe';

const Detail = () => {
  const router = useRouter();
  const myRecipes: recipe[] = useSelector(
    (state: RootState) => state.recipes.value
  );
  const { id } = router.query;
  const currentRecipe = myRecipes.find((recipe) => recipe.id === id);
  return (
    <>
      {currentRecipe && (
        <>
          <h2 className='text-3xl'>{currentRecipe.title}</h2>
          <h3 className='text-xl mt-4'>Ingredients</h3>
          <ul>
            {currentRecipe.ingredients.map((ingredient, index) => {
              const { name, quantity, unit } = ingredient;
              return (
                <li key={index}>{`* ${name} ${quantity ? quantity : ''} ${
                  unit ? unit : ''
                }`}</li>
              );
            })}
          </ul>
          <h3 className='text-xl mt-4'>Directions</h3>
          <div>{currentRecipe.directions}</div>
        </>
      )}
    </>
  );
};

export default Detail;
