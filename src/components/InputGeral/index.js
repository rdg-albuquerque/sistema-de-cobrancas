import TextField from "@material-ui/core/TextField";
import useStyles from "./style";

export default function InputGeral({ id, placeholder, type, onChange, mb }) {
  const classes = useStyles();
  return (
    <TextField
      id={id}
      className={classes.root}
      placeholder={placeholder}
      size="small"
      variant="outlined"
      type={type ? type : "text"}
      style={{ marginBottom: mb ? mb : "20px" }}
      onChange={onChange}
    />
  );
}
