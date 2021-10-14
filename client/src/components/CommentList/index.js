import { Link } from 'react-router-dom';

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: '#1976d2'
};

const commentStyled = {
    padding: "10px",
    color: "white",
    backgroundColor: "#1976d2"
}

const CommentList = ({ username, games }) => {

    //remove duplicate games from games array
    games = games.filter((item, index, self) => self.indexOf(item) === index)

    if (!games || !games.length) {
        return <p>{username}, go comment on some games!</p>;
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1, m: 2 }}>
              <Grid
                container
                spacing={1}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                  <Grid item xs={12}>
            <h5>
            <span className="username-style">{username}'s</span> {games.length === 1 ? 'comment! Click the game name to see the discussion!' : 'comments! Click the game name to see the discussion!'}
            </h5>
            </Grid>
            {games.map((game, index) => (
                <Item sx={{ width: 700 }}>

      <Grid item xs={12}>
                    <Button variant="outlined" color="info" key={game._id}>
                        <Link style={linkStyle} to={`/games/${game._id}`}>{game.game_name}</Link>
                    </Button>
                    </Grid>
                    {games[index].comments.map(comment => (
                       
                             <Grid item xs={12} sx={{ m:2 }}>
                        {
                            comment.username === username ?
                                <h4 style={commentStyled} key={comment._id}>"{comment.commentText}" <p className="createdAt">{comment.createdAt}</p></h4> 
                                : null
                        }
                        
                        </Grid>
                    ))}
                </Item>
            ))}
            </Grid>
            </Box>
        </div>
    );
};

export default CommentList;