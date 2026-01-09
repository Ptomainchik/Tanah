import { useNavigate } from "react-router";
import classes from "../../Styles/Pages.module.css";
import Chain from "../../Images/EptinessImages/DecorationEmptiness.png";
import Star from "../../Images/HomePageImages/Star.png";
import EmptyEyes from "../../Images/Icons/EmptyEyes.png";
import EmptinessImage1 from "../../Images/EptinessImages/BackgroundPageEmptiness.jpg";
import EmptinessImage2 from "../../Images/EptinessImages/TheHypostasisOfHatred.jpg";
import EmptinessImage3 from "../../Images/EptinessImages/TheHypostasisOfOblivion.jpg";
import EmptinessImage4 from "../../Images/EptinessImages/TheHypostasisOfRebirth.jpg";

export const EmptinessPage = () => {
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageEmptiness}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Пустота</h1>
                </div>
            </div>

            <div className={classes.overlayBlockContent}>
                <div className={classes.blockContentEmptiness}>
                    <img className={classes.imageBlockContentEmptiness} src={EmptyEyes} alt="CoatOfArms" draggable="false"/>
                    <div className={classes.contentScrollFaction}>
                    <div> 
                        <h1>Пустота</h1>
                        <img className={classes.imageHorizontally} src={EmptinessImage1} alt="EmptinessImage1" draggable="false"/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Debitis nemo velit ullam dolore 
                        repellendus cumque earum dolores quae odio et distinctio 
                        suscipit quaerat quo asperiores odit, architecto rem laudantium iusto!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quasi perspiciatis doloremque itaque, dicta deserunt omnis ab impedit debitis architecto nisi necessitatibus natus maxime repellat temporibus tempora! Itaque, quia. Soluta!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos mollitia modi suscipit tempora natus, rerum quis nam quisquam perspiciatis ducimus iusto eum consectetur, cupiditate repudiandae, inventore laboriosam perferendis sed doloribus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa quaerat nam fuga, totam, veniam illo odit eaque molestiae dicta omnis quidem, laudantium alias numquam doloribus ad recusandae quibusdam velit.
                        <img className={classes.imageHorizontally} src={EmptinessImage2} alt="EmptinessImage2" draggable="false"/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Debitis nemo velit ullam dolore 
                        repellendus cumque earum dolores quae odio et distinctio 
                        suscipit quaerat quo asperiores odit, architecto rem laudantium iusto!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quasi perspiciatis doloremque itaque, dicta deserunt omnis ab impedit debitis architecto nisi necessitatibus natus maxime repellat temporibus tempora! Itaque, quia. Soluta!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos mollitia modi suscipit tempora natus, rerum quis nam quisquam perspiciatis ducimus iusto eum consectetur, cupiditate repudiandae, inventore laboriosam perferendis sed doloribus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa quaerat nam fuga, totam, veniam illo odit eaque molestiae dicta omnis quidem, laudantium alias numquam doloribus ad recusandae quibusdam velit.
                        <img className={classes.imageHorizontally} src={EmptinessImage3} alt="EmptinessImage3" draggable="false"/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Debitis nemo velit ullam dolore 
                        repellendus cumque earum dolores quae odio et distinctio 
                        suscipit quaerat quo asperiores odit, architecto rem laudantium iusto!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quasi perspiciatis doloremque itaque, dicta deserunt omnis ab impedit debitis architecto nisi necessitatibus natus maxime repellat temporibus tempora! Itaque, quia. Soluta!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos mollitia modi suscipit tempora natus, rerum quis nam quisquam perspiciatis ducimus iusto eum consectetur, cupiditate repudiandae, inventore laboriosam perferendis sed doloribus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa quaerat nam fuga, totam, veniam illo odit eaque molestiae dicta omnis quidem, laudantium alias numquam doloribus ad recusandae quibusdam velit.
                        <img className={classes.imageHorizontally} src={EmptinessImage4} alt="EmptinessImage4" draggable="false"/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Debitis nemo velit ullam dolore 
                        repellendus cumque earum dolores quae odio et distinctio 
                        suscipit quaerat quo asperiores odit, architecto rem laudantium iusto!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quasi perspiciatis doloremque itaque, dicta deserunt omnis ab impedit debitis architecto nisi necessitatibus natus maxime repellat temporibus tempora! Itaque, quia. Soluta!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos mollitia modi suscipit tempora natus, rerum quis nam quisquam perspiciatis ducimus iusto eum consectetur, cupiditate repudiandae, inventore laboriosam perferendis sed doloribus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa quaerat nam fuga, totam, veniam illo odit eaque molestiae dicta omnis quidem, laudantium alias numquam doloribus ad recusandae quibusdam velit.
                    </div>
                    </div>
                </div>
            </div>
        
                <img className={classes.sideDecorationRight} src={Chain} alt="Chain" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Chain} alt="Chain" draggable="false"/>
            
            <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Главная</button>
      
        </div>
    )
};