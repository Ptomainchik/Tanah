import classes from "../../../Styles/AngalsRace.module.css";

export const AngalsRacePage = (props: any) => {
    
    function handleCloseModalRace() {
        props.setStateModalRace((prev: any) => ({...prev, angals: false}))
    }

    return (
        <div className={classes.pageAngalsRace}>
            Angals
            <button className={classes.closeButton} onClick={handleCloseModalRace}>Закрыть</button>
        </div>
    )
};