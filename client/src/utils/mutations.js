import { gql } from "@apollo/client";

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
    $username: String!
    $email: String!
    $password: String!
    $questionOne: String!
    $answerOne: String!
    $questionTwo: String!
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
  mutation addFriend($friendId: ID!) {
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

export const REMOVE_FRIEND = gql`
  mutation deleteFriend($friendId: ID!) {
    deleteFriend(friendId: $friendId) {
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

export const ADD_COMMENT = gql`
  mutation addComment($commentText: String!, $gameId: String!) {
    addComment(commentText: $commentText, gameId: $gameId) {
      game_name
      category
      comments {
        commentText
        username
      }
    }
  }
`;

// export const ADD_GAME = gql`
//   mutation addGame(
//     $game_name: String!,
//     $category: String!,
//     $min_number_of_players: Int,
//     $max_number_of_players: Int,
//     $avg_min_game_time: Int,
//     $avg_max_game_time: Int,
//     $game_description: String!
//     )
//     {
//     addGame(
//     game_name: $game_name,
//     category: $category,
//     min_number_of_players: $min_number_of_players,
//     max_number_of_players: $max_number_of_players,
//     avg_min_game_time: $avg_min_game_time,
//     avg_max_game_time: $avg_max_game_time,
//     game_description: $game_description
//     ) {
//       game_name
//       category
//       min_number_of_players
//       max_number_of_players
//       avg_min_game_time
//       avg_max_game_time
//       game_description
//       }
//     }
//   }
// `;

export const ADD_GAME = gql`
  mutation addGame(
    $game_name: String!
    $category: String!
    $game_description: String!
    $min_number_of_players: Int
    $max_number_of_players: Int
    $avg_min_game_time: Int
    $avg_max_game_time: Int
  ) {
    addGame(
      game_name: $game_name
      category: $category
      game_description: $game_description
      min_number_of_players: $min_number_of_players
      max_number_of_players: $max_number_of_players
      avg_min_game_time: $avg_min_game_time
      avg_max_game_time: $avg_max_game_time
    ) {
      _id
      game_name
      game_description
    }
  }
`;
