import { Link } from 'react-router-dom';

const FavoriteGamesList = ({ username, games }) => {

  //remove duplicate games from games array
  games = games.filter((item, index, self) => self.indexOf(item) === index)

  if (!games || !games.length) {
    return <p>{username}, go favorite some games!</p>;
  }

  return (
    <div>
      <h5>
        {username}'s {games.length} {games.length === 1 ? 'favorite game' : 'favorite games'}
      </h5>
      {games.map(game => (
        <button key={game._id}>
          <Link to={`/games/${game._id}`}>{game.game_name}</Link>
        </button>
      ))}
    </div>
  );
};

export default FavoriteGamesList;