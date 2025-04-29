
import React from 'react';
import { useDispatch } from 'react-redux';

const FilterTasks = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}>
        All
      </button>
      <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'done' })}>
        Done
      </button>
      <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'notDone' })}>
        Not Done
      </button>
    </div>
  );
};

export default FilterTasks;
