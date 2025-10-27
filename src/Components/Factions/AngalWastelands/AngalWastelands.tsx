import { useNavigate } from "react-router";
import classes from "../../../Styles/PagesWastelands.module.css";
import Column from "../../../Images/WastelandImages/DecorationWasteland.png";

export const AngalWastelands = () => {
    
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageAngalWastelands}>
            <div className={classes.overlayTopbar}>
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