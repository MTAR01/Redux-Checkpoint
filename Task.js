// Task.js
import React from 'react';
import { useDispatch } from 'react-redux';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = React.useState(false);
  const [editValue, setEditValue] = React.useState(task.description);

  const handleEdit = () => {
    dispatch({
      type: 'EDIT_TASK',
      payload: {
        id: task.id,
        newDescription: editValue
      }
    });
    setIsEditing(false);
  };

  return (
    <div style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
      {isEditing ? (
        <>
          <input 
            value={editValue} 
            onChange={(e) => setEditValue(e.target.value)} 
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{task.description}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
      />
    </div>
  );
};

export default Task;
