import { Link } from 'react-router-dom';

const CommentList = ({ username, games }) => {

    //remove duplicate games from games array
    games = games.filter((item, index, self) => self.indexOf(item) === index)

    if (!games || !games.length) {
        return <p>{username}, go comment on some games!</p>;
    }

    return (
        <div>
            <h5>
                {username}'s {games.length === 1 ? 'comment! Click the game name to see the discussion!' : 'comments! Click the game name to see the discussion!'}
            </h5>
            {games.map((game, index) => (
                <div>
                    <button key={game._id}>
                        <Link to={`/games/${game._id}`}>{game.game_name}</Link>
                    </button>
                    {games[index].comments.map(comment => (
                        <div>
                        {
                            comment.username === username ?
                                <p key={comment._id}>"{comment.commentText}" on {comment.createdAt}</p> 
                                : null
                        }
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default CommentList;