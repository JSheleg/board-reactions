import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!, 
    $email: String!, 
    $password: String!, 
    $questionOne: String!,
    $answerOne: String!,
    $questionTwo: String!,
    $answerTwo: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      questionOne: $questionOne
      answerOne: $answerOne
      questionTwo: $questionTwo
      answerTwo: $answerTwo
    ) {
      token
      user {
        _id
      }
    }
  }
`;