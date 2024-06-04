import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, updateTodo } from '../TodoSlice';

const Tâche = ({ id, description, isDone }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(description);

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  const handleUpdate = () => {
    dispatch(updateTodo({ id, description: newDescription }));
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleUpdate}>Sauvegarder</button>
        </div>
      ) : (
        <div>
          <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
            {description}
          </span>
          <button onClick={() => setIsEditing(true)}>Modifier</button>
          <button onClick={handleToggle}>{isDone ? 'Marquer comme non fait' : 'Marquer comme fait'}</button>
        </div>
      )}
    </div>
  );
};

export default Tâche;