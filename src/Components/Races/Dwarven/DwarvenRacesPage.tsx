import classes from "../../../Styles/PagesBearPeaks.module.css";
import Mountian from "../../../Images/BearPeaksImages/DecorationBearPeaks.png";
import Star from "../../../Images/HomePageImages/Star.png";
import { useNavigate } from "react-router";

export const DwarvenRacesPage = (props: any) => {

    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageDwarvenRaces}>
             <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Гномы</h1>
                </div>
            </div>

            <div className={classes.overlayBlockContentRace}>
                <div className={classes.blockContentRace}>
                    <h1 className={classes.headingBlockContentRace1}>Гномы</h1>
                    <p className={classes.textBlockContentRace1}>
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
        
                <img className={classes.sideDecorationRight} src={Mountian} alt="Mountian" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Mountian} alt="Mountian" draggable="false"/>
                <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Главная</button>
       </div>
    )
};