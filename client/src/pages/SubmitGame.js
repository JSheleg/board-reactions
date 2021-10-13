import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const setAge = [
  {
    value: "4",
    label: "4+",
  },
  {
    value: "5",
    label: "5+",
  },
  {
    value: "6",
    label: "6+",
  },
  {
    value: "7",
    label: "7+",
  },
  {
    value: "8",
    label: "8+",
  },
  {
    value: "9",
    label: "9+",
  },
  {
    value: "10",
    label: "10+",
  },
  {
    value: "11",
    label: "11+",
  },
  {
    value: "12",
    label: "12+",
  },
  {
    value: "13",
    label: "13+",
  },
  {
    value: "14",
    label: "14+",
  },
  {
    value: "15",
    label: "15+",
  },
  {
    value: "16",
    label: "16+",
  },
];
const setDuration = [
  {
    value: "20",
    label: "20+ min",
  },
  {
    value: "30",
    label: "30+ min",
  },
  {
    value: "30",
    label: "40+ min",
  },
  {
    value: "50",
    label: "50+ min",
  },
  {
    value: "60",
    label: "60+ min",
  },
  {
    value: "70",
    label: "70+ min",
  },
  {
    value: "80",
    label: "80+ min",
  },
  {
    value: "90",
    label: "90+ min",
  },
  {
    value: "100",
    label: "100+ min",
  },
  {
    value: "110",
    label: "110+ min",
  },
  {
    value: "120",
    label: "120+ min",
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
  //   const [value, setValue] = React.useState("Controlled");

  //   const handleChange = (event) => {
  //     setValue(event.target.value);
  //   };

  const [age, setage] = React.useState("");

  const handleAgeChange = (event) => {
    setage(event.target.value);
  };

  const [duration, setduration] = React.useState("");

  const handleDurationChange = (event) => {
    setduration(event.target.value);
  };

  const [category, setcategory] = React.useState("");

  const handleCategoryChange = (event) => {
    setcategory(event.target.value);
  };

  return (
    <div>
      <h1 className="homepageTitle">ADD A GAME</h1>
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
            id="filled-textarea"
            label=""
            placeholder="Title"
            multiline
            variant="filled"
          />
          </Grid>
          <Grid item xs={12}>

          <TextField
            id=""
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
          />

</Grid>
          <Grid item xs={12}>

          <TextField
            id="filled-multiline-static"
            label=""
            multiline
            rows={10}
            defaultValue=""
            placeholder="Instructions"
            variant="filled"
          />

</Grid>
          <Grid item xs={12}>

          <TextField
            id="filled-select-age"
            select
            label="Age"
            value={age}
            onChange={handleAgeChange}
            helperText="Please select your age"
            variant="filled"
          >
            {setAge.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          </Grid>
          <Grid item xs={12}>

          <TextField
            id=""
            select
            label="Duration"
            value={duration}
            onChange={handleDurationChange}
            helperText="Please select your duration"
            variant="filled"
          >
            {setDuration.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          </Grid>
          <Grid item xs={12}>

          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="success">
              Submit Game
            </Button>
          </Stack>

          </Grid>

        </Grid>
      </Box>
    </div>
  );
};

export default SubmitGame;
