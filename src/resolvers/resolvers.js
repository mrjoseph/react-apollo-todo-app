import { query } from '../queries/queries';
import gql from 'graphql-tag';

export const resolvers = {
  Mutation: {
    addTodoItem: (_, { text }, { cache }) => {
      // Get previous todos
      const previous = cache.readQuery({ query });
      // generate a id
      const id = Math.random().toString(36).replace('0.', '');
      //Create a new todo item
      const newTodo = {
        id,
        text,
        completed: false,
        __typename: 'TodoItem',
      };
      // merge the previous todos with the latest one
      const data = {
        todos:[...previous.todos ,newTodo],
      };
      // write your new todos array to the cache
      cache.writeData({ data });
      return newTodo;
    },
    toggleTodo: (_, variables, { cache }) => {
      const id = `TodoItem:${variables.id}`;

      const fragment = gql`
        fragment completeTodo on TodoItem {
          completed
        }
      `;
      const todo = cache.readFragment({ fragment, id });

      console.log('todo---->>>', todo);
      const data = { ...todo, completed: !todo.completed };
      cache.writeData({ id, data });
      return null;
    },
  }
};

export const defaults = {
  todos: [],
  visibilityFilter: 'SHOW_ALL',
};
