import TextField from "@material-ui/core/TextField";
import useStyles from "./style";

export default function InputGeral({ value, placeholder, type, onChange }) {
  const classes = useStyles();
  return (
    <TextField
      className={classes.root}
      value={value}
      placeholder={placeholder}
      size="small"
      variant="outlined"
      type={type ? type : "text"}
      onChange={onChange}
    />
  );
}
