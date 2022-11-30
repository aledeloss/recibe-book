import React from 'react';
import { recipes } from '../../data/recipes';

const Detail = () => {
  const recipe = recipes[0];
  return (
    <>
      <h2 className='text-3xl'>{recipe.title}</h2>
      <h3 className='text-xl mt-4'>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => {
          const { name, quantity, unity } = ingredient;
          return (
            <li key={index}>{`* ${name} ${quantity ? quantity : ''} ${
              unity ? unity : ''
            }`}</li>
          );
        })}
      </ul>
      <h3 className='text-xl mt-4'>Directions</h3>
      <div>{recipe.directions}</div>
    </>
  );
};

export default Detail;
