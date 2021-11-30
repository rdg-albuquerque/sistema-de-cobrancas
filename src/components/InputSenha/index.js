import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import TextField from "@material-ui/core/TextField";
import useStyles from "./style";
import { useEffect, useState } from "react";

export default function InputSenha({
  value,
  placeholder,
  onChange,
  required,
  inputVerificacao,
  senhaParaComparar,
}) {
  const classes = useStyles();

  const [erro, setErro] = useState(false);
  const [helperText, setHelperText] = useState("");

  useEffect(() => {
    if (inputVerificacao) {
      if (senhaParaComparar === value) {
        setErro(false);
        setHelperText("");
      } else {
        setErro(true);
        setHelperText("As senhas não coicidem");
      }
    } // eslint-disable-next-line
  }, [senhaParaComparar, value]);

  function handleChange(e) {
    onChange(e);

    setErro(false);
    setHelperText("");

    if (required && !e.target.value) {
      setErro(true);
      setHelperText("Este campo é obrigatório");
    }
  }

  /* function handleOnBlur(e) {
    if (required && !e.target.value) {
      setErro(true);
      setHelperText("Este campo é obrigatório");
    }
  } */

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
      onChange={handleChange}
      error={erro}
      helperText={erro && helperText}
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
