import { useNavigate } from "react-router";
import classes from "../../../Styles/PagesWastelands.module.css";
import Column from "../../../Images/WastelandImages/DecorationWasteland.png";
import Star from "../../../Images/HomePageImages/Star.png";

export const AngalWastelands = () => {
    
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageAngalWastelands}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Пустоши ангалов</h1>
                </div>
            </div>
        
                <img className={classes.sideDecorationRight} src={Column} alt="Column" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Column} alt="Column" draggable="false"/>

            
            <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Главная</button>
        </div>
    )
};