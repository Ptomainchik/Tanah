import classes from "../../../Styles/PagesConfederationAndInmar.module.css";
import Tower from "../../../Images/InmarImages/DecorationInmar.png";
import Palm from "../../../Images/ConfederationImages/DecorationConfederation.png";
import Star from "../../../Images/HomePageImages/Star.png";

export const HumanRacesPage = (props: any) => {

    return (
        <div className={classes.pageHumanRaces}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Люди</h1>
                    
                </div>
            </div>
                <img className={classes.sideDecorationRight} src={Palm} alt="Palm" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Tower} alt="Tower" draggable="false"/>
            
        </div>
    )
};