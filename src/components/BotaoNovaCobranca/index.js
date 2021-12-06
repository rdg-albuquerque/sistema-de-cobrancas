import { Button } from "@material-ui/core";
import useStyles from "./style";
import novaCobranca from "../../assets/nova-cobranca.svg"

export default function BotaoNovaCobranca({ children, onClick }) {
    const classes = useStyles();
    return (
        <Button
            onClick={onClick}
        >
            <img
                style={{ display: "inline-block" }}
                src={novaCobranca}
                alt=""
            />
            {children}
        </Button>
    );
}

