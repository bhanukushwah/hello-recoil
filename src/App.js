import React from 'react';
import { RecoilRoot } from 'recoil'
import './App.css';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <RecoilRoot>
      <TodoApp />
    </RecoilRoot>
  );
}

export default App;
