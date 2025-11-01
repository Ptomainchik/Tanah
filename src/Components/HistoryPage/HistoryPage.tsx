import { useNavigate } from "react-router";
import classes from "../../Styles/HistoryPage.module.css";
import Precipice from "../../Images/HistoryImages/DecorationHistory.png";
import Star from "../../Images/HomePageImages/Star.png";
import Feather from "../../Images/Icons/Feather.png";
import HistoryImage1 from "../../Images/HistoryImages/BackgroundPageHistory.jpg";

export const HistoryPage = () => {
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageHistory}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>История мира</h1>
                </div>
            </div>

            <div className={classes.overlayBlockContentFaction}>
                <div className={classes.blockContentFaction}>
                    <img className={classes.imageBlockContent1} src={Feather} alt="Feather" draggable="false"/>
                    <h1 className={classes.headingBlockContent1}>Танах</h1>
                    <p className={classes.textBlockContent1}>
                        <img className={classes.textBlockContentImage1} src={HistoryImage1} alt="HistoryImage1" draggable="false"/>
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
        
                <img className={classes.sideDecorationRight} src={Precipice} alt="Precipice" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Precipice} alt="Precipice" draggable="false"/>
            <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Главная</button>
        </div>
    )
};