import classes from "../../../Styles/HumanRaces.module.css";

export const HumanRacesPage = (props: any) => {

    function handleCloseModalRace() {
        props.setStateModalRace((prev: any) => ({...prev, human: false}))
    }

    return (
        <div className={classes.pageHumanRaces}>
            Human
            <button className={classes.closeButton} onClick={handleCloseModalRace}>Закрыть</button>
        </div>
    )
};