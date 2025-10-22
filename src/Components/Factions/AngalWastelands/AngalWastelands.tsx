import { useNavigate } from "react-router";
import classes from "../../../Styles/FactionAngalWastelands.module.css";

export const AngalWastelands = () => {
    
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageAngalWastelands}>
            Angals Factions
            <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Фракции</button>
        </div>
    )
};