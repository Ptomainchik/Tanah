import { useNavigate } from "react-router";
import classes from "../../../Styles/Pages.module.css";
import Tree from "../../../Images/BlackForestImages/DecorationBlackForest.png";
import Star from "../../../Images/HomePageImages/Star.png";
import CoatOfArms from "../../../Images/Icons/CoatOfArmsOfBlackForest.webp";
import BlackForestImage1 from "../../../Images/BlackForestImages/BackgroundPageBlackForest.jpg";
import BlackForestImage2 from "../../../Images/BlackForestImages/FirstGuardianOfSpirits.jpg";
import BlackForestImage3 from "../../../Images/BlackForestImages/LeaderOfTheBandits.jpg";
import BlackForestImage4 from "../../../Images/BlackForestImages/SeniorHunter.jpg";
import BlackForestImage5 from "../../../Images/BlackForestImages/Brigadier.jpg";

export const BlackForest = () => {
    
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageOrc}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Чёрный лес</h1>
                </div>
            </div>

            <div className={classes.overlayBlockContent}>
                <div className={classes.blockContentBlackForest}>
                    <img className={classes.imageBlockContentBlackForest} src={CoatOfArms} alt="CoatOfArms" draggable="false"/>
                    <div className={classes.contentScrollFaction}>  
                        <p>
                            <h1>Чёрный лес</h1>
                            <img className={classes.imageHorizontally} src={BlackForestImage1} alt="BlackForestImage1" draggable="false"/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Debitis nemo velit ullam dolore 
                            repellendus cumque earum dolores quae odio et distinctio 
                            suscipit quaerat quo asperiores odit, architecto rem laudantium iusto!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quasi perspiciatis doloremque itaque, 
                            dicta deserunt omnis ab impedit debitis architecto nisi necessitatibus natus maxime repellat temporibus tempora! Itaque, quia. Soluta!
                            <img className={classes.imageVerticalLeft} src={BlackForestImage2} alt="BlackForestImage2" draggable="false"/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Debitis nemo velit ullam dolore 
                            repellendus cumque earum dolores quae odio et distinctio 
                            suscipit quaerat quo asperiores odit, architecto rem laudantium iusto!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quasi perspiciatis doloremque itaque, 
                            dicta deserunt omnis ab impedit debitis architecto nisi necessitatibus natus maxime repellat temporibus tempora! Itaque, quia. Soluta!
                            <img className={classes.imageVerticalRight} src={BlackForestImage3} alt="BlackForestImage3" draggable="false"/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Debitis nemo velit ullam dolore 
                            repellendus cumque earum dolores quae odio et distinctio 
                            suscipit quaerat quo asperiores odit, architecto rem laudantium iusto!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quasi perspiciatis doloremque itaque, 
                            dicta deserunt omnis ab impedit debitis architecto nisi necessitatibus natus maxime repellat temporibus tempora! Itaque, quia. Soluta!
                            <img className={classes.imageVerticalLeft} src={BlackForestImage4} alt="BlackForestImage4" draggable="false"/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Debitis nemo velit ullam dolore 
                            repellendus cumque earum dolores quae odio et distinctio 
                            suscipit quaerat quo asperiores odit, architecto rem laudantium iusto!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quasi perspiciatis doloremque itaque, 
                            dicta deserunt omnis ab impedit debitis architecto nisi necessitatibus natus maxime repellat temporibus tempora! Itaque, quia. Soluta!
                            <img className={classes.imageVerticalRight} src={BlackForestImage5} alt="BlackForestImage5" draggable="false"/>
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

                <img className={classes.sideDecorationRight} src={Tree} alt="Tree" draggable="false"/> 
                <img className={classes.sideDecorationLeft} src={Tree} alt="Tree" draggable="false"/>
                
                <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Главная</button>
        
        </div>
    )
};