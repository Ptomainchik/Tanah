import classes from "../../../Styles/PagesBlackForest.module.css";
import Tree from "../../../Images/BlackForestImages/DecorationBlackForest.png";
import Star from "../../../Images/HomePageImages/Star.png";

export const OrcRacePage = () => {

    return (
        <div className={classes.pageOrcRace}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Орки</h1>
                </div>
            </div>
                <img className={classes.sideDecorationRight} src={Tree} alt="Tree" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Tree} alt="Tree" draggable="false"/>
        </div>
    )
};