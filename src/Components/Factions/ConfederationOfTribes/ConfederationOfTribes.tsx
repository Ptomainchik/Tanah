import { useNavigate } from "react-router";
import classes from "../../../Styles/PagesConfederationAndInmar.module.css";
import Palm from "../../../Images/ConfederationImages/DecorationConfederation.png";
import Star from "../../../Images/HomePageImages/Star.png";
import CoatOfArms from "../../../Images/Icons/CoatOfArmsOfTheConfederationOfTribes.webp";
import ConfederationImage1 from "../../../Images/ConfederationImages/BackgroundPageConfederation.jpg";

export const ConfederationOfTribes = () => {
    
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageConfederationOfTribes}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Конфедерация племён</h1>
                </div>
            </div>

            <div className={classes.overlayBlockContentFactionConfederation}>
                <div className={classes.blockContentFactionConfederation}>
                    <img className={classes.imageBlockContent1} src={CoatOfArms} alt="CoatOfArms" draggable="false"/>
                    <h1 className={classes.headingBlockContent1}>Конфедерация племён</h1>
                    <p className={classes.textBlockContent1}>
                        <img className={classes.textBlockContentImage1} src={ConfederationImage1} alt="ConfederationImage1" draggable="false"/>
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

                <img className={classes.sideDecorationRight} src={Palm} alt="Palm" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Palm} alt="Palm" draggable="false"/>
            <button className={classes.transitionButtonConfederation} onClick={handleFactionsPageTransition}>Главная</button>
        </div>
    )
};