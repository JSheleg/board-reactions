import { Link } from 'react-router-dom';

const CommentList = ({ username, games }) => {

    console.log('games', games)

    //remove duplicates

    if (!games || !games.length) {
        return <p>{username}, go comment on some games!</p>;
    }

    return (
        <div>
            <h5>
                {username}'s {games.length} {games.length === 1 ? 'comment' : 'comments'}
            </h5>
            {games.map((game, index) => (
                <div>
                    <button key={game._id}>
                        <Link to={`/games/${game.game_name}`}>{game.game_name}</Link>
                    </button>
                    {games[index].comments.map(comment => (
                        <div>
                        {
                            comment.username === username ?
                                <p key={comment._id}>"{comment.commentText}" on {comment.createdAt}</p> :
                                null
                        }
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default CommentList;