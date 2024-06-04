import React from 'react';
import { Provider } from 'react-redux';
import Store from './Store';
import AjouterTâche from './components/AjouterTâche';
import ListeTâche from './components/ListeTâche';

const App = () => {
  return (
    <Provider Store={Store}>
      <div className="App">
        <h1>Liste de Tâches</h1>
        <AjouterTâche />
        <ListeTâche />
      </div>
    </Provider>
  );
};

export default App;
