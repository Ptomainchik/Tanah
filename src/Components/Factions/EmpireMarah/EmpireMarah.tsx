import { useNavigate } from "react-router";
import classes from "../../../Styles/PagesEmpireMarah.module.css";
import Vine from "../../../Images/EmpireImages/DecorationEmpire.png";

export const EmpireMarah = () => {
    
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageEmpireMarah}>
            <div className={classes.overlayTopbar}>
                <div className={classes.topbar}>
                    <h1>Империя Марах</h1>
                </div>
            </div>
                <img className={classes.sideDecorationRight} src={Vine} alt="Vine" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Vine} alt="Vine" draggable="false"/>

            <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Главная</button>
        </div>
    )
};