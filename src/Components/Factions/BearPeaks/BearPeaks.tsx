import { useNavigate } from "react-router";
import classes from "../../../Styles/PagesBearPeaks.module.css";
import Mountian from "../../../Images/BearPeaksImages/DecorationBearPeaks.png";

export const BearPeaks = () => {
    
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageBearPeaks}>
            <div className={classes.overlayTopbar}>
                <div className={classes.topbar}>
                    <h1>Медвежьи вершины</h1>
                </div>
            </div>
        
                <img className={classes.sideDecorationRight} src={Mountian} alt="Mountian" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Mountian} alt="Mountian" draggable="false"/>
            Dwarven Factions
            <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Фракции</button>
        </div>
    )
};