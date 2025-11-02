import { useNavigate } from "react-router";
import classes from "../../../Styles/Pages.module.css";
import Column from "../../../Images/WastelandImages/DecorationWasteland.png";
import Star from "../../../Images/HomePageImages/Star.png";
import CoatOfArms from "../../../Images/Icons/CoatOfArmsOfWasteland.webp";
import WastelandImage1 from "../../../Images/WastelandImages/BackgroundPageWasteland.jpg";

export const AngalWastelands = () => {
    
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageAngalWastelands}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Пустоши ангалов</h1>
                </div>
            </div>

            <div className={classes.overlayBlockContent}>
                <div className={classes.blockContentWasteland}>
                    <img className={classes.imageBlockContentWasteland} src={CoatOfArms} alt="CoatOfArms" draggable="false"/>
                    <div className={classes.contentScrollFaction}>  
                        <h1>Пустоши ангалов</h1>
                        <img className={classes.contentImageFactionHorizontally} src={WastelandImage1} alt="WastelandImage1" draggable="false"/>
                        <p>
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
            </div>
        
                <img className={classes.sideDecorationRight} src={Column} alt="Column" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Column} alt="Column" draggable="false"/>

            <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Главная</button>

        </div>
    )
};