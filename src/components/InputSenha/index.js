import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import TextField from "@material-ui/core/TextField";
import useStyles from "./style";
import { useState } from "react";

export default function InputSenha({
  value,
  placeholder,
  onChange,
  required,
  senhaParaComparar,
}) {
  const classes = useStyles();

  const [erro, setErro] = useState(false);
  const [helperText, setHelperText] = useState();

  function handleChangeObrigatorio(e) {
    setErro(false);
    onChange(e);
    if (!e.target.value) {
      setErro(true);
      setHelperText("Este campo é obrigatório");
      return;
    }
    if (senhaParaComparar && senhaParaComparar !== e.target.value) {
      setErro(true);
      setHelperText("As senhas não coicidem");
      return;
    }
  }
  function handleOnBlur(e) {
    if (!e.target.value) {
      setErro(true);
    }
  }

  const [showPassword, setShowPassword] = useState(false);

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <TextField
      className={classes.root}
      value={value}
      placeholder={placeholder}
      variant="outlined"
      size="small"
      onChange={required ? handleChangeObrigatorio : onChange}
      onBlur={required ? handleOnBlur : null}
      error={erro}
      helperText={
        erro && !helperText
          ? "Este campo é obrigatório"
          : erro && helperText
          ? helperText
          : ""
      }
      type={showPassword ? "text" : "password"}
      InputProps={{
        className: classes.input,
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
