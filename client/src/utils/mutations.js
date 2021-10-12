import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
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

export const UPDATE_PASSWORD = gql`
mutation updatePassword($username: String!, $password: String!) {
    updatePassword(username: $username, password: $password) {
      username
      email
    }
  }
`;

export const ADD_FRIEND = gql`
mutation AddFriendMutation($friendId: ID!) {
  addFriend(friendId: $friendId) {
      _id
      username
      friends {
        _id
        username
      }
      friendCount
  }
}
`;