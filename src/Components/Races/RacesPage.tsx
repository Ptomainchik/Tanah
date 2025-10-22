import { useState } from "react";
import classes from "../../Styles/Races.module.css";
import { AngalsRacePage } from "./Angals/AngalsRacePage";
import { DwarvenRacesPage } from "./Dwarven/DwarvenRacesPage";
import { ElvenRacePage } from "./Elven/ElvenRacePage";
import { HumanRacesPage } from "./Human/HumanRacesPage";
import { OrcRacePage } from "./Orc/OrcRacePage";

export const RacesPage = () => {
    const [stateModalRace, setStateModalRace] = useState({
        angals: false,
        dwarven: false,
        elven: false,
        human: false,
        orc: false,
    });

    function handleOpenRaceModal(id: string) {
        if (id === "1") {
            setStateModalRace(prev => ({...prev, angals: true}));
        }
        else if (id === "2") {
            setStateModalRace(prev => ({...prev, dwarven: true}));
        }
        else if (id === "3") {
            setStateModalRace(prev => ({...prev, elven: true}));
        }
        else if (id === "4") {
            setStateModalRace(prev => ({...prev, human: true}));
        }
        else if (id === "5") {
            setStateModalRace(prev => ({...prev, orc: true}));
        }
    };

    return (
        <div className={classes.racesPage}>

            <div className={classes.flexBlock}>
                <div className={classes.block}>
                    <button id="1" className={classes.buttonRace} onClick={() => {handleOpenRaceModal("1")}}>Ангалы</button>
                    <button id="2" className={classes.buttonRace} onClick={() => {handleOpenRaceModal("2")}}>Гномы</button>
                    <button id="3" className={classes.buttonRace} onClick={() => {handleOpenRaceModal("3")}}>Эльфы</button>
                    <button id="4" className={classes.buttonRace} onClick={() => {handleOpenRaceModal("4")}}>Люди</button>
                </div>
                <div className={classes.block}>
                    <button id="5" className={classes.buttonRace} onClick={() => {handleOpenRaceModal("5")}}>Орки</button>
                    <button className={classes.buttonRace}>В разработке...</button>
                    <button className={classes.buttonRace}>В разработке...</button>
                    <button className={classes.buttonRace}>В разработке...</button>
                </div>
            </div>

            {stateModalRace.angals && <AngalsRacePage setStateModalRace={setStateModalRace}/>}
            {stateModalRace.dwarven && <DwarvenRacesPage setStateModalRace={setStateModalRace}/>}
            {stateModalRace.elven && <ElvenRacePage setStateModalRace={setStateModalRace}/>}
            {stateModalRace.human && <HumanRacesPage setStateModalRace={setStateModalRace}/>}
            {stateModalRace.orc && <OrcRacePage setStateModalRace={setStateModalRace}/>}

        </div>
    )
};