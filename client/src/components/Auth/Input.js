import React from "react";
import { TextField, Grid, IconButton, InputAdornment } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"

const Input = ({ half, name,label, type,autoFocus, handleChange, handleShowPassword }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        type={type}
        label={label}
        variant="outlined"
        required
        fullWidth
        onChange={handleChange}
        autoFocus= {autoFocus}
        InputProps={name === "password" ? {
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                        { type === "password" ? <Visibility/> : <VisibilityOff/> }
                    </IconButton>
                </InputAdornment>
            )
        }: null}
      />
    </Grid>
  );
};


export default Input