import React from 'react';
import Footer from './components/Footer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => (
    <div>
      <TodoForm />
      <TodoList />
      <Footer />
    </div>
);
export default App;
