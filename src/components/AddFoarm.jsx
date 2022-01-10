import React from 'react';
import TextField from '@mui/material/TextField';

export const AddFoarm = ({ submitFoarm }) => (
  <form onSubmit={submitFoarm} className="add-foarm">
    {/*   <input
      name="input"
      autoComplete="off"
      required
      className="add-foarm__input"
      placeholder="Enter Task"
    />*/}
    <TextField
      id="outlined-basic"
      fullWidth
      autoComplete="off"
      className="add-foarm__input"
      label="Outlined"
      variant="outlined"
      name="input"
    />
    <button className="add-foarm__submit">Submit</button>
  </form>
);
