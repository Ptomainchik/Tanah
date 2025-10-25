import { useNavigate } from "react-router";
import classes from "../../Styles/HomePage.module.css";
import Logo from "../../Images/HomePageImages/LogoTanah.png";
import Vine from "../../Images/HomePageImages/Vine.png";

export const HomePage = () => {
    const navigate = useNavigate();
    function handleTransition(id: string) {
        if (id === "Races") {
            navigate("/races")
        }
        else if (id === "Factions") {
            navigate("/factions")
        }
        else if (id === "Events") {
            navigate("/events")
        }
    }
    return (
        <div className={classes.homePage}>
            <div className={classes.overlayTopbar}>
                <div className={classes.topbar}>
                    <img className={classes.logo} src={Logo} alt="Logo" draggable="false"/>
                </div>
            </div>

                <img className={classes.sideDecorationRight} src={Vine} alt="Vine" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Vine} alt="Vine" draggable="false"/>

            <div className={classes.overlayBlockButtonLeft}>
                <div className={classes.backgroundBlockButton}>
                    <button id="Races" className={classes.buttonRaces} onClick={() => {handleTransition("Races")}}>Расы</button>
                    <button id="Factions" className={classes.buttonFactions} onClick={() => {handleTransition("Factions")}}>Фракции</button>
                    <button id="Events" className={classes.buttonEvents} onClick={() => {handleTransition("Events")}}>События</button>
                </div>
            </div>

            <div className={classes.overlayBlockText}>
                <div className={classes.backgroundBlockText}>
                    <h1>Мир Танаха</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque doloribus voluptates consequatur aliquam vero assumenda rem adipisci. 
                        Distinctio, quaerat architecto omnis,
                         obcaecati neque ratione blanditiis quo quia, fugit molestias sed!
                    </p>
                </div>
            </div>

            <div className={classes.overlayBlockButtonRight}>
                <div className={classes.backgroundBlockButton}>
                    <button id="Races" className={classes.buttonRaces} onClick={() => {handleTransition("Races")}}>Расы</button>
                    <button id="Factions" className={classes.buttonFactions} onClick={() => {handleTransition("Factions")}}>Фракции</button>
                    <button id="Events" className={classes.buttonEvents} onClick={() => {handleTransition("Events")}}>События</button>
                </div>
            </div>
            
                
        </div>
    )
};