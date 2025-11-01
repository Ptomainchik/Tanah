import { useNavigate } from "react-router";
import classes from "../../../Styles/PagesConfederationAndInmar.module.css";
import Tower from "../../../Images/InmarImages/DecorationInmar.png";
import Star from "../../../Images/HomePageImages/Star.png";
import CoatOfArms from "../../../Images/Icons/CoatOfArmsOfTheKingdomOfInmar.webp";
import InmarImage1 from "../../../Images/InmarImages/BackgroundPageInmar.jpg";

export const KingdomInmar = () => {
    
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageKingdomInmar}>
             <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Королевство Инмар</h1>
                </div>
            </div>

            <div className={classes.overlayBlockContentFactionInmar}>
                <div className={classes.blockContentFactionInmar}>
                    <img className={classes.imageBlockContent1} src={CoatOfArms} alt="CoatOfArms" draggable="false"/>
                    <h1 className={classes.headingBlockContent1}>Королевство Инмар</h1>
                    <p className={classes.textBlockContent1}>
                        <img className={classes.textBlockContentImage1} src={InmarImage1} alt="InmarImage1" draggable="false"/>
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
        
                <img className={classes.sideDecorationRight} src={Tower} alt="Tower" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Tower} alt="Tower" draggable="false"/>
            Inmar Factions
            <button className={classes.transitionButtonInmar} onClick={handleFactionsPageTransition}>Главная</button>
        </div>
    )
};