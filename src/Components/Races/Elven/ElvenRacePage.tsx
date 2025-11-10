import classes from "../../../Styles/Pages.module.css";
import Vine from "../../../Images/EmpireImages/DecorationEmpire.png";
import Star from "../../../Images/HomePageImages/Star.png";
import { useNavigate } from "react-router";
import ElvenRace1 from "../../../Images/EmpireImages/ElvenRaceWoman.jpg";
import ElvenRace2 from "../../../Images/EmpireImages/ElvenRaceMan.jpg";
import ElvenRace3 from "../../../Images/EmpireImages/ElvenRaceElder.jpg";
import ElvenRace4 from "../../../Images/EmpireImages/ElvenRaceOldMan.jpg";
 
export const ElvenRacePage = () => {

    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageElven}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Эльфы</h1>
                </div>
            </div>

            <div className={classes.overlayBlockContent}>
                <div className={classes.blockContentEmpire}>
                    <div className={classes.contentScrollRace}>
                        <h1>Эльфы</h1>
                        <p>
                            <img className={classes.imageVerticalLeft} src={ElvenRace1} alt="ElvenRace1" draggable="false"/>
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
                            <img className={classes.imageVerticalRight} src={ElvenRace2} alt="ElvenRace2" draggable="false"/>
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
                            <img className={classes.imageVerticalLeft} src={ElvenRace3} alt="ElvenRace3" draggable="false"/>
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
                            <img className={classes.imageHorizontally} src={ElvenRace4} alt="ElvenRace4" draggable="false"/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Debitis nemo velit ullam dolore 
                            repellendus cumque earum dolores quae odio et distinctio 
                            suscipit quaerat quo asperiores odit, architecto rem laudantium iusto!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quasi perspiciatis 
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