import { useNavigate } from "react-router";
import classes from "../../Styles/EmptinessPage.module.css";
import Chain from "../../Images/EptinessImages/DecorationEmptiness.png";

export const EmptinessPage = () => {
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageEmptiness}>
            <div className={classes.overlayTopbar}>
                <div className={classes.topbar}>
                    <h1>Пустота</h1>
                </div>
            </div>
        
                <img className={classes.sideDecorationRight} src={Chain} alt="Chain" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Chain} alt="Chain" draggable="false"/>
            <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Главная</button>
        </div>
    )
};