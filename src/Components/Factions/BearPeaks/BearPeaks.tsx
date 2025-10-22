import { useNavigate } from "react-router";
import classes from "../../../Styles/FactionBearPeaks.module.css";

export const BearPeaks = () => {
    
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageBearPeaks}>
            Dwarven Factions
            <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Фракции</button>
        </div>
    )
};