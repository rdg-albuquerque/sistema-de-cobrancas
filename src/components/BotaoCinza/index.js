import { Button } from "@material-ui/core";
import useStyles from "./style";
import lapis from "../../assets/lapis.svg";

function BotaoCinza({ children, onClick, isEdit }) {
  const classes = useStyles();
  return (
    <Button
      className={classes.root}
      variant="contained"
      onClick={onClick}
      size="small"
    >
      {isEdit && <img src={lapis} alt="" />}
      {children}
    </Button>
  );
}

export default BotaoCinza;
