import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
query getUsers {
  users {
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
    friendCount
    games {
      _id
      game_name
      favoritesCount
      favorites {
        _id
        username
      }
      comments {
        _id
        commentText
        username
        createdAt
      }
      commentCount
    }
    gamesCount
  }
}
`;

export const QUERY_USER = gql`
query Query($username: String!) {
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
    friendCount
    games {
      _id
      game_name
      favoritesCount
      favorites {
        _id
        username
      }
      comments {
        _id
        commentText
        username
        createdAt
      }
      commentCount
    }
    gamesCount
  }
}
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      friendCount
      Comments {
        _id
        commentText
        createdAt
    }
  }
}
`;

export const QUERY_GAMES = gql`
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

export const QUERY_GAME = gql`
query GameById ($gameId: String!) {
  gamebyId(gameId: $gameId) {
      _id
      game_name
      category
      min_number_of_players
      max_number_of_players
      avg_min_game_time
      avg_max_game_time
      game_description
      favoritesCount
      favorites {
        username
        _id
      }
      comments {
        username
        commentText
      }
    }
  }
`;