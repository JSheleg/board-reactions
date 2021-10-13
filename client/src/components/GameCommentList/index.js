import React from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";


const GameCommentList = ({ allComments }) => {

    // if (!allComments.length) {
    //     return <h3>No Comments Yet</h3>;
    //   }

return (
    <div>
{allComments && allComments.map((comment, i) => {
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
  </div>
)
}

export default GameCommentList;