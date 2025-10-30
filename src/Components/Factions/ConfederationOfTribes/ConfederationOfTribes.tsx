import { useNavigate } from "react-router";
import classes from "../../../Styles/PagesConfederationAndInmar.module.css";
import Palm from "../../../Images/ConfederationImages/DecorationConfederation.png";
import Star from "../../../Images/HomePageImages/Star.png";

export const ConfederationOfTribes = () => {
    
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageConfederationOfTribes}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Конфедерация племён</h1>
                </div>
            </div>
                <img className={classes.sideDecorationRight} src={Palm} alt="Palm" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Palm} alt="Palm" draggable="false"/>
            <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Главная</button>
        </div>
    )
};