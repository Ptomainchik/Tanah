import classes from "../../../Styles/DwarvenRaces.module.css";

export const DwarvenRacesPage = (props: any) => {

    function handleCloseModalRace() {
        props.setStateModalRace((prev: any) => ({...prev, dwarven: false}))
    }

    return (
        <div className={classes.pageDwarvenRaces}>
            Dwarven
            <button className={classes.closeButton} onClick={handleCloseModalRace}>Закрыть</button>
        </div>
    )
};