import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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
    <div className="addGame">
      <h1>ADD A GAME</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="filled-textarea"
            label=""
            placeholder="Title"
            multiline
            variant="filled"
          />
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
        </div>
        <div>
          <TextField
            id="filled-multiline-static"
            label=""
            multiline
            rows={10}
            defaultValue=""
            placeholder="Description"
            variant="filled"
          />
          <TextField
            id="filled-multiline-static"
            label=""
            multiline
            rows={10}
            defaultValue=""
            placeholder="Instructions"
            variant="filled"
          />
        </div>
        <div>
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
        </div>
        <Stack direction="row" spacing={2} pl='18.5rem'>

      <Button variant="contained" color="success">
        Submit Game
      </Button>

    </Stack>
      </Box>
    </div>
  );
};

export default SubmitGame;
