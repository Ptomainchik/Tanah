import { useNavigate } from "react-router";
import classes from "../../../Styles/Pages.module.css";
import Mountian from "../../../Images/BearPeaksImages/DecorationBearPeaks.png";
import Star from "../../../Images/HomePageImages/Star.png";
import CoatOfArms from "../../../Images/Icons/CoatOfArmsOfBearPeaks.webp";
import BearPeaksImage1 from "../../../Images/BearPeaksImages/BackgroundPageBearPeaks.jpg";

export const BearPeaks = () => {
    
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageDwarven}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Медвежьи вершины</h1>
                </div>
            </div>

            <div className={classes.overlayBlockContent}>
                <div className={classes.blockContentBearPeaks}>
                    <img className={classes.imageBlockContentBearPeaks} src={CoatOfArms} alt="CoatOfArms" draggable="false"/>
                    <div className={classes.contentScrollFaction}>  
                        <p>
                            <h1>Медвежьи вершины</h1>
                            <img className={classes.imageHorizontally} src={BearPeaksImage1} alt="BearPeaksImage1" draggable="false"/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Debitis nemo velit ullam dolore 
                            repellendus cumque earum dolores quae odio et distinctio 
                            suscipit quaerat quo asperiores odit, architecto rem laudantium iusto!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quasi perspiciatis doloremque itaque, 
                            dicta deserunt omnis ab impedit debitis architecto nisi necessitatibus natus maxime repellat temporibus tempora! Itaque, quia. Soluta!
                        </p>
                    </div>
                </div>
            </div>
        
                <img className={classes.sideDecorationRight} src={Mountian} alt="Mountian" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Mountian} alt="Mountian" draggable="false"/>
            
                <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Главная</button>
        
        </div>
    )
};