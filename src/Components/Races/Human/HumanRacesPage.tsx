import classes from "../../../Styles/Pages.module.css";
import Tower from "../../../Images/InmarImages/DecorationInmar.png";
import Palm from "../../../Images/ConfederationImages/DecorationConfederation.png";
import Star from "../../../Images/HomePageImages/Star.png";
import { useNavigate } from "react-router";
import HumanRace1 from "../../../Images/InmarImages/HumanRaceInmarMan.jpg";
import HumanRace2 from "../../../Images/ConfederationImages/HumanRaceConfederationWoman.jpg";
import HumanRace3 from "../../../Images/ConfederationImages/HumanRaceConfederationMan.jpg";
import HumanRace4 from "../../../Images/InmarImages/HumanRaceInmarWorldview.jpg";
import HumanRace5 from "../../../Images/ConfederationImages/HumanRaceConfederationWorldview.jpg";

export const HumanRacesPage = () => {

    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };
    
    return (
        <div className={classes.pageHumanRaces}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Люди</h1>
                    
                </div>
            </div>

            <div className={classes.overlayBlockContent}>
                <div className={classes.blockContentHistory}>
                    <div className={classes.contentScrollRace}>
                        <h1>Люди</h1>
                        <p>
                            <img className={classes.imageVerticalLeft} src={HumanRace1} alt="HumanRace1" draggable="false"/>
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
                            <img className={classes.imageVerticalRight} src={HumanRace2} alt="HumanRace2" draggable="false"/>
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
                            <img className={classes.imageVerticalLeft} src={HumanRace3} alt="HumanRace3" draggable="false"/>
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
                            <img className={classes.imageHorizontally} src={HumanRace4} alt="HumanRace4" draggable="false"/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Debitis nemo velit ullam dolore 
                            repellendus cumque earum dolores quae odio et distinctio 
                            suscipit quaerat quo asperiores odit, architecto rem laudantium iusto!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quasi perspiciatis
                            <img className={classes.imageHorizontally} src={HumanRace5} alt="HumanRace5" draggable="false"/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Debitis nemo velit ullam dolore 
                            repellendus cumque earum dolores quae odio et distinctio 
                            suscipit quaerat quo asperiores odit, architecto rem laudantium iusto!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quasi perspiciatis  
                        </p>
                    </div>
                </div>
            </div>

                <img className={classes.sideDecorationRight} src={Palm} alt="Palm" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Tower} alt="Tower" draggable="false"/>
                
                <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Главная</button>
        
        </div>
    )
};