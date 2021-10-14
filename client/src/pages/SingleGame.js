import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_GAME, QUERY_GAMES, QUERY_ME } from "../utils/queries";
import { ADD_FAVORITE, ADD_GAME_TO_USER } from "../utils/mutations";

import GameCommentList from "../components/GameCommentList";
import Auth from "../utils/auth";
import AddCommentForm from "../components/AddCommentForm";



const SingleGame = (props) => {

  const [message, setMessage] = useState(null);

  const [favoriteGame] = useMutation(ADD_FAVORITE);
  const [addGameToUser] = useMutation(ADD_GAME_TO_USER);
  // get username of logged in user
  const loggedInUser = Auth.getLoggedInUsername();

  let { gameId: gameId } = useParams();

  const { loading, data } = useQuery(QUERY_GAME, {
    variables: { gameId: gameId },
  });

  const singleGame = data?.gamebyId || {};

  const allComments = singleGame.comments;

  const handleHeartClick = async () => {



    try {
      await favoriteGame({
        variables: { gameId: gameId }
      })
    } catch (e) {
      console.log(e)
    }

    try {
      await addGameToUser({
        variables: { gameId: gameId }
      })
    } catch (e) {
      console.log(e);
    }
    
    setMessage('Game Favorited!')

    setTimeout(() => {
      setMessage(null)
    }, 2000)
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

            {loading ? (
              <div>Loading...</div>
            ) : (
              <Card sx={{ maxWidth: 1000, maxHeight: 9999 }}>
                <CardMedia
                  component="img"
                  height="500"
                  image={require(`../assets/${singleGame.image}.jpg`).default}
                  alt="boardgame image"
                />

                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    {singleGame.game_name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {singleGame.category}
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div">
                    Players: {singleGame.min_number_of_players} to{" "}
                    {singleGame.max_number_of_players}
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div">
                    Duration: {singleGame.avg_min_game_time} to{" "}
                    {singleGame.avg_max_game_time} min
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div">
                    {singleGame.game_description}
                  </Typography>
                  <IconButton onClick={handleHeartClick} aria-label="add to favorites">
                    <FavoriteIcon />
                    {message &&
                      <div>
                        <p>{message}</p>
                      </div>}
                  </IconButton>
                </CardContent>
              </Card>
            )}
          </Grid>

          <Grid item xs={12} sx={{ width: 3 / 5 }}>
            <AddCommentForm gameId={gameId} allComments={allComments} />
          </Grid>

          <Grid item xs={12} sx={{ width: 3 / 5 }}>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <GameCommentList allComments={allComments} />
            )}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SingleGame;
