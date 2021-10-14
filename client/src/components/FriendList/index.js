import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { REMOVE_FRIEND } from '../../utils/mutations';
import Auth from '../../utils/auth';
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
  color: 'white'
};

const FriendList = ({ friendCount, username, friends }) => {

  const [deleteFriend] = useMutation(REMOVE_FRIEND);

    if (!friends || !friends.length) {
      return <p>{username}, make some friends!</p>;
    }

    // get username of logged in user
    const loggedInUser = Auth.getLoggedInUsername();

    console.log('friends', friends)

    const removeFriend = async (friendId) => {

      console.log('remove friend method is running')

      try {
        await deleteFriend({
          variables: {friendId: friendId}
        })
      } catch (e) {
        console.log(e)
      }
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
         <span className="username-style">{username}'s</span> {friendCount} {friendCount === 1 ? 'friend' : 'friends'}
        </h5>
        </Grid>
        {friends.map(friend => (
          <Grid item xs={12}>
            
          <div key={friend._id}>
          <Item sx={{ width: 700 }}>
          <Button variant="contained" color="success" sx={{ m: 1, mr:20, width: 300 }}>
            <Link style={linkStyle} to={`/profile/${friend.username}`}>{friend.username}</Link>
          </Button>
          {/* check to see if username equals the logged in user - if does, include remove friend btn */}
          {username === loggedInUser ? 
          <Button variant="contained" color="error" onClick={() => {removeFriend(friend._id)}}>
          - Remove Friend
          </Button> 
          : null}
          </Item>
          </div>
          </Grid>
        ))}
        </Grid>
        </Box>
      </div>
    );
  };

  export default FriendList;