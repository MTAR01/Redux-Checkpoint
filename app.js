import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddTask from './AddTask';
import ListTask from './ListTask';
import FilterTasks from './FilterTasks';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo App with Redux</h1>
        <AddTask />
        <FilterTasks />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
