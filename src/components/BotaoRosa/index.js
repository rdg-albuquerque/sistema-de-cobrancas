import { Button } from "@material-ui/core";
import useStyles from "./style";

function BotaoRosa({ children, onClick, disabled }) {
  const classes = useStyles();
  return (
    <Button
      className={classes.root}
      variant="contained"
      onClick={onClick}
      size="small"
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

export default BotaoRosa;
