import { useNavigate } from "react-router";
import classes from "../../../Styles/FactionKingdomInmar.module.css";

export const KingdomInmar = () => {
    
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageKingdomInmar}>
            Inmar Factions
            <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Фракции</button>
        </div>
    )
};