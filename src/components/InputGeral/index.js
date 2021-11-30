import TextField from "@material-ui/core/TextField";
import { useEffect, useState } from "react";
import useStyles from "./style";

export default function InputGeral({
  value,
  placeholder,
  type,
  onChange,
  required,
  emailErro,
  cpfErro,
}) {
  const classes = useStyles();
  const [erro, setErro] = useState(false);
  const [helperText, setHelperText] = useState("");

  useEffect(() => {
    if (emailErro) {
      setErro(true);
      setHelperText(emailErro);
      return;
    }
    if (cpfErro) {
      setErro(true);
      setHelperText(cpfErro);
    }
  }, [emailErro, cpfErro]);

  function handleChange(e) {
    onChange(e);

    setErro(false);
    setHelperText("");

    if (required && !e.target.value) {
      setErro(true);
      setHelperText("Este campo é obrigatório");
    }
  }

  function handleOnBlur(e) {
    if (!e.target.value) {
      setErro(true);
      setHelperText("Este campo é obrigatório");
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
      onChange={handleChange}
      onBlur={required ? handleOnBlur : null}
      error={erro}
      helperText={erro && helperText}
    />
  );
}
