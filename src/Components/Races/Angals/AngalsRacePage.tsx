import classes from "../../../Styles/PagesWastelands.module.css";
import Column from "../../../Images/WastelandImages/DecorationWasteland.png";
import Star from "../../../Images/HomePageImages/Star.png";

export const AngalsRacePage = (props: any) => {

    return (
        <div className={classes.pageAngalsRace}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Ангалы</h1>
                </div>
            </div>
                <img className={classes.sideDecorationRight} src={Column} alt="Column" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Column} alt="Column" draggable="false"/>
            
        </div>
    )
};