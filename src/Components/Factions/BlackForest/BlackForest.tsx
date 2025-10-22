import { useNavigate } from "react-router";
import classes from "../../../Styles/FactionBlackForest.module.css";

export const BlackForest = () => {
    
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageBlackForest}>
            Orc Factions
            <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Фракции</button>
        </div>
    )
};