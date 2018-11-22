import gql from 'graphql-tag';

export const query = gql`
  query GetTodos {
    todos @client {
      id
      text
      completed
    }
  }
`;
export const ADD_TODO = gql`
  mutation addTodoItem($text: String!) {
    addTodoItem(text: $text) @client {
      id
    }
  }
`;

export const GET_TODOS = gql`
  {
    todos @client {
      id
      completed
      text
    }
    visibilityFilter @client
  }
`;
export const GET_VISIBILITY_FILTER = gql`
  {
    visibilityFilter @client
  }
`;

export const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: Int!) {
    toggleTodo(id: $id) @client
  }
`;
