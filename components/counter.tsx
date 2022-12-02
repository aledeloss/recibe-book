import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { decrement, increment } from '../slicers/recipesSlicer';

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          className='border border-purple'
          aria-label='Increment value'
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          className='border border-purple'
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
