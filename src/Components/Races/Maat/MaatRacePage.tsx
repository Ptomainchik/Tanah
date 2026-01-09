import classes from "../../../Styles/Pages.module.css";
import Smoke from "../../../Images/MaatImages/DecorationMaat.png";
import Star from "../../../Images/HomePageImages/Star.png";
import { useNavigate } from "react-router";
import MaatRace1 from "../../../Images/InmarImages/HumanRaceInmarMan.jpg";

export const MaatRacePage = () => {

    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };
    
    return (
        <div className={classes.pageMaatRace}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Маат</h1>
                    
                </div>
            </div>

            <div className={classes.overlayBlockContent}>
                <div className={classes.blockContentMaat}>
                    <div className={classes.contentScrollRace}>
                        <h1>Маат</h1>
                        <p>
                            <img className={classes.imageVerticalLeft} src={MaatRace1} alt="HumanRace1" draggable="false"/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Debitis nemo velit ullam dolore 
                            repellendus cumque earum dolores quae odio et distinctio 
                            suscipit quaerat quo asperiores odit, architecto rem laudantium iusto!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quasi perspiciatis 
                            doloremque itaque, dicta deserunt omnis ab impedit debitis architecto nisi necessitatibus 
                            natus maxime repellat temporibus tempora! Itaque, quia. Soluta!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos mollitia modi suscipit tempora natus, 
                            rerum quis nam quisquam perspiciatis ducimus iusto eum consectetur, cupiditate repudiandae, 
                            inventore laboriosam perferendis sed doloribus?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa quaerat nam fuga, totam, 
                            veniam illo odit eaque molestiae dicta omnis quidem, laudantium alias numquam doloribus ad recusandae quibusdam velit.
                        </p>
                    </div>
                </div>
            </div>

                <img className={classes.sideDecorationRight} src={Smoke} alt="Smoke" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Smoke} alt="Smoke" draggable="false"/>
                
                <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Главная</button>
        
        </div>
    )
};