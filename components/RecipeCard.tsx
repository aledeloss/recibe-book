import Link from 'next/link';
import React from 'react';
import { ingredient } from '../types/recipe';

interface RecipeCardProps {
  id: string;
  title: string;
  ingredients: ingredient[];
}
const RecipeCard = ({ id, title, ingredients }: RecipeCardProps) => {
  return (
    <Link href={`/recipes/detail/${id}`}>
      <h3>{title}</h3>
      <ul className='flex'>
        {ingredients.map((ingredient, index) => {
          return (
            <li className='text-sm m-2' key={index}>
              {ingredient.name}
            </li>
          );
        })}
      </ul>
    </Link>
  );
};

export default RecipeCard;
