import { useNavigate } from "react-router";
import classes from "../../Styles/HomePage.module.css";
import Logo from "../../Images/HomePageImages/LogoTanah.png";
import Statue from "../../Images/HomePageImages/DecorationHomePage.png";
import CoatOfArmsOfWasteland from "../../Images/Icons/CoatOfArmsOfWasteland.webp";
import CoatOfArmsOfBearPeaks from "../../Images/Icons/CoatOfArmsOfBearPeaks.webp";
import CoatOfArmsEmpire from "../../Images/Icons/CoatOfArmsEmpire.webp";
import CoatOfArmsOfTheKingdomOfInmar from "../../Images/Icons/CoatOfArmsOfTheKingdomOfInmar.webp";
import CoatOfArmsOfTheConfederationOfTribes from "../../Images/Icons/CoatOfArmsOfTheConfederationOfTribes.webp";
import CoatOfArmsOfBlackForest from "../../Images/Icons/CoatOfArmsOfBlackForest.webp";
import AngalRace from "../../Images/Icons/AngalRace.png";
import HumanRace from "../../Images/Icons/HumanRace.png";
import DwarvenRaces from "../../Images/Icons/DwarvenRaces.png";
import OrcRace from "../../Images/Icons/OrcRace.png";
import ElvenRace from "../../Images/Icons/ElvenRace.png";
import Feather from "../../Images/Icons/Feather.png";
import EmptyEyes from "../../Images/Icons/EmptyEyes.png";
import Swords from "../../Images/Icons/Swords.png";
import Star from "../../Images/HomePageImages/Star.png";

