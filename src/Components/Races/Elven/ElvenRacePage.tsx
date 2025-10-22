import classes from "../../../Styles/ElvenRace.module.css";

export const ElvenRacePage = (props: any) => {

    function handleCloseModalRace() {
        props.setStateModalRace((prev: any) => ({...prev, elven: false}))
    }

    return (
        <div className={classes.pageElvenRace}>
            Elven
            <button className={classes.closeButton} onClick={handleCloseModalRace}>Закрыть</button>
        </div>
    )
};