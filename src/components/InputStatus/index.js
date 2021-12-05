import TextField from "@material-ui/core/TextField";
import { useEffect, useState } from "react";
import useStyles from "./style.css";
import bolinhaVerdeComCheck from "../../assets/bolinhaVerdeComCheck.svg"
import bolinhaNormalCinza from "../../assets/bolinhaNormalCinza.svg"


export default function InputStatus() {
    const [selecionado, setSelecionado] = useState({
        paga: false,
        pendente: false,
    });
    return (
        <div className="input-status">
            <div onClick={() => setSelecionado({ paga: true, pendente: false })} className="input-option">
                <img src={selecionado.paga ? bolinhaVerdeComCheck : bolinhaNormalCinza} alt="" className="bolinha" />
                Cobrança Paga
            </div>
            <div onClick={() => setSelecionado({ paga: false, pendente: true })} className="input-option">
                <img src={selecionado.pendente ? bolinhaVerdeComCheck : bolinhaNormalCinza} alt="" className="bolinha" />
                Cobrança Pendente
            </div>
        </div>
    );
}
