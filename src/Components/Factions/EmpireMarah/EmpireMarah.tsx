import { useNavigate } from "react-router";
import classes from "../../../Styles/Pages.module.css";
import Vine from "../../../Images/EmpireImages/DecorationEmpire.png";
import Star from "../../../Images/HomePageImages/Star.png";
import CoatOfArms from "../../../Images/Icons/CoatOfArmsEmpire.webp";
import EmpireImage1 from "../../../Images/EmpireImages/BackgroundPageEmpire.jpg";
import EmpireImage2 from "../../../Images/EmpireImages/Emperor.jpg";
import EmpireImage3 from "../../../Images/EmpireImages/WestEmpireModalImage.jpg";
import EmpireImage4 from "../../../Images/EmpireImages/EastEmpireModalImage.jpg";
import EmpireImage5 from "../../../Images/EmpireImages/BiyaMainCharacter.jpg";
import EmpireImage6 from "../../../Images/EmpireImages/СhronicleOfEmpireMarah.png";

export const EmpireMarah = () => {
    
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageElven}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Империя Марах</h1>
                </div>
            </div>

            <div className={classes.overlayBlockContent}>
                <div className={classes.blockContentEmpire}>
                    <img className={classes.imageBlockContentEmpire} src={CoatOfArms} alt="CoatOfArms" draggable="false"/>
                    <div className={classes.contentScrollFaction}>  
                        <p>
                            <h1>Империя Марах</h1>
                            <img className={classes.imageHorizontally} src={EmpireImage1} alt="EmpireImage1" draggable="false"/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Debitis nemo velit ullam dolore 
                            repellendus cumque earum dolores quae odio et distinctio 
                            suscipit quaerat quo asperiores odit, architecto rem laudantium iusto!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quasi perspiciatis doloremque itaque, 
                            dicta deserunt omnis ab impedit debitis architecto nisi necessitatibus natus maxime repellat temporibus tempora! Itaque, quia. Soluta!
                            <img className={classes.imageHorizontally} src={EmpireImage2} alt="EmpireImage2" draggable="false"/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Debitis nemo velit ullam dolore 
                            repellendus cumque earum dolores quae odio et distinctio 
                            suscipit quaerat quo asperiores odit, architecto rem laudantium iusto!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quasi perspiciatis doloremque itaque, 
                            dicta deserunt omnis ab impedit debitis architecto nisi necessitatibus natus maxime repellat temporibus tempora! Itaque, quia. Soluta!
                            <img className={classes.imageHorizontally} src={EmpireImage3} alt="EmpireImage3" draggable="false"/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Debitis nemo velit ullam dolore 
                            repellendus cumque earum dolores quae odio et distinctio 
                            suscipit quaerat quo asperiores odit, architecto rem laudantium iusto!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quasi perspiciatis doloremque itaque, 
                            dicta deserunt omnis ab impedit debitis architecto nisi necessitatibus natus maxime repellat temporibus tempora! Itaque, quia. Soluta!
                            <img className={classes.imageHorizontally} src={EmpireImage4} alt="EmpireImage4" draggable="false"/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Debitis nemo velit ullam dolore 
                            repellendus cumque earum dolores quae odio et distinctio 
                            suscipit quaerat quo asperiores odit, architecto rem laudantium iusto!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quasi perspiciatis doloremque itaque, 
                            dicta deserunt omnis ab impedit debitis architecto nisi necessitatibus natus maxime repellat temporibus tempora! Itaque, quia. Soluta!
                            <img className={classes.imageVerticalLeft} src={EmpireImage5} alt="EmpireImage5" draggable="false"/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Debitis nemo velit ullam dolore 
                            repellendus cumque earum dolores quae odio et distinctio 
                            suscipit quaerat quo asperiores odit, architecto rem laudantium iusto!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quasi perspiciatis doloremque itaque, 
                            dicta deserunt omnis ab impedit debitis architecto nisi necessitatibus natus maxime repellat temporibus tempora! Itaque, quia. Soluta!
                            <img className={classes.imageVerticalCenter} src={EmpireImage6} alt="EmpireImage6" draggable="false"/>
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

                <img className={classes.sideDecorationRight} src={Vine} alt="Vine" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Vine} alt="Vine" draggable="false"/>

            <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Главная</button>
        
        </div>
    )
};