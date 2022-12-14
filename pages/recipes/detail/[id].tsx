import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { recipe } from '../../../types/recipe';
import Button from '../../../components/Button';
import { deleteRecipe } from '../../../slicers/recipesSlicer';

const Detail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
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
          <Button
            label='Remove recipe'
            handleClick={() => {
              if (typeof id === 'string') dispatch(deleteRecipe(id));
              router.push('/');
            }}
          />
        </>
      )}
    </>
  );
};

export default Detail;
