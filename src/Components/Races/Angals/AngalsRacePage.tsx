import classes from "../../../Styles/Pages.module.css";
import Column from "../../../Images/WastelandImages/DecorationWasteland.png";
import Star from "../../../Images/HomePageImages/Star.png";
import { useNavigate } from "react-router";
import AngalRace1 from "../../../Images/WastelandImages/AngalRaceWoman.jpg";
import AngalRace2 from "../../../Images/WastelandImages/AngalRaceMan.jpg";
import AngalRace3 from "../../../Images/WastelandImages/AngalRaceAngalit.jpg";
import AngalRace4 from "../../../Images/WastelandImages/AngalRaceAngalim.jpg";

export const AngalsRacePage = (props: any) => {

    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageAngalWastelands}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Ангалы</h1>
                </div>
            </div>

            <div className={classes.overlayBlockContent}>
                <div className={classes.blockContentWasteland}>
                    <div className={classes.contentScrollRace}>
                        <h1>Ангалы</h1>
                        <p>
                            <img className={classes.imageRace1} src={AngalRace1} alt="AngalRace1" draggable="false"/>
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
                            <img className={classes.imageRace2} src={AngalRace2} alt="AngalRace2" draggable="false"/>
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
                            <img className={classes.imageRace3} src={AngalRace3} alt="AngalRace3" draggable="false"/>
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
                            <img className={classes.imageRace4} src={AngalRace4} alt="AngalRace4" draggable="false"/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Debitis nemo velit ullam dolore 
                            repellendus cumque earum dolores quae odio et distinctio 
                            suscipit quaerat quo asperiores odit, architecto rem laudantium iusto!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quasi perspiciatis 
                        </p>
                    </div>
                </div>
            </div>

                <img className={classes.sideDecorationRight} src={Column} alt="Column" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Column} alt="Column" draggable="false"/>
                <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Главная</button>
        </div>
    )
};