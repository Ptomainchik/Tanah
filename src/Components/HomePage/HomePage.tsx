import { useNavigate } from "react-router";
import classes from "../../Styles/HomePage.module.css";

export const HomePage = () => {
    const navigate = useNavigate();
    function handleTransition(id: string) {
        if (id === "Races") {
            navigate("/races")
        }
        else if (id === "Factions") {
            navigate("/factions")
        }
        else if (id === "Events") {
            navigate("/events")
        }
    }
    return (
        <div className={classes.homePage}>
            <h1>Танах</h1>
            <button id="Races" className={classes.buttonRaces} onClick={() => {handleTransition("Races")}}>Расы</button>
            <button id="Factions" className={classes.buttonRaces} onClick={() => {handleTransition("Factions")}}>Фракции</button>
            <button id="Events" className={classes.buttonRaces} onClick={() => {handleTransition("Events")}}>Исторические события</button>
        </div>
    )
};