export const HomePage = () => {
    const navigate = useNavigate();

    function handleTransition(id: string) {
        if (id === "History") {
            navigate("/history")
        }
        else if (id === "Emptiness") {
            navigate("/emptiness")
        }
        else if (id === "Races") {
            navigate("/races")
        }
        else if (id === "Factions") {
            navigate("/factions")
        }
        else if (id === "Events") {
            navigate("/events")
        }
        else if (id === "Angals") {
            navigate("/angals");
        }
        else if (id === "Dwarven") {
            navigate("/dwarven");
        }
        else if (id === "Elven") {
            navigate("/elven");
        }
        else if (id === "Humans") {
            navigate("/humans");
        }
        else if (id === "Orc") {
            navigate("/orc");
        }
        else if (id === "Wastelands") {
            navigate("/wastelands");
        }
        else if (id === "BearPeaks") {
            navigate("/bearpeaks");
        }
        else if (id === "Empire") {
            navigate("/empire");
        }
        else if (id === "Inmar") {
            navigate("/inmar");
        }
        else if (id === "BlackForest") {
            navigate("/blackforest");
        }
        else if (id === "Confederation") {
            navigate("/confederation");
        }
    };
   
    return (
        <div className={classes.homePage}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <img className={classes.logo} src={Logo} alt="Logo" draggable="false"/>
                </div>
            </div>

                <img className={classes.sideDecorationRight} src={Statue} alt="Statue" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Statue} alt="Statue" draggable="false"/>

            <div className={classes.overlayBlockButtonLeft}>
                <div className={classes.backgroundBlockButton}>

                    <div className={classes.buttonRaces}>

                        <h1>Расы</h1>

                        <div className={classes.content}>
                            
                            <div id="Angals" className={classes.contentButton} onClick={() => {handleTransition("Angals")}}>
                                <img src={AngalRace} alt="AngalRace" draggable="false"/>
                                Ангалы
                            </div>

                            <div id="Dwarven" className={classes.contentButton} onClick={() => {handleTransition("Dwarven")}}>
                                <img src={DwarvenRaces} alt="DwarvenRaces" draggable="false"/>
                                Гномы
                            </div>

                            <div id="Elven" className={classes.contentButton} onClick={() => {handleTransition("Elven")}}>
                                <img src={ElvenRace} alt="ElvenRace" draggable="false"/>
                                Эльфы
                            </div>

                            <div id="Humans" className={classes.contentButton} onClick={() => {handleTransition("Humans")}}>
                                <img src={HumanRace} alt="HumanRace" draggable="false"/>
                                Люди
                            </div>

                            <div id="Orc" className={classes.contentButton} onClick={() => {handleTransition("Orc")}}>
                                <img src={OrcRace} alt="OrcRace" draggable="false"/>
                                Орки
                            </div>

                        </div>

                    </div>

                        <button id="History" className={classes.historyButton} onClick={() => {handleTransition("History")}}>
                            <img src={Feather} alt="Feather" draggable="false"/>
                            <h1>История мира</h1>
                        </button>

                </div>
            </div>


            <div className={classes.overlayBlockText}>

                <div className={classes.backgroundBlockText}>
                    <div>
                        <h1>Мир Танаха</h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque doloribus voluptates consequatur aliquam vero assumenda rem adipisci. 
                        Distinctio, quaerat architecto omnis,
                         obcaecati neque ratione blanditiis quo quia, fugit molestias sed!
                    </p>
                    </div>
                    

                    <div className={classes.buttonEvents}>
                        <h1>События</h1>
                        <div className={classes.content}>

                            <div className={classes.contentButton} onClick={() => window.location.href = "https://ptomainchik.github.io/NorthTanah/"}>
                                <img src={Swords} alt="Swords" draggable="false"/>
                                Север Танаха
                            </div>

                            <div className={classes.contentButton} onClick={() => window.location.href = "https://ptomainchik.github.io/PeopleOfTanah/"}>
                                <img src={Swords} alt="Swords" draggable="false"/>
                                Люди Танаха
                            </div>

                            <div className={classes.contentButton} onClick={() => window.location.href = "https://ptomainchik.github.io/EmpireAndWasteland/"}>
                                <img src={Swords} alt="Swords" draggable="false"/>
                                Империя и Пустоши
                            </div>

                            <div className={classes.contentButton}>В разработке...</div>   

                        </div>
                    </div>

                </div>

            </div>

            <div className={classes.overlayBlockButtonRight}>

                <div className={classes.backgroundBlockButton}>
                    
                    <div className={classes.buttonFactions}>

                        <h1>Фракции</h1>

                        <div className={classes.content}>

                                <div id="Wastelands" className={classes.contentButton} onClick={() => {handleTransition("Wastelands")}}> 
                                    <img src={CoatOfArmsOfWasteland} alt="CoatOfArmsOfWasteland" draggable="false"/>
                                    Пустоши ангалов
                                </div>

                                <div id="BearPeaks" className={classes.contentButton} onClick={() => {handleTransition("BearPeaks")}}>
                                    <img src={CoatOfArmsOfBearPeaks} alt="CoatOfArmsOfBearPeaks" draggable="false"/>
                                    Медвежьи вершины
                                </div>

                                <div id="Empire" className={classes.contentButton} onClick={() => {handleTransition("Empire")}}>
                                    <img src={CoatOfArmsEmpire} alt="CoatOfArmsEmpire" draggable="false"/>
                                    Империя Марах
                                </div>
                            
                                <div id="Inmar" className={classes.contentButton} onClick={() => {handleTransition("Inmar")}}>
                                    <img src={CoatOfArmsOfTheKingdomOfInmar} alt="CoatOfArmsOfTheKingdomOfInmar" draggable="false"/>
                                    Королевство Инмар
                                </div>

                                <div id="BlackForest" className={classes.contentButton} onClick={() => {handleTransition("BlackForest")}}>
                                    <img src={CoatOfArmsOfBlackForest} alt="CoatOfArmsOfBlackForest" draggable="false"/>
                                    Чёрный лес
                                </div>

                                <div id="Confederation" className={classes.contentButton} onClick={() => {handleTransition("Confederation")}}>
                                    <img src={CoatOfArmsOfTheConfederationOfTribes} alt="CoatOfArmsOfTheConfederationOfTribes" draggable="false"/>
                                    Конфедерация племён
                                </div>
                            
                        </div>
                    </div>

                    <button id="Emptiness" className={classes.emptinessButton} onClick={() => {handleTransition("Emptiness")}}>
                        <img src={EmptyEyes} alt="EmptyEyes" draggable="false"/>
                        <h1>Пустота</h1>
                    </button>


                </div>
                
            </div>
                
        </div>
    )
};