import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_COMMENT } from '../../utils/mutations';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

const AddCommentForm = ({ gameId }) => {

    const [commentText, setText] = useState("");
    const [characterCount, setCharacterCount] = useState(0);
    const [addComment] = useMutation(ADD_COMMENT);
  

      // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addComment({
        variables: { commentText: commentText, gameId: gameId },
      });

      // clear form value
      setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

return (
<div>
<form onSubmit={handleFormSubmit}>
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
    onChange={handleChange}
  />
</Item>

<Item>
  <Button
    variant="contained"
    color="success"
    onClick={handleFormSubmit}
  >
    Submit
  </Button>
</Item>
</form>
</div>
)
};

export default AddCommentForm;

