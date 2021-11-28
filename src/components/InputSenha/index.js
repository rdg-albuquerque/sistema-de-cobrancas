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
  senhaParaComparar,
  editar,
}) {
  const classes = useStyles();

  const [erro, setErro] = useState(false);
  const [helperText, setHelperText] = useState("");

  useEffect(() => {
    if (editar) {
      if (senhaParaComparar === value) {
        setErro(false);
        setHelperText("");
      } else {
        setErro(true);
        setHelperText("As senhas não coicidem");
      }
    }
  }, [senhaParaComparar, value, editar]);

  function handleChangeObrigatorio(e) {
    setErro(false);
    onChange(e);
    if (editar) return;
    if (senhaParaComparar && senhaParaComparar !== e.target.value) {
      setErro(true);
      setHelperText("As senhas não coicidem");
      return;
    }
    if (!e.target.value) {
      setErro(true);
      setHelperText("Este campo é obrigatório");
      return;
    }
  }
  function handleOnBlur(e) {
    if (editar) {
      if (e.target.value !== senhaParaComparar) {
        setErro(true);
        setHelperText("As senhas não coicidem");
      } else {
        setErro(false);
        setHelperText("");
      }
      return;
    }
    if (!e.target.value) {
      setErro(true);
      setHelperText("Este campo é obrigatório");
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
