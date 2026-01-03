import { useNavigate } from "react-router";
import classes from "../../Styles/Pages.module.css";
import Precipice from "../../Images/HistoryImages/DecorationHistory.png";
import Star from "../../Images/HomePageImages/Star.png";
import Feather from "../../Images/Icons/Feather.png";
import HistoryImage1 from "../../Images/HistoryImages/BackgroundPageHistory.jpg";
import HistoryImage2 from "../../Images/HistoryImages/MapOfTanah.png";
import { useState } from "react";

export const HistoryPage = () => {
    const [stateMap, setStateMap] = useState(false);
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    function handleOpenMap() {
        setStateMap(true);
    };

    function handleCloseMap() {
        setStateMap(false);
        
    };

    return (
        <div className={classes.pageHistory}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>История мира</h1>
                </div>
            </div>

            <div className={classes.overlayBlockContent}>
                <div className={classes.blockContentHistory}>
                    <img className={classes.imageBlockContentHistory} src={Feather} alt="Feather" draggable="false"/>
                    <div className={classes.contentScrollFaction}>  
                        <p>
                            <h1>История мира</h1>
                            <img className={classes.imageHorizontally} src={HistoryImage1} alt="HistoryImage1" draggable="false"/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Debitis nemo velit ullam dolore 
                            repellendus cumque earum dolores quae odio et distinctio 
                            suscipit quaerat quo asperiores odit, architecto rem laudantium iusto!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quasi perspiciatis doloremque itaque, dicta deserunt omnis ab impedit debitis architecto nisi necessitatibus natus maxime repellat temporibus tempora! Itaque, quia. Soluta!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos mollitia modi suscipit tempora natus, rerum quis nam quisquam perspiciatis ducimus iusto eum consectetur, cupiditate repudiandae, inventore laboriosam perferendis sed doloribus?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa quaerat nam fuga, totam, veniam illo odit eaque molestiae dicta omnis quidem, laudantium alias numquam doloribus ad recusandae quibusdam velit.
                            <img className={classes.imageVerticalCenter} style={{cursor: "zoom-in" , pointerEvents: stateMap === false ? "auto" : "none"}} src={HistoryImage2} onClick={handleOpenMap} alt="HistoryImage2" draggable="false"/>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quasi perspiciatis doloremque itaque, dicta deserunt omnis ab impedit debitis architecto nisi necessitatibus natus maxime repellat temporibus tempora! Itaque, quia. Soluta!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos mollitia modi suscipit tempora natus, rerum quis nam quisquam perspiciatis ducimus iusto eum consectetur, cupiditate repudiandae, inventore laboriosam perferendis sed doloribus?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa quaerat nam fuga, totam, veniam illo odit eaque molestiae dicta omnis quidem, laudantium alias numquam doloribus ad recusandae quibusdam velit.
                        </p>
                    </div>
                </div>
            </div>
        
                <img className={classes.sideDecorationRight} src={Precipice} alt="Precipice" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Precipice} alt="Precipice" draggable="false"/>
            
                <button className={classes.transitionButton} onClick={handleFactionsPageTransition} disabled={stateMap === true}>Главная</button>
            {stateMap && <div className={classes.contentScrollMap}><img className={classes.imageMap} src={HistoryImage2} alt="HistoryImage2" draggable="false"/><button className={classes.closeImageMap} onClick={handleCloseMap}>Закрыть</button></div>}
        </div>
    )
};