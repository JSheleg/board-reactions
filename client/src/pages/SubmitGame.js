import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import { useMutation } from "@apollo/react-hooks";
import { ADD_GAME } from "../utils/mutations"


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const setAgeMin = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
  {
    value: "6",
    label: "6",
  },
  {
    value: "7",
    label: "7",
  },
  {
    value: "8",
    label: "8",
  },
  {
    value: "9",
    label: "9",
  },
  {
    value: "10",
    label: "10",
  },
  {
    value: "11",
    label: "11",
  },
  {
    value: "12",
    label: "12",
  },
  {
    value: "13",
    label: "13",
  },
  {
    value: "14",
    label: "14",
  },
  {
    value: "15",
    label: "15",
  },
  {
    value: "16",
    label: "16",
  },
  {
    value: "17",
    label: "17",
  },
  {
    value: "18",
    label: "18",
  },
];

const setAgeMax = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
  {
    value: "6",
    label: "6",
  },
  {
    value: "7",
    label: "7",
  },
  {
    value: "8",
    label: "8",
  },
  {
    value: "9",
    label: "9",
  },
  {
    value: "10",
    label: "10",
  },
  {
    value: "11",
    label: "11",
  },
  {
    value: "12",
    label: "12",
  },
  {
    value: "13",
    label: "13",
  },
  {
    value: "14",
    label: "14",
  },
  {
    value: "15",
    label: "15",
  },
  {
    value: "16",
    label: "16",
  },
  {
    value: "17",
    label: "17",
  },
  {
    value: "18",
    label: "18",
  },
];

const setdurationMin = [
  {
    value: "10",
    label: "10 min",
  },
  {
    value: "20",
    label: "20 min",
  },
  {
    value: "30",
    label: "30 min",
  },
  {
    value: "30",
    label: "40 min",
  },
  {
    value: "50",
    label: "50 min",
  },
  {
    value: "60",
    label: "60 min",
  },
  {
    value: "70",
    label: "70 min",
  },
  {
    value: "80",
    label: "80 min",
  },
  {
    value: "90",
    label: "90 min",
  },
  {
    value: "100",
    label: "100 min",
  },
  {
    value: "110",
    label: "110 min",
  },
  {
    value: "120",
    label: "120 min",
  },
];

const setdurationMax = [
  {
    value: "10",
    label: "10 min",
  },
  {
    value: "20",
    label: "20 min",
  },
  {
    value: "30",
    label: "30 min",
  },
  {
    value: "30",
    label: "40 min",
  },
  {
    value: "50",
    label: "50 min",
  },
  {
    value: "60",
    label: "60 min",
  },
  {
    value: "70",
    label: "70 min",
  },
  {
    value: "80",
    label: "80 min",
  },
  {
    value: "90",
    label: "90 min",
  },
  {
    value: "100",
    label: "100 min",
  },
  {
    value: "110",
    label: "110 min",
  },
  {
    value: "120",
    label: "120 min",
  },
];

const setCategory = [
  {
    value: "Party",
    label: "Party",
  },
  {
    value: "Strategy",
    label: "Strategy",
  },
  {
    value: "Cards",
    label: "Cards",
  },
  {
    value: "Gambling",
    label: "Gambling",
  },
  {
    value: "Storytelling",
    label: "Storytelling",
  },
];

const SubmitGame = () => {

  const [characterCount, setCharacterCount] = useState(0);

  const [addGame] = useMutation(ADD_GAME);

  const [game_name, setGameName] = React.useState("");

  const handleGameNameChange = (event) => {
    setGameName(event.target.value);
  };

  const [game_description, setGameDescription] = React.useState("");

  const handleGameDescriptionChange = (event) => {
    setGameDescription(event.target.value);
  };

  const [min_number_of_players, setPlayersMin] = React.useState("");

  const handlePlayersMinChange = (event) => {
    setPlayersMin(event.target.value);
  };

  const [max_number_of_players, setPlayersMax] = React.useState("");

  const handlePlayersMaxChange = (event) => {
    setPlayersMax(event.target.value);
  };

  const [avg_min_game_time, setdurationmin] = React.useState("");

  const handleDurationMinChange = (event) => {
    setdurationmin(event.target.value);
  };

  const [avg_max_game_time, setdurationmax] = React.useState("");

  const handleDurationMaxChange = (event) => {
    setdurationmax(event.target.value);
  };

  const [category, setcategory] = React.useState("");

  const handleCategoryChange = (event) => {
    setcategory(event.target.value);
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addGame({
        variables: {
          game_name: game_name,
          category: category,
          min_number_of_players: min_number_of_players,
          max_number_of_players: max_number_of_players,
          avg_min_game_time: avg_min_game_time,
          avg_max_game_time: avg_max_game_time,
          game_description: game_description, 
        },
      });

      // clear form value
      // setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      
      <h1 className="homepageTitle">ADD A GAME</h1>
<form>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid
          container
          spacing={0}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
                   <Grid item xs={12}>

          <TextField
            id="game-name"
            label=""
            placeholder="Title"
            multiline
            variant="filled"
            value={game_name}
            onChange={handleGameNameChange}
          />
          </Grid>
          <Grid item xs={12}>

          <TextField
            id="game-category"
            select
            label="Category"
            value={category}
            onChange={handleCategoryChange}
            helperText="Please select your category"
            variant="filled"
          >
            {setCategory.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          </Grid>
          <Grid item xs={12}>

          <TextField
            id="filled-multiline-static"
            label=""
            multiline
            rows={10}
            defaultValue=""
            placeholder="Description"
            variant="filled"
            value={game_description}
            onChange={handleGameDescriptionChange}
          />

</Grid>
          {/* <Grid item xs={12}>

          <TextField
            id="filled-multiline-static"
            label=""
            multiline
            rows={10}
            defaultValue=""
            placeholder="Instructions"
            variant="filled"
          />

</Grid> */}
          <Grid item xs={12} >
          <TextField
            id="filled-select-players-min"
            select
            label="Players"
            value={min_number_of_players}
            onChange={handlePlayersMinChange}
            helperText="Min players"
            variant="filled"
            sx={{ maxWidth: 150}}
          >
            {setAgeMin.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="filled-select-player-max"
            select
            label="Players"
            value={max_number_of_players}
            onChange={handlePlayersMaxChange}
            helperText="Max players"
            variant="filled"
            sx={{ maxWidth: 150}}
          >
            {setAgeMax.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          </Grid>

          <Grid item xs={12}>

          <TextField
            id="min-duration"
            select
            label="Duration"
            value={avg_min_game_time}
            onChange={handleDurationMinChange}
            helperText="Min Duration"
            variant="filled"
            sx={{ maxWidth: 150}}
          >
            {setdurationMin.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="max-duration"
            select
            label="Duration"
            value={avg_max_game_time}
            onChange={handleDurationMaxChange}
            helperText="Max Duration"
            variant="filled"
            sx={{ maxWidth: 150}}
          >
            {setdurationMax.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          </Grid>
          <Grid item xs={12}>

          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="success" onClick={handleFormSubmit}>
              Submit Game
            </Button>
          </Stack>

          </Grid>

        </Grid>

      </Box>
      </form>
    </div>
  );
};

export default SubmitGame;
