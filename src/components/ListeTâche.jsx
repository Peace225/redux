import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tâche from './Tâche';
import { setFilter } from '../TodoSlice';

const ListeTâche = () => {
  const { todos, filter } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const filteredTodos = todos.filter(todo => {
    if (filter === 'done') return todo.isDone;
    if (filter === 'not-done') return !todo.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => dispatch(setFilter('all'))}>Toutes</button>
        <button onClick={() => dispatch(setFilter('done'))}>Faites</button>
        <button onClick={() => dispatch(setFilter('not-done'))}>Non faites</button>
      </div>
      {filteredTodos.map(todo => (
        <Tâche key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default ListeTâche;