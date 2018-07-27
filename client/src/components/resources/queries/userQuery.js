import gql from 'graphql-tag';

export const GET_USERS = gql`
  query {
    users {
      id
      email
    }
  }
`;

export const AUTH_USER = gql`
  query {
    authUser {
      id
      email
    }
  }
`;
