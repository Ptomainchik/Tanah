import { useNavigate } from "react-router";
import classes from "../../../Styles/PagesConfederationAndInmar.module.css";
import Tower from "../../../Images/InmarImages/DecorationInmar.png";
import Star from "../../../Images/HomePageImages/Star.png";

export const KingdomInmar = () => {
    
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageKingdomInmar}>
             <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Королевство Инмар</h1>
                </div>
            </div>
        
                <img className={classes.sideDecorationRight} src={Tower} alt="Tower" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Tower} alt="Tower" draggable="false"/>
            Inmar Factions
            <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Главная</button>
        </div>
    )
};