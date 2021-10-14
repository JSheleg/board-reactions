import { Link } from 'react-router-dom';

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { fontSize } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: '#1976d2',
  fontSize: '1rem'
};

const FavoriteGamesList = ({ username, games }) => {

  //remove duplicate games from games array
  games = games.filter((item, index, self) => self.indexOf(item) === index)

  if (!games || !games.length) {
    return <p><span className="username-style">{username}</span>, go favorite some games!</p>;
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
      <h5>
      <span className="username-style">{username}'s</span> {games.length} {games.length === 1 ? 'favorite game' : 'favorite games'}
      </h5>
      {games.map(game => (
        <Grid item xs={12} sx={{ width: 300 }}>
        <Button sx={{ width: 300 }} variant="outlined" key={game._id}>
          <Link style={linkStyle} to={`/games/${game._id}`}>{game.game_name}</Link>
        </Button>
</Grid>
      ))}
      </Grid>
      </Box>
    </div>
  );
};

export default FavoriteGamesList;