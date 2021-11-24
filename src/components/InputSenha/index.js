import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import TextField from "@material-ui/core/TextField";
import useStyles from "./style";
import { useState } from "react";

export default function InputSenha({ id, value, placeholder, onChange, mb }) {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <TextField
      id={id}
      className={classes.root}
      value={value}
      placeholder={placeholder}
      variant="outlined"
      style={{ marginBottom: mb ? mb : "0px" }}
      onChange={onChange}
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
