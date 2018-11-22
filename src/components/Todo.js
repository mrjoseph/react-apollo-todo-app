import React from 'react';
import { compose, graphql } from 'react-apollo';
import { TOGGLE_TODO } from '../queries/queries';
import './styles.css';
const Todo = ({ id, completed, text, toggleTodo}) => (
      <li onClick={toggleTodo} className={ completed ? 'completed': ''}>
        {text}
      </li>
  );


export default compose(
    graphql(TOGGLE_TODO, {name: "toggleTodo"}),
)(Todo);

