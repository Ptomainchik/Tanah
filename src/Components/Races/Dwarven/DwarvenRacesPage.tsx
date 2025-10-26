import classes from "../../../Styles/PagesBearPeaks.module.css";
import Mountian from "../../../Images/BearPeaksImages/DecorationBearPeaks.png";

export const DwarvenRacesPage = (props: any) => {

    return (
        <div className={classes.pageDwarvenRaces}>
             <div className={classes.overlayTopbar}>
                <div className={classes.topbar}>
                    <h1>Гномы</h1>
                </div>
            </div>
        
                <img className={classes.sideDecorationRight} src={Mountian} alt="Mountian" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Mountian} alt="Mountian" draggable="false"/>
        </div>
    )
};