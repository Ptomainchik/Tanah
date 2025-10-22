import classes from "../../../Styles/OrcRace.module.css";

export const OrcRacePage = (props: any) => {

    function handleCloseModalRace() {
        props.setStateModalRace((prev: any) => ({...prev, orc: false}))
    }

    return (
        <div className={classes.pageOrcRace}>
            Orc
            <button className={classes.closeButton} onClick={handleCloseModalRace}>Закрыть</button>
        </div>
    )
};