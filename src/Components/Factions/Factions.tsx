import classes from "../../Styles/Factions.module.css";
import { useNavigate } from "react-router";

export const FactionsPage = () => {

    const navigate = useNavigate();

    function handleTransitionOfFactions(id: string) {
        if (id === "1") {
            navigate("/wastelands");
        }
        else if (id === "2") {
            navigate("/bearpeaks");
        }
        else if (id === "3") {
            navigate("/empire");
        }
        else if (id === "4") {
            navigate("/inmar");
        }
        else if (id === "5") {
            navigate("/blackforest");
        }
        else if (id === "6") {
            navigate("/confederation");
        }
    };

    return (
        <div className={classes.factionsPage}>

            <div className={classes.flexBlock}>
                <div className={classes.block}>
                    <button id="1" className={classes.buttonRace} onClick={() => {handleTransitionOfFactions("1")}}>Пустоши ангалов</button>
                    <button id="2" className={classes.buttonRace} onClick={() => {handleTransitionOfFactions("2")}}>Медвежьи вершины</button>
                    <button id="3" className={classes.buttonRace} onClick={() => {handleTransitionOfFactions("3")}}>Империя Марах</button>
                    <button id="4" className={classes.buttonRace} onClick={() => {handleTransitionOfFactions("4")}}>Королевство Инмар</button>
                </div>
                <div className={classes.block}>
                    <button id="5" className={classes.buttonRace} onClick={() => {handleTransitionOfFactions("5")}}>Чёрный лес</button>
                    <button id="6" className={classes.buttonRace} onClick={() => {handleTransitionOfFactions("6")}}>Конфедерация племён</button>
                    <button className={classes.buttonRace}>В разработке...</button>
                    <button className={classes.buttonRace}>В разработке...</button>
                </div>
            </div>

        </div>
    )
};