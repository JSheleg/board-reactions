import { gql } from "@apollo/client";

export const QUERY_USER = gql`
query UserbyUsername($username: String!) {
  user(username: $username) {
    _id
    username
    email
    questionOne
    answerOne
    questionTwo
    answerTwo
    friends {
      _id
      username
    }
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
