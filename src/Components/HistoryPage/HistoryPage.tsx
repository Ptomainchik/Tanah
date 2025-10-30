import { useNavigate } from "react-router";
import classes from "../../Styles/HistoryPage.module.css";
import Precipice from "../../Images/HistoryImages/DecorationHistory.png";
import Star from "../../Images/HomePageImages/Star.png";

export const HistoryPage = () => {
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageHistory}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>История мира</h1>
                </div>
            </div>
        
                <img className={classes.sideDecorationRight} src={Precipice} alt="Precipice" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Precipice} alt="Precipice" draggable="false"/>
            <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Главная</button>
        </div>
    )
};