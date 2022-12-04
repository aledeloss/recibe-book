import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { recipes } from '../data/recipes';
import { addRecipe } from '../slicers/recipesSlicer';

const Home = () => {
  const myRecipes = useSelector((state: RootState) => state.recipes.value);
  const dispatch = useDispatch();

  return (
    <div className='flex justify-center items-center'>
      <div className='text-5xl'>
        <h1>Welcome to My recipe book!</h1>
        {JSON.stringify(myRecipes)}
      </div>
    </div>
  );
};

export default Home;
