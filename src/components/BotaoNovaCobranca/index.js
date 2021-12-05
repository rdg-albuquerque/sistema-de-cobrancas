import { Button } from "@material-ui/core";
import useStyles from "./style";

export default function BotaoNovaCobranca({ children, onClick }) {
    const classes = useStyles();
    return (
        <Button
            className={classes.root}
            variant="contained"
            onClick={onClick}
            size="small"
        >
            {children}
        </Button>
    );
}

