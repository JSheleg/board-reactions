import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_GAME } from "../utils/queries";

import image from "../assets/uno.png";
import { minWidth } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SingleGame = (props) => {
  // const windowId = window.location.toString().split(':')[window.location.toString().split(':').length - 1];
  // console.log(windowId)

  // const { loading, data } = useQuery(QUERY_GAME);

  let { gameId: gameId } = useParams();

  const { loading, data } = useQuery(QUERY_GAME, {
    variables: { gameId: gameId },
  });

  const singleGame = data?.gamebyId || {};
  console.log(singleGame.comments);
  const allComments = singleGame.comments;

  if (loading) {
    return <div>Loading...</div>;
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
            <Card sx={{ maxWidth: 1000, maxHeight: 9999 }}>
              <CardMedia
                component="img"
                height="500"
                image={image}
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
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sx={{ width: 3/5 }} >
            <Item>
              <h1>Leave a Comment</h1>
              <TextField
                id="filled-multiline-static"
                label=""
                multiline
                rows={5}
                defaultValue=""
                placeholder="Comment"
                variant="filled"
                fullWidth
              />
            </Item>

            <Item>
              <Button variant="contained" color="success">
                Submit
              </Button>
            </Item>
          </Grid>

          <Grid item xs={12} sx={{ width: 3/5 }}>
            {allComments.map((comment, i) => {
              return (
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 700,
                    bgcolor: "background.paper",
                  }}
                  key={i}
                >
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src="" />
                    </ListItemAvatar>
                    <ListItemText
                      primary={<FavoriteIcon />}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {comment.username}
                          </Typography>

                          <Typography>"{comment.commentText}</Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </List>
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SingleGame;
