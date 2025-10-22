import classes from "../../Styles/EventsInHistory.module.css";

export const EventsInHistory = () => {
    
    return (
        <div className={classes.pageEventsInHistory}>
            Events
            <button onClick={() => window.location.href = "https://ptomainchik.github.io/NorthTanah/"}>Север Танаха</button>
            <button onClick={() => window.location.href = "https://ptomainchik.github.io/PeopleOfTanah/"}>Люди Танаха</button>
            <button onClick={() => window.location.href = "https://ptomainchik.github.io/EmpireAndWasteland/"}>Империя и Пустоши</button>
            <button>В разработке...</button>
        </div>
    )
};