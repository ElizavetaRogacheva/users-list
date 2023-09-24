import React from 'react';
import './scss/main.scss';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="main-header">Список пользователей</h1>
        <UsersList></UsersList>
      </div>
    </div>
  );
}

export default App;
