import { useNavigate } from "react-router";
import classes from "../../../Styles/FactionEmpireMarah.module.css";

export const EmpireMarah = () => {
    
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageEmpireMarah}>
            Elven Factions
            <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Фракции</button>
        </div>
    )
};