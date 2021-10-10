import { gql } from "@apollo/client";

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

export const QUERY_GAME = gql`
query games {
  games {
    _id
    game_name
    category
    min_number_of_players
    max_number_of_players
    avg_min_game_time
    avg_max_game_time
    game_description
    favoritesCount
    commentCount
  }
}
`;
