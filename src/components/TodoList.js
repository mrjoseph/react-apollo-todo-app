import React from 'react';
import { graphql, compose } from 'react-apollo';

import { GET_TODOS } from '../queries/queries';

import Todo from './Todo';


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const TodoList = (props) => {
    const { todos, visibilityFilter } = props.todos;
  return (
      <div>
        {getVisibleTodos(todos, visibilityFilter).map((todo) => {
          return(
              <Todo key={todo.id} {...todo} />
          )
        })}
      </div>
  )
};

export default compose(
    graphql(GET_TODOS, {name: "todos"}),
)(TodoList);


