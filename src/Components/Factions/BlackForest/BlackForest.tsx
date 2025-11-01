import { useNavigate } from "react-router";
import classes from "../../../Styles/PagesBlackForest.module.css";
import Tree from "../../../Images/BlackForestImages/DecorationBlackForest.png";
import Star from "../../../Images/HomePageImages/Star.png";
import CoatOfArms from "../../../Images/Icons/CoatOfArmsOfBlackForest.webp";
import BlackForestImage1 from "../../../Images/BlackForestImages/BackgroundPageBlackForest.jpg";

export const BlackForest = () => {
    
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageBlackForest}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Чёрный лес</h1>
                </div>
            </div>

            <div className={classes.overlayBlockContentFaction}>
                <div className={classes.blockContentFaction}>
                    <img className={classes.imageBlockContent1} src={CoatOfArms} alt="CoatOfArms" draggable="false"/>
                    <h1 className={classes.headingBlockContent1}>Чёрный лес</h1>
                    <p className={classes.textBlockContent1}>
                        <img className={classes.textBlockContentImage1} src={BlackForestImage1} alt="BlackForestImage1" draggable="false"/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Debitis nemo velit ullam dolore 
                        repellendus cumque earum dolores quae odio et distinctio 
                        suscipit quaerat quo asperiores odit, architecto rem laudantium iusto!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quasi perspiciatis doloremque itaque, dicta deserunt omnis ab impedit debitis architecto nisi necessitatibus natus maxime repellat temporibus tempora! Itaque, quia. Soluta!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos mollitia modi suscipit tempora natus, rerum quis nam quisquam perspiciatis ducimus iusto eum consectetur, cupiditate repudiandae, inventore laboriosam perferendis sed doloribus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa quaerat nam fuga, totam, veniam illo odit eaque molestiae dicta omnis quidem, laudantium alias numquam doloribus ad recusandae quibusdam velit.
                    </p>
                </div>
            </div>

                <img className={classes.sideDecorationRight} src={Tree} alt="Tree" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Tree} alt="Tree" draggable="false"/>
            <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Главная</button>
        </div>
    )
};