import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import TextField from "@material-ui/core/TextField";
import useStyles from "./style";
import { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";

export default function InputPesquisa({ value }) {
  const classes = useStyles();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <TextField
      className={classes.root}
      value={value}
      placeholder="Pesquisar"
      variant="outlined"
      size="small"
      InputProps={{
        className: classes.input,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
