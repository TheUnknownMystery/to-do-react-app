import React from 'react';

export const AddFoarm = ({ submitFoarm }) => (
  <form onSubmit={submitFoarm} className="add-foarm">
    <input
      name="input"
      autoComplete="off"
      required
      className="add-foarm__input"
      placeholder="Enter Task"
    />
    <button className="add-foarm__submit">Submit</button>
  </form>
);
