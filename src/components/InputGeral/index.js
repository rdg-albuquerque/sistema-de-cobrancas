import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import useStyles from "./style";

export default function InputGeral({
  value,
  placeholder,
  type,
  onChange,
  required,
  helperText,
}) {
  const classes = useStyles();
  const [erro, setErro] = useState(false);

  function handleChangeObrigatorio(e) {
    setErro(false);
    onChange(e);
  }
  function handleOnBlur() {
    if (!value) {
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
      onChange={required ? handleChangeObrigatorio : onChange}
      onBlur={required ? handleOnBlur : null}
      error={erro}
      helperText={
        erro & !helperText
          ? "Este campo é obrigatório"
          : erro & helperText
          ? helperText
          : ""
      }
    />
  );
}
