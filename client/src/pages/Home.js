import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { QUERY_GAMES } from "../utils/queries";
import { useQuery } from "@apollo/react-hooks";

// import Link from '@mui/material/Link';


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

const Home = () => {

  const { loading, data } = useQuery(QUERY_GAMES);
  const allGames = data?.games || {};

console.log(allGames)

    return(
        <div>

          <h1 className="homepageTitle">BOARD REACTIONS!</h1>
        <Box>
        {loading ? (
            <div>Loading...</div>
          ) : (
        <Grid container spacing={0} direction="row" justifyContent="center" alignItems="center">
        {allGames.map((game, i) => (
            
          <Grid i xs={1} key={game.game_name}>
            <img
              src={require(`../assets/${game.game_name}.jpg`).default}
              alt={game.game_name}
              loading="lazy"
            />
          </Grid>
        ))}
     </Grid>
          )}

     </Box>
     </div>
    )
}

export default Home;