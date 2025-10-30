import { useNavigate } from "react-router";
import classes from "../../../Styles/PagesBlackForest.module.css";
import Tree from "../../../Images/BlackForestImages/DecorationBlackForest.png";
import Star from "../../../Images/HomePageImages/Star.png";

export const BlackForest = () => {
    
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageBlackForest}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Чёрный лес</h1>
                </div>
            </div>
                <img className={classes.sideDecorationRight} src={Tree} alt="Tree" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Tree} alt="Tree" draggable="false"/>
            <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Главная</button>
        </div>
    )
};