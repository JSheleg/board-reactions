import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { QUERY_GAMES } from "../utils/queries";

// import { ADD_GAME } from '../utils/mutations'
// import { useMutation } from '@apollo/client'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const AllGames = () => {
  const { loading, data } = useQuery(QUERY_GAMES);
  const allGames = data?.games || {};

  const [expandedId, setExpandedId] = React.useState(-1);

  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="gameCardContainer">
      <h1 className="homepageTitle">GAME SELECTION!</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {allGames.map((game, i) => {
            return (
              <Grid item xs={4} i={i} key={game._id}>
                <Card sx={{ maxWidth: 1000, maxHeight: 9999 }}>
                  <Link to={`/games/${game._id}`}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={require(`../assets/${game.game_name}.jpg`).default}
                      alt={game.game_name}
                      key={game.game_name}
                    />
                  </Link>

                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      {game.game_name}
                    </Typography>

                    <Typography gutterBottom variant="h5" component="div">
                      {game.category_id}
                    </Typography>

                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                    ></Typography>
                  </CardContent>

                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <ExpandMore
                      expand={expandedId === i}
                      onClick={() => handleExpandClick(i)}
                      aria-expanded={expandedId === i}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>{game.game_description}</Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default AllGames;
