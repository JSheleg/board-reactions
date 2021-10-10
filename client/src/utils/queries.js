import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user($username: String!) {
    user(username: $username) {
      username
      email
      questionOne
      answerOne
      questionTwo
      answerTwo
      comments {
        _id
        commentText
        createdAt
        username 
      }
      commentCount
      friends {
        username
      }
      friendCount
    }
  }
`;  