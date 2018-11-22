import React from 'react';
import { graphql, compose, withApollo } from 'react-apollo';
import {GET_VISIBILITY_FILTER } from '../queries/queries';

import Link from './Link';

const FilterLink = ({visibilityFilter, client, filter, filters, children}) => {
  return (
  <Link
    onClick={() => client.writeData({ data: { visibilityFilter: filters } })}
    active={visibilityFilter === filters}
  >
    {children}
  </Link>
  )
};

const Footer = ({ visibilityFilter, client }) => (
    <>
      Show: <FilterLink visibilityFilter={visibilityFilter} client={client} filters="SHOW_ALL">All</FilterLink>
      {', '}
      <FilterLink visibilityFilter={visibilityFilter} client={client} filters="SHOW_ACTIVE">Active</FilterLink>
      {', '}
      <FilterLink visibilityFilter={visibilityFilter} client={client} filters="SHOW_COMPLETED">Completed</FilterLink>
    </>
)

export default withApollo(compose(
    graphql(GET_VISIBILITY_FILTER, {name: "visibilityFilter"}),
)(Footer));
