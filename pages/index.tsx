import { Counter } from '../components/counter';

const Home = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='text-5xl'>
        <h1>Welcome to My recipe book!</h1>
        <Counter />
      </div>
    </div>
  );
};

export default Home;
