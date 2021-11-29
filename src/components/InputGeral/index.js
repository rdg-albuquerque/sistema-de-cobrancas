import TextField from "@material-ui/core/TextField";
import { useEffect, useState } from "react";
import useStyles from "./style";

export default function InputGeral({
  value,
  placeholder,
  type,
  onChange,
  required,
  isEmailCadastrado,
  isCpfCadastrado,
}) {
  const classes = useStyles();
  const [erro, setErro] = useState(false);
  const [helperText, setHelperText] = useState("Este campo é obrigatório");

  useEffect(() => {
    if (isEmailCadastrado) {
      setErro(true);
      setHelperText("E-mail já cadastrado");
      return;
    }
    if (isCpfCadastrado) {
      setErro(true);
      setHelperText("CPF já cadastrado");
    }
  }, [isEmailCadastrado, isCpfCadastrado]);

  function handleChangeRequired(e) {
    setErro(false);
    onChange(e);
    if (!e.target.value) {
      setErro(true);
      setHelperText("Este campo é obrigatório");
      return;
    }
  }

  function handleChange(e) {
    setErro(false);
    onChange(e);
  }

  function handleOnBlur(e) {
    if (!e.target.value) {
      setErro(true);
    }
  }

  return (
    <TextField
      className={classes.root}
      value={value}
      placeholder={placeholder}
      InputProps={{ className: classes.input }}
      size="small"
      variant="outlined"
      type={type ? type : "text"}
      onChange={required ? handleChangeRequired : handleChange}
      onBlur={required ? handleOnBlur : null}
      error={erro}
      helperText={erro && helperText}
    />
  );
}