import { useNavigate } from "react-router";
import classes from "../../../Styles/FactionConfederationOfTribes.module.css";

export const ConfederationOfTribes = () => {
    
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageConfederationOfTribes}>
            Confederation Factions
            <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Фракции</button>
        </div>
    )
};