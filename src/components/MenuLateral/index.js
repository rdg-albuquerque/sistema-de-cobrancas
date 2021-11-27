import "./style.css";
import FileCinza from "./assets/FileCinza.svg";
import FileRosa from "./assets/FileRosa.svg";
import Userscinza from "./assets/UsersCinza.svg";
import UsersRosa from "./assets/UsersRosa.svg";
import HomeCinza from "./assets/HomeCinza.svg";
import HomeRosa from "./assets/HomeRosa.svg";
import { Link } from "react-router-dom";

function MenuLateral() {
    return (
        <div className="nav-bar">
            <div className="itens-nav">
                <img src={HomeCinza} alt="" />
                <p class="font-nav-bar">Home</p>

                <img src={UsersCinza} alt="" />
                <p class="font-nav-bar">Clientes</p>

                <img src={FileCinza} alt="" />
                <p class="font-nav-bar">Cobranças</p>
            </div>
        </div>
    )
}

function mudarCor() {
    document.getElementsByTagName(HomeCinza)
}

export default MenuLateral