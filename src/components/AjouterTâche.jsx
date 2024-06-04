import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../TodoSlice';
import { v4 as uuidv4 } from 'uuid';

const AjouterTâche = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (description.trim()) {
      dispatch(addTodo({
        id: uuidv4(),
        description,
        isDone: false,
      }));
      setDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Ajouter une nouvelle tâche"
      />
      <button onClick={handleAddTodo}>Ajouter</button>
    </div>
  );
};

export default AjouterTâche;