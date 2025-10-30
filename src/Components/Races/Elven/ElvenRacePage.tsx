import classes from "../../../Styles/PagesEmpireMarah.module.css";
import Vine from "../../../Images/EmpireImages/DecorationEmpire.png";
import Star from "../../../Images/HomePageImages/Star.png";
 
export const ElvenRacePage = (props: any) => {

    return (
        <div className={classes.pageElvenRace}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Эльфы</h1>
                </div>
            </div>
                <img className={classes.sideDecorationRight} src={Vine} alt="Vine" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Vine} alt="Vine" draggable="false"/>
            
        </div>
    )
};