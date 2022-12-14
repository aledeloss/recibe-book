import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import RecipeCard from '../components/RecipeCard';

const Home = () => {
  const myRecipes = useSelector((state: RootState) => state.recipes.value);

  return (
    <div className='flex justify-center items-center'>
      {myRecipes.length ? (
        <div className=' text-5xl w-full'>
          {myRecipes.map((recipe) => {
            return <RecipeCard key={recipe.id} {...recipe} />;
          })}
        </div>
      ) : (
        <div className='h-auto flex justify-content-center items-center flex-col'>
          <h2 className='text-5xl m-4'>Welcome to My recipe book!</h2>
          <div className='text-3xl'>
            You have no recipes yet, start saving you favorite ones!
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
