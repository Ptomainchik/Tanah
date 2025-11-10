import classes from "../../../Styles/Pages.module.css";
import Tree from "../../../Images/BlackForestImages/DecorationBlackForest.png";
import Star from "../../../Images/HomePageImages/Star.png";
import { useNavigate } from "react-router";
import OrcRace1 from "../../../Images/BlackForestImages/OrcRaceMan.jpg";
import OrcRace2 from "../../../Images/BlackForestImages/OrcRaceWoman.jpg";
import OrcRace3 from "../../../Images/BlackForestImages/OrcRaceChild.jpg";
import OrcRace4 from "../../../Images/BlackForestImages/OrcRaceSpirit.jpg";

export const OrcRacePage = () => {

    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageOrc}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Орки</h1>
                </div>
            </div>

            <div className={classes.overlayBlockContent}>
                <div className={classes.blockContentBlackForest}>
                    <div className={classes.contentScrollRace}>
                        <h1>Орки</h1>
                        <p>
                            <img className={classes.imageVerticalLeft} src={OrcRace1} alt="OrcRace1" draggable="false"/>
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
                            <img className={classes.imageVerticalRight} src={OrcRace2} alt="OrcRace2" draggable="false"/>
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
                            <img className={classes.imageHorizontally} src={OrcRace3} alt="OrcRace3" draggable="false"/>
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
                            <img className={classes.imageHorizontally} src={OrcRace4} alt="OrcRace4" draggable="false"/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Debitis nemo velit ullam dolore 
                            repellendus cumque earum dolores quae odio et distinctio 
                            suscipit quaerat quo asperiores odit, architecto rem laudantium iusto!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quasi perspiciatis
